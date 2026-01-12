# Health Checkups (Børneundersøgelser)

## Source Information

| Source | URL | Authority |
|--------|-----|-----------|
| sundhed.dk - Børneundersøgelser | https://www.sundhed.dk/borger/patienthaandbogen/boern/undersoegelser/boerneundersoegelser/ | Official - Danish Ministry of Health |
| Borger.dk - Børnehelbredsundersøgelser | https://www.borger.dk/sundhed-og-sygdom/barn_oversigtsside/Boernehelbredsundersoegelser | Official - Danish Government |
| Fagligt selskab for sundhedsplejersker | https://www.sundhedsplejersken.nu/ | Professional Organization |

---

## Overview

> **Danish:** "Alle danske børn i alderen 0 til 5 år skal, i henhold til sundhedsloven, have tilbudt syv forebyggende helbredsundersøgelser hos deres praktiserende læge."
>
> **English:** "All Danish children aged 0 to 5 years shall, according to the health law, be offered seven preventive health examinations at their general practitioner."

The examinations are offered at:
- 5 weeks
- 5 months
- 12 months
- 2 years
- 3 years
- 4 years
- 5 years

---

## Examination Schedule

### 5 Weeks (5 uger)

> **Danish:** "5 ugers undersøgelsen er den første af de forebyggende børneundersøgelser, og den har derfor stor betydning i forhold til at opdage eventuelle medfødte, uopdagede sygdomme."
>
> **English:** "The 5-week examination is the first of the preventive child examinations, and therefore has great importance in discovering any congenital, undiscovered diseases."

| Focus Area | Danish | Details |
|------------|--------|---------|
| Physical exam | Grundig undersøgelse | Comprehensive examination |
| Weight & height | Vejer og måler | Growth tracking |
| Development | Alderssvarende udviklet | Age-appropriate development |
| Reflexes | Reflekser | Basic reflexes |
| Discussion topics | Samtaleemner | Birth, sleep, feeding |

**Common discussion topics:**
- The birth (fødslen)
- Baby's sleep patterns (søvn)
- Feeding/nutrition (ernæring)

### 5 Months (5 måneder)

> **Danish:** "Lægens undersøgelse vil være mindre omfattende end den første undersøgelse og koncentrerer sig om trivsel (vægt og højde), udvikling (milepæle) og eventuelle nye sygdomme."
>
> **English:** "The doctor's examination will be less comprehensive than the first examination and concentrates on well-being (weight and height), development (milestones), and any new diseases."

| Focus Area | Danish | Details |
|------------|--------|---------|
| Growth | Trivsel (vægt og højde) | Weight and height |
| Milestones | Udvikling (milepæle) | Motor, cognitive |
| New concerns | Eventuelle nye sygdomme | Any new issues |

**Common discussion topics:**
- Nutrition (ernæring)
- Transition to other foods than milk (overgang til anden ernæring end mælk)
- Teeth and teething (tænder og tandfrembrud)
- Handling fever (hvordan man håndterer feber)
- When to contact the doctor (kontakt til lægevagten)

### 12 Months (12 måneder / 1 år)

| Focus Area | Danish | Details |
|------------|--------|---------|
| Mobility | Mobilitet | Crawling, standing, walking |
| Independence | Selvstændighed | Self-feeding attempts |
| Nutrition transition | Ernæringsovergang | From bottle to cup/food |
| Infection management | Infektionssygdomme | Common illness handling |

### 2 Years (2 år)

| Focus Area | Danish | Details |
|------------|--------|---------|
| Language development | Sprogudvikling | Words, understanding |
| Motor development | Motorisk udvikling | Walking, climbing |
| Behavior | Adfærd | Social development |
| Guidance | Vejledning | Parenting guidance |

### 3 Years (3 år)

| Focus Area | Danish | Details |
|------------|--------|---------|
| Vision screening | Synsscreening | **Added at this age** |
| Independence | Selvstændighed | Daily activities |
| Nutrition | Ernæring | Eating habits |
| Language | Sprog | Sentence formation |

### 4 Years (4 år)

| Focus Area | Danish | Details |
|------------|--------|---------|
| Hearing test | Høretest | **Added at this age** |
| Vision test | Synstest | Continued |
| Physical activity | Fysisk aktivitet | Movement, play |
| Social skills | Sociale færdigheder | Interaction with others |
| Weight management | Vægthåndtering | Healthy weight |

### 5 Years (5 år)

| Focus Area | Danish | Details |
|------------|--------|---------|
| School readiness | Skoleparathed | Preparation for school |
| Comprehensive review | Samlet gennemgang | All development areas |
| Hearing/vision | Hørelse/syn | Final pre-school screening |
| Growth | Vækst | Final growth assessment |

---

## Standard Components at Each Visit

> **Danish:** "Ved børneundersøgelserne måles og vejes barnet for at følge barnets vækstkurve."
>
> **English:** "At the child examinations, the child is measured and weighed to follow the child's growth curve."

| Component | Description |
|-----------|-------------|
| Height measurement | Track growth curve |
| Weight measurement | Track growth curve |
| Milestone assessment | Age-appropriate development |
| Discussion of concerns | Any parental concerns |
| Counseling | Known diseases, issues |

---

## Sundhedsplejerske (Health Visitor)

> **Danish:** "Når du har fået et barn, tager sundhedsplejersken kontakt til dig for at arrangere et besøg."
>
> **English:** "When you have had a child, the health visitor will contact you to arrange a visit."

The sundhedsplejerske provides guidance on:
- Breastfeeding (amning)
- Nutrition (kost)
- Food culture (spisekultur)
- Baby care (barnets pleje)
- Development (udvikling)
- Daily routines (dagligdagen)
- Parental roles (forældreroller)
- Responsibilities (ansvar)

> **Danish:** "Lægerne samarbejder med sundhedsplejerskerne og sagsbehandlere i socialforvaltningen i deres område i forbindelse med konkrete problemstillinger vedrørende det enkelte barn."
>
> **English:** "The doctors collaborate with health visitors and caseworkers in the social administration in their area in connection with specific issues regarding the individual child."

---

## Booking Appointments

> **Danish:** "Du skal selv henvende dig til dit barns læge for at bestille tid til undersøgelserne."
>
> **English:** "You must contact your child's doctor yourself to book an appointment for the examinations."

**Important:** Parents are responsible for booking these appointments.

---

## Data for Implementation

```json
{
  "health_checkups": [
    {
      "age_weeks": 5,
      "age_label": "5 uger",
      "focus": ["comprehensive physical exam", "reflexes", "growth", "development"],
      "discussions": ["birth", "sleep", "feeding"],
      "vaccinations": false
    },
    {
      "age_months": 5,
      "age_label": "5 måneder",
      "focus": ["growth", "milestones", "new concerns"],
      "discussions": ["nutrition transition", "teething", "fever handling", "doctor contact"],
      "vaccinations": true,
      "vaccines": ["DiTeKiPol/Hib", "Pneumococcal"]
    },
    {
      "age_months": 12,
      "age_label": "12 måneder",
      "focus": ["mobility", "independence", "nutrition transition"],
      "discussions": ["infection management", "diet"],
      "vaccinations": true,
      "vaccines": ["DiTeKiPol/Hib", "Pneumococcal"]
    },
    {
      "age_years": 2,
      "age_label": "2 år",
      "focus": ["language", "motor development", "behavior"],
      "discussions": ["parenting guidance"],
      "vaccinations": false
    },
    {
      "age_years": 3,
      "age_label": "3 år",
      "focus": ["vision screening", "independence", "nutrition", "language"],
      "discussions": ["daily activities"],
      "vaccinations": false,
      "new_screenings": ["vision"]
    },
    {
      "age_years": 4,
      "age_label": "4 år",
      "focus": ["hearing", "vision", "physical activity", "social skills", "weight"],
      "discussions": ["school preparation"],
      "vaccinations": true,
      "vaccines": ["MFR (2nd dose)"],
      "new_screenings": ["hearing"]
    },
    {
      "age_years": 5,
      "age_label": "5 år",
      "focus": ["school readiness", "comprehensive review", "hearing", "vision", "growth"],
      "discussions": ["school transition"],
      "vaccinations": true,
      "vaccines": ["DiTeKiPol (booster)"]
    }
  ]
}
```

---

## Timeline Visual

```
Birth
  │
  ├── 5 weeks ────── First comprehensive exam
  │
  ├── 5 months ───── Growth + milestones + DiTeKiPol + Pneumo
  │
  ├── 12 months ──── Mobility + DiTeKiPol + Pneumo
  │
  ├── 2 years ────── Language + motor
  │
  ├── 3 years ────── + Vision screening
  │
  ├── 4 years ────── + Hearing test + MFR
  │
  └── 5 years ────── School readiness + DiTeKiPol booster
```

---

## Verification Checklist

- [ ] All 7 examinations are listed with correct ages
- [ ] Focus areas for each age are accurate
- [ ] Screening additions (vision at 3, hearing at 4) are correct
- [ ] Sundhedsplejerske role is accurately described
- [ ] Booking responsibility is clear
