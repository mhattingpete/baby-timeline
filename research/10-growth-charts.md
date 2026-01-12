# Growth Charts (Vækstkurver)

## Source Information

| Source | URL | Authority |
|--------|-----|-----------|
| Vækstkurver.dk | https://www.vækstkurver.dk/ | Official - Danish Growth Reference |
| Sundhedsstyrelsen - Monitorering af vækst | https://www.sst.dk/da/udgivelser/2015/~/media/A72D478EDC6F4298ACEE1E9AE545BF83.ashx | Official - Danish Health Authority |
| sundhed.dk - Vækstkurver | https://www.sundhed.dk/borger/patienthaandbogen/boern/illustrationer/tegning/vaekstkurve-drenge-0-20/ | Official - Danish Ministry of Health |
| Ammenet.dk - Vægtøgning | https://ammenet.dk/wiki-artikel/vaegtoegning/ | Semi-official - Breastfeeding Org |

---

## Which Growth Charts to Use

### WHO Charts (0-5 years)

> **Danish:** "De mest anvendte vækstkurver i Danmark er Verdenssundhedsorganisationen WHOs vækstkurver. Disse kurver anvendes sædvanligvis af sundhedsplejersker og alment praktiserende læger til måling af vægt og højde, og de anbefales af Sundhedsstyrelsen til målinger af børn mellem 0 og 5 år."
>
> **English:** "The most commonly used growth charts in Denmark are the World Health Organization WHO's growth charts. These charts are usually used by health visitors and general practitioners for measuring weight and height, and they are recommended by the Danish Health Authority for measurements of children between 0 and 5 years."

| Age Range | Recommended Chart |
|-----------|-------------------|
| 0-5 years | WHO growth charts |
| 0-20 years | Danish growth charts (vækstkurver.dk) |

### Danish-Specific Charts

> **Danish:** "Normalkurver for højde og vægt på vækstkurver.dk er baseret på mere end 12.000 målinger af raske danske børn og unge, der er foretaget inden for de seneste 20 år."
>
> **English:** "Normal curves for height and weight on vækstkurver.dk are based on more than 12,000 measurements of healthy Danish children and young people, taken within the last 20 years."

> **Danish:** "Der var behov for opdaterede danske vækstkurver, der blev publiceret i 2014."
>
> **English:** "There was a need for updated Danish growth charts, which were published in 2014."

---

## Understanding Percentiles

### What Percentiles Mean

> **Danish:** "Kun få børn ligger lige på gennemsnittet (p50). Normalområdet er stort: mellem p3 og p97, eller SD -2 til +2."
>
> **English:** "Only few children are exactly at the average (p50). The normal range is large: between p3 and p97, or SD -2 to +2."

> **Danish:** "Hvis et barn ligger på 25-percentilen (p25) for kurven 'længde og højde for alder', så ligger 25% af jævnaldrende børn lavere end det pågældende barn."
>
> **English:** "If a child is at the 25th percentile (p25) for the 'length and height for age' curve, then 25% of same-age children are shorter than that child."

| Percentile | Meaning | Danish |
|------------|---------|--------|
| p3 | 3% of children are smaller | 3% er mindre |
| p10 | 10% of children are smaller | 10% er mindre |
| p25 | 25% of children are smaller | 25% er mindre |
| p50 | Average (median) | Gennemsnit |
| p75 | 75% of children are smaller | 75% er mindre |
| p90 | 90% of children are smaller | 90% er mindre |
| p97 | 97% of children are smaller | 97% er mindre |

### Normal Range

| Range | Description |
|-------|-------------|
| p3 - p97 | Normal range |
| Below p3 | May need evaluation |
| Above p97 | May need evaluation |

---

## Recommended Percentile Lines

> **Danish:** "Det anbefales, at der på vækstkurverne er indtegnet percentiler svarende til p3, p10, p25, p50, p75, p90 og p97. På BMI-for-alder-kurven indtegnes desuden en kurve svarende til p99."
>
> **English:** "It is recommended that the growth charts have percentiles drawn corresponding to p3, p10, p25, p50, p75, p90 and p97. On the BMI-for-age curve, a curve corresponding to p99 is also drawn."

Standard percentile lines:
- p3
- p10
- p25
- p50 (median)
- p75
- p90
- p97
- p99 (for BMI only)

---

## Types of Growth Charts

### Available Charts at vækstkurver.dk

| Chart Type | Danish | Measures |
|------------|--------|----------|
| Length/Height for age | Længde/højde for alder | Height vs age |
| Weight for age | Vægt for alder | Weight vs age |
| Weight for height | Vægt for højde | Weight vs height |
| BMI for age | BMI for alder | BMI vs age |
| Head circumference | Hovedomkreds | Head size vs age |

---

## Important Guidance

### Growth Charts Are Tools, Not Absolutes

> **Danish:** "Vækstkurverne er et arbejdsredskab for sundhedspersonale, som viser vækst hos et gennemsnit af mange børn. De er ikke en facitliste for barnets trivsel – den vurderes ud fra et samlet skøn og altså ikke ud fra kurven alene."
>
> **English:** "The growth charts are a working tool for health professionals, showing growth in an average of many children. They are not a definitive answer for the child's well-being – that is assessed based on an overall judgment and not from the chart alone."

### What Matters Most

1. **Consistent growth pattern** - Following own curve is most important
2. **Crossing percentile lines** - May warrant attention if sudden
3. **Overall well-being** - Charts are one factor among many

---

## How Growth is Monitored

### At Børneundersøgelser

> **Danish:** "Ved børneundersøgelserne måles og vejes barnet for at følge barnets vækstkurve."
>
> **English:** "At the child examinations, the child is measured and weighed to follow the child's growth curve."

| Age | What's Measured |
|-----|-----------------|
| 5 weeks | Weight, length, head circumference |
| 5 months | Weight, length |
| 12 months | Weight, length |
| 2 years | Weight, height |
| 3-5 years | Weight, height, BMI |

---

## Resources

### Where to Find Charts

| Resource | URL | Content |
|----------|-----|---------|
| Vækstkurver.dk | https://www.vækstkurver.dk/ | Printable Danish charts |
| sundhed.dk - Boys 0-20 | https://www.sundhed.dk/borger/patienthaandbogen/boern/illustrationer/tegning/vaekstkurve-drenge-0-20/ | Reference chart |
| sundhed.dk - Girls 0-20 | https://www.sundhed.dk/borger/patienthaandbogen/boern/illustrationer/tegning/vaekstkurver-piger-0-20/ | Reference chart |

---

## Data for Implementation

```json
{
  "growth_charts": {
    "recommended_source": "WHO charts for 0-5 years",
    "danish_charts_url": "https://www.vækstkurver.dk/",
    "percentiles": {
      "standard": ["p3", "p10", "p25", "p50", "p75", "p90", "p97"],
      "bmi_additional": ["p99"]
    },
    "normal_range": {
      "min_percentile": 3,
      "max_percentile": 97
    },
    "chart_types": [
      {"type": "length_height_for_age", "danish": "Længde/højde for alder"},
      {"type": "weight_for_age", "danish": "Vægt for alder"},
      {"type": "weight_for_height", "danish": "Vægt for højde"},
      {"type": "bmi_for_age", "danish": "BMI for alder"},
      {"type": "head_circumference", "danish": "Hovedomkreds"}
    ]
  },
  "monitoring_schedule": [
    {"age": "5 weeks", "measurements": ["weight", "length", "head"]},
    {"age": "5 months", "measurements": ["weight", "length"]},
    {"age": "12 months", "measurements": ["weight", "length"]},
    {"age": "2 years", "measurements": ["weight", "height"]},
    {"age": "3 years", "measurements": ["weight", "height", "BMI"]},
    {"age": "4 years", "measurements": ["weight", "height", "BMI"]},
    {"age": "5 years", "measurements": ["weight", "height", "BMI"]}
  ]
}
```

---

## Understanding Your Baby's Growth

### What's Normal

- Being on any percentile from p3 to p97 is normal
- The key is following a consistent growth pattern
- Premature babies may need adjusted charts initially

### When to Discuss with Doctor

- Weight or height below p3 or above p97
- Sudden crossing of percentile lines
- Weight gain stopping or decreasing
- Concerns about feeding or development

---

## Verification Checklist

- [ ] WHO recommendation for 0-5 years is correct
- [ ] Danish charts (vækstkurver.dk) source is accurate
- [ ] Percentile explanations are clear and correct
- [ ] Normal range (p3-p97) is correctly stated
- [ ] Chart types are comprehensive
- [ ] Monitoring schedule matches børneundersøgelser
