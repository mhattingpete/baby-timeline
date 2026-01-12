# Sleep Guidelines (Søvnanbefalinger)

## Source Information

| Source | URL | Authority |
|--------|-----|-----------|
| Sundhedsstyrelsen - Anbefalinger for søvnlængde | https://www.sst.dk/da/sundhed-og-livsstil/fysisk-aktivitet-og-soevn/soevn/soevnanbefalinger | Official - Danish Health Authority |
| sundhed.dk - Babyer og søvn | https://www.sundhed.dk/borger/patienthaandbogen/boern/om-boern/det-nyfoedte-barn/babyer-og-soevn/ | Official - Danish Ministry of Health |
| Sundhedspleje Aarhus - Søvn fra 0-1 år | https://sundhedspleje.aarhus.dk/raad-og-vejledning/sov-godt-alt-om-dit-barns-soevn/soevn-fra-0-1-aar | Official - Municipal Health Service |

---

## Sleep Duration Recommendations

### Sundhedsstyrelsen Official Guidelines (2024)

| Age Group | Danish | Recommended | Acceptable Range |
|-----------|--------|-------------|------------------|
| 0-3 months | Spædbørn 0-3 mdr | 14-17 timer | 11-13 to 18-19 timer |
| 4-11 months | Spædbørn 4-11 mdr | 12-15 timer | 10-11 to 16-18 timer |
| 1-2 years | Småbørn 1-2 år | 11-14 timer | Including daytime naps |

---

## Key Quotes from Sundhedsstyrelsen

### Newborns (0-3 months)
> **Danish:** "Spædbørn på 0-3 måneder anbefales at sove 14-17 timer på et døgn."
>
> **English:** "Infants aged 0-3 months are recommended to sleep 14-17 hours per day."

> **Danish:** "Søvnlængde på både 11-13 timer og 18-19 timer kan være passende for spædbørn på 0-3 måneder."
>
> **English:** "Sleep duration of both 11-13 hours and 18-19 hours can be appropriate for infants aged 0-3 months."

> **Danish:** "Anbefalinger for søvnlængde kan ikke anvendes i løbet af de første dage af livet, hvor lang søvn kan være normalt for et spædbarn."
>
> **English:** "Sleep duration recommendations cannot be applied during the first days of life, when long sleep can be normal for an infant."

### Infants (4-11 months)
> **Danish:** "Spædbørn på 4-11 måneder anbefales at sove 12-15 timer på et døgn, inkl. lure i løbet af dagen."
>
> **English:** "Infants aged 4-11 months are recommended to sleep 12-15 hours per day, including naps during the day."

> **Danish:** "Søvnlængde på både 10-11 timer og 16-18 timer kan være passende for nogle spædbørn på 4-11 måneder."
>
> **English:** "Sleep duration of both 10-11 hours and 16-18 hours can be appropriate for some infants aged 4-11 months."

### Toddlers (1-2 years)
> **Danish:** "Småbørn på 1-2 år anbefales at sove 11-14 timer på et døgn, inkl. lure i løbet af dagen, med regelmæssige sove- og opvågningstidspunkter."
>
> **English:** "Toddlers aged 1-2 years are recommended to sleep 11-14 hours per day, including naps during the day, with regular sleep and wake times."

---

## Sleep Development Milestones

### From sundhed.dk and Sundhedspleje Aarhus

| Age | What to Expect | Danish |
|-----|----------------|--------|
| 0-3 months | No regular pattern expected | Ingen regelmæssigt mønster forventet |
| 3-4 months | More regular rhythm begins | Mere regelmæssig rytme begynder |
| 6-8 months | May start sleeping through (5+ hours) | Kan begynde at sove igennem (5+ timer) |

> **Danish:** "Jeres barn skal være omkring 3-4 måneder, før I kan forvente, at det modenhedsmæssigt har nået et udviklingsstadie, hvor det er parat til, at der kommer en mere fast rytme aften og nat."
>
> **English:** "Your child must be around 3-4 months before you can expect that it has maturationally reached a developmental stage where it is ready for a more fixed rhythm in the evening and night."

> **Danish:** "Børn er omkring 6-8 måneder, før de begynder at have nætter, hvor de sover igennem (dvs. mere end 5 timer i et stræk)."
>
> **English:** "Children are around 6-8 months before they start having nights where they sleep through (i.e., more than 5 hours at a stretch)."

---

## Safe Sleep Guidelines (Sikker Søvn)

### Sundhedsstyrelsen Recommendations

> **Danish:** "Sundhedsstyrelsen anbefaler, at et lille nyfødt barn sover i egen seng i samme rum som forældrene."
>
> **English:** "The Danish Health Authority recommends that a small newborn baby sleeps in its own bed in the same room as the parents."

| Guideline | Danish | English |
|-----------|--------|---------|
| Sleep position | Læg barnet på ryggen | Place baby on back |
| Sleep location | I egen seng i samme rum som forældre | In own bed in same room as parents |
| Avoid | Rygning | Smoking |
| Temperature | Undgå at barnet får det for varmt | Avoid overheating |

---

## Important Notes

> **Danish:** "Små børn kan ikke sove for meget, og et lille barn har brug for megen søvn til at udvikle hjerne og krop."
>
> **English:** "Small children cannot sleep too much, and a small child needs a lot of sleep to develop brain and body."

---

## Data for Implementation

```json
{
  "sleep_recommendations": [
    {
      "ageMonthsMin": 0,
      "ageMonthsMax": 3,
      "recommendedHoursMin": 14,
      "recommendedHoursMax": 17,
      "acceptableMin": 11,
      "acceptableMax": 19,
      "notes_da": "Ingen fast rytme forventet",
      "notes_en": "No fixed pattern expected"
    },
    {
      "ageMonthsMin": 4,
      "ageMonthsMax": 11,
      "recommendedHoursMin": 12,
      "recommendedHoursMax": 15,
      "acceptableMin": 10,
      "acceptableMax": 18,
      "notes_da": "Inkl. lure i løbet af dagen",
      "notes_en": "Including naps during the day"
    },
    {
      "ageMonthsMin": 12,
      "ageMonthsMax": 24,
      "recommendedHoursMin": 11,
      "recommendedHoursMax": 14,
      "acceptableMin": 11,
      "acceptableMax": 14,
      "notes_da": "Inkl. lure, regelmæssige tidspunkter",
      "notes_en": "Including naps, regular times"
    }
  ],
  "sleep_milestones": [
    {"ageMonths": 3.5, "milestone_da": "Mere fast rytme mulig", "milestone_en": "More fixed rhythm possible"},
    {"ageMonths": 7, "milestone_da": "Kan sove igennem (5+ timer)", "milestone_en": "May sleep through (5+ hours)"}
  ]
}
```

---

## Verification Checklist

- [ ] Hours match Sundhedsstyrelsen 2024 guidelines
- [ ] Acceptable ranges are correctly stated
- [ ] Safe sleep guidelines are accurate
- [ ] Sleep milestones (3-4 months, 6-8 months) verified
