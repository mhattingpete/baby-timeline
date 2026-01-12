# Baby Poop Guide (Afføring hos Spædbørn)

## Source Information

| Source | URL | Authority |
|--------|-----|-----------|
| Ammenet.dk - Afføring | https://ammenet.dk/wiki-artikel/affoering/ | Semi-official - Danish Breastfeeding Organization |
| Libero - Poo-skolen | https://www.libero.dk/poo-skolen/modermaelk-og-erstatning/ | Commercial - Educational |
| Nestlé FamilyNes - Afføring hos spædbørn | https://www.nestlefamilynes.dk/affoering-hos-spaedboern | Commercial - Educational |
| Netsundhedsplejerske - Normal afføring | https://www.netsundhedsplejerske.dk/artikler/index.php?option=laes&type=ARTIKLER&id=599 | Professional - Health Visitor Resource |

---

## First Stool: Meconium (Mekonium)

> **Danish:** "Den allerførste afføring, som babyen producerer, kaldes meconium. Det er sort, klæbrigt og kan minde om tjære i konsistensen."
>
> **English:** "The very first stool that the baby produces is called meconium. It is black, sticky, and can resemble tar in consistency."

| Property | Description (Danish) | Description (English) |
|----------|---------------------|----------------------|
| Color | Sort/mørkegrøn | Black/dark green |
| Consistency | Klæbrig, tjæreagtig | Sticky, tar-like |
| Duration | Første 24-48 timer | First 24-48 hours |
| Composition | Fostervand, hudceller, hårceller | Amniotic fluid, skin cells, hair cells |

---

## Breastfed Babies (Ammede Babyer)

### Color (Farve)
> **Danish:** "Den normale afføring hos et fuldammet barn vil oftest være gullig, mens grøn eller brunlig også kan være helt normalt."
>
> **English:** "Normal stool in a fully breastfed child will most often be yellowish, while green or brownish can also be completely normal."

| Normal Colors | Danish | Notes |
|---------------|--------|-------|
| Yellow/mustard | Gul/sennepsfarvet | Most common |
| Yellow-green | Gulgrøn | Normal |
| Brownish | Brunlig | Normal |

### Consistency (Konsistens)
> **Danish:** "Hvis din baby får modermælk, giver det gul eller gulgrøn afføring med en cremet og ofte kornet konsistens. Mange synes at det minder om sennep, både i farve og konsistens."
>
> **English:** "If your baby gets breast milk, it gives yellow or yellow-green stool with a creamy and often grainy consistency. Many think it resembles mustard, both in color and consistency."

| Property | Description |
|----------|-------------|
| Texture | Creamy, grainy (kornet) |
| Comparison | Like mustard (som sennep) |
| Smell | Mild, slightly sweet |

### Frequency (Hyppighed)
> **Danish:** "Mange ammede babyer har afføring efter hvert måltid i de første tre til fire uger efter fødslen."
>
> **English:** "Many breastfed babies have a bowel movement after each meal in the first three to four weeks after birth."

> **Danish:** "At have afføring dagligt eller sjældnere er normalt fra omkring anden måned. Nu kan det endda ske, at bleen kun er fuld et par gange om ugen."
>
> **English:** "Having a bowel movement daily or less frequently is normal from around the second month. It can even happen that the diaper is only full a couple of times a week."

| Age | Frequency | Danish |
|-----|-----------|--------|
| 0-4 weeks | After every feed (6-10x/day) | Efter hvert måltid |
| 1-2 months | 1x/day to several times/week | Dagligt eller sjældnere |
| 2+ months | Can be once every 5-7 days | Kan være én gang om ugen |

---

## Formula-Fed Babies (Flaskeernærede Babyer)

### Color and Consistency
> **Danish:** "Det er helt normalt, at afføringen fra en baby, der får modermælkserstatning, er mere fast i konsistensen end modermælksafføring. Den er også typisk mere ildelugtende og kan have en farve, der er mere hen ad lysebrun."
>
> **English:** "It is completely normal that stool from a baby who gets formula is firmer in consistency than breast milk stool. It is also typically more foul-smelling and can have a color that is more like light brown."

| Property | Breastfed | Formula-fed |
|----------|-----------|-------------|
| Color | Yellow/mustard | Light brown/tan |
| Consistency | Creamy, runny | Firmer, more formed |
| Smell | Mild | Stronger |

### Frequency
> **Danish:** "Babyer, der får modermælkserstatning, har typisk afføring mere regelmæssigt – ofte én til to gange dagligt."
>
> **English:** "Babies who get formula typically have bowel movements more regularly – often one to two times daily."

> **Danish:** "Enkelte børn har afføring hver anden eller hver tredje dag og trives rigtig fint med det, men som tommelfingerregel bør børn der fuldt ernæres med erstatning have afføring en gang i døgnet."
>
> **English:** "Some children have bowel movements every other or every third day and thrive just fine with it, but as a rule of thumb, children who are fully fed formula should have a bowel movement once a day."

| Typical | Range |
|---------|-------|
| 1-2x daily | Every 1-3 days acceptable |

---

## Transition Stool (Overgangsstol)

After meconium, before mature milk stool:
- Days 2-4 after birth
- Greenish-brown color
- Less sticky than meconium
- Sign that baby is getting milk

---

## Warning Signs (Advarselstegn)

### When to Contact Doctor

| Sign | Danish | Possible Cause |
|------|--------|---------------|
| White/very pale | Hvid eller meget bleg | Liver problems (leverproblemer) |
| Blood in stool | Blod i afføringen | Irritation or allergy |
| Black (after meconium) | Sort efter mekoniumfasen | Bleeding in GI tract |
| Very watery (diarrhea) | Meget vandig (diarre) | Infection |
| Hard pellets | Hårde kugler | Constipation |

> **Danish:** "Hvid eller meget bleg afføring er usædvanligt og kan være tegn på leverproblemer, hvilket kræver hurtig lægelig vurdering."
>
> **English:** "White or very pale stool is unusual and can be a sign of liver problems, which requires quick medical evaluation."

---

## Stool Changes with Solid Foods

When introducing solid foods (around 6 months):
- Color changes based on food eaten
- Becomes more formed
- Smell becomes stronger
- May see undigested food pieces (normal)

---

## Data for Implementation

```json
{
  "poop_guide": {
    "meconium": {
      "color": "black/dark green",
      "consistency": "sticky, tar-like",
      "duration": "first 24-48 hours",
      "normal": true
    },
    "breastfed": {
      "colors": ["yellow", "mustard", "yellow-green", "brownish"],
      "consistency": "creamy, grainy, like mustard",
      "frequency_0_4_weeks": "after every feed (6-10x/day)",
      "frequency_after_1_month": "1x/day to 1x/week",
      "smell": "mild"
    },
    "formula_fed": {
      "colors": ["light brown", "tan", "pale yellow"],
      "consistency": "firmer, more formed",
      "frequency": "1-2x daily",
      "smell": "stronger"
    },
    "warning_signs": [
      {"sign": "white/pale", "concern": "liver problems", "action": "see doctor immediately"},
      {"sign": "blood", "concern": "irritation/allergy", "action": "see doctor"},
      {"sign": "black (after day 3)", "concern": "GI bleeding", "action": "see doctor immediately"},
      {"sign": "very watery", "concern": "diarrhea/infection", "action": "monitor, see doctor if persists"},
      {"sign": "hard pellets", "concern": "constipation", "action": "consult sundhedsplejerske"}
    ]
  }
}
```

---

## Visual Reference

### Normal Stool Colors by Age and Feeding Type

```
Day 1-2:    ████████ Black (Meconium)
Day 2-4:    ████████ Dark green → Brown-green (Transition)
Week 1+:
  Breastfed: ████████ Yellow/Mustard
  Formula:   ████████ Light brown/Tan
```

---

## Verification Checklist

- [ ] Meconium description is accurate
- [ ] Breastfed stool characteristics verified
- [ ] Formula-fed stool characteristics verified
- [ ] Frequency ranges are correct
- [ ] Warning signs match medical sources
