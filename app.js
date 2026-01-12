/**
 * Baby Timeline App
 * Denmark-specific baby development tracker
 *
 * Note: This app uses innerHTML in controlled contexts where all data
 * comes from our own milestones.js constants (no user-generated content).
 * User inputs (name, date) are handled with textContent.
 */

// State
let state = {
  baby: null,
  achievements: {},
  currentCategory: 'all',
  viewedWeek: null,  // Week being viewed in week view (null = current week)
  simpleView: false,  // Simplified view mode
  weekViewMode: 'detailed'  // 'detailed' or 'simple'
};

// Constants
const STORAGE_KEY = 'babyTimeline';
const WEEKS_PER_MONTH = 4.345; // Average weeks per month

// ============================================
// Utility Functions
// ============================================

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function getAgeInWeeks(birthDate) {
  const birth = new Date(birthDate);
  const now = new Date();
  const diffMs = now - birth;
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  return Math.floor(diffDays / 7);
}

function getAgeInDays(birthDate) {
  const birth = new Date(birthDate);
  const now = new Date();
  const diffMs = now - birth;
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

function getCurrentWeekNumber(birthDate) {
  return getAgeInWeeks(birthDate);
}

function getCurrentDayInWeek(birthDate) {
  const days = getAgeInDays(birthDate);
  // Day 1-7 for week 0, then day of current week (1-7)
  if (days < 7) return days + 1; // Days 0-6 become days 1-7
  return (days % 7) + 1;
}

function getAgeInMonths(birthDate) {
  const birth = new Date(birthDate);
  const now = new Date();
  const months = (now.getFullYear() - birth.getFullYear()) * 12 + (now.getMonth() - birth.getMonth());
  const dayDiff = now.getDate() - birth.getDate();
  return dayDiff < 0 ? months - 1 : months;
}

function formatAge(birthDate) {
  const weeks = getAgeInWeeks(birthDate);
  const months = Math.floor(weeks / WEEKS_PER_MONTH);
  const remainingWeeks = Math.round(weeks % WEEKS_PER_MONTH);

  if (months < 1) {
    return `${weeks} ${weeks === 1 ? 'uge' : 'uger'}`;
  } else if (months < 24) {
    if (remainingWeeks > 0) {
      return `${months} ${months === 1 ? 'måned' : 'måneder'}, ${remainingWeeks} ${remainingWeeks === 1 ? 'uge' : 'uger'}`;
    }
    return `${months} ${months === 1 ? 'måned' : 'måneder'}`;
  } else {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    if (remainingMonths > 0) {
      return `${years} år, ${remainingMonths} ${remainingMonths === 1 ? 'måned' : 'måneder'}`;
    }
    return `${years} år`;
  }
}

function weeksToLabel(weeks) {
  if (weeks < 8) {
    return `${weeks} uger`;
  }
  const months = Math.round(weeks / WEEKS_PER_MONTH);
  if (months < 24) {
    return `${months} mdr`;
  }
  const years = Math.floor(months / 12);
  return `${years} år`;
}

function getMilestoneStatus(milestone, ageWeeks) {
  const achieved = state.achievements[milestone.id];
  if (achieved) return 'achieved';
  if (ageWeeks >= milestone.ageWeeksMin && ageWeeks <= milestone.ageWeeksMax) return 'current';
  if (ageWeeks > milestone.ageWeeksMax) return 'overdue';
  return 'upcoming';
}

// ============================================
// DOM Helper Functions
// ============================================

function createElement(tag, className, textContent) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (textContent) el.textContent = textContent;
  return el;
}

function clearElement(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

// ============================================
// Health Tips by Age
// ============================================

function getHealthTipsForAge(weekNumber) {
  const tips = [];
  const monthNumber = Math.floor(weekNumber / 4.345);

  // Week 0 (first week) - Critical newborn care
  if (weekNumber === 0) {
    tips.push({
      type: 'critical',
      icon: '⚠️',
      titleDa: 'Gulsot',
      textDa: `${JAUNDICE.prevalence.fullTerm}% af nyfødte får gulsot. Kig efter gulfarvning dag 2-4.`
    });
    tips.push({
      type: 'critical',
      icon: '🌡️',
      titleDa: 'Feber',
      textDa: `Kontakt læge straks ved feber over ${FEVER_GUIDELINES.thresholds.under3Months.temp}°C hos baby under 3 mdr.`
    });
    tips.push({
      type: 'info',
      icon: '🩹',
      titleDa: 'Navlepleje',
      textDa: 'Hold navlestumpen ren og tør. Den falder af inden for 1-3 uger.'
    });
  }

  // Weeks 1-4 (first month)
  if (weekNumber >= 1 && weekNumber <= 4) {
    tips.push({
      type: 'warning',
      icon: '😴',
      titleDa: 'Sikker søvn',
      textDa: 'Læg altid baby på ryggen. Ingen løse ting i sengen.'
    });
    if (weekNumber === 2) {
      tips.push({
        type: 'info',
        icon: '💊',
        titleDa: 'D-vitamin',
        textDa: 'Husk at starte D-vitamin dråber fra 2 ugers alderen.'
      });
    }
  }

  // Week 5 - First health checkup
  if (weekNumber === 5) {
    tips.push({
      type: 'health',
      icon: '🏥',
      titleDa: '5-ugers undersøgelse',
      textDa: 'Tid til den første børneundersøgelse hos lægen.'
    });
  }

  // Weeks 6-12 - Colic peak
  if (weekNumber >= 6 && weekNumber <= 12) {
    tips.push({
      type: 'info',
      icon: '👶',
      titleDa: 'Kolik',
      textDa: 'Kolik topper omkring 6 uger og aftager typisk efter 3-4 måneder.'
    });
  }

  // Week 12-13 (3 months) - First vaccination
  if (weekNumber >= 12 && weekNumber <= 14) {
    tips.push({
      type: 'health',
      icon: '💉',
      titleDa: 'Vaccination',
      textDa: '3-måneders vaccination (DiTeKiPol/Hib + Pneumokok).'
    });
  }

  // 4+ months - Sun protection becomes relevant
  if (monthNumber >= 4 && monthNumber < 12) {
    tips.push({
      type: 'info',
      icon: '☀️',
      titleDa: 'Solbeskyttelse',
      textDa: 'Undgå direkte sol. Brug tøj og skygge frem for solcreme.'
    });
  }

  // 4-6 months - Food introduction
  if (monthNumber >= 4 && monthNumber <= 6) {
    tips.push({
      type: 'info',
      icon: '🥄',
      titleDa: 'Skemad',
      textDa: 'Tidligst fra 4 mdr kan smagsprøver introduceres. Fuld kost fra 6 mdr.'
    });
    tips.push({
      type: 'info',
      icon: '🥚',
      titleDa: 'Allergiforebyggelse',
      textDa: 'Introducer æg og jordnød tidligt (4-6 mdr) for at forebygge allergi.'
    });
  }

  // 5 months vaccination
  if (weekNumber >= 20 && weekNumber <= 23) {
    tips.push({
      type: 'health',
      icon: '💉',
      titleDa: 'Vaccination',
      textDa: '5-måneders vaccination (DiTeKiPol/Hib + Pneumokok).'
    });
  }

  // 5 months checkup
  if (weekNumber >= 20 && weekNumber <= 22) {
    tips.push({
      type: 'health',
      icon: '🏥',
      titleDa: '5-måneders undersøgelse',
      textDa: 'Børneundersøgelse: vægt, længde, motorik og ernæring.'
    });
  }

  // 12 months vaccination
  if (monthNumber === 12) {
    tips.push({
      type: 'health',
      icon: '💉',
      titleDa: 'Vaccination',
      textDa: '12-måneders vaccination (DiTeKiPol/Hib + Pneumokok).'
    });
    tips.push({
      type: 'health',
      icon: '🏥',
      titleDa: '12-måneders undersøgelse',
      textDa: 'Børneundersøgelse: motorik, selvstændighed og ernæring.'
    });
  }

  // 15 months MFR
  if (monthNumber === 15) {
    tips.push({
      type: 'health',
      icon: '💉',
      titleDa: 'MFR-vaccination',
      textDa: '15-måneders MFR-vaccination (mæslinger, fåresyge, røde hunde).'
    });
  }

  return tips;
}

function renderHealthTipsBox(container, weekNumber) {
  const tips = getHealthTipsForAge(weekNumber);
  if (tips.length === 0) return;

  const tipsBox = createElement('div', 'health-tips-box');
  tipsBox.appendChild(createElement('h4', null, '❤️ Sundhedstips'));

  tips.forEach(tip => {
    const tipClass = `health-tip health-tip-${tip.type}`;
    const tipEl = createElement('div', tipClass);

    const header = createElement('div', 'health-tip-header');
    header.appendChild(createElement('span', 'health-tip-icon', tip.icon));
    header.appendChild(createElement('span', 'health-tip-title', tip.titleDa));
    tipEl.appendChild(header);

    tipEl.appendChild(createElement('p', 'health-tip-text', tip.textDa));
    tipsBox.appendChild(tipEl);
  });

  container.appendChild(tipsBox);
}

// ============================================
// Storage Functions
// ============================================

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      state = { ...state, ...parsed };
      return true;
    }
  } catch (e) {
    console.error('Failed to load state:', e);
  }
  return false;
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      baby: state.baby,
      achievements: state.achievements,
      simpleView: state.simpleView
    }));
  } catch (e) {
    console.error('Failed to save state:', e);
  }
}

function resetState() {
  state = {
    baby: null,
    achievements: {},
    currentCategory: 'all'
  };
  localStorage.removeItem(STORAGE_KEY);
}

// ============================================
// Render Functions
// ============================================

function renderHeader() {
  if (!state.baby) return;

  // Use textContent for user-provided data (name)
  document.getElementById('header-name').textContent = state.baby.name;
  document.getElementById('header-age').textContent = formatAge(state.baby.birthDate);
}

function renderReminders() {
  const banner = document.getElementById('reminders-banner');
  const dVitaminReminder = document.getElementById('d-vitamin-reminder');

  if (!state.baby) {
    banner.classList.add('hidden');
    return;
  }

  const ageMonths = getAgeInMonths(state.baby.birthDate);
  const ageWeeks = getAgeInWeeks(state.baby.birthDate);

  // D-vitamin reminder: 2 weeks to 4 years
  const needsDVitamin = ageWeeks >= 2 && ageMonths < 48;

  if (needsDVitamin) {
    banner.classList.remove('hidden');
    dVitaminReminder.classList.remove('hidden');
  } else {
    banner.classList.add('hidden');
  }
}

function renderDashboard() {
  if (!state.baby) return;

  const ageWeeks = getAgeInWeeks(state.baby.birthDate);
  const ageMonths = getAgeInMonths(state.baby.birthDate);

  renderCurrentMilestones(ageWeeks);
  renderSleepInfo(ageMonths);
  renderNextHealth(ageWeeks);
  renderFeedingInfo(ageMonths);
}

function renderCurrentMilestones(ageWeeks) {
  const container = document.getElementById('current-milestones');
  clearElement(container);

  const allMilestones = [
    ...MILESTONES.motor,
    ...MILESTONES.speech,
    ...MILESTONES.social
  ];

  const current = allMilestones
    .filter(m => ageWeeks >= m.ageWeeksMin && ageWeeks <= m.ageWeeksMax)
    .filter(m => !state.achievements[m.id])
    .slice(0, 4);

  if (current.length === 0) {
    const empty = createElement('p', 'empty-state', 'Ingen aktuelle milepæle');
    container.appendChild(empty);
    return;
  }

  current.forEach(m => {
    const item = createElement('div', 'current-milestone-item');
    item.dataset.id = m.id;

    const title = createElement('span', 'milestone-title', m.titleDa);
    const range = createElement('span', 'milestone-range',
      `${weeksToLabel(m.ageWeeksMin)} - ${weeksToLabel(m.ageWeeksMax)}`);

    item.appendChild(title);
    item.appendChild(range);
    container.appendChild(item);
  });
}

function renderSleepInfo(ageMonths) {
  const container = document.getElementById('sleep-info');
  clearElement(container);

  const rec = SLEEP_RECOMMENDATIONS.find(r =>
    ageMonths >= r.ageMonthsMin && ageMonths <= r.ageMonthsMax
  );

  if (!rec) {
    container.appendChild(createElement('p', null, 'Ingen data for denne alder'));
    return;
  }

  const wrapper = createElement('div', 'sleep-recommendation');

  const hoursDiv = createElement('div', 'sleep-hours');
  const hoursMain = createElement('span', 'hours-main', `${rec.recommendedMin}-${rec.recommendedMax}`);
  const hoursLabel = createElement('span', 'hours-label', 'timer/døgn');
  hoursDiv.appendChild(hoursMain);
  hoursDiv.appendChild(hoursLabel);

  const note = createElement('p', 'sleep-note', rec.notesDa);
  const range = createElement('p', 'sleep-range', `Acceptabelt: ${rec.acceptableMin}-${rec.acceptableMax} timer`);

  wrapper.appendChild(hoursDiv);
  wrapper.appendChild(note);
  wrapper.appendChild(range);
  container.appendChild(wrapper);
}

function renderNextHealth(ageWeeks) {
  const container = document.getElementById('next-health');
  clearElement(container);

  const upcoming = HEALTH_CHECKUPS.filter(h => h.ageWeeks > ageWeeks);

  if (upcoming.length === 0) {
    container.appendChild(createElement('p', 'empty-state', 'Ingen kommende undersøgelser'));
    return;
  }

  const next = upcoming[0];
  const weeksUntil = next.ageWeeks - ageWeeks;

  const item = createElement('div', 'next-health-item');

  item.appendChild(createElement('span', 'health-title', next.titleDa));
  item.appendChild(createElement('span', 'health-age', `Ved ${next.ageLabel}`));
  item.appendChild(createElement('span', 'health-countdown', `Om ca. ${weeksToLabel(weeksUntil)}`));

  if (next.vaccines && next.vaccines.length > 0) {
    item.appendChild(createElement('span', 'health-vaccines', `Vacciner: ${next.vaccines.join(', ')}`));
  }

  container.appendChild(item);
}

function renderFeedingInfo(ageMonths) {
  const container = document.getElementById('feeding-info');
  clearElement(container);

  const stage = FEEDING_TIMELINE.find(f =>
    ageMonths >= f.ageMonthsMin && ageMonths < f.ageMonthsMax
  );

  if (!stage) {
    container.appendChild(createElement('p', null, 'Ingen data for denne alder'));
    return;
  }

  const wrapper = createElement('div', 'feeding-stage');
  wrapper.appendChild(createElement('span', 'feeding-title', stage.titleDa));
  wrapper.appendChild(createElement('p', 'feeding-desc', stage.descriptionDa));

  if (stage.important) {
    wrapper.appendChild(createElement('span', 'feeding-important', 'Vigtigt'));
  }

  container.appendChild(wrapper);
}

// ============================================
// Quick View Functions (Simplified Mode)
// ============================================

function renderQuickView() {
  if (!state.baby) return;

  const quickViewSection = document.getElementById('quick-view');
  const dashboard = document.querySelector('.dashboard');
  const quickViewAge = document.getElementById('quick-view-age');
  const container = document.getElementById('quick-view-content');

  if (state.simpleView) {
    quickViewSection.classList.remove('hidden');
    dashboard.classList.add('hidden');
    quickViewAge.textContent = formatAge(state.baby.birthDate);
    clearElement(container);

    const ageWeeks = getAgeInWeeks(state.baby.birthDate);
    const ageMonths = getAgeInMonths(state.baby.birthDate);

    // Current milestone highlight
    const allMilestones = [
      ...MILESTONES.motor,
      ...MILESTONES.speech,
      ...MILESTONES.social
    ];

    const currentMilestones = allMilestones
      .filter(m => ageWeeks >= m.ageWeeksMin && ageWeeks <= m.ageWeeksMax)
      .filter(m => !state.achievements[m.id])
      .slice(0, 2);

    // Milestone section
    if (currentMilestones.length > 0) {
      const milestonesDiv = createElement('div', 'quick-section');
      milestonesDiv.appendChild(createElement('h4', 'quick-section-title', 'Milepæle at kigge efter'));

      currentMilestones.forEach(m => {
        const item = createElement('div', 'quick-milestone-item');
        item.appendChild(createElement('span', 'quick-milestone-dot', '●'));
        item.appendChild(createElement('span', 'quick-milestone-text', m.titleDa));
        milestonesDiv.appendChild(item);
      });

      container.appendChild(milestonesDiv);
    }

    // Next health appointment
    const upcoming = HEALTH_CHECKUPS.filter(h => h.ageWeeks > ageWeeks);
    if (upcoming.length > 0) {
      const next = upcoming[0];
      const weeksUntil = next.ageWeeks - ageWeeks;

      const healthDiv = createElement('div', 'quick-section');
      healthDiv.appendChild(createElement('h4', 'quick-section-title', 'Næste sundhedsaftale'));

      const healthItem = createElement('div', 'quick-health-item');
      healthItem.appendChild(createElement('span', 'quick-health-icon', '🏥'));
      const healthText = createElement('div', 'quick-health-text');
      healthText.appendChild(createElement('span', 'quick-health-title', next.titleDa));
      healthText.appendChild(createElement('span', 'quick-health-when', `Om ${weeksToLabel(weeksUntil)}`));
      healthItem.appendChild(healthText);
      healthDiv.appendChild(healthItem);

      container.appendChild(healthDiv);
    }

    // Sleep recommendation
    const sleepRec = SLEEP_RECOMMENDATIONS.find(r =>
      ageMonths >= r.ageMonthsMin && ageMonths <= r.ageMonthsMax
    );
    if (sleepRec) {
      const sleepDiv = createElement('div', 'quick-section');
      sleepDiv.appendChild(createElement('h4', 'quick-section-title', 'Søvn'));

      const sleepItem = createElement('div', 'quick-sleep-item');
      sleepItem.appendChild(createElement('span', 'quick-sleep-hours', `${sleepRec.recommendedMin}-${sleepRec.recommendedMax}`));
      sleepItem.appendChild(createElement('span', 'quick-sleep-label', 'timer/døgn'));
      sleepDiv.appendChild(sleepItem);

      container.appendChild(sleepDiv);
    }

    // Age-relevant health tip
    const tips = getHealthTipsForAge(ageWeeks);
    if (tips.length > 0) {
      const tip = tips[0]; // Just show the most important tip
      const tipDiv = createElement('div', 'quick-section quick-tip');
      tipDiv.appendChild(createElement('span', 'quick-tip-icon', tip.icon));
      tipDiv.appendChild(createElement('span', 'quick-tip-text', tip.textDa));
      container.appendChild(tipDiv);
    }

    // Quick action button
    const actionDiv = createElement('div', 'quick-actions');
    const viewAllBtn = createElement('button', 'btn btn-secondary', 'Se detaljeret visning');
    viewAllBtn.addEventListener('click', () => {
      state.simpleView = false;
      saveState();
      renderAll();
    });
    actionDiv.appendChild(viewAllBtn);
    container.appendChild(actionDiv);

  } else {
    quickViewSection.classList.add('hidden');
    dashboard.classList.remove('hidden');
  }
}

function renderTimeline() {
  if (!state.baby) return;

  const container = document.getElementById('timeline');
  const ageWeeks = getAgeInWeeks(state.baby.birthDate);
  const category = state.currentCategory;

  clearElement(container);

  let milestones = [];

  if (category === 'all') {
    milestones = [
      ...MILESTONES.motor.map(m => ({ ...m, category: 'motor' })),
      ...MILESTONES.speech.map(m => ({ ...m, category: 'speech' })),
      ...MILESTONES.social.map(m => ({ ...m, category: 'social' }))
    ];
  } else if (category === 'motor') {
    milestones = MILESTONES.motor.map(m => ({ ...m, category: 'motor' }));
  } else if (category === 'speech') {
    milestones = MILESTONES.speech.map(m => ({ ...m, category: 'speech' }));
  } else if (category === 'social') {
    milestones = MILESTONES.social.map(m => ({ ...m, category: 'social' }));
  } else if (category === 'health') {
    renderHealthTimeline(container, ageWeeks);
    return;
  } else if (category === 'guides') {
    document.getElementById('guides-section').classList.remove('hidden');
    renderGuides();
    return;
  }

  // Hide guides section when not in guides tab
  document.getElementById('guides-section').classList.add('hidden');

  // Sort by min age
  milestones.sort((a, b) => a.ageWeeksMin - b.ageWeeksMin);

  // Group by status
  const groups = {
    current: milestones.filter(m => getMilestoneStatus(m, ageWeeks) === 'current'),
    overdue: milestones.filter(m => getMilestoneStatus(m, ageWeeks) === 'overdue'),
    upcoming: milestones.filter(m => getMilestoneStatus(m, ageWeeks) === 'upcoming'),
    achieved: milestones.filter(m => getMilestoneStatus(m, ageWeeks) === 'achieved')
  };

  const groupConfig = [
    { key: 'current', title: 'Aktuel periode' },
    { key: 'overdue', title: 'Ikke markeret endnu' },
    { key: 'upcoming', title: 'Kommende' },
    { key: 'achieved', title: 'Opnået' }
  ];

  groupConfig.forEach(({ key, title }) => {
    if (groups[key].length > 0) {
      const groupDiv = createElement('div', 'timeline-group');
      groupDiv.appendChild(createElement('h3', 'timeline-group-title', title));

      groups[key].forEach(m => {
        groupDiv.appendChild(createMilestoneCard(m, key));
      });

      container.appendChild(groupDiv);
    }
  });
}

function createMilestoneCard(milestone, status) {
  const categoryLabels = {
    motor: 'Motorik',
    speech: 'Sprog',
    social: 'Social'
  };

  const categoryClass = milestone.category || 'motor';

  // Check if upcoming milestone is coming soon (within 2 weeks)
  let extraClass = '';
  const ageWeeks = state.baby ? getAgeInWeeks(state.baby.birthDate) : 0;
  if (status === 'upcoming' && milestone.ageWeeksMin - ageWeeks <= 2) {
    extraClass = ' milestone-upcoming-soon';
  }

  const card = createElement('div', `milestone-card milestone-${status}${extraClass} category-${categoryClass}`);
  card.dataset.id = milestone.id;

  const checkbox = createElement('div', `milestone-checkbox ${status === 'achieved' ? 'checked' : ''}`);
  if (status === 'achieved') checkbox.textContent = '✓';

  const content = createElement('div', 'milestone-content');

  // Category tag and priority indicator row
  const tagRow = createElement('div', 'milestone-tag-row');
  tagRow.appendChild(createElement('span', 'milestone-category-tag', categoryLabels[categoryClass]));

  // Add priority indicator for current, overdue, and upcoming soon
  if (status === 'current') {
    tagRow.appendChild(createElement('span', 'milestone-priority milestone-priority-current', 'Nu'));
  } else if (status === 'overdue') {
    tagRow.appendChild(createElement('span', 'milestone-priority milestone-priority-overdue', 'Forsinket'));
  } else if (status === 'upcoming' && milestone.ageWeeksMin - ageWeeks <= 2) {
    tagRow.appendChild(createElement('span', 'milestone-priority milestone-priority-soon', 'Snart'));
  }

  content.appendChild(tagRow);
  content.appendChild(createElement('h4', 'milestone-title', milestone.titleDa));
  content.appendChild(createElement('p', 'milestone-desc', milestone.descriptionDa));
  content.appendChild(createElement('span', 'milestone-age',
    `${weeksToLabel(milestone.ageWeeksMin)} - ${weeksToLabel(milestone.ageWeeksMax)}`));

  if (milestone.important) {
    content.appendChild(createElement('span', 'milestone-warning', milestone.warningTextDa));
  }

  card.appendChild(checkbox);
  card.appendChild(content);

  card.addEventListener('click', () => toggleMilestone(milestone.id));

  return card;
}

function renderHealthTimeline(container, ageWeeks) {
  const timeline = createElement('div', 'health-timeline');

  HEALTH_CHECKUPS.forEach(h => {
    const isPast = ageWeeks > h.ageWeeks;
    const isCurrent = Math.abs(ageWeeks - h.ageWeeks) < 4;

    const item = createElement('div', `health-timeline-item ${isPast ? 'past' : ''} ${isCurrent ? 'current' : ''}`);

    item.appendChild(createElement('div', 'health-marker'));

    const content = createElement('div', 'health-content');
    content.appendChild(createElement('span', 'health-age-label', h.ageLabel));
    content.appendChild(createElement('h4', null, h.titleDa));

    if (h.focusDa) {
      content.appendChild(createElement('p', 'health-focus', h.focusDa.join(', ')));
    }

    if (h.vaccines && h.vaccines.length > 0) {
      content.appendChild(createElement('p', 'health-vaccines-list', `Vacciner: ${h.vaccines.join(', ')}`));
    }

    item.appendChild(content);
    timeline.appendChild(item);
  });

  container.appendChild(timeline);
}

function renderGuides() {
  renderRelevantGuides();
  renderPoopGuide();
  renderOutdoorSleepGuide();
  renderFeverGuide();
  renderSIDSGuide();
  renderJaundiceGuide();
  renderColicGuide();
  renderUmbilicalGuide();
  renderSunGuide();
  renderAllergyGuide();
}

function renderPoopGuide() {
  const container = document.getElementById('poop-content');
  clearElement(container);

  const feedingType = state.baby?.feedingType || 'breastfed';
  const guide = feedingType === 'formula' ? POOP_GUIDE.formulaFed : POOP_GUIDE.breastfed;

  // Main guide section
  const mainSection = createElement('div', 'poop-section');
  mainSection.appendChild(createElement('h4', null, guide.titleDa));

  const colorP = createElement('p');
  colorP.appendChild(createElement('strong', null, 'Farve: '));
  colorP.appendChild(document.createTextNode(guide.colorsDa.join(', ')));
  mainSection.appendChild(colorP);

  const consistP = createElement('p');
  consistP.appendChild(createElement('strong', null, 'Konsistens: '));
  consistP.appendChild(document.createTextNode(guide.consistencyDa));
  mainSection.appendChild(consistP);

  const freqP = createElement('p');
  freqP.appendChild(createElement('strong', null, 'Hyppighed: '));
  if (Array.isArray(guide.frequency)) {
    guide.frequency.forEach((f, i) => {
      if (i > 0) freqP.appendChild(createElement('br'));
      freqP.appendChild(document.createTextNode(`${f.age}: ${f.freqDa}`));
    });
  } else {
    freqP.appendChild(document.createTextNode(guide.frequencyDa));
  }
  mainSection.appendChild(freqP);

  container.appendChild(mainSection);

  // Meconium section
  const mecoSection = createElement('div', 'poop-section');
  mecoSection.appendChild(createElement('h4', null, 'Første dage: Mekonium'));
  mecoSection.appendChild(createElement('p', null, POOP_GUIDE.meconium.descriptionDa));
  const durationEm = createElement('em', null, POOP_GUIDE.meconium.durationDa);
  const durationP = createElement('p');
  durationP.appendChild(durationEm);
  mecoSection.appendChild(durationP);
  container.appendChild(mecoSection);

  // Warnings section
  const warnSection = createElement('div', 'poop-section poop-warnings');
  warnSection.appendChild(createElement('h4', null, 'Advarselstegn - kontakt læge'));

  const warnList = createElement('ul');
  POOP_GUIDE.warningsSigns.forEach(w => {
    const li = createElement('li');
    li.appendChild(createElement('strong', null, `${w.signDa}: `));
    li.appendChild(document.createTextNode(w.concernDa));
    warnList.appendChild(li);
  });
  warnSection.appendChild(warnList);
  container.appendChild(warnSection);
}

function renderOutdoorSleepGuide() {
  const container = document.getElementById('outdoor-sleep-content');
  clearElement(container);

  // Requirements
  const reqSection = createElement('div', 'outdoor-section');
  reqSection.appendChild(createElement('h4', null, 'Krav for at sove ude'));
  const reqList = createElement('ul');
  OUTDOOR_SLEEP.requirements.forEach(r => {
    reqList.appendChild(createElement('li', null, r.textDa));
  });
  reqSection.appendChild(reqList);
  container.appendChild(reqSection);

  // Avoid
  const avoidSection = createElement('div', 'outdoor-section');
  avoidSection.appendChild(createElement('h4', null, 'Undgå udesovning ved'));
  const avoidList = createElement('ul', 'avoid-list');
  OUTDOOR_SLEEP.avoid.forEach(a => {
    avoidList.appendChild(createElement('li', null, a.textDa));
  });
  avoidSection.appendChild(avoidList);
  container.appendChild(avoidSection);

  // Tips
  const tipsSection = createElement('div', 'outdoor-section');
  tipsSection.appendChild(createElement('h4', null, 'Tips'));
  const tipsList = createElement('ul');
  OUTDOOR_SLEEP.tips.forEach(t => {
    tipsList.appendChild(createElement('li', null, t.textDa));
  });
  tipsSection.appendChild(tipsList);
  container.appendChild(tipsSection);

  // Source
  container.appendChild(createElement('p', 'guide-source', `Kilde: ${OUTDOOR_SLEEP.source}`));
}

// ============================================
// Health Guide Render Functions
// ============================================

function renderFeverGuide() {
  const container = document.getElementById('fever-content');
  if (!container) return;
  clearElement(container);

  // Key message
  const keyMsg = createElement('div', 'guide-key-message guide-warning');
  keyMsg.appendChild(createElement('strong', null, FEVER_GUIDELINES.keyMessageDa));
  container.appendChild(keyMsg);

  // Age thresholds
  const threshSection = createElement('div', 'guide-section');
  threshSection.appendChild(createElement('h4', null, 'Temperaturgrænser efter alder'));

  const threshList = createElement('ul', 'fever-thresholds');

  const under3 = createElement('li', 'threshold-urgent');
  under3.innerHTML = '<strong>Under 3 måneder:</strong> >38°C → Kontakt læge straks';
  threshList.appendChild(under3);

  const m3to6 = createElement('li', 'threshold-urgent');
  m3to6.innerHTML = '<strong>3-6 måneder:</strong> >38°C → Kontakt læge samme dag';
  threshList.appendChild(m3to6);

  const m6to12 = createElement('li');
  m6to12.innerHTML = '<strong>6-12 måneder:</strong> >39°C med symptomer → Kontakt læge';
  threshList.appendChild(m6to12);

  threshSection.appendChild(threshList);
  container.appendChild(threshSection);

  // Emergency signs
  const emergSection = createElement('div', 'guide-section guide-emergency');
  emergSection.appendChild(createElement('h4', null, 'Ring 112 ved:'));
  const emergList = createElement('ul');
  FEVER_GUIDELINES.emergencySigns.forEach(s => {
    emergList.appendChild(createElement('li', null, s.signDa));
  });
  emergSection.appendChild(emergList);
  container.appendChild(emergSection);

  // Contacts
  const contactSection = createElement('div', 'guide-section');
  contactSection.appendChild(createElement('h4', null, 'Vigtige numre'));
  const contactP = createElement('p');
  contactP.innerHTML = `<strong>Akut:</strong> 112 · <strong>Lægevagten:</strong> 1813 · <strong>Giftlinjen:</strong> 82 12 12 12`;
  contactSection.appendChild(contactP);
  container.appendChild(contactSection);

  container.appendChild(createElement('p', 'guide-source', `Kilde: ${FEVER_GUIDELINES.source}`));
}

function renderSIDSGuide() {
  const container = document.getElementById('sids-content');
  if (!container) return;
  clearElement(container);

  // Key message
  const keyMsg = createElement('div', 'guide-key-message');
  keyMsg.appendChild(createElement('strong', null, SIDS_PREVENTION.keyMessageDa));
  container.appendChild(keyMsg);

  // Statistics
  const statsP = createElement('p', 'guide-stats');
  statsP.innerHTML = `Vuggedød faldt fra ~${SIDS_PREVENTION.statistics.deathsBefore} til ~${SIDS_PREVENTION.statistics.deathsAfter} dødsfald/år efter retningslinjer blev indført.`;
  container.appendChild(statsP);

  // Safe sleep guidelines
  const safeSection = createElement('div', 'guide-section');
  safeSection.appendChild(createElement('h4', null, 'Sikker søvn'));
  const safeList = createElement('ul');
  SIDS_PREVENTION.safeSleeGuidelines.forEach(g => {
    safeList.appendChild(createElement('li', null, g.guidelineDa));
  });
  safeSection.appendChild(safeList);
  container.appendChild(safeSection);

  // Risk factors
  const riskSection = createElement('div', 'guide-section guide-warning');
  riskSection.appendChild(createElement('h4', null, 'Hovedrisikofaktorer'));
  const riskList = createElement('ul');
  SIDS_PREVENTION.mainRiskFactors.forEach(r => {
    const li = createElement('li');
    li.innerHTML = `<strong>${r.factorDa}:</strong> ${r.preventionDa}`;
    riskList.appendChild(li);
  });
  riskSection.appendChild(riskList);
  container.appendChild(riskSection);

  // Protective factors
  const protectSection = createElement('div', 'guide-section');
  protectSection.appendChild(createElement('h4', null, 'Beskyttende faktorer'));
  const protectList = createElement('ul');
  SIDS_PREVENTION.protectiveFactors.forEach(f => {
    protectList.appendChild(createElement('li', null, f.factorDa));
  });
  protectSection.appendChild(protectList);
  container.appendChild(protectSection);

  container.appendChild(createElement('p', 'guide-source', `Kilde: ${SIDS_PREVENTION.source}`));
}

function renderJaundiceGuide() {
  const container = document.getElementById('jaundice-content');
  if (!container) return;
  clearElement(container);

  // Info
  const infoP = createElement('p');
  infoP.innerHTML = `${JAUNDICE.info.descriptionDa}. <em>${JAUNDICE.info.noteDa}</em>`;
  container.appendChild(infoP);

  // Prevalence
  const prevP = createElement('p', 'guide-stats');
  prevP.innerHTML = `Rammer ~${JAUNDICE.prevalence.fullTerm}% af alle nyfødte.`;
  container.appendChild(prevP);

  // Timeline
  const timeSection = createElement('div', 'guide-section');
  timeSection.appendChild(createElement('h4', null, 'Tidslinje'));
  const timeP = createElement('p');
  timeP.innerHTML = `Starter typisk dag ${JAUNDICE.timeline.onsetDays} · Højdepunkt dag ${JAUNDICE.timeline.peakDays} · Forsvinder inden dag ${JAUNDICE.timeline.resolutionDays}`;
  timeSection.appendChild(timeP);
  container.appendChild(timeSection);

  // Warning signs
  const warnSection = createElement('div', 'guide-section guide-warning');
  warnSection.appendChild(createElement('h4', null, 'Kontakt læge ved:'));
  const warnList = createElement('ul');
  JAUNDICE.warningsSigns.urgent.forEach(w => {
    warnList.appendChild(createElement('li', null, w.signDa));
  });
  warnSection.appendChild(warnList);
  container.appendChild(warnSection);

  container.appendChild(createElement('p', 'guide-source', `Kilde: ${JAUNDICE.source}`));
}

function renderColicGuide() {
  const container = document.getElementById('colic-content');
  if (!container) return;
  clearElement(container);

  // Key message
  const keyMsg = createElement('div', 'guide-key-message');
  keyMsg.appendChild(createElement('strong', null, COLIC.keyMessageDa));
  container.appendChild(keyMsg);

  // Definition
  const defP = createElement('p');
  defP.innerHTML = `${COLIC.definition.descriptionDa}. Rammer ${COLIC.prevalence.min}-${COLIC.prevalence.max}% af spædbørn.`;
  container.appendChild(defP);

  // Timeline
  const timeSection = createElement('div', 'guide-section');
  timeSection.appendChild(createElement('h4', null, 'Tidslinje'));
  const timeP = createElement('p');
  timeP.innerHTML = `Starter ~uge ${COLIC.timeline.onsetWeeks} · Højdepunkt uge ${COLIC.timeline.peakWeeks} · Forsvinder ved ${COLIC.timeline.resolutionMonths} måneder`;
  timeSection.appendChild(timeP);
  const timingP = createElement('p');
  timingP.innerHTML = `<em>Typisk tidspunkt: ${COLIC.typicalTimingDa}</em>`;
  timeSection.appendChild(timingP);
  container.appendChild(timeSection);

  // Soothing techniques
  const soothSection = createElement('div', 'guide-section');
  soothSection.appendChild(createElement('h4', null, 'Beroligende teknikker'));

  const techList = createElement('ul', 'soothing-list');

  const moveLi = createElement('li');
  moveLi.innerHTML = `<strong>Bevægelse:</strong> ${COLIC.soothingTechniques.movement.map(t => t.techniqueDa).join(', ')}`;
  techList.appendChild(moveLi);

  const soundLi = createElement('li');
  soundLi.innerHTML = `<strong>Lyd:</strong> ${COLIC.soothingTechniques.sound.map(t => t.techniqueDa).join(', ')}`;
  techList.appendChild(soundLi);

  const touchLi = createElement('li');
  touchLi.innerHTML = `<strong>Berøring:</strong> ${COLIC.soothingTechniques.touch.map(t => t.techniqueDa).join(', ')}`;
  techList.appendChild(touchLi);

  soothSection.appendChild(techList);
  container.appendChild(soothSection);

  // Parent message
  const parentMsg = createElement('p', 'guide-parent-message');
  parentMsg.innerHTML = `<em>${COLIC.parentMessageDa}</em>`;
  container.appendChild(parentMsg);

  container.appendChild(createElement('p', 'guide-source', `Kilde: ${COLIC.source}`));
}

function renderUmbilicalGuide() {
  const container = document.getElementById('umbilical-content');
  if (!container) return;
  clearElement(container);

  // Key message
  const keyMsg = createElement('div', 'guide-key-message');
  keyMsg.appendChild(createElement('strong', null, UMBILICAL_CARE.keyMessageDa));
  container.appendChild(keyMsg);

  // Timeline
  const timeP = createElement('p');
  timeP.innerHTML = `Falder normalt af efter ${UMBILICAL_CARE.timeline.typicalFallOffDays} dage (kan tage op til ${UMBILICAL_CARE.timeline.maxNormalDays} dage).`;
  container.appendChild(timeP);

  // Do's
  const doSection = createElement('div', 'guide-section');
  doSection.appendChild(createElement('h4', null, 'Gør dette'));
  const doList = createElement('ul');
  UMBILICAL_CARE.careInstructions.dos.forEach(d => {
    doList.appendChild(createElement('li', null, d.actionDa));
  });
  doSection.appendChild(doList);
  container.appendChild(doSection);

  // Don'ts
  const dontSection = createElement('div', 'guide-section guide-warning');
  dontSection.appendChild(createElement('h4', null, 'Undgå'));
  const dontList = createElement('ul');
  UMBILICAL_CARE.careInstructions.donts.forEach(d => {
    dontList.appendChild(createElement('li', null, d.actionDa));
  });
  dontSection.appendChild(dontList);
  container.appendChild(dontSection);

  // Infection signs
  const infSection = createElement('div', 'guide-section');
  infSection.appendChild(createElement('h4', null, 'Tegn på infektion - kontakt læge'));
  const infList = createElement('ul');
  UMBILICAL_CARE.infectionSigns.forEach(s => {
    infList.appendChild(createElement('li', null, s.signDa));
  });
  infSection.appendChild(infList);
  container.appendChild(infSection);

  container.appendChild(createElement('p', 'guide-source', `Kilde: ${UMBILICAL_CARE.source}`));
}

function renderSunGuide() {
  const container = document.getElementById('sun-content');
  if (!container) return;
  clearElement(container);

  // Key message
  const keyMsg = createElement('div', 'guide-key-message');
  keyMsg.appendChild(createElement('strong', null, SUN_PROTECTION.keyMessageDa));
  container.appendChild(keyMsg);

  // Age guidelines
  const ageSection = createElement('div', 'guide-section');
  ageSection.appendChild(createElement('h4', null, 'Efter alder'));
  const ageList = createElement('ul');

  const nonMobile = createElement('li');
  nonMobile.innerHTML = `<strong>Ikke-mobile babyer:</strong> ${SUN_PROTECTION.ageGuidelines.nonMobileInfants.strategyDa}`;
  ageList.appendChild(nonMobile);

  const m6to12 = createElement('li');
  m6to12.innerHTML = `<strong>6-12 måneder:</strong> ${SUN_PROTECTION.ageGuidelines.months6to12.strategyDa}`;
  ageList.appendChild(m6to12);

  const over12 = createElement('li');
  over12.innerHTML = `<strong>Over 12 måneder:</strong> ${SUN_PROTECTION.ageGuidelines.over12Months.strategyDa}`;
  ageList.appendChild(over12);

  ageSection.appendChild(ageList);
  container.appendChild(ageSection);

  // UV info
  const uvSection = createElement('div', 'guide-section');
  uvSection.appendChild(createElement('h4', null, 'UV-indeks'));
  const uvP = createElement('p');
  uvP.innerHTML = `Beskyt når UV ≥ ${SUN_PROTECTION.uvIndex.protectionNeeded}. I Danmark typisk ${SUN_PROTECTION.uvIndex.highUvMonths}, kl. ${SUN_PROTECTION.uvIndex.peakHours}.`;
  uvSection.appendChild(uvP);
  container.appendChild(uvSection);

  // Warning
  const warnSection = createElement('div', 'guide-section guide-warning');
  const warnP = createElement('p');
  warnP.innerHTML = `<strong>Vigtigt:</strong> ${SUN_PROTECTION.warnings.strollerBlanketDa}`;
  warnSection.appendChild(warnP);
  container.appendChild(warnSection);

  container.appendChild(createElement('p', 'guide-source', `Kilde: ${SUN_PROTECTION.source}`));
}

function renderAllergyGuide() {
  const container = document.getElementById('allergy-content');
  if (!container) return;
  clearElement(container);

  // Key message
  const keyMsg = createElement('div', 'guide-key-message');
  keyMsg.appendChild(createElement('strong', null, ALLERGY_PREVENTION.keyMessageDa));
  container.appendChild(keyMsg);

  // Egg introduction
  const eggSection = createElement('div', 'guide-section');
  eggSection.appendChild(createElement('h4', null, 'Æg-introduktion (ny anbefaling 2022)'));
  const eggList = createElement('ul');
  eggList.appendChild(createElement('li', null, `Alder: ${ALLERGY_PREVENTION.eggIntroduction.startAgeMonths} måneder`));
  eggList.appendChild(createElement('li', null, `Mængde: ${ALLERGY_PREVENTION.eggIntroduction.amountDa}`));
  eggList.appendChild(createElement('li', null, `Hyppighed: ${ALLERGY_PREVENTION.eggIntroduction.frequencyDa}`));
  eggList.appendChild(createElement('li', null, `Hvordan: ${ALLERGY_PREVENTION.eggIntroduction.howDa}`));
  eggSection.appendChild(eggList);
  container.appendChild(eggSection);

  // Common allergens
  const allergensSection = createElement('div', 'guide-section');
  allergensSection.appendChild(createElement('h4', null, 'Almindelige allergener at introducere'));
  const allergenList = createElement('ul');
  ALLERGY_PREVENTION.commonAllergens.forEach(a => {
    allergenList.appendChild(createElement('li', null, `${a.foodDa} (${a.notes})`));
  });
  allergensSection.appendChild(allergenList);
  container.appendChild(allergensSection);

  // Caution
  const cautionSection = createElement('div', 'guide-section guide-warning');
  cautionSection.appendChild(createElement('h4', null, 'Konsulter læge først hvis:'));
  const cautionList = createElement('ul');
  ALLERGY_PREVENTION.cautionIf.forEach(c => {
    cautionList.appendChild(createElement('li', null, c));
  });
  cautionSection.appendChild(cautionList);
  container.appendChild(cautionSection);

  container.appendChild(createElement('p', 'guide-source', `Kilde: ${ALLERGY_PREVENTION.source}`));
}

function renderProgress() {
  const container = document.getElementById('progress-bars');
  clearElement(container);

  if (!state.baby) return;

  const ageWeeks = getAgeInWeeks(state.baby.birthDate);

  const categories = [
    { key: 'motor', label: 'Motorik', milestones: MILESTONES.motor },
    { key: 'speech', label: 'Sprog', milestones: MILESTONES.speech },
    { key: 'social', label: 'Social', milestones: MILESTONES.social }
  ];

  categories.forEach(cat => {
    const relevant = cat.milestones.filter(m => m.ageWeeksMax <= ageWeeks + 8);
    const achieved = relevant.filter(m => state.achievements[m.id]).length;
    const percent = relevant.length > 0 ? Math.round((achieved / relevant.length) * 100) : 0;

    const item = createElement('div', 'progress-item');

    const header = createElement('div', 'progress-header');
    header.appendChild(createElement('span', 'progress-label', cat.label));
    header.appendChild(createElement('span', 'progress-count', `${achieved}/${relevant.length}`));

    const bar = createElement('div', 'progress-bar');
    const fill = createElement('div', `progress-fill category-${cat.key}`);
    fill.style.width = `${percent}%`;
    bar.appendChild(fill);

    item.appendChild(header);
    item.appendChild(bar);
    container.appendChild(item);
  });
}

// ============================================
// Week View Functions
// ============================================

function getWeekData(weekNumber) {
  // Week 0: day-by-day data
  if (weekNumber === 0) {
    return { type: 'days', data: WEEKLY_EXPECTATIONS.week0.days };
  }

  // Weeks 1-12: weekly data
  const weekData = WEEKLY_EXPECTATIONS.weeks.find(w => w.weekNumber === weekNumber);
  if (weekData) {
    return { type: 'week', data: weekData };
  }

  // Months 4-12 (weeks 13-52): monthly data
  const monthNumber = Math.floor(weekNumber / WEEKS_PER_MONTH);
  const monthData = WEEKLY_EXPECTATIONS.months.find(m => m.month === monthNumber);
  if (monthData) {
    return { type: 'month', data: monthData, monthNumber };
  }

  // Beyond 12 months: use last available month data with milestones
  return { type: 'beyond', weekNumber, monthNumber };
}

function getWeekTitle(weekNumber) {
  if (weekNumber === 0) {
    return { title: 'Uge 0', subtitle: 'Dag 1-7' };
  }

  const monthNumber = Math.floor((weekNumber + 1) / WEEKS_PER_MONTH);

  if (weekNumber <= 12) {
    const weekData = WEEKLY_EXPECTATIONS.weeks.find(w => w.weekNumber === weekNumber);
    if (weekData) {
      return { title: `Uge ${weekNumber}`, subtitle: weekData.ageLabel.replace(`Uge ${weekNumber} `, '').replace(`Uge ${weekNumber}`, '') || '' };
    }
    return { title: `Uge ${weekNumber}`, subtitle: '' };
  }

  // For weeks beyond 12, show month approximation
  if (monthNumber < 24) {
    return { title: `Uge ${weekNumber}`, subtitle: `ca. ${monthNumber} måneder` };
  }

  const years = Math.floor(monthNumber / 12);
  const remainingMonths = monthNumber % 12;
  return {
    title: `Uge ${weekNumber}`,
    subtitle: remainingMonths > 0 ? `ca. ${years} år, ${remainingMonths} mdr` : `ca. ${years} år`
  };
}

function renderWeekView() {
  if (!state.baby) return;

  const currentWeek = getCurrentWeekNumber(state.baby.birthDate);
  const viewedWeek = state.viewedWeek !== null ? state.viewedWeek : currentWeek;
  const currentDay = getCurrentDayInWeek(state.baby.birthDate);

  // Update title
  const titleInfo = getWeekTitle(viewedWeek);
  document.getElementById('week-title').textContent = titleInfo.title;
  document.getElementById('week-subtitle').textContent = titleInfo.subtitle;

  // Show/hide current week badge and Today button
  const badge = document.getElementById('current-week-badge');
  const todayBtn = document.getElementById('week-today');
  if (viewedWeek === currentWeek) {
    badge.classList.remove('hidden');
    todayBtn.classList.add('hidden');
  } else {
    badge.classList.add('hidden');
    todayBtn.classList.remove('hidden');
  }

  // Get data for this week
  const weekInfo = getWeekData(viewedWeek);

  // Render content based on type and view mode
  const contentContainer = document.getElementById('week-content');
  const notesContainer = document.getElementById('week-notes');
  clearElement(contentContainer);
  clearElement(notesContainer);

  const isSimpleMode = state.weekViewMode === 'simple';

  if (isSimpleMode) {
    renderWeekSimpleSummary(contentContainer, weekInfo, viewedWeek);
  } else {
    if (weekInfo.type === 'days') {
      renderDayCards(contentContainer, weekInfo.data, currentWeek === viewedWeek ? currentDay : null);
      renderWeekNotes(notesContainer, weekInfo.data, currentWeek === viewedWeek ? currentDay : null);
    } else if (weekInfo.type === 'week') {
      renderWeekSummary(contentContainer, weekInfo.data);
      renderWeekHighlights(notesContainer, weekInfo.data);
    } else if (weekInfo.type === 'month') {
      renderMonthSummary(contentContainer, weekInfo.data, viewedWeek);
      renderMonthHighlights(notesContainer, weekInfo.data);
    } else {
      renderBeyondData(contentContainer, notesContainer, viewedWeek, weekInfo.monthNumber);
    }
  }

  // Add health tips for the viewed week
  renderHealthTipsBox(notesContainer, viewedWeek);
}

function renderWeekSimpleSummary(container, weekInfo, weekNumber) {
  const summaryCard = createElement('div', 'week-simple-summary');

  // Key stats row
  const statsRow = createElement('div', 'simple-stats-row');

  // Wet diapers
  let wetMin = 4, wetMax = 6;
  let feedMin = 6, feedMax = 12;
  let sleepMin = 14, sleepMax = 17;

  if (weekInfo.type === 'days') {
    // Average from week 0 days
    wetMin = 3; wetMax = 6;
    feedMin = 8; feedMax = 12;
    sleepMin = 16; sleepMax = 17;
  } else if (weekInfo.type === 'week' || weekInfo.type === 'month') {
    const data = weekInfo.data;
    wetMin = data.wetDiapers?.min || 4;
    wetMax = data.wetDiapers?.max || 6;
    feedMin = data.feedings?.min || 6;
    feedMax = data.feedings?.max || 8;
    sleepMin = data.sleepHours?.min || 14;
    sleepMax = data.sleepHours?.max || 17;
  }

  // Create stat items
  const wetStat = createElement('div', 'simple-stat');
  wetStat.appendChild(createElement('span', 'simple-stat-icon', '💧'));
  wetStat.appendChild(createElement('span', 'simple-stat-value', `${wetMin}-${wetMax}`));
  wetStat.appendChild(createElement('span', 'simple-stat-label', 'bleer'));
  statsRow.appendChild(wetStat);

  const feedStat = createElement('div', 'simple-stat');
  feedStat.appendChild(createElement('span', 'simple-stat-icon', '🍼'));
  feedStat.appendChild(createElement('span', 'simple-stat-value', `${feedMin}-${feedMax}`));
  feedStat.appendChild(createElement('span', 'simple-stat-label', 'måltider'));
  statsRow.appendChild(feedStat);

  const sleepStat = createElement('div', 'simple-stat');
  sleepStat.appendChild(createElement('span', 'simple-stat-icon', '😴'));
  sleepStat.appendChild(createElement('span', 'simple-stat-value', `${sleepMin}-${sleepMax}`));
  sleepStat.appendChild(createElement('span', 'simple-stat-label', 'timer søvn'));
  statsRow.appendChild(sleepStat);

  summaryCard.appendChild(statsRow);

  // Key highlight
  if (weekInfo.type === 'week' && weekInfo.data.highlightsDa?.length > 0) {
    const highlight = createElement('div', 'simple-highlight');
    highlight.appendChild(createElement('span', 'simple-highlight-icon', '✨'));
    highlight.appendChild(createElement('span', 'simple-highlight-text', weekInfo.data.highlightsDa[0]));
    summaryCard.appendChild(highlight);
  } else if (weekInfo.type === 'month' && weekInfo.data.highlightsDa?.length > 0) {
    const highlight = createElement('div', 'simple-highlight');
    highlight.appendChild(createElement('span', 'simple-highlight-icon', '✨'));
    highlight.appendChild(createElement('span', 'simple-highlight-text', weekInfo.data.highlightsDa[0]));
    summaryCard.appendChild(highlight);
  }

  container.appendChild(summaryCard);
}

function renderDayCards(container, days, currentDay) {
  const daysContainer = createElement('div', 'days-grid');

  days.forEach(day => {
    const isCurrentDay = currentDay === day.day;
    const card = createElement('div', `day-card ${isCurrentDay ? 'day-current' : ''}`);

    // Day header
    const header = createElement('div', 'day-header');
    header.appendChild(createElement('span', 'day-number', `Dag ${day.day}`));
    if (isCurrentDay) {
      header.appendChild(createElement('span', 'day-badge', '★'));
    }
    card.appendChild(header);

    // Stats
    const stats = createElement('div', 'day-stats');

    // Wet diapers
    const wetRow = createElement('div', 'stat-row');
    wetRow.appendChild(createElement('span', 'stat-icon', '💧'));
    wetRow.appendChild(createElement('span', 'stat-value', `${day.wetDiapers.min}-${day.wetDiapers.max}`));
    stats.appendChild(wetRow);

    // Dirty diapers
    const dirtyRow = createElement('div', 'stat-row');
    dirtyRow.appendChild(createElement('span', 'stat-icon', '💩'));
    dirtyRow.appendChild(createElement('span', 'stat-value', `${day.dirtyDiapers.min}-${day.dirtyDiapers.max}`));
    stats.appendChild(dirtyRow);

    // Feedings
    const feedRow = createElement('div', 'stat-row');
    feedRow.appendChild(createElement('span', 'stat-icon', '🍼'));
    feedRow.appendChild(createElement('span', 'stat-value', `${day.feedings.min}-${day.feedings.max}`));
    stats.appendChild(feedRow);

    card.appendChild(stats);

    // Poop info
    const poopInfo = createElement('div', 'day-poop');
    poopInfo.appendChild(createElement('span', 'poop-type', day.poop.typeDa));
    poopInfo.appendChild(createElement('span', 'poop-color', `(${day.poop.colorDa})`));
    card.appendChild(poopInfo);

    daysContainer.appendChild(card);
  });

  container.appendChild(daysContainer);
}

function renderWeekNotes(container, days, currentDay) {
  if (!currentDay || currentDay < 1 || currentDay > 7) return;

  const day = days.find(d => d.day === currentDay);
  if (!day) return;

  const notesBox = createElement('div', 'week-notes-box');
  notesBox.appendChild(createElement('h4', null, `Dag ${currentDay}`));
  notesBox.appendChild(createElement('p', 'note-text', day.notesDa));

  if (day.tipsDa && day.tipsDa.length > 0) {
    const tipsList = createElement('ul', 'tips-list');
    day.tipsDa.forEach(tip => {
      tipsList.appendChild(createElement('li', null, tip));
    });
    notesBox.appendChild(createElement('h5', null, '💡 Tips'));
    notesBox.appendChild(tipsList);
  }

  container.appendChild(notesBox);
}

function renderWeekSummary(container, data) {
  const feedingType = state.baby?.feedingType || 'breastfed';
  const poopData = feedingType === 'formula' ? data.poop.formulaFed : data.poop.breastfed;

  const summaryCard = createElement('div', 'week-summary-card');

  summaryCard.appendChild(createElement('h3', null, 'Denne uge kan du forvente:'));

  // Stats table
  const statsTable = createElement('div', 'stats-table');

  // Wet diapers
  const wetRow = createElement('div', 'summary-stat-row');
  wetRow.appendChild(createElement('span', 'stat-icon-lg', '💧'));
  wetRow.appendChild(createElement('span', 'stat-label', 'Våde bleer'));
  wetRow.appendChild(createElement('span', 'stat-value-lg', `${data.wetDiapers.min}-${data.wetDiapers.max} ${data.wetDiapers.noteDa}`));
  statsTable.appendChild(wetRow);

  // Dirty diapers
  const dirtyRow = createElement('div', 'summary-stat-row');
  dirtyRow.appendChild(createElement('span', 'stat-icon-lg', '💩'));
  dirtyRow.appendChild(createElement('span', 'stat-label', 'Afføring'));
  dirtyRow.appendChild(createElement('span', 'stat-value-lg', `${data.dirtyDiapers.min}-${data.dirtyDiapers.max} ${data.dirtyDiapers.noteDa}`));
  statsTable.appendChild(dirtyRow);

  // Feedings
  const feedRow = createElement('div', 'summary-stat-row');
  feedRow.appendChild(createElement('span', 'stat-icon-lg', '🍼'));
  feedRow.appendChild(createElement('span', 'stat-label', 'Måltider'));
  feedRow.appendChild(createElement('span', 'stat-value-lg', `${data.feedings.min}-${data.feedings.max} ${data.feedings.noteDa}`));
  statsTable.appendChild(feedRow);

  // Sleep
  const sleepRow = createElement('div', 'summary-stat-row');
  sleepRow.appendChild(createElement('span', 'stat-icon-lg', '😴'));
  sleepRow.appendChild(createElement('span', 'stat-label', 'Søvn'));
  sleepRow.appendChild(createElement('span', 'stat-value-lg', `${data.sleepHours.min}-${data.sleepHours.max} timer/døgn`));
  statsTable.appendChild(sleepRow);

  summaryCard.appendChild(statsTable);

  // Poop info
  const poopSection = createElement('div', 'poop-section-summary');
  poopSection.appendChild(createElement('h4', null, feedingType === 'formula' ? 'Afføring (erstatning)' : 'Afføring (ammet)'));
  poopSection.appendChild(createElement('p', null, `Farve: ${poopData.colorDa}`));
  poopSection.appendChild(createElement('p', null, `Frekvens: ${poopData.frequencyDa}`));
  summaryCard.appendChild(poopSection);

  container.appendChild(summaryCard);
}

function renderWeekHighlights(container, data) {
  if (!data.highlightsDa || data.highlightsDa.length === 0) return;

  const highlightsBox = createElement('div', 'highlights-box');
  highlightsBox.appendChild(createElement('h4', null, '📌 Højdepunkter'));

  const list = createElement('ul', 'highlights-list');
  data.highlightsDa.forEach(h => {
    list.appendChild(createElement('li', null, h));
  });
  highlightsBox.appendChild(list);

  // Health checkup indicator
  if (data.healthCheckup) {
    highlightsBox.appendChild(createElement('p', 'health-indicator', '🏥 Børneundersøgelse'));
  }

  // Vaccination indicator
  if (data.vaccination) {
    highlightsBox.appendChild(createElement('p', 'vaccine-indicator', '💉 Vaccination'));
  }

  container.appendChild(highlightsBox);
}

function renderMonthSummary(container, data, weekNumber) {
  const feedingType = state.baby?.feedingType || 'breastfed';

  const summaryCard = createElement('div', 'week-summary-card month-summary');

  summaryCard.appendChild(createElement('h3', null, `Baseret på ${data.ageLabel} forventninger:`));

  // Stats table
  const statsTable = createElement('div', 'stats-table');

  // Wet diapers
  const wetRow = createElement('div', 'summary-stat-row');
  wetRow.appendChild(createElement('span', 'stat-icon-lg', '💧'));
  wetRow.appendChild(createElement('span', 'stat-label', 'Våde bleer'));
  wetRow.appendChild(createElement('span', 'stat-value-lg', `${data.wetDiapers.min}-${data.wetDiapers.max} ${data.wetDiapers.noteDa}`));
  statsTable.appendChild(wetRow);

  // Dirty diapers
  const dirtyRow = createElement('div', 'summary-stat-row');
  dirtyRow.appendChild(createElement('span', 'stat-icon-lg', '💩'));
  dirtyRow.appendChild(createElement('span', 'stat-label', 'Afføring'));
  dirtyRow.appendChild(createElement('span', 'stat-value-lg', `${data.dirtyDiapers.min}-${data.dirtyDiapers.max} ${data.dirtyDiapers.noteDa}`));
  statsTable.appendChild(dirtyRow);

  // Feedings
  const feedRow = createElement('div', 'summary-stat-row');
  feedRow.appendChild(createElement('span', 'stat-icon-lg', '🍼'));
  feedRow.appendChild(createElement('span', 'stat-label', 'Måltider'));
  feedRow.appendChild(createElement('span', 'stat-value-lg', `${data.feedings.min}-${data.feedings.max} ${data.feedings.noteDa}`));
  statsTable.appendChild(feedRow);

  // Sleep
  const sleepRow = createElement('div', 'summary-stat-row');
  sleepRow.appendChild(createElement('span', 'stat-icon-lg', '😴'));
  sleepRow.appendChild(createElement('span', 'stat-label', 'Søvn'));
  sleepRow.appendChild(createElement('span', 'stat-value-lg', `${data.sleepHours.min}-${data.sleepHours.max} timer/døgn`));
  statsTable.appendChild(sleepRow);

  summaryCard.appendChild(statsTable);
  container.appendChild(summaryCard);
}

function renderMonthHighlights(container, data) {
  if (!data.highlightsDa || data.highlightsDa.length === 0) return;

  const highlightsBox = createElement('div', 'highlights-box');
  highlightsBox.appendChild(createElement('h4', null, '📌 Højdepunkter'));

  const list = createElement('ul', 'highlights-list');
  data.highlightsDa.forEach(h => {
    list.appendChild(createElement('li', null, h));
  });
  highlightsBox.appendChild(list);

  // Important feeding indicator
  if (data.importantFeeding) {
    highlightsBox.appendChild(createElement('p', 'important-indicator', '⚠️ Vigtig ernæringsmilepæl'));
  }

  // Health checkup indicator
  if (data.healthCheckup) {
    highlightsBox.appendChild(createElement('p', 'health-indicator', '🏥 Børneundersøgelse'));
  }

  // Vaccination indicator
  if (data.vaccination) {
    highlightsBox.appendChild(createElement('p', 'vaccine-indicator', '💉 Vaccination'));
  }

  container.appendChild(highlightsBox);
}

function renderBeyondData(container, notesContainer, weekNumber, monthNumber) {
  // Get baseline data from month 12
  const baselineMonth = WEEKLY_EXPECTATIONS.months.find(m => m.month === 12) || WEEKLY_EXPECTATIONS.months[WEEKLY_EXPECTATIONS.months.length - 1];

  const summaryCard = createElement('div', 'week-summary-card beyond-summary');

  summaryCard.appendChild(createElement('h3', null, 'Generelle forventninger:'));

  // Stats table with general guidance
  const statsTable = createElement('div', 'stats-table');

  const wetRow = createElement('div', 'summary-stat-row');
  wetRow.appendChild(createElement('span', 'stat-icon-lg', '💧'));
  wetRow.appendChild(createElement('span', 'stat-label', 'Våde bleer'));
  wetRow.appendChild(createElement('span', 'stat-value-lg', '4-6 per dag'));
  statsTable.appendChild(wetRow);

  const dirtyRow = createElement('div', 'summary-stat-row');
  dirtyRow.appendChild(createElement('span', 'stat-icon-lg', '💩'));
  dirtyRow.appendChild(createElement('span', 'stat-label', 'Afføring'));
  dirtyRow.appendChild(createElement('span', 'stat-value-lg', '1-2 per dag'));
  statsTable.appendChild(dirtyRow);

  const feedRow = createElement('div', 'summary-stat-row');
  feedRow.appendChild(createElement('span', 'stat-icon-lg', '🍼'));
  feedRow.appendChild(createElement('span', 'stat-label', 'Måltider'));
  feedRow.appendChild(createElement('span', 'stat-value-lg', '3 måltider + snacks'));
  statsTable.appendChild(feedRow);

  const sleepRow = createElement('div', 'summary-stat-row');
  sleepRow.appendChild(createElement('span', 'stat-icon-lg', '😴'));
  sleepRow.appendChild(createElement('span', 'stat-label', 'Søvn'));
  sleepRow.appendChild(createElement('span', 'stat-value-lg', '11-14 timer/døgn'));
  statsTable.appendChild(sleepRow);

  summaryCard.appendChild(statsTable);
  container.appendChild(summaryCard);

  // Show relevant milestones for this age
  const milestonesBox = createElement('div', 'milestones-box');
  milestonesBox.appendChild(createElement('h4', null, '📋 Milepæle i denne periode'));

  const allMilestones = [
    ...MILESTONES.motor.map(m => ({ ...m, category: 'Motorik' })),
    ...MILESTONES.speech.map(m => ({ ...m, category: 'Sprog' })),
    ...MILESTONES.social.map(m => ({ ...m, category: 'Social' }))
  ];

  const relevantMilestones = allMilestones
    .filter(m => weekNumber >= m.ageWeeksMin && weekNumber <= m.ageWeeksMax + 4)
    .slice(0, 5);

  if (relevantMilestones.length > 0) {
    const list = createElement('ul', 'milestone-list-simple');
    relevantMilestones.forEach(m => {
      const li = createElement('li');
      li.appendChild(createElement('strong', null, m.titleDa));
      li.appendChild(document.createTextNode(` (${weeksToLabel(m.ageWeeksMin)}-${weeksToLabel(m.ageWeeksMax)})`));
      list.appendChild(li);
    });
    milestonesBox.appendChild(list);
  } else {
    milestonesBox.appendChild(createElement('p', null, 'Ingen specifikke milepæle for denne periode.'));
  }

  milestonesBox.appendChild(createElement('p', 'info-note', 'ℹ️ Detaljeret data ikke tilgængelig for denne alder. Se milepæle-fanen for udviklingstrin.'));

  notesContainer.appendChild(milestonesBox);
}

function navigateWeek(direction) {
  const currentWeek = getCurrentWeekNumber(state.baby.birthDate);
  const currentViewed = state.viewedWeek !== null ? state.viewedWeek : currentWeek;

  const newWeek = currentViewed + direction;

  // Don't go below 0 or too far into future (limit to ~3 years = 156 weeks)
  if (newWeek < 0 || newWeek > 156) return;

  state.viewedWeek = newWeek;
  renderWeekView();
}

function goToCurrentWeek() {
  state.viewedWeek = null;
  renderWeekView();
}

// ============================================
// Event Handlers
// ============================================

function toggleMilestone(id) {
  if (state.achievements[id]) {
    delete state.achievements[id];
  } else {
    state.achievements[id] = new Date().toISOString();
  }
  saveState();
  renderTimeline();
  renderDashboard();
  renderProgress();
}

function markAllCurrentMilestones() {
  if (!state.baby) return;

  const ageWeeks = getAgeInWeeks(state.baby.birthDate);
  const allMilestones = [
    ...MILESTONES.motor,
    ...MILESTONES.speech,
    ...MILESTONES.social
  ];

  const currentMilestones = allMilestones
    .filter(m => ageWeeks >= m.ageWeeksMin && ageWeeks <= m.ageWeeksMax)
    .filter(m => !state.achievements[m.id]);

  if (currentMilestones.length === 0) return;

  // Mark all current milestones as achieved
  currentMilestones.forEach(m => {
    state.achievements[m.id] = new Date().toISOString();
  });

  saveState();
  renderTimeline();
  renderDashboard();
  renderProgress();

  // Show brief feedback
  const btn = document.getElementById('quick-mark-all');
  if (btn) {
    btn.classList.add('btn-success-flash');
    setTimeout(() => btn.classList.remove('btn-success-flash'), 500);
  }
}

function handleSetupSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('baby-name').value.trim();
  const birthDate = document.getElementById('birth-date').value;
  const feedingType = document.getElementById('feeding-type').value;

  if (!name || !birthDate) return;

  state.baby = { name, birthDate, feedingType };
  saveState();

  document.getElementById('setup-modal').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');

  renderAll();
}

function handleSettingsSubmit(e) {
  e.preventDefault();

  state.baby.name = document.getElementById('edit-name').value.trim();
  state.baby.birthDate = document.getElementById('edit-birth-date').value;
  state.baby.feedingType = document.getElementById('edit-feeding-type').value;
  state.simpleView = document.getElementById('edit-simple-view').checked;

  saveState();
  document.getElementById('settings-modal').classList.add('hidden');
  renderAll();
}

function handleResetData() {
  if (confirm('Er du sikker på at du vil slette alle data? Dette kan ikke fortrydes.')) {
    resetState();
    location.reload();
  }
}

function handleTabClick(e) {
  const tab = e.target.closest('.tab, .tab-dropdown-item');
  if (!tab) return;

  // Close dropdown if open
  const dropdown = document.getElementById('tabs-dropdown');
  if (dropdown) dropdown.classList.add('hidden');

  document.querySelectorAll('.tab, .tab-dropdown-item').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');

  state.currentCategory = tab.dataset.category;

  // Handle week view visibility
  const weekViewSection = document.getElementById('week-view-section');
  const timelineSection = document.querySelector('.timeline-section');
  const guidesSection = document.getElementById('guides-section');

  if (state.currentCategory === 'week') {
    weekViewSection.classList.remove('hidden');
    timelineSection.classList.add('hidden');
    guidesSection.classList.add('hidden');
    state.viewedWeek = null; // Reset to current week when entering week view
    renderWeekView();
  } else {
    weekViewSection.classList.add('hidden');
    timelineSection.classList.remove('hidden');
    renderTimeline();
  }
}

function handleMoreTabsClick(e) {
  e.stopPropagation();
  const dropdown = document.getElementById('tabs-dropdown');
  const btn = document.getElementById('more-tabs-btn');
  const isHidden = dropdown.classList.contains('hidden');

  dropdown.classList.toggle('hidden');
  btn.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
}

function handleGuideGroupToggle(e) {
  const header = e.target.closest('.guide-group-header');
  if (!header) return;

  const group = header.dataset.group;
  const content = document.getElementById(`guide-group-${group}`);
  const isExpanded = header.getAttribute('aria-expanded') === 'true';

  header.setAttribute('aria-expanded', !isExpanded);
  content.classList.toggle('collapsed');
}

function handleWeekViewToggle(mode) {
  state.weekViewMode = mode;

  // Update button states
  document.getElementById('week-view-detailed').classList.toggle('active', mode === 'detailed');
  document.getElementById('week-view-simple').classList.toggle('active', mode === 'simple');

  renderWeekView();
}

function renderRelevantGuides() {
  const container = document.getElementById('relevant-guides');
  if (!container || !state.baby) return;

  clearElement(container);

  const ageWeeks = getAgeInWeeks(state.baby.birthDate);
  const ageMonths = getAgeInMonths(state.baby.birthDate);
  const relevantGuides = [];

  // Determine which guides are relevant based on age
  if (ageWeeks <= 4) {
    relevantGuides.push({ id: 'jaundice', title: 'Gulsot', icon: '🟡' });
    relevantGuides.push({ id: 'umbilical', title: 'Navlepleje', icon: '🩹' });
    relevantGuides.push({ id: 'sids', title: 'Sikker søvn', icon: '😴' });
  }

  if (ageWeeks <= 16) {
    relevantGuides.push({ id: 'colic', title: 'Kolik', icon: '👶' });
  }

  if (ageMonths >= 4 && ageMonths <= 12) {
    relevantGuides.push({ id: 'allergy', title: 'Allergi', icon: '🥚' });
    relevantGuides.push({ id: 'sun', title: 'Solbeskyttelse', icon: '☀️' });
  }

  // Always show fever guide for babies under 1 year
  if (ageMonths < 12) {
    relevantGuides.unshift({ id: 'fever', title: 'Feber', icon: '🌡️' });
  }

  if (relevantGuides.length === 0) {
    container.parentElement.classList.add('hidden');
    return;
  }

  container.parentElement.classList.remove('hidden');

  relevantGuides.slice(0, 4).forEach(guide => {
    const chip = createElement('button', 'relevant-guide-chip');
    chip.appendChild(createElement('span', 'chip-icon', guide.icon));
    chip.appendChild(createElement('span', 'chip-text', guide.title));
    chip.addEventListener('click', () => {
      const guideCard = document.getElementById(`${guide.id}-guide`);
      if (guideCard) {
        // Expand parent group if collapsed
        const parentGroup = guideCard.closest('.guide-group-content');
        if (parentGroup && parentGroup.classList.contains('collapsed')) {
          const header = parentGroup.previousElementSibling;
          if (header) {
            header.setAttribute('aria-expanded', 'true');
            parentGroup.classList.remove('collapsed');
          }
        }
        guideCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        guideCard.classList.add('guide-highlight');
        setTimeout(() => guideCard.classList.remove('guide-highlight'), 2000);
      }
    });
    container.appendChild(chip);
  });

  // Auto-expand newborn group if baby is newborn
  if (ageWeeks <= 4) {
    const newbornHeader = document.querySelector('[data-group="newborn"]');
    const newbornContent = document.getElementById('guide-group-newborn');
    if (newbornHeader && newbornContent) {
      newbornHeader.setAttribute('aria-expanded', 'true');
      newbornContent.classList.remove('collapsed');
    }
  }
}

function openSettings() {
  if (!state.baby) return;

  document.getElementById('edit-name').value = state.baby.name;
  document.getElementById('edit-birth-date').value = state.baby.birthDate;
  document.getElementById('edit-feeding-type').value = state.baby.feedingType;
  document.getElementById('edit-simple-view').checked = state.simpleView;

  document.getElementById('settings-modal').classList.remove('hidden');
}

function closeSettings() {
  document.getElementById('settings-modal').classList.add('hidden');
}

// ============================================
// Initialization
// ============================================

function renderAll() {
  renderHeader();
  renderReminders();
  renderQuickView();
  renderDashboard();
  renderTimeline();
  renderProgress();
}

function init() {
  // Load saved state
  const hasData = loadState();

  if (hasData && state.baby) {
    // Show app
    document.getElementById('setup-modal').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    renderAll();
  } else {
    // Show setup
    document.getElementById('setup-modal').classList.remove('hidden');
    document.getElementById('app').classList.add('hidden');

    // Set default date to recent past
    const today = new Date();
    document.getElementById('birth-date').max = today.toISOString().split('T')[0];
  }

  // Event listeners
  document.getElementById('setup-form').addEventListener('submit', handleSetupSubmit);
  document.getElementById('settings-form').addEventListener('submit', handleSettingsSubmit);
  document.getElementById('settings-btn').addEventListener('click', openSettings);
  document.getElementById('close-settings').addEventListener('click', closeSettings);
  document.getElementById('reset-data').addEventListener('click', handleResetData);

  // Tab navigation
  document.querySelector('.tabs-main').addEventListener('click', handleTabClick);
  document.getElementById('more-tabs-btn').addEventListener('click', handleMoreTabsClick);
  document.getElementById('tabs-dropdown').addEventListener('click', handleTabClick);

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('tabs-dropdown');
    const moreBtn = document.getElementById('more-tabs-btn');
    if (!dropdown.contains(e.target) && !moreBtn.contains(e.target)) {
      dropdown.classList.add('hidden');
      moreBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Guide group toggles
  document.querySelectorAll('.guide-group-header').forEach(header => {
    header.addEventListener('click', handleGuideGroupToggle);
  });

  // Week view navigation
  document.getElementById('week-prev').addEventListener('click', () => navigateWeek(-1));
  document.getElementById('week-next').addEventListener('click', () => navigateWeek(1));
  document.getElementById('current-week-badge').addEventListener('click', goToCurrentWeek);
  document.getElementById('week-today').addEventListener('click', goToCurrentWeek);

  // Week view toggle
  document.getElementById('week-view-detailed').addEventListener('click', () => handleWeekViewToggle('detailed'));
  document.getElementById('week-view-simple').addEventListener('click', () => handleWeekViewToggle('simple'));

  // Quick actions
  document.getElementById('quick-mark-all').addEventListener('click', (e) => {
    e.stopPropagation();
    if (confirm('Markér alle aktuelle milepæle som opnået?')) {
      markAllCurrentMilestones();
    }
  });

  // Close modals on outside click
  document.getElementById('settings-modal').addEventListener('click', (e) => {
    if (e.target.id === 'settings-modal') closeSettings();
  });
}

// Start app when DOM is ready
document.addEventListener('DOMContentLoaded', init);
