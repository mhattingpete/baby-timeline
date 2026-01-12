# CLAUDE.md - AI Assistant Guide for Baby Timeline

## Project Overview

Baby Timeline is a personalized baby development tracker for Danish parents featuring guidelines from official Danish health authorities (Sundhedsstyrelsen and sundhed.dk). It's a fully offline-capable web application with no build step required.

**Key characteristics:**
- Privacy-first: All data stored locally in browser localStorage
- Offline-capable: No external dependencies or API calls
- No build step: Pure HTML/CSS/JavaScript served as static files
- Danish health standards: Official guidelines from Sundhedsstyrelsen, sundhed.dk, SSI

## Repository Structure

```
baby-timeline/
├── index.html              # Main HTML file - single-page application
├── app.js                  # Core JavaScript application logic (1,673 lines)
├── styles.css              # Mobile-first responsive CSS (1,713 lines)
├── data/
│   └── milestones.js       # Health data constants and milestone definitions
├── tests/
│   ├── __init__.py
│   └── test_baby_timeline.py  # Playwright integration tests
├── research/               # Research documentation (17 markdown files)
│   └── *.md                # Medical sources, Danish translations, guidelines
├── pyproject.toml          # Python test dependencies
├── uv.lock                 # Python dependency lock file
├── README.md               # User-facing documentation
└── LICENSE                 # MIT License
```

## Development Workflow

### Running the App

No build step required - open directly in browser:
```bash
# Simple approach
open index.html

# For tests, serve locally
python -m http.server 8080
```

### Running Tests

Tests use Playwright with pytest:
```bash
# Install dependencies (first time)
uv sync
uv run playwright install

# Run all tests
uv run pytest

# Run with verbose output
uv run pytest tests/ -v

# Run specific test class
uv run pytest tests/test_baby_timeline.py::TestMilestones -v
```

Tests require a local server running on `http://localhost:8080`.

## Code Architecture

### State Management

Global state object in `app.js`:
```javascript
let state = {
    baby: null,              // { name, birthDate, feedingType }
    achievements: {},        // { milestone_id: timestamp }
    currentCategory: 'all',  // Tab view state
    viewedWeek: null        // Week navigation state
};
```

State is persisted to localStorage under key `'babyTimeline'`.

### Function Organization in app.js

Functions are organized by responsibility:

1. **Utility functions**: `escapeHtml()`, `getAgeInWeeks()`, `formatAge()`, `getMilestoneStatus()`
2. **DOM helpers**: `createElement()`, `clearElement()`
3. **Storage functions**: `loadState()`, `saveState()`, `resetState()`
4. **Render functions**: `renderHeader()`, `renderDashboard()`, `renderTimeline()`, `renderGuides()`, `renderProgress()`, `renderWeekView()`
5. **Guide renderers**: `renderPoopGuide()`, `renderFeverGuide()`, `renderSIDSGuide()`, etc.
6. **Event handlers**: `toggleMilestone()`, `handleSetupSubmit()`, `handleTabClick()`, `navigateWeek()`
7. **Initialization**: `init()`, `renderAll()`

### Data Constants in milestones.js

Key data structures:
- `MILESTONES` - Motor, speech, social development milestones
- `SLEEP_RECOMMENDATIONS` - Sleep by age group
- `HEALTH_CHECKUPS` - Børneundersøgelser schedule
- `VACCINATIONS` - Danish vaccination program
- `FEEDING_TIMELINE` - Breastfeeding, formula, solids
- `FEVER_GUIDELINES`, `SIDS_PREVENTION`, `COLIC`, `POOP_GUIDE`, etc.

### Milestone Data Structure

```javascript
{
    id: "motor_smile",
    ageWeeksMin: 4,
    ageWeeksMax: 8,
    title: "Social smile",
    titleDa: "Socialt smil",
    description: "Baby responds to faces with a smile",
    descriptionDa: "Barnet smiler som respons på ansigter",
    source: "sundhed.dk"
}
```

## Code Conventions

### JavaScript

- **Functional programming style**: No classes, pure functions with state management
- **User input safety**: Use `textContent` for user-generated data (name, dates)
- **Internal HTML**: `innerHTML` only for trusted internal data constants
- **No external dependencies**: Vanilla JavaScript only
- **Semantic HTML**: Accessibility-first with ARIA labels

### CSS

- **Mobile-first**: Base styles for mobile, media queries for larger screens
- **CSS Variables**: Color palette, spacing, typography defined as custom properties
- **Breakpoints**: 480px (small), 600px (tablet+)
- **Danish color scheme**: Primary `#5b8a72` (soft green), status colors for milestone states

### Naming Conventions

- **Functions**: camelCase (`renderDashboard`, `getMilestoneStatus`)
- **Constants**: UPPER_SNAKE_CASE (`MILESTONES`, `SLEEP_RECOMMENDATIONS`)
- **CSS classes**: kebab-case (`milestone-card`, `info-card`)
- **Data IDs**: snake_case (`motor_smile`, `speech_first_words`)

## Key Entry Points

1. **Application start**: `init()` function in `app.js` (called on DOMContentLoaded)
2. **Main render**: `renderAll()` orchestrates all view rendering
3. **Data source**: `data/milestones.js` loaded before `app.js` in HTML

## Testing Guidelines

### Test Structure

Tests are organized by feature in `tests/test_baby_timeline.py`:

- `TestSetupModal` - Initial onboarding flow
- `TestHeader` - Baby name and age display
- `TestDashboard` - Info cards (sleep, health, feeding)
- `TestTabs` - Category navigation
- `TestMilestones` - Milestone display and achievement tracking
- `TestProgress` - Progress bar visualization
- `TestGuides` - Health guides section

### Test Patterns

```python
# Fixture for clearing storage before tests
@pytest.fixture
def clear_storage(self, page: Page):
    page.goto("http://localhost:8080")
    page.evaluate("localStorage.clear()")
    page.reload()

# Testing milestone persistence
def test_achieved_milestone_persists_after_reload(self, page: Page):
    first_card = page.locator(".milestone-card:not(.milestone-achieved)").first
    milestone_id = first_card.get_attribute("data-id")
    first_card.click()
    page.reload()
    updated_card = page.locator(f".milestone-card[data-id='{milestone_id}']")
    expect(updated_card).to_have_class(re.compile(r"milestone-achieved"))
```

### Writing New Tests

1. Add to appropriate test class or create new class
2. Use `page.goto("http://localhost:8080")` to navigate
3. Clear localStorage if testing fresh state
4. Use Playwright's `expect()` assertions
5. Test persistence by calling `page.reload()` and verifying state

## Common Tasks

### Adding a New Milestone

1. Add milestone object to `MILESTONES` in `data/milestones.js`
2. Include all fields: `id`, `ageWeeksMin`, `ageWeeksMax`, `title`, `titleDa`, `description`, `descriptionDa`, `source`
3. Place in correct category array (`motor`, `speech`, or `social`)

### Adding a New Health Guide

1. Add data constant to `data/milestones.js`
2. Create render function in `app.js` (e.g., `renderNewGuide()`)
3. Add to `renderGuides()` function
4. Add corresponding CSS styles

### Modifying the Dashboard

Dashboard has 4 info cards rendered in `renderDashboard()`:
- Current milestones
- Sleep recommendations
- Next health appointment
- Current feeding stage

Modify card content in the respective sections of `renderDashboard()`.

### Adding a New Tab/Category

1. Add tab button in `index.html` within `.tab-container`
2. Add category handling in `handleTabClick()` event handler
3. Add rendering logic in `renderTimeline()` or create new render function

## Security Considerations

- **XSS Prevention**: Always use `textContent` for user input, `escapeHtml()` for any user data in attributes
- **No external requests**: Application works entirely offline
- **LocalStorage only**: Data never leaves the user's browser
- **Input validation**: Required fields validated before storage

## Data Sources

All health data comes from official Danish sources:
- **Sundhedsstyrelsen** - Danish Health Authority
- **sundhed.dk** - Official patient handbook
- **SSI** - Statens Serum Institut (vaccinations)
- **Vækstkurver.dk** - Growth charts
- **Ammenet.dk** - Breastfeeding guidelines

## Deployment

The app is deployed via GitHub Pages:
- URL: `https://mhattingpete.github.io/baby-timeline/`
- No build process - files served as-is
- Push to main branch auto-deploys

## Important Notes for AI Assistants

1. **No build step**: Changes to HTML/CSS/JS are immediately reflected
2. **Test locally**: Always test changes by opening `index.html` in a browser
3. **Run tests**: Use `uv run pytest` to verify changes don't break existing functionality
4. **Danish content**: Many features have Danish translations - update both English and Danish text
5. **Mobile-first**: Test on mobile viewport sizes (CSS is mobile-first)
6. **Offline support**: Don't add external dependencies or API calls
7. **Privacy**: Never add analytics, tracking, or external data storage
8. **Source citations**: When adding health data, always include the official source
