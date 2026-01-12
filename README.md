# Baby Timeline

A personalized baby development tracker built for Danish parents, featuring guidelines from Sundhedsstyrelsen (Danish Health Authority) and sundhed.dk.

## Features

- **Milestone Tracking**: Motor, speech, and social development milestones with age-appropriate windows
- **Week-by-Week View**: Day-by-day expectations for the first weeks, weekly summaries thereafter
- **Health Guides**: Danish-specific guidance on fever, jaundice, colic, SIDS prevention, and more
- **Sleep Recommendations**: Official Sundhedsstyrelsen sleep guidelines by age
- **Health Calendar**: Børneundersøgelser (health checkups) and vaccination schedule
- **Feeding Guide**: Breastfeeding, formula, and solid food introduction timeline
- **D-vitamin Reminders**: Daily supplement reminders per Danish guidelines
- **Offline Support**: Works without internet after first load
- **Privacy First**: All data stored locally on your device

## Usage

Visit: **https://mhattingpete.github.io/baby-timeline/**

For the best experience, add to your home screen:
- **iPhone**: Share → "Add to Home Screen"
- **Android**: Menu (⋮) → "Add to Home Screen"

## Data Sources

All health information is sourced from official Danish authorities:

- [Sundhedsstyrelsen](https://www.sst.dk/) - Danish Health Authority
- [sundhed.dk](https://www.sundhed.dk/) - Official Danish health portal
- [SSI](https://www.ssi.dk/) - Statens Serum Institut (vaccination program)
- [vækstkurver.dk](https://www.vækstkurver.dk/) - Danish growth charts

See the `/research` folder for detailed documentation with citations.

## Disclaimer

This app is for informational purposes only and does not replace professional medical advice. Always consult your sundhedsplejerske (health visitor) or læge (doctor) with any concerns about your baby's health or development.

## Tech Stack

- Plain HTML, CSS, and JavaScript
- No build step required
- LocalStorage for data persistence
- Hosted on GitHub Pages

## Development

```bash
# Clone the repository
git clone https://github.com/mhattingpete/baby-timeline.git

# Open in browser
open index.html

# Run tests (requires Python and Playwright)
uv run pytest
```

## License

MIT
