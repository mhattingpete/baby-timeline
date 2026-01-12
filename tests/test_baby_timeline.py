"""
Automated tests for Baby Timeline website.

Run with: uv run pytest tests/ -v
"""

import re
from datetime import date, timedelta

import pytest
from playwright.sync_api import Page, expect


# Test configuration
BASE_URL = "http://localhost:8080"


@pytest.fixture(autouse=True)
def clear_storage(page: Page):
    """Clear localStorage before each test."""
    page.goto(BASE_URL)
    page.evaluate("localStorage.clear()")
    page.reload()


class TestSetupModal:
    """Tests for the initial setup modal."""

    def test_setup_modal_visible_on_first_visit(self, page: Page):
        """Setup modal should be visible when no data exists."""
        page.goto(BASE_URL)

        setup_modal = page.locator("#setup-modal")
        expect(setup_modal).to_be_visible()

        # App should be hidden
        app = page.locator("#app")
        expect(app).to_have_class(re.compile(r"hidden"))

    def test_setup_modal_has_required_fields(self, page: Page):
        """Setup modal should have name, birthdate, and feeding type fields."""
        page.goto(BASE_URL)

        expect(page.locator("#baby-name")).to_be_visible()
        expect(page.locator("#birth-date")).to_be_visible()
        expect(page.locator("#feeding-type")).to_be_visible()

    def test_setup_form_submission(self, page: Page):
        """Submitting setup form should show the main app."""
        page.goto(BASE_URL)

        # Fill out the form
        page.fill("#baby-name", "Test Baby")

        # Set birthdate to 3 months ago
        three_months_ago = (date.today() - timedelta(days=90)).isoformat()
        page.fill("#birth-date", three_months_ago)

        page.select_option("#feeding-type", "breastfed")

        # Submit form
        page.click("button[type='submit']")

        # Setup modal should be hidden
        expect(page.locator("#setup-modal")).to_have_class(re.compile(r"hidden"))

        # App should be visible
        expect(page.locator("#app")).not_to_have_class(re.compile(r"hidden"))

    def test_baby_name_required(self, page: Page):
        """Form should not submit without a name."""
        page.goto(BASE_URL)

        # Only fill birthdate
        page.fill("#birth-date", date.today().isoformat())

        # Try to submit
        page.click("button[type='submit']")

        # Modal should still be visible (form didn't submit)
        expect(page.locator("#setup-modal")).to_be_visible()


class TestHeader:
    """Tests for the header section."""

    @pytest.fixture(autouse=True)
    def setup_baby(self, page: Page):
        """Set up a baby before each test in this class."""
        page.goto(BASE_URL)

        page.fill("#baby-name", "Emma")
        three_months_ago = (date.today() - timedelta(days=90)).isoformat()
        page.fill("#birth-date", three_months_ago)
        page.click("button[type='submit']")

    def test_header_shows_baby_name(self, page: Page):
        """Header should display the baby's name."""
        header_name = page.locator("#header-name")
        expect(header_name).to_have_text("Emma")

    def test_header_shows_age(self, page: Page):
        """Header should display the baby's age."""
        header_age = page.locator("#header-age")
        # Should show something like "3 måneder" or "12 uger"
        expect(header_age).to_contain_text(re.compile(r"(måneder?|uger)"))

    def test_settings_button_opens_modal(self, page: Page):
        """Clicking settings button should open settings modal."""
        page.click("#settings-btn")

        settings_modal = page.locator("#settings-modal")
        expect(settings_modal).not_to_have_class(re.compile(r"hidden"))


class TestDashboard:
    """Tests for the dashboard section."""

    @pytest.fixture(autouse=True)
    def setup_baby(self, page: Page):
        """Set up a baby before each test."""
        page.goto(BASE_URL)

        page.fill("#baby-name", "Oliver")
        # 5 months old
        five_months_ago = (date.today() - timedelta(days=150)).isoformat()
        page.fill("#birth-date", five_months_ago)
        page.click("button[type='submit']")

    def test_dashboard_has_all_cards(self, page: Page):
        """Dashboard should have all four info cards."""
        expect(page.locator(".card-current")).to_be_visible()
        expect(page.locator(".card-sleep")).to_be_visible()
        expect(page.locator(".card-health")).to_be_visible()
        expect(page.locator(".card-feeding")).to_be_visible()

    def test_sleep_recommendation_displayed(self, page: Page):
        """Sleep card should show hours recommendation."""
        sleep_info = page.locator("#sleep-info")
        # Should show something like "12-15 timer/døgn"
        expect(sleep_info).to_contain_text("timer/døgn")

    def test_next_health_appointment_shown(self, page: Page):
        """Health card should show next appointment."""
        health_info = page.locator("#next-health")
        # Should show a health checkup
        expect(health_info).to_contain_text(re.compile(r"(måneder|år|uger)"))


class TestTabs:
    """Tests for the category tabs."""

    @pytest.fixture(autouse=True)
    def setup_baby(self, page: Page):
        """Set up a baby before each test."""
        page.goto(BASE_URL)

        page.fill("#baby-name", "Sofie")
        page.fill("#birth-date", (date.today() - timedelta(days=60)).isoformat())
        page.click("button[type='submit']")

    def test_all_tabs_visible(self, page: Page):
        """All category tabs should be visible."""
        tabs = ["Alle", "Motorik", "Sprog", "Social", "Sundhed", "Guides"]
        for tab_text in tabs:
            expect(page.locator(f".tab:has-text('{tab_text}')")).to_be_visible()

    def test_tab_switching(self, page: Page):
        """Clicking a tab should switch the active state."""
        motor_tab = page.locator(".tab[data-category='motor']")
        motor_tab.click()

        expect(motor_tab).to_have_class(re.compile(r"active"))

        # "Alle" tab should no longer be active
        all_tab = page.locator(".tab[data-category='all']")
        expect(all_tab).not_to_have_class(re.compile(r"active"))

    def test_guides_tab_shows_guides_section(self, page: Page):
        """Clicking Guides tab should show the guides section."""
        page.click(".tab[data-category='guides']")

        guides_section = page.locator("#guides-section")
        expect(guides_section).not_to_have_class(re.compile(r"hidden"))


class TestMilestones:
    """Tests for milestone display and tracking."""

    @pytest.fixture(autouse=True)
    def setup_baby(self, page: Page):
        """Set up a 6 month old baby."""
        page.goto(BASE_URL)

        page.fill("#baby-name", "Noah")
        six_months_ago = (date.today() - timedelta(days=180)).isoformat()
        page.fill("#birth-date", six_months_ago)
        page.click("button[type='submit']")

    def test_milestones_are_displayed(self, page: Page):
        """Timeline should display milestone cards."""
        milestone_cards = page.locator(".milestone-card")
        expect(milestone_cards.first).to_be_visible()

    def test_milestone_has_required_elements(self, page: Page):
        """Each milestone card should have title, description, and age range."""
        first_card = page.locator(".milestone-card").first

        expect(first_card.locator(".milestone-title")).to_be_visible()
        expect(first_card.locator(".milestone-desc")).to_be_visible()
        expect(first_card.locator(".milestone-age")).to_be_visible()

    def test_clicking_milestone_marks_as_achieved(self, page: Page):
        """Clicking a milestone should toggle its achieved state."""
        # Find a milestone that's not achieved
        first_card = page.locator(".milestone-card:not(.milestone-achieved)").first
        milestone_id = first_card.get_attribute("data-id")

        # Click to mark as achieved
        first_card.click()

        # Check that it now has the achieved class
        updated_card = page.locator(f".milestone-card[data-id='{milestone_id}']")
        expect(updated_card).to_have_class(re.compile(r"milestone-achieved"))

    def test_achieved_milestone_persists_after_reload(self, page: Page):
        """Achieved milestones should persist in localStorage."""
        # Find and click a milestone
        first_card = page.locator(".milestone-card:not(.milestone-achieved)").first
        milestone_id = first_card.get_attribute("data-id")
        first_card.click()

        # Reload the page
        page.reload()

        # Check that it's still achieved
        updated_card = page.locator(f".milestone-card[data-id='{milestone_id}']")
        expect(updated_card).to_have_class(re.compile(r"milestone-achieved"))


class TestProgress:
    """Tests for the progress section."""

    @pytest.fixture(autouse=True)
    def setup_baby(self, page: Page):
        """Set up a baby."""
        page.goto(BASE_URL)

        page.fill("#baby-name", "Ida")
        page.fill("#birth-date", (date.today() - timedelta(days=120)).isoformat())
        page.click("button[type='submit']")

    def test_progress_bars_visible(self, page: Page):
        """Progress bars should be visible for each category."""
        progress_items = page.locator(".progress-item")
        expect(progress_items).to_have_count(3)  # Motor, Speech, Social

    def test_progress_labels_correct(self, page: Page):
        """Progress bars should have correct labels."""
        expect(page.locator(".progress-label:has-text('Motorik')")).to_be_visible()
        expect(page.locator(".progress-label:has-text('Sprog')")).to_be_visible()
        expect(page.locator(".progress-label:has-text('Social')")).to_be_visible()


class TestGuides:
    """Tests for the guides section."""

    @pytest.fixture(autouse=True)
    def setup_and_navigate(self, page: Page):
        """Set up baby and navigate to guides."""
        page.goto(BASE_URL)

        page.fill("#baby-name", "Freja")
        page.fill("#birth-date", (date.today() - timedelta(days=60)).isoformat())
        page.select_option("#feeding-type", "breastfed")
        page.click("button[type='submit']")

        # Navigate to guides tab
        page.click(".tab[data-category='guides']")

    def test_poop_guide_visible(self, page: Page):
        """Poop guide should be visible."""
        expect(page.locator("#poop-guide")).to_be_visible()

    def test_outdoor_sleep_guide_visible(self, page: Page):
        """Outdoor sleep guide should be visible."""
        expect(page.locator("#outdoor-sleep-guide")).to_be_visible()

    def test_growth_guide_visible(self, page: Page):
        """Growth charts guide should be visible."""
        expect(page.locator("#growth-guide")).to_be_visible()

    def test_poop_guide_shows_breastfed_info(self, page: Page):
        """Poop guide should show breastfed-specific info."""
        poop_content = page.locator("#poop-content")
        expect(poop_content).to_contain_text("Ammet")


class TestSettings:
    """Tests for the settings modal."""

    @pytest.fixture(autouse=True)
    def setup_baby(self, page: Page):
        """Set up a baby."""
        page.goto(BASE_URL)

        page.fill("#baby-name", "William")
        page.fill("#birth-date", (date.today() - timedelta(days=90)).isoformat())
        page.click("button[type='submit']")

    def test_settings_prefilled_with_current_data(self, page: Page):
        """Settings form should be prefilled with current baby data."""
        page.click("#settings-btn")

        expect(page.locator("#edit-name")).to_have_value("William")

    def test_settings_can_update_name(self, page: Page):
        """Updating name in settings should reflect in header."""
        page.click("#settings-btn")

        page.fill("#edit-name", "Liam")
        page.click("#settings-form button[type='submit']")

        expect(page.locator("#header-name")).to_have_text("Liam")

    def test_close_settings_button_works(self, page: Page):
        """Close button should hide settings modal."""
        page.click("#settings-btn")
        expect(page.locator("#settings-modal")).not_to_have_class(re.compile(r"hidden"))

        page.click("#close-settings")
        expect(page.locator("#settings-modal")).to_have_class(re.compile(r"hidden"))


class TestDVitaminReminder:
    """Tests for D-vitamin reminder."""

    def test_reminder_shown_for_young_baby(self, page: Page):
        """D-vitamin reminder should show for babies 2 weeks - 4 years."""
        page.goto(BASE_URL)

        page.fill("#baby-name", "Baby")
        # 3 months old (within D-vitamin age)
        page.fill("#birth-date", (date.today() - timedelta(days=90)).isoformat())
        page.click("button[type='submit']")

        reminder_banner = page.locator("#reminders-banner")
        expect(reminder_banner).not_to_have_class(re.compile(r"hidden"))

        expect(page.locator("#d-vitamin-reminder")).to_contain_text("D-vitamin")


class TestResponsiveness:
    """Tests for responsive design."""

    @pytest.fixture(autouse=True)
    def setup_baby(self, page: Page):
        """Set up a baby."""
        page.goto(BASE_URL)

        page.fill("#baby-name", "Test")
        page.fill("#birth-date", (date.today() - timedelta(days=60)).isoformat())
        page.click("button[type='submit']")

    def test_mobile_viewport(self, page: Page):
        """App should work on mobile viewport."""
        page.set_viewport_size({"width": 375, "height": 667})
        page.reload()

        # Key elements should still be visible
        expect(page.locator(".header")).to_be_visible()
        expect(page.locator(".tabs")).to_be_visible()
        expect(page.locator(".dashboard")).to_be_visible()

    def test_tablet_viewport(self, page: Page):
        """App should work on tablet viewport."""
        page.set_viewport_size({"width": 768, "height": 1024})
        page.reload()

        expect(page.locator(".header")).to_be_visible()
        expect(page.locator(".dashboard-cards")).to_be_visible()


class TestDataPersistence:
    """Tests for localStorage data persistence."""

    def test_data_persists_across_sessions(self, page: Page):
        """Baby data should persist after closing and reopening."""
        page.goto(BASE_URL)

        # Set up baby
        page.fill("#baby-name", "Persistent Baby")
        page.fill("#birth-date", (date.today() - timedelta(days=100)).isoformat())
        page.click("button[type='submit']")

        # Navigate away and back
        page.goto("about:blank")
        page.goto(BASE_URL)

        # Should not show setup modal
        expect(page.locator("#setup-modal")).to_have_class(re.compile(r"hidden"))

        # Should show the baby name
        expect(page.locator("#header-name")).to_have_text("Persistent Baby")


class TestHealthTimeline:
    """Tests for health timeline view."""

    @pytest.fixture(autouse=True)
    def setup_baby(self, page: Page):
        """Set up a baby and navigate to health tab."""
        page.goto(BASE_URL)

        page.fill("#baby-name", "Health Test")
        page.fill("#birth-date", (date.today() - timedelta(days=30)).isoformat())
        page.click("button[type='submit']")

        page.click(".tab[data-category='health']")

    def test_health_timeline_visible(self, page: Page):
        """Health timeline should be visible."""
        expect(page.locator(".health-timeline")).to_be_visible()

    def test_health_timeline_has_checkups(self, page: Page):
        """Health timeline should show børneundersøgelser."""
        timeline_items = page.locator(".health-timeline-item")
        # Should have multiple checkups
        expect(timeline_items.first).to_be_visible()

    def test_health_items_show_vaccines(self, page: Page):
        """Some health items should show vaccine information."""
        # At least one item should mention vaccines
        expect(page.locator(".health-vaccines-list").first).to_be_visible()


class TestWeekView:
    """Tests for the week-focused timeline view."""

    @pytest.fixture(autouse=True)
    def setup_baby(self, page: Page):
        """Set up a baby before each test."""
        page.goto(BASE_URL)

        page.fill("#baby-name", "Week Test")
        # 3 days old - should show Week 0 day-by-day view
        page.fill("#birth-date", (date.today() - timedelta(days=3)).isoformat())
        page.click("button[type='submit']")

    def test_week_tab_visible(self, page: Page):
        """Week tab should be visible in navigation."""
        week_tab = page.locator(".tab[data-category='week']")
        expect(week_tab).to_be_visible()
        expect(week_tab).to_have_text("Uge")

    def test_clicking_week_tab_shows_week_view(self, page: Page):
        """Clicking week tab should show the week view section."""
        page.click(".tab[data-category='week']")

        week_view = page.locator("#week-view-section")
        expect(week_view).not_to_have_class(re.compile(r"hidden"))

        # Timeline section should be hidden
        timeline = page.locator(".timeline-section")
        expect(timeline).to_have_class(re.compile(r"hidden"))

    def test_week_navigator_has_controls(self, page: Page):
        """Week view should have navigation controls."""
        page.click(".tab[data-category='week']")

        expect(page.locator("#week-prev")).to_be_visible()
        expect(page.locator("#week-next")).to_be_visible()
        expect(page.locator("#week-title")).to_be_visible()

    def test_week_0_shows_day_cards(self, page: Page):
        """Week 0 should show day-by-day cards."""
        page.click(".tab[data-category='week']")

        # Should show day cards
        day_cards = page.locator(".day-card")
        expect(day_cards).to_have_count(7)

    def test_day_card_shows_expected_info(self, page: Page):
        """Day cards should show wet diapers, dirty diapers, and feedings."""
        page.click(".tab[data-category='week']")

        first_day_card = page.locator(".day-card").first

        # Should have day number
        expect(first_day_card.locator(".day-number")).to_contain_text("Dag 1")

        # Should have stat rows with icons
        expect(first_day_card.locator(".stat-row")).to_have_count(3)

    def test_current_day_highlighted(self, page: Page):
        """Current day should be highlighted in week 0 view."""
        page.click(".tab[data-category='week']")

        # Baby is 3 days old, so day 4 should be current
        current_day = page.locator(".day-card.day-current")
        expect(current_day).to_be_visible()
        expect(current_day.locator(".day-badge")).to_have_text("★")

    def test_current_week_badge_shown(self, page: Page):
        """Current week badge should show when viewing current week."""
        page.click(".tab[data-category='week']")

        badge = page.locator("#current-week-badge")
        expect(badge).not_to_have_class(re.compile(r"hidden"))
        expect(badge).to_contain_text("Din baby er her")

    def test_navigate_to_next_week(self, page: Page):
        """Clicking next should navigate to next week."""
        page.click(".tab[data-category='week']")

        # Start at week 0
        expect(page.locator("#week-title")).to_have_text("Uge 0")

        # Click next
        page.click("#week-next")

        # Should now show week 1
        expect(page.locator("#week-title")).to_have_text("Uge 1")

    def test_navigate_back_stops_at_week_0(self, page: Page):
        """Navigation should not go below week 0."""
        page.click(".tab[data-category='week']")

        # At week 0, click previous multiple times
        page.click("#week-prev")
        page.click("#week-prev")

        # Should still show week 0
        expect(page.locator("#week-title")).to_have_text("Uge 0")

    def test_week_1_shows_summary_card(self, page: Page):
        """Weeks 1+ should show a summary card instead of day cards."""
        page.click(".tab[data-category='week']")

        # Navigate to week 1
        page.click("#week-next")

        # Should show summary card
        summary_card = page.locator(".week-summary-card")
        expect(summary_card).to_be_visible()

        # Should show "Denne uge kan du forvente" header
        expect(summary_card).to_contain_text("Denne uge kan du forvente")


class TestWeekViewOlderBaby:
    """Tests for week view with an older baby."""

    @pytest.fixture(autouse=True)
    def setup_older_baby(self, page: Page):
        """Set up a 6 week old baby."""
        page.goto(BASE_URL)

        page.fill("#baby-name", "Older Baby")
        page.fill("#birth-date", (date.today() - timedelta(days=42)).isoformat())
        page.click("button[type='submit']")

    def test_older_baby_sees_weekly_summary(self, page: Page):
        """6 week old baby should see weekly summary view."""
        page.click(".tab[data-category='week']")

        # Should show week 6
        expect(page.locator("#week-title")).to_have_text("Uge 6")

        # Should show summary card (not day cards)
        expect(page.locator(".week-summary-card")).to_be_visible()

    def test_weekly_summary_shows_stats(self, page: Page):
        """Weekly summary should show diaper and feeding stats."""
        page.click(".tab[data-category='week']")

        # Should have stat rows
        stat_rows = page.locator(".summary-stat-row")
        expect(stat_rows).to_have_count(4)  # wet, dirty, feedings, sleep

    def test_weekly_highlights_shown(self, page: Page):
        """Weekly highlights should be shown."""
        page.click(".tab[data-category='week']")

        highlights = page.locator(".highlights-box")
        expect(highlights).to_be_visible()

    def test_can_navigate_back_to_week_0(self, page: Page):
        """Should be able to navigate back to week 0."""
        page.click(".tab[data-category='week']")

        # Navigate back 6 times
        for _ in range(6):
            page.click("#week-prev")

        # Should show week 0 with day cards
        expect(page.locator("#week-title")).to_have_text("Uge 0")
        expect(page.locator(".day-card")).to_have_count(7)
