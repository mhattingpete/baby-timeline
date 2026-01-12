/**
 * Baby Development Milestones - Denmark
 * Data sourced from official Danish health authorities
 * See /research/ folder for full documentation and citations
 */

const MILESTONES = {
  motor: [
    {
      id: "motor_smile",
      ageWeeksMin: 4,
      ageWeeksMax: 8,
      title: "Social smile",
      titleDa: "Socialt smil",
      description: "Baby responds to faces with a smile",
      descriptionDa: "Barnet smiler som respons på ansigter",
      source: "sundhed.dk"
    },
    {
      id: "motor_head_control_back",
      ageWeeksMin: 6,
      ageWeeksMax: 8,
      title: "Head rotation on back",
      titleDa: "Hovedrotation på ryg",
      description: "Rotates head side to side when lying on back",
      descriptionDa: "Roterer hovedet fra side til side på ryggen",
      source: "sundhed.dk"
    },
    {
      id: "motor_roll_side",
      ageWeeksMin: 9,
      ageWeeksMax: 14,
      title: "Rolls from side to back",
      titleDa: "Ruller fra side til ryg",
      description: "Can roll from side position to back",
      descriptionDa: "Kan rulle fra siden til ryggen",
      source: "sundhed.dk"
    },
    {
      id: "motor_head_lift",
      ageWeeksMin: 12,
      ageWeeksMax: 18,
      title: "Lifts head when prone",
      titleDa: "Løfter hoved på maven",
      description: "Lifts head and shoulders when lying on tummy",
      descriptionDa: "Løfter hoved og skuldre på maven",
      source: "sundhed.dk"
    },
    {
      id: "motor_hands_open",
      ageWeeksMin: 12,
      ageWeeksMax: 16,
      title: "Opens hands",
      titleDa: "Åbner hænderne",
      description: "Intermittently opens hands, reaches to sides",
      descriptionDa: "Åbner hænderne indimellem, rækker til siderne",
      source: "sundhed.dk"
    },
    {
      id: "motor_sits_support",
      ageWeeksMin: 22,
      ageWeeksMax: 28,
      title: "Sits with support",
      titleDa: "Sidder med støtte",
      description: "Can sit when supported by hands or pillows",
      descriptionDa: "Kan sidde med støtte fra hænder eller puder",
      source: "sundhed.dk"
    },
    {
      id: "motor_rolls_over",
      ageWeeksMin: 22,
      ageWeeksMax: 28,
      title: "Rolls over",
      titleDa: "Ruller rundt",
      description: "Rolls from back to tummy and vice versa",
      descriptionDa: "Ruller fra ryg til mave og omvendt",
      source: "sundhed.dk"
    },
    {
      id: "motor_grasps",
      ageWeeksMin: 22,
      ageWeeksMax: 28,
      title: "Full-hand grasp",
      titleDa: "Helthåndsgreb",
      description: "Grasps objects with whole hand, transfers between hands",
      descriptionDa: "Griber med hele hånden, overfører mellem hænder",
      source: "sundhed.dk"
    },
    {
      id: "motor_reaches",
      ageWeeksMin: 22,
      ageWeeksMax: 28,
      title: "Reaches for objects",
      titleDa: "Rækker ud efter ting",
      description: "Reaches for toys, extends arms to be picked up",
      descriptionDa: "Rækker ud efter legetøj, strækker arme for at blive løftet",
      source: "sundhed.dk"
    },
    {
      id: "motor_sits_independent",
      ageWeeksMin: 32,
      ageWeeksMax: 40,
      title: "Sits independently",
      titleDa: "Sidder selvstændigt",
      description: "Sits without support with good balance",
      descriptionDa: "Sidder uden støtte med god balance",
      source: "sundhed.dk"
    },
    {
      id: "motor_crawls",
      ageWeeksMin: 36,
      ageWeeksMax: 44,
      title: "Crawls",
      titleDa: "Kravler",
      description: "Moves on hands and knees",
      descriptionDa: "Bevæger sig på hænder og knæ",
      source: "sundhed.dk"
    },
    {
      id: "motor_stands_support",
      ageWeeksMin: 40,
      ageWeeksMax: 52,
      title: "Stands with support",
      titleDa: "Står med støtte",
      description: "Pulls up to standing, holds furniture for support",
      descriptionDa: "Trækker sig op til stående, holder i møbler",
      source: "sundhed.dk"
    },
    {
      id: "motor_pincer_grasp",
      ageWeeksMin: 44,
      ageWeeksMax: 56,
      title: "Pincer grasp",
      titleDa: "Pincetgreb",
      description: "Picks up small objects between thumb and finger",
      descriptionDa: "Samler små ting op mellem tommelfinger og finger",
      source: "sundhed.dk"
    },
    {
      id: "motor_walks",
      ageWeeksMin: 48,
      ageWeeksMax: 78,
      title: "Walks independently",
      titleDa: "Går selvstændigt",
      description: "Takes steps without holding on to anything",
      descriptionDa: "Tager skridt uden at holde fast",
      source: "sundhed.dk",
      important: true,
      warningWeeks: 78,
      warningText: "Consult pediatrician if not walking by 18 months",
      warningTextDa: "Kontakt børnelæge hvis ikke går ved 18 måneder"
    },
    {
      id: "motor_stacks_blocks",
      ageWeeksMin: 72,
      ageWeeksMax: 84,
      title: "Stacks blocks",
      titleDa: "Stabler klodser",
      description: "Can stack 3-4 blocks on top of each other",
      descriptionDa: "Kan stable 3-4 klodser oven på hinanden",
      source: "sundhed.dk"
    },
    {
      id: "motor_uses_spoon",
      ageWeeksMin: 72,
      ageWeeksMax: 84,
      title: "Uses spoon",
      titleDa: "Bruger ske",
      description: "Attempts to eat with a spoon",
      descriptionDa: "Forsøger at spise med ske",
      source: "sundhed.dk"
    },
    {
      id: "motor_climbs_stairs",
      ageWeeksMin: 60,
      ageWeeksMax: 78,
      title: "Climbs stairs",
      titleDa: "Klatrer på trapper",
      description: "Crawls or walks up stairs with support",
      descriptionDa: "Kravler eller går op ad trapper med støtte",
      source: "sundhed.dk"
    },
    {
      id: "motor_runs",
      ageWeeksMin: 96,
      ageWeeksMax: 156,
      title: "Runs and jumps",
      titleDa: "Løber og hopper",
      description: "Runs, hops, kicks ball, navigates stairs",
      descriptionDa: "Løber, hopper, sparker bold, navigerer trapper",
      source: "sundhed.dk"
    }
  ],

  speech: [
    {
      id: "speech_coos",
      ageWeeksMin: 4,
      ageWeeksMax: 12,
      title: "Cooing sounds",
      titleDa: "Kurrelyde",
      description: "Makes cooing and babbling sounds",
      descriptionDa: "Laver kurre- og pludrelyde",
      source: "sundhed.dk"
    },
    {
      id: "speech_turns_sound",
      ageWeeksMin: 6,
      ageWeeksMax: 14,
      title: "Turns toward sounds",
      titleDa: "Drejer mod lyd",
      description: "Turns head toward sound sources",
      descriptionDa: "Drejer hovedet mod lydkilder",
      source: "sundhed.dk"
    },
    {
      id: "speech_consonants",
      ageWeeksMin: 22,
      ageWeeksMax: 28,
      title: "Uses consonants",
      titleDa: "Bruger konsonanter",
      description: "Babbles with consonant sounds, listens to own voice",
      descriptionDa: "Pludrer med konsonantlyde, lytter til egen stemme",
      source: "sundhed.dk"
    },
    {
      id: "speech_responds_name",
      ageWeeksMin: 26,
      ageWeeksMax: 40,
      title: "Responds to name",
      titleDa: "Reagerer på navn",
      description: "Looks when their name is called",
      descriptionDa: "Kigger når deres navn bliver kaldt",
      source: "sundhed.dk"
    },
    {
      id: "speech_two_syllable",
      ageWeeksMin: 26,
      ageWeeksMax: 40,
      title: "Two-syllable babbling",
      titleDa: "To-stavelsespludren",
      description: "Says 'bababa', 'mamama', 'dadada'",
      descriptionDa: "Siger 'bababa', 'mamama', 'dadada'",
      source: "sundhed.dk"
    },
    {
      id: "speech_shared_attention",
      ageWeeksMin: 36,
      ageWeeksMax: 44,
      title: "Shared attention",
      titleDa: "Fælles opmærksomhed",
      description: "Establishes shared attention with caregivers about objects",
      descriptionDa: "Etablerer fælles opmærksomhed med omsorgspersoner om ting",
      source: "sundhed.dk"
    },
    {
      id: "speech_mama_papa",
      ageWeeksMin: 40,
      ageWeeksMax: 56,
      title: "Says mama/papa",
      titleDa: "Siger mama/papa",
      description: "Says 'mama' and 'papa' with meaning",
      descriptionDa: "Siger 'mama' og 'papa' med mening",
      source: "sundhed.dk"
    },
    {
      id: "speech_understands_words",
      ageWeeksMin: 44,
      ageWeeksMax: 56,
      title: "Understands words",
      titleDa: "Forstår ord",
      description: "Understands simple commands and individual words",
      descriptionDa: "Forstår enkle kommandoer og enkelte ord",
      source: "sundhed.dk"
    },
    {
      id: "speech_first_words",
      ageWeeksMin: 52,
      ageWeeksMax: 72,
      title: "First words",
      titleDa: "Første ord",
      description: "Uses first words correctly, responds to simple requests",
      descriptionDa: "Bruger første ord korrekt, reagerer på enkle anmodninger",
      source: "sundhed.dk"
    },
    {
      id: "speech_points",
      ageWeeksMin: 52,
      ageWeeksMax: 72,
      title: "Points and gestures",
      titleDa: "Peger og gestikulerer",
      description: "Uses pointing and waving to communicate",
      descriptionDa: "Bruger pegning og vinken til at kommunikere",
      source: "sundhed.dk"
    },
    {
      id: "speech_4_6_words",
      ageWeeksMin: 72,
      ageWeeksMax: 96,
      title: "4-6 words",
      titleDa: "4-6 ord",
      description: "Uses 4-6 simple words, points to named objects",
      descriptionDa: "Bruger 4-6 enkle ord, peger på navngivne ting",
      source: "sundhed.dk"
    },
    {
      id: "speech_250_words",
      ageWeeksMin: 96,
      ageWeeksMax: 108,
      title: "Understands ~250 words",
      titleDa: "Forstår ~250 ord",
      description: "Understands approximately 250 words",
      descriptionDa: "Forstår cirka 250 ord",
      source: "sundhed.dk"
    },
    {
      id: "speech_sentences",
      ageWeeksMin: 96,
      ageWeeksMax: 108,
      title: "Two-word sentences",
      titleDa: "To-ords sætninger",
      description: "Combines words into simple sentences",
      descriptionDa: "Kombinerer ord til enkle sætninger",
      source: "sundhed.dk"
    }
  ],

  social: [
    {
      id: "social_eye_contact",
      ageWeeksMin: 4,
      ageWeeksMax: 8,
      title: "Eye contact",
      titleDa: "Øjenkontakt",
      description: "Establishes and maintains eye contact",
      descriptionDa: "Etablerer og fastholder øjenkontakt",
      source: "sundhed.dk"
    },
    {
      id: "social_follows_objects",
      ageWeeksMin: 4,
      ageWeeksMax: 10,
      title: "Follows objects",
      titleDa: "Følger genstande",
      description: "Follows moving objects with eyes",
      descriptionDa: "Følger bevægelige genstande med øjnene",
      source: "sundhed.dk"
    },
    {
      id: "social_tracks_180",
      ageWeeksMin: 22,
      ageWeeksMax: 28,
      title: "Tracks 180 degrees",
      titleDa: "Følger 180 grader",
      description: "Tracks objects in a full arc with eyes",
      descriptionDa: "Følger genstande i en fuld bue med øjnene",
      source: "sundhed.dk"
    },
    {
      id: "social_reaches_pickup",
      ageWeeksMin: 22,
      ageWeeksMax: 28,
      title: "Reaches to be picked up",
      titleDa: "Rækker ud for at blive løftet",
      description: "Extends arms toward caregiver to be picked up",
      descriptionDa: "Strækker arme mod omsorgsperson for at blive løftet",
      source: "sundhed.dk"
    },
    {
      id: "social_stranger_anxiety",
      ageWeeksMin: 32,
      ageWeeksMax: 44,
      title: "Stranger anxiety",
      titleDa: "Fremmedangst",
      description: "Shows wariness of unfamiliar people (normal development)",
      descriptionDa: "Viser forsigtighed over for ukendte (normal udvikling)",
      source: "sundhed.dk"
    },
    {
      id: "social_games",
      ageWeeksMin: 32,
      ageWeeksMax: 44,
      title: "Social games",
      titleDa: "Sociale lege",
      description: "Participates in waving, clapping, peek-a-boo",
      descriptionDa: "Deltager i vinken, klappen, borte-tit-tit",
      source: "sundhed.dk"
    },
    {
      id: "social_gives_receives",
      ageWeeksMin: 44,
      ageWeeksMax: 56,
      title: "Gives and receives",
      titleDa: "Giver og modtager",
      description: "Engages in give-and-take play with objects",
      descriptionDa: "Deltager i give-og-tage leg med genstande",
      source: "sundhed.dk"
    },
    {
      id: "social_hidden_toys",
      ageWeeksMin: 44,
      ageWeeksMax: 56,
      title: "Object permanence",
      titleDa: "Objektpermanens",
      description: "Searches for hidden toys (knows they still exist)",
      descriptionDa: "Leder efter skjult legetøj (ved det stadig eksisterer)",
      source: "sundhed.dk"
    },
    {
      id: "social_self_feeds",
      ageWeeksMin: 60,
      ageWeeksMax: 78,
      title: "Self-feeds",
      titleDa: "Spiser selv",
      description: "Uses cup and utensils to self-feed",
      descriptionDa: "Bruger kop og redskaber til at spise selv",
      source: "sundhed.dk"
    }
  ]
};

const SLEEP_RECOMMENDATIONS = [
  {
    ageMonthsMin: 0,
    ageMonthsMax: 3,
    recommendedMin: 14,
    recommendedMax: 17,
    acceptableMin: 11,
    acceptableMax: 19,
    notes: "No regular pattern expected",
    notesDa: "Ingen regelmæssigt mønster forventet",
    source: "Sundhedsstyrelsen"
  },
  {
    ageMonthsMin: 4,
    ageMonthsMax: 11,
    recommendedMin: 12,
    recommendedMax: 15,
    acceptableMin: 10,
    acceptableMax: 18,
    notes: "Including daytime naps",
    notesDa: "Inklusiv lure om dagen",
    source: "Sundhedsstyrelsen"
  },
  {
    ageMonthsMin: 12,
    ageMonthsMax: 24,
    recommendedMin: 11,
    recommendedMax: 14,
    acceptableMin: 11,
    acceptableMax: 14,
    notes: "Including naps, regular schedule recommended",
    notesDa: "Inklusiv lure, regelmæssig rytme anbefales",
    source: "Sundhedsstyrelsen"
  }
];

const SLEEP_MILESTONES = [
  {
    ageMonths: 3.5,
    title: "More regular rhythm possible",
    titleDa: "Mere fast rytme mulig",
    description: "Baby may start developing a more predictable sleep pattern",
    descriptionDa: "Baby kan begynde at udvikle mere forudsigeligt søvnmønster"
  },
  {
    ageMonths: 7,
    title: "May sleep through",
    titleDa: "Kan sove igennem",
    description: "Some babies start sleeping 5+ hours at a stretch",
    descriptionDa: "Nogle babyer begynder at sove 5+ timer i streg"
  }
];

const HEALTH_CHECKUPS = [
  {
    ageWeeks: 5,
    ageLabel: "5 uger",
    title: "First checkup",
    titleDa: "Første undersøgelse",
    focus: ["Physical exam", "Reflexes", "Growth", "Development"],
    focusDa: ["Fysisk undersøgelse", "Reflekser", "Vækst", "Udvikling"],
    discussions: ["Birth", "Sleep", "Feeding"],
    discussionsDa: ["Fødslen", "Søvn", "Ernæring"],
    vaccines: []
  },
  {
    ageWeeks: 13,
    ageMonths: 3,
    ageLabel: "3 måneder",
    title: "Vaccination visit",
    titleDa: "Vaccinationsbesøg",
    focus: ["Vaccination"],
    focusDa: ["Vaccination"],
    vaccines: ["DiTeKiPol/Hib", "Pneumokokker"]
  },
  {
    ageWeeks: 22,
    ageMonths: 5,
    ageLabel: "5 måneder",
    title: "5 month checkup",
    titleDa: "5 måneders undersøgelse",
    focus: ["Growth", "Milestones", "New concerns"],
    focusDa: ["Vækst", "Milepæle", "Nye bekymringer"],
    discussions: ["Nutrition transition", "Teething", "Fever handling"],
    discussionsDa: ["Ernæringsovergang", "Tandfrembrud", "Feberhåndtering"],
    vaccines: ["DiTeKiPol/Hib", "Pneumokokker"]
  },
  {
    ageWeeks: 52,
    ageMonths: 12,
    ageLabel: "12 måneder",
    title: "1 year checkup",
    titleDa: "1 års undersøgelse",
    focus: ["Mobility", "Independence", "Nutrition transition"],
    focusDa: ["Mobilitet", "Selvstændighed", "Ernæringsovergang"],
    vaccines: ["DiTeKiPol/Hib", "Pneumokokker"]
  },
  {
    ageWeeks: 65,
    ageMonths: 15,
    ageLabel: "15 måneder",
    title: "MFR vaccination",
    titleDa: "MFR vaccination",
    focus: ["Vaccination"],
    focusDa: ["Vaccination"],
    vaccines: ["MFR"]
  },
  {
    ageWeeks: 104,
    ageMonths: 24,
    ageLabel: "2 år",
    title: "2 year checkup",
    titleDa: "2 års undersøgelse",
    focus: ["Language", "Motor development", "Behavior"],
    focusDa: ["Sprog", "Motorisk udvikling", "Adfærd"],
    vaccines: []
  },
  {
    ageWeeks: 156,
    ageMonths: 36,
    ageLabel: "3 år",
    title: "3 year checkup",
    titleDa: "3 års undersøgelse",
    focus: ["Vision screening", "Independence", "Language"],
    focusDa: ["Synsscreening", "Selvstændighed", "Sprog"],
    vaccines: [],
    newScreenings: ["Vision"]
  }
];

const VACCINATIONS = [
  {
    ageMonths: 3,
    ageLabel: "3 måneder",
    vaccines: [
      { name: "DiTeKiPol/Hib", diseases: ["Difteri", "Stivkrampe", "Kighoste", "Polio", "Hib"] },
      { name: "Pneumokokker", diseases: ["Pneumokok-infektion"] }
    ]
  },
  {
    ageMonths: 5,
    ageLabel: "5 måneder",
    vaccines: [
      { name: "DiTeKiPol/Hib", diseases: ["Difteri", "Stivkrampe", "Kighoste", "Polio", "Hib"] },
      { name: "Pneumokokker", diseases: ["Pneumokok-infektion"] }
    ]
  },
  {
    ageMonths: 12,
    ageLabel: "12 måneder",
    vaccines: [
      { name: "DiTeKiPol/Hib", diseases: ["Difteri", "Stivkrampe", "Kighoste", "Polio", "Hib"] },
      { name: "Pneumokokker", diseases: ["Pneumokok-infektion"] }
    ]
  },
  {
    ageMonths: 15,
    ageLabel: "15 måneder",
    vaccines: [
      { name: "MFR", diseases: ["Mæslinger", "Fåresyge", "Røde hunde"], dose: 1 }
    ]
  }
];

const FEEDING_TIMELINE = [
  {
    ageMonthsMin: 0,
    ageMonthsMax: 4,
    title: "Milk only",
    titleDa: "Kun mælk",
    description: "Breast milk or formula exclusively",
    descriptionDa: "Kun modermælk eller erstatning"
  },
  {
    ageMonthsMin: 4,
    ageMonthsMax: 6,
    title: "Taste portions allowed",
    titleDa: "Smagsprøver tilladt",
    description: "Small tastes of food can begin (earliest at 4 months)",
    descriptionDa: "Små smagsprøver kan begynde (tidligst ved 4 måneder)"
  },
  {
    ageMonthsMin: 6,
    ageMonthsMax: 9,
    title: "Start solid foods",
    titleDa: "Start fast føde",
    description: "Must introduce solid foods for proper nutrition",
    descriptionDa: "Skal introducere fast føde for korrekt ernæring",
    important: true
  },
  {
    ageMonthsMin: 9,
    ageMonthsMax: 12,
    title: "Family food",
    titleDa: "Familiemad",
    description: "Can eat modified family food, continue milk",
    descriptionDa: "Kan spise tilpasset familiemad, fortsæt mælk"
  },
  {
    ageMonthsMin: 12,
    ageMonthsMax: 24,
    title: "Regular diet",
    titleDa: "Normal kost",
    description: "Cow's milk allowed, varied diet",
    descriptionDa: "Komælk tilladt, varieret kost"
  }
];

const D_VITAMIN = {
  startWeeks: 2,
  endYears: 4,
  doseMicrograms: 10,
  doseIU: 400,
  dropsPerDay: 5,
  reminderDa: "Husk D-vitamin dråber hver dag!",
  reminder: "Remember D-vitamin drops every day!",
  exception: "Not needed if baby gets ≥800ml formula with 1.3μg/100ml",
  exceptionDa: "Ikke nødvendigt hvis baby får ≥800ml erstatning med 1.3μg/100ml"
};

const OUTDOOR_SLEEP = {
  minWeightGrams: 3000,
  tempLimitCelsius: -10,
  requirements: [
    { text: "Birth weight regained", textDa: "Fødselsvægt genopnået" },
    { text: "Weight over 3000g", textDa: "Vægt over 3000g" },
    { text: "Baby is thriving", textDa: "Baby er i trivsel" }
  ],
  avoid: [
    { text: "Heavy rain", textDa: "Kraftig regn" },
    { text: "Fog", textDa: "Tåge" },
    { text: "Strong wind", textDa: "Kraftig vind" },
    { text: "Below -10°C", textDa: "Under -10°C" }
  ],
  tips: [
    { text: "Check neck temperature (not hands/feet)", textDa: "Tjek temperatur i nakken (ikke hænder/fødder)" },
    { text: "Use baby monitor", textDa: "Brug babyalarm" },
    { text: "Dress in layers, wool recommended", textDa: "Klæd i lag, uld anbefales" },
    { text: "Ensure wind protection", textDa: "Sørg for læ" }
  ],
  source: "Sundhedsstyrelsen"
};

/**
 * Weekly Expectations - Day-by-day for week 0, weekly for others
 * Sources: sundhed.dk, Sundhedsstyrelsen, ammenet.dk
 */
const WEEKLY_EXPECTATIONS = {
  // Week 0: Day-by-day expectations (days 1-7)
  week0: {
    days: [
      {
        day: 1,
        wetDiapers: { min: 1, max: 2 },
        dirtyDiapers: { min: 1, max: 2 },
        feedings: { min: 4, max: 5 },
        poop: {
          color: "black",
          colorDa: "sort",
          type: "meconium",
          typeDa: "mekonium",
          description: "Tar-like, sticky first stool",
          descriptionDa: "Tjæreagtig, klæbrig første afføring"
        },
        notes: "Colostrum feeding begins. Baby may be sleepy.",
        notesDa: "Råmælksamning begynder. Baby kan være søvnig.",
        tips: ["Skin-to-skin contact important", "Wake baby to feed if needed"],
        tipsDa: ["Hud-mod-hud kontakt vigtigt", "Væk baby til amning om nødvendigt"]
      },
      {
        day: 2,
        wetDiapers: { min: 2, max: 3 },
        dirtyDiapers: { min: 1, max: 2 },
        feedings: { min: 6, max: 8 },
        poop: {
          color: "black/dark green",
          colorDa: "sort/mørkegrøn",
          type: "meconium",
          typeDa: "mekonium",
          description: "Still meconium, may see some green",
          descriptionDa: "Stadig mekonium, kan se lidt grønt"
        },
        notes: "Milk starting to come in. Baby more alert, feeds more often.",
        notesDa: "Mælken begynder at komme. Baby mere vågen, spiser oftere.",
        tips: ["Frequent feeding helps milk come in", "Pink/brick dust in diaper is normal"],
        tipsDa: ["Hyppig amning hjælper mælken", "Pink/mursten-farvet i bleen er normalt"]
      },
      {
        day: 3,
        wetDiapers: { min: 3, max: 4 },
        dirtyDiapers: { min: 2, max: 3 },
        feedings: { min: 8, max: 12 },
        poop: {
          color: "dark green/brown-green",
          colorDa: "mørkegrøn/brungrøn",
          type: "transition",
          typeDa: "overgang",
          description: "Transitional stool - less sticky",
          descriptionDa: "Overgangsstol - mindre klæbrig"
        },
        notes: "Milk coming in. Breasts may feel full. Baby cluster feeding normal.",
        notesDa: "Mælken kommer. Brysterne kan føles fulde. Klyngeamning er normalt.",
        tips: ["Feed 10-12 times to prevent jaundice", "Watch for feeding cues"],
        tipsDa: ["Am 10-12 gange for at forebygge gulsot", "Se efter ammetegn"]
      },
      {
        day: 4,
        wetDiapers: { min: 4, max: 6 },
        dirtyDiapers: { min: 3, max: 4 },
        feedings: { min: 8, max: 12 },
        poop: {
          color: "brown-green/yellow-green",
          colorDa: "brungrøn/gulgrøn",
          type: "transition",
          typeDa: "overgang",
          description: "Getting lighter, less sticky",
          descriptionDa: "Bliver lysere, mindre klæbrig"
        },
        notes: "Should be gaining weight now. More wet diapers expected.",
        notesDa: "Bør tage på i vægt nu. Flere våde bleer forventet.",
        tips: ["Heavy wet diapers are good sign", "Baby should seem satisfied after feeds"],
        tipsDa: ["Tunge våde bleer er godt tegn", "Baby bør virke tilfreds efter måltider"]
      },
      {
        day: 5,
        wetDiapers: { min: 6, max: 8 },
        dirtyDiapers: { min: 3, max: 4 },
        feedings: { min: 8, max: 12 },
        poop: {
          color: "yellow-green/yellow",
          colorDa: "gulgrøn/gul",
          type: "milk stool starting",
          typeDa: "mælkeafføring starter",
          description: "Yellow color appearing, seedy texture",
          descriptionDa: "Gul farve viser sig, kornet konsistens"
        },
        notes: "Mature milk established. 6+ wet diapers is the goal.",
        notesDa: "Moden mælk etableret. 6+ våde bleer er målet.",
        tips: ["Sundhedsplejerske visit usually around now", "Note feeding patterns"],
        tipsDa: ["Sundhedsplejerskebesøg normalt omkring nu", "Bemærk ammemønstre"]
      },
      {
        day: 6,
        wetDiapers: { min: 6, max: 8 },
        dirtyDiapers: { min: 3, max: 4 },
        feedings: { min: 8, max: 12 },
        poop: {
          color: "yellow/mustard",
          colorDa: "gul/sennep",
          type: "milk stool",
          typeDa: "mælkeafføring",
          description: "Yellow, seedy, mild smell (breastfed)",
          descriptionDa: "Gul, kornet, mild lugt (ammet)"
        },
        notes: "Pattern establishing. Baby may have growth spurt soon.",
        notesDa: "Mønster etableres. Baby kan have vækstspurt snart.",
        tips: ["Every baby is different - ranges are guides", "Trust your instincts"],
        tipsDa: ["Alle babyer er forskellige - intervaller er vejledende", "Stol på dine instinkter"]
      },
      {
        day: 7,
        wetDiapers: { min: 6, max: 8 },
        dirtyDiapers: { min: 3, max: 4 },
        feedings: { min: 8, max: 12 },
        poop: {
          color: "yellow/mustard",
          colorDa: "gul/sennep",
          type: "milk stool",
          typeDa: "mælkeafføring",
          description: "Established milk stool pattern",
          descriptionDa: "Etableret mælkeafføringsmønster"
        },
        notes: "First week complete! Birth weight should be nearly regained.",
        notesDa: "Første uge færdig! Fødselsvægt bør næsten være genopnået.",
        tips: ["5 ugers undersøgelse coming up", "Start D-vitamin drops at 2 weeks"],
        tipsDa: ["5 ugers undersøgelse kommer snart", "Start D-vitamin dråber ved 2 uger"]
      }
    ]
  },

  // Weeks 1-12: Weekly expectations
  weeks: [
    {
      weekNumber: 1,
      ageLabel: "Uge 1 (dag 8-14)",
      ageLabelEn: "Week 1 (days 8-14)",
      wetDiapers: { min: 6, max: 8, note: "per day", noteDa: "per dag" },
      dirtyDiapers: { min: 3, max: 4, note: "per day", noteDa: "per dag" },
      feedings: { min: 8, max: 12, note: "per day", noteDa: "per dag" },
      poop: {
        breastfed: { color: "Yellow/mustard", colorDa: "Gul/sennep", frequency: "After most feeds", frequencyDa: "Efter de fleste måltider" },
        formulaFed: { color: "Light brown", colorDa: "Lysebrun", frequency: "1-2x daily", frequencyDa: "1-2x dagligt" }
      },
      sleepHours: { min: 14, max: 17 },
      highlights: ["Birth weight should be regained", "Start D-vitamin drops"],
      highlightsDa: ["Fødselsvægt bør være genopnået", "Start D-vitamin dråber"],
      source: "sundhed.dk, Sundhedsstyrelsen"
    },
    {
      weekNumber: 2,
      ageLabel: "Uge 2 (dag 15-21)",
      ageLabelEn: "Week 2 (days 15-21)",
      wetDiapers: { min: 6, max: 8, note: "per day", noteDa: "per dag" },
      dirtyDiapers: { min: 3, max: 4, note: "per day", noteDa: "per dag" },
      feedings: { min: 8, max: 12, note: "per day", noteDa: "per dag" },
      poop: {
        breastfed: { color: "Yellow/mustard", colorDa: "Gul/sennep", frequency: "3-4x daily or more", frequencyDa: "3-4x dagligt eller mere" },
        formulaFed: { color: "Light brown", colorDa: "Lysebrun", frequency: "1-2x daily", frequencyDa: "1-2x dagligt" }
      },
      sleepHours: { min: 14, max: 17 },
      highlights: ["D-vitamin drops daily from now", "First growth spurt possible"],
      highlightsDa: ["D-vitamin dråber dagligt fra nu", "Første vækstspurt mulig"],
      source: "sundhed.dk, Sundhedsstyrelsen"
    },
    {
      weekNumber: 3,
      ageLabel: "Uge 3 (dag 22-28)",
      ageLabelEn: "Week 3 (days 22-28)",
      wetDiapers: { min: 6, max: 8, note: "per day", noteDa: "per dag" },
      dirtyDiapers: { min: 3, max: 4, note: "per day", noteDa: "per dag" },
      feedings: { min: 8, max: 12, note: "per day", noteDa: "per dag" },
      poop: {
        breastfed: { color: "Yellow/mustard", colorDa: "Gul/sennep", frequency: "3-4x daily", frequencyDa: "3-4x dagligt" },
        formulaFed: { color: "Light brown", colorDa: "Lysebrun", frequency: "1-2x daily", frequencyDa: "1-2x dagligt" }
      },
      sleepHours: { min: 14, max: 17 },
      highlights: ["Growth spurt around 3 weeks common", "Cluster feeding normal"],
      highlightsDa: ["Vækstspurt omkring 3 uger er normalt", "Klyngeamning er normalt"],
      source: "sundhed.dk, Sundhedsstyrelsen"
    },
    {
      weekNumber: 4,
      ageLabel: "Uge 4 (1 måned)",
      ageLabelEn: "Week 4 (1 month)",
      wetDiapers: { min: 6, max: 8, note: "per day", noteDa: "per dag" },
      dirtyDiapers: { min: 1, max: 4, note: "per day (can vary)", noteDa: "per dag (kan variere)" },
      feedings: { min: 7, max: 10, note: "per day", noteDa: "per dag" },
      poop: {
        breastfed: { color: "Yellow/mustard", colorDa: "Gul/sennep", frequency: "1-4x daily (varies widely)", frequencyDa: "1-4x dagligt (varierer meget)" },
        formulaFed: { color: "Light brown", colorDa: "Lysebrun", frequency: "1-2x daily", frequencyDa: "1-2x dagligt" }
      },
      sleepHours: { min: 14, max: 17 },
      highlights: ["Poop frequency may decrease for breastfed", "5 ugers undersøgelse coming soon"],
      highlightsDa: ["Afføringsfrekvens kan falde for ammede", "5 ugers undersøgelse kommer snart"],
      source: "sundhed.dk, Sundhedsstyrelsen"
    },
    {
      weekNumber: 5,
      ageLabel: "Uge 5",
      ageLabelEn: "Week 5",
      wetDiapers: { min: 6, max: 8, note: "per day", noteDa: "per dag" },
      dirtyDiapers: { min: 1, max: 4, note: "per day", noteDa: "per dag" },
      feedings: { min: 7, max: 10, note: "per day", noteDa: "per dag" },
      poop: {
        breastfed: { color: "Yellow/mustard", colorDa: "Gul/sennep", frequency: "Daily to every few days", frequencyDa: "Dagligt til hver få dage" },
        formulaFed: { color: "Light brown", colorDa: "Lysebrun", frequency: "1-2x daily", frequencyDa: "1-2x dagligt" }
      },
      sleepHours: { min: 14, max: 17 },
      highlights: ["5 ugers børneundersøgelse", "First social smiles appearing"],
      highlightsDa: ["5 ugers børneundersøgelse", "Første sociale smil viser sig"],
      healthCheckup: true,
      source: "sundhed.dk, Sundhedsstyrelsen"
    },
    {
      weekNumber: 6,
      ageLabel: "Uge 6",
      ageLabelEn: "Week 6",
      wetDiapers: { min: 6, max: 8, note: "per day", noteDa: "per dag" },
      dirtyDiapers: { min: 1, max: 4, note: "per day", noteDa: "per dag" },
      feedings: { min: 6, max: 10, note: "per day", noteDa: "per dag" },
      poop: {
        breastfed: { color: "Yellow/mustard", colorDa: "Gul/sennep", frequency: "Varies - daily to weekly OK", frequencyDa: "Varierer - dagligt til ugentligt OK" },
        formulaFed: { color: "Light brown", colorDa: "Lysebrun", frequency: "1-2x daily", frequencyDa: "1-2x dagligt" }
      },
      sleepHours: { min: 14, max: 17 },
      highlights: ["6 week growth spurt common", "Peak of fussiness/colic"],
      highlightsDa: ["6 ugers vækstspurt normalt", "Højdepunkt for uro/kolik"],
      source: "sundhed.dk, Sundhedsstyrelsen"
    },
    {
      weekNumber: 7,
      ageLabel: "Uge 7",
      ageLabelEn: "Week 7",
      wetDiapers: { min: 5, max: 8, note: "per day", noteDa: "per dag" },
      dirtyDiapers: { min: 1, max: 4, note: "per day", noteDa: "per dag" },
      feedings: { min: 6, max: 10, note: "per day", noteDa: "per dag" },
      poop: {
        breastfed: { color: "Yellow/mustard", colorDa: "Gul/sennep", frequency: "1x/day to 1x/week normal", frequencyDa: "1x/dag til 1x/uge normalt" },
        formulaFed: { color: "Light brown", colorDa: "Lysebrun", frequency: "1-2x daily", frequencyDa: "1-2x dagligt" }
      },
      sleepHours: { min: 14, max: 17 },
      highlights: ["More alert periods", "Starting to coo and make sounds"],
      highlightsDa: ["Flere vågne perioder", "Begynder at kurre og lave lyde"],
      source: "sundhed.dk, Sundhedsstyrelsen"
    },
    {
      weekNumber: 8,
      ageLabel: "Uge 8 (2 måneder)",
      ageLabelEn: "Week 8 (2 months)",
      wetDiapers: { min: 5, max: 8, note: "per day", noteDa: "per dag" },
      dirtyDiapers: { min: 1, max: 3, note: "per day", noteDa: "per dag" },
      feedings: { min: 6, max: 9, note: "per day", noteDa: "per dag" },
      poop: {
        breastfed: { color: "Yellow/mustard", colorDa: "Gul/sennep", frequency: "Can go days without - normal", frequencyDa: "Kan gå dage uden - normalt" },
        formulaFed: { color: "Light brown", colorDa: "Lysebrun", frequency: "Daily", frequencyDa: "Dagligt" }
      },
      sleepHours: { min: 14, max: 17 },
      highlights: ["Poop frequency often decreases", "Better head control developing"],
      highlightsDa: ["Afføringsfrekvens falder ofte", "Bedre hovedkontrol udvikles"],
      source: "sundhed.dk, Sundhedsstyrelsen"
    },
    {
      weekNumber: 9,
      ageLabel: "Uge 9",
      ageLabelEn: "Week 9",
      wetDiapers: { min: 5, max: 8, note: "per day", noteDa: "per dag" },
      dirtyDiapers: { min: 1, max: 3, note: "per day", noteDa: "per dag" },
      feedings: { min: 6, max: 9, note: "per day", noteDa: "per dag" },
      poop: {
        breastfed: { color: "Yellow/mustard", colorDa: "Gul/sennep", frequency: "Every 1-7 days normal", frequencyDa: "Hver 1-7 dage normalt" },
        formulaFed: { color: "Light brown", colorDa: "Lysebrun", frequency: "Daily", frequencyDa: "Dagligt" }
      },
      sleepHours: { min: 14, max: 17 },
      highlights: ["Rolling from side to back possible", "More interaction with world"],
      highlightsDa: ["Rulle fra side til ryg muligt", "Mere interaktion med verden"],
      source: "sundhed.dk, Sundhedsstyrelsen"
    },
    {
      weekNumber: 10,
      ageLabel: "Uge 10",
      ageLabelEn: "Week 10",
      wetDiapers: { min: 5, max: 8, note: "per day", noteDa: "per dag" },
      dirtyDiapers: { min: 1, max: 3, note: "per day", noteDa: "per dag" },
      feedings: { min: 6, max: 9, note: "per day", noteDa: "per dag" },
      poop: {
        breastfed: { color: "Yellow/mustard", colorDa: "Gul/sennep", frequency: "Every 1-7 days normal", frequencyDa: "Hver 1-7 dage normalt" },
        formulaFed: { color: "Light brown", colorDa: "Lysebrun", frequency: "Daily", frequencyDa: "Dagligt" }
      },
      sleepHours: { min: 14, max: 17 },
      highlights: ["Colic usually improving", "Longer sleep stretches possible"],
      highlightsDa: ["Kolik forbedres normalt", "Længere søvnstræk mulige"],
      source: "sundhed.dk, Sundhedsstyrelsen"
    },
    {
      weekNumber: 11,
      ageLabel: "Uge 11",
      ageLabelEn: "Week 11",
      wetDiapers: { min: 5, max: 8, note: "per day", noteDa: "per dag" },
      dirtyDiapers: { min: 1, max: 3, note: "per day", noteDa: "per dag" },
      feedings: { min: 6, max: 9, note: "per day", noteDa: "per dag" },
      poop: {
        breastfed: { color: "Yellow/mustard", colorDa: "Gul/sennep", frequency: "Every 1-7 days normal", frequencyDa: "Hver 1-7 dage normalt" },
        formulaFed: { color: "Light brown", colorDa: "Lysebrun", frequency: "Daily", frequencyDa: "Dagligt" }
      },
      sleepHours: { min: 14, max: 17 },
      highlights: ["Hands more open", "Reaching toward objects"],
      highlightsDa: ["Hænderne mere åbne", "Rækker mod genstande"],
      source: "sundhed.dk, Sundhedsstyrelsen"
    },
    {
      weekNumber: 12,
      ageLabel: "Uge 12 (3 måneder)",
      ageLabelEn: "Week 12 (3 months)",
      wetDiapers: { min: 5, max: 8, note: "per day", noteDa: "per dag" },
      dirtyDiapers: { min: 1, max: 3, note: "per day", noteDa: "per dag" },
      feedings: { min: 5, max: 8, note: "per day", noteDa: "per dag" },
      poop: {
        breastfed: { color: "Yellow/mustard", colorDa: "Gul/sennep", frequency: "Every 1-7 days normal", frequencyDa: "Hver 1-7 dage normalt" },
        formulaFed: { color: "Light brown", colorDa: "Lysebrun", frequency: "Daily", frequencyDa: "Dagligt" }
      },
      sleepHours: { min: 14, max: 17 },
      highlights: ["3 month growth spurt", "First vaccinations due"],
      highlightsDa: ["3 måneders vækstspurt", "Første vaccinationer"],
      vaccination: true,
      source: "sundhed.dk, Sundhedsstyrelsen"
    }
  ],

  // Monthly expectations for months 4-24
  months: [
    {
      month: 4,
      ageLabel: "4 måneder",
      ageLabelEn: "4 months",
      wetDiapers: { min: 4, max: 6, note: "per day", noteDa: "per dag" },
      dirtyDiapers: { min: 1, max: 2, note: "per day (varies)", noteDa: "per dag (varierer)" },
      feedings: { min: 5, max: 7, note: "per day", noteDa: "per dag" },
      sleepHours: { min: 12, max: 15 },
      highlights: ["May start tasting food (earliest)", "Rolling both ways"],
      highlightsDa: ["Kan begynde smagsprøver (tidligst)", "Ruller begge veje"],
      source: "Sundhedsstyrelsen"
    },
    {
      month: 5,
      ageLabel: "5 måneder",
      ageLabelEn: "5 months",
      wetDiapers: { min: 4, max: 6, note: "per day", noteDa: "per dag" },
      dirtyDiapers: { min: 1, max: 2, note: "per day", noteDa: "per dag" },
      feedings: { min: 5, max: 7, note: "per day + starting solids", noteDa: "per dag + starter fast føde" },
      sleepHours: { min: 12, max: 15 },
      highlights: ["5 month checkup + vaccination", "Sitting with support"],
      highlightsDa: ["5 måneders undersøgelse + vaccination", "Sidder med støtte"],
      healthCheckup: true,
      vaccination: true,
      source: "Sundhedsstyrelsen"
    },
    {
      month: 6,
      ageLabel: "6 måneder",
      ageLabelEn: "6 months",
      wetDiapers: { min: 4, max: 6, note: "per day", noteDa: "per dag" },
      dirtyDiapers: { min: 1, max: 3, note: "per day (changes with solids)", noteDa: "per dag (ændres med mad)" },
      feedings: { min: 4, max: 6, note: "milk feeds + 1-2 solid meals", noteDa: "mælkemåltider + 1-2 faste måltider" },
      sleepHours: { min: 12, max: 15 },
      highlights: ["MUST start solid foods now", "May start sleeping through"],
      highlightsDa: ["SKAL starte fast føde nu", "Kan begynde at sove igennem"],
      importantFeeding: true,
      source: "Sundhedsstyrelsen"
    },
    {
      month: 7,
      ageLabel: "7 måneder",
      ageLabelEn: "7 months",
      wetDiapers: { min: 4, max: 6, note: "per day", noteDa: "per dag" },
      dirtyDiapers: { min: 1, max: 3, note: "per day", noteDa: "per dag" },
      feedings: { min: 4, max: 6, note: "milk + 2 solid meals", noteDa: "mælk + 2 faste måltider" },
      sleepHours: { min: 12, max: 15 },
      highlights: ["Poop changes with solid foods", "Sitting independently soon"],
      highlightsDa: ["Afføring ændres med fast føde", "Sidder snart selvstændigt"],
      source: "Sundhedsstyrelsen"
    },
    {
      month: 8,
      ageLabel: "8 måneder",
      ageLabelEn: "8 months",
      wetDiapers: { min: 4, max: 6, note: "per day", noteDa: "per dag" },
      dirtyDiapers: { min: 1, max: 3, note: "per day", noteDa: "per dag" },
      feedings: { min: 4, max: 5, note: "milk + 2-3 solid meals", noteDa: "mælk + 2-3 faste måltider" },
      sleepHours: { min: 12, max: 15 },
      highlights: ["Crawling may begin", "Stranger anxiety normal"],
      highlightsDa: ["Kravlen kan begynde", "Fremmedangst er normalt"],
      source: "Sundhedsstyrelsen"
    },
    {
      month: 9,
      ageLabel: "9 måneder",
      ageLabelEn: "9 months",
      wetDiapers: { min: 4, max: 6, note: "per day", noteDa: "per dag" },
      dirtyDiapers: { min: 1, max: 3, note: "per day", noteDa: "per dag" },
      feedings: { min: 3, max: 5, note: "milk + 3 meals", noteDa: "mælk + 3 måltider" },
      sleepHours: { min: 12, max: 15 },
      highlights: ["Can eat family food (modified)", "Sitting well independently"],
      highlightsDa: ["Kan spise familiemad (tilpasset)", "Sidder godt selvstændigt"],
      source: "Sundhedsstyrelsen"
    },
    {
      month: 10,
      ageLabel: "10 måneder",
      ageLabelEn: "10 months",
      wetDiapers: { min: 4, max: 6, note: "per day", noteDa: "per dag" },
      dirtyDiapers: { min: 1, max: 3, note: "per day", noteDa: "per dag" },
      feedings: { min: 3, max: 5, note: "milk + 3 meals", noteDa: "mælk + 3 måltider" },
      sleepHours: { min: 12, max: 15 },
      highlights: ["Pulling to stand", "Pincer grasp developing"],
      highlightsDa: ["Trækker sig op til stående", "Pincetgreb udvikles"],
      source: "Sundhedsstyrelsen"
    },
    {
      month: 11,
      ageLabel: "11 måneder",
      ageLabelEn: "11 months",
      wetDiapers: { min: 4, max: 6, note: "per day", noteDa: "per dag" },
      dirtyDiapers: { min: 1, max: 3, note: "per day", noteDa: "per dag" },
      feedings: { min: 3, max: 4, note: "milk + 3 meals + snacks", noteDa: "mælk + 3 måltider + snacks" },
      sleepHours: { min: 12, max: 15 },
      highlights: ["Cruising along furniture", "First words possible"],
      highlightsDa: ["Går langs møbler", "Første ord mulige"],
      source: "Sundhedsstyrelsen"
    },
    {
      month: 12,
      ageLabel: "12 måneder (1 år)",
      ageLabelEn: "12 months (1 year)",
      wetDiapers: { min: 4, max: 6, note: "per day", noteDa: "per dag" },
      dirtyDiapers: { min: 1, max: 2, note: "per day", noteDa: "per dag" },
      feedings: { min: 3, max: 4, note: "3 meals + milk/snacks", noteDa: "3 måltider + mælk/snacks" },
      sleepHours: { min: 11, max: 14 },
      highlights: ["1 year checkup + vaccination", "Cow's milk allowed now", "Walking soon"],
      highlightsDa: ["1 års undersøgelse + vaccination", "Komælk tilladt nu", "Går snart"],
      healthCheckup: true,
      vaccination: true,
      source: "Sundhedsstyrelsen"
    }
  ]
};

/**
 * Critical Health Information
 * Sources: Sundhedsstyrelsen, sundhed.dk, SSI
 * See /research/ folder for full documentation
 */

const JAUNDICE = {
  prevalence: {
    fullTerm: 60, // percent
    premature: 80
  },
  timeline: {
    onsetDays: "2-4",
    peakDays: "3-5",
    resolutionDays: "7-14",
    breastfedResolution: "up to 3 weeks"
  },
  warningsSigns: {
    emergency: [
      { sign: "Unresponsive baby", signDa: "Barnet reagerer ikke", action: "Call 112" },
      { sign: "High-pitched cry", signDa: "Skingrende gråd", action: "Call 112" },
      { sign: "Arched back, stiff body", signDa: "Buet ryg, stiv krop", action: "Call 112" },
      { sign: "Fever with jaundice", signDa: "Feber med gulsot", action: "Call 112" }
    ],
    urgent: [
      { sign: "Jaundice within 24 hours", signDa: "Gulsot inden for 24 timer", action: "See doctor immediately" },
      { sign: "Very sleepy, hard to wake", signDa: "Meget søvnig, svær at vække", action: "See doctor" },
      { sign: "Poor feeding", signDa: "Dårlig amning", action: "See doctor" },
      { sign: "Pale/white stool", signDa: "Bleg/hvid afføring", action: "See doctor immediately" }
    ],
    monitor: [
      { sign: "Jaundice beyond 14 days", signDa: "Gulsot efter 14 dage", action: "Contact doctor" }
    ]
  },
  info: {
    title: "Jaundice",
    titleDa: "Gulsot",
    description: "Yellow discoloration of skin/eyes from bilirubin buildup",
    descriptionDa: "Gul misfarvning af hud/øjne fra bilirubinophobning",
    note: "Common and usually harmless - resolves with frequent feeding",
    noteDa: "Almindeligt og normalt ufarligt - forsvinder med hyppig amning"
  },
  source: "sundhed.dk"
};

const FEVER_GUIDELINES = {
  thresholds: {
    under3Months: {
      temp: 38.0,
      action: "See doctor immediately",
      actionDa: "Kontakt læge straks",
      urgent: true
    },
    months3to6: {
      temp: 38.0,
      action: "Contact doctor same day",
      actionDa: "Kontakt læge samme dag",
      urgent: true
    },
    months6to12: {
      monitorTemp: 38.5,
      concernTemp: 39.0,
      urgentTemp: 40.0
    },
    over12Months: {
      monitorTemp: 39.0,
      concernTemp: 40.0
    }
  },
  emergencySigns: [
    { sign: "Difficulty breathing", signDa: "Vejrtrækningsbesvær", action: "112" },
    { sign: "Blue lips/tongue", signDa: "Blå læber/tunge", action: "112" },
    { sign: "Unresponsive", signDa: "Reagerer ikke", action: "112" },
    { sign: "Seizure", signDa: "Kramper", action: "112" },
    { sign: "Non-blanching rash", signDa: "Udslæt der ikke forsvinder ved tryk", action: "112" },
    { sign: "Bulging fontanelle", signDa: "Udbulet fontanelle", action: "112" }
  ],
  urgentSigns: [
    { sign: "Won't drink fluids", signDa: "Vil ikke drikke" },
    { sign: "Very sleepy", signDa: "Meget søvnig" },
    { sign: "Weak or floppy", signDa: "Slap" },
    { sign: "Crying inconsolably", signDa: "Græder utrøsteligt" },
    { sign: "Fewer wet diapers", signDa: "Færre våde bleer" }
  ],
  dehydrationSigns: [
    { sign: "Dry mouth/lips", signDa: "Tør mund/læber", severity: "mild" },
    { sign: "Fewer wet diapers", signDa: "Færre våde bleer", severity: "moderate" },
    { sign: "No tears when crying", signDa: "Ingen tårer ved gråd", severity: "moderate" },
    { sign: "Sunken fontanelle", signDa: "Indsunket fontanelle", severity: "severe" },
    { sign: "Sunken eyes", signDa: "Indsunkne øjne", severity: "severe" }
  ],
  contacts: {
    emergency: "112",
    medicalHelpline: "1813",
    poisonControl: "82 12 12 12"
  },
  keyMessage: "Under 6 months with fever = always contact doctor",
  keyMessageDa: "Under 6 måneder med feber = kontakt altid læge",
  source: "Sundhedsstyrelsen"
};

const SIDS_PREVENTION = {
  mainRiskFactors: [
    {
      factor: "Sleep position",
      factorDa: "Sovstilling",
      risk: "Stomach or side sleeping",
      riskDa: "Mave- eller sideliggende",
      prevention: "Always place on back",
      preventionDa: "Læg altid på ryggen"
    },
    {
      factor: "Tobacco exposure",
      factorDa: "Tobaksudsættelse",
      risk: "Smoke during pregnancy or around baby",
      riskDa: "Røg under graviditet eller omkring baby",
      prevention: "Smoke-free environment",
      preventionDa: "Røgfrit miljø"
    },
    {
      factor: "Overheating",
      factorDa: "Overophedning",
      risk: "Too warm, overdressed, covered head",
      riskDa: "For varmt, for meget tøj, tildækket hoved",
      prevention: "Appropriate temperature and clothing",
      preventionDa: "Passende temperatur og påklædning"
    }
  ],
  safeSleeGuidelines: [
    { guideline: "Always on back to sleep", guidelineDa: "Altid på ryggen til søvn" },
    { guideline: "Own sleep space (crib/bassinet)", guidelineDa: "Eget sovested (seng/vugge)" },
    { guideline: "Firm mattress", guidelineDa: "Fast madras" },
    { guideline: "Empty crib - no pillows, blankets, toys", guidelineDa: "Tom seng - ingen puder, tæpper, legetøj" },
    { guideline: "Room share for first 6 months", guidelineDa: "Del rum de første 6 måneder" },
    { guideline: "Room temperature 16-20°C", guidelineDa: "Stuetemperatur 16-20°C" }
  ],
  protectiveFactors: [
    { factor: "Breastfeeding", factorDa: "Amning" },
    { factor: "Pacifier at sleep time", factorDa: "Sut ved sovetid" },
    { factor: "Room sharing (not bed sharing)", factorDa: "Deling af værelse (ikke seng)" },
    { factor: "Immunizations up to date", factorDa: "Vaccinationer opdateret" }
  ],
  statistics: {
    deathsBefore: 120,
    deathsAfter: 5,
    note: "Deaths per year in Denmark after guidelines implemented"
  },
  roomTemp: { min: 16, max: 20 },
  keyMessage: "Back to sleep, every sleep",
  keyMessageDa: "På ryggen til søvn, hver søvn",
  source: "Sundhedsstyrelsen"
};

const COLIC = {
  definition: {
    cryingHoursPerDay: 3,
    daysPerWeek: 3,
    maxAgeMonths: 5,
    description: "Excessive crying in otherwise healthy baby",
    descriptionDa: "Overdreven gråd hos ellers sundt barn"
  },
  timeline: {
    onsetWeeks: 2,
    peakWeeks: 6,
    improvementWeeks: "8-12",
    resolutionMonths: "3-4",
    maxDurationMonths: 5
  },
  prevalence: { min: 8, max: 40 }, // percent
  typicalTiming: "Late afternoon/evening",
  typicalTimingDa: "Sen eftermiddag/aften",
  soothingTechniques: {
    movement: [
      { technique: "Gentle rocking", techniqueDa: "Forsigtig vuggen" },
      { technique: "Walking with baby", techniqueDa: "Gåtur med baby" },
      { technique: "Car ride", techniqueDa: "Køretur" },
      { technique: "Stroller walk", techniqueDa: "Barnevognstur" }
    ],
    sound: [
      { technique: "White noise", techniqueDa: "Hvid støj" },
      { technique: "Shushing sounds", techniqueDa: "Suselyde" },
      { technique: "Soft music", techniqueDa: "Blød musik" }
    ],
    touch: [
      { technique: "Swaddling", techniqueDa: "Svøbning" },
      { technique: "Skin-to-skin", techniqueDa: "Hud-mod-hud" },
      { technique: "Gentle tummy massage", techniqueDa: "Blid mavemassage" },
      { technique: "Warm bath", techniqueDa: "Varmt bad" }
    ],
    sucking: [
      { technique: "Pacifier", techniqueDa: "Sut" },
      { technique: "Breastfeeding for comfort", techniqueDa: "Amning for trøst" }
    ]
  },
  warningsSigns: [
    { sign: "Fever", signDa: "Feber" },
    { sign: "Vomiting", signDa: "Opkastning" },
    { sign: "Blood in stool", signDa: "Blod i afføring" },
    { sign: "Poor weight gain", signDa: "Dårlig vægtøgning" },
    { sign: "Refuses to eat", signDa: "Nægter at spise" }
  ],
  parentMessage: "It's okay to put baby down safely and take a break",
  parentMessageDa: "Det er okay at lægge baby sikkert ned og tage en pause",
  keyMessage: "Colic always resolves by 5 months - you're not doing anything wrong",
  keyMessageDa: "Kolik forsvinder altid inden 5 måneder - du gør intet forkert",
  source: "sundhed.dk"
};

const UMBILICAL_CARE = {
  timeline: {
    typicalFallOffDays: "7-10",
    maxNormalDays: 21,
    healingAfterDays: "7-14"
  },
  careInstructions: {
    dos: [
      { action: "Keep dry", actionDa: "Hold tør" },
      { action: "Keep clean (water only)", actionDa: "Hold ren (kun vand)" },
      { action: "Give air exposure", actionDa: "Giv luft" },
      { action: "Fold diaper below stump", actionDa: "Fold bleen under stumpen" },
      { action: "Let fall off naturally", actionDa: "Lad falde af naturligt" }
    ],
    donts: [
      { action: "Don't use alcohol/disinfectant", actionDa: "Brug ikke sprit/desinfektionsmiddel" },
      { action: "Don't cover with bandages", actionDa: "Dæk ikke med forbinding" },
      { action: "Don't pull it off", actionDa: "Træk den ikke af" },
      { action: "Don't submerge in bath", actionDa: "Nedsænk ikke i bad" },
      { action: "Don't apply lotions/powders", actionDa: "Påfør ikke lotion/pudder" }
    ]
  },
  infectionSigns: [
    { sign: "Spreading redness", signDa: "Spredende rødme" },
    { sign: "Swelling", signDa: "Hævelse" },
    { sign: "Foul smell", signDa: "Ildelugtende" },
    { sign: "Pus or discharge", signDa: "Pus eller væske" },
    { sign: "Excessive bleeding", signDa: "Kraftig blødning" },
    { sign: "Fever", signDa: "Feber" }
  ],
  whenToContact: [
    "Redness spreading around base",
    "Foul smell",
    "Pus or yellow/green discharge",
    "Bleeding more than a few drops",
    "Baby has fever",
    "Hasn't fallen off by 4 weeks"
  ],
  keyMessage: "Keep it simple - clean, dry, and exposed to air",
  keyMessageDa: "Hold det simpelt - rent, tørt og udsat for luft",
  source: "sundhed.dk"
};

const SUN_PROTECTION = {
  ageGuidelines: {
    nonMobileInfants: {
      strategy: "Avoid direct sunlight completely",
      strategyDa: "Undgå direkte sollys fuldstændigt",
      sunscreen: "Not needed if kept in shade",
      sunscreenDa: "Ikke nødvendigt hvis i skygge"
    },
    months6to12: {
      strategy: "Shade + clothing + limited sunscreen",
      strategyDa: "Skygge + tøj + begrænset solcreme",
      sunscreen: "SPF 30+ on exposed areas"
    },
    over12Months: {
      strategy: "Full protection plan",
      strategyDa: "Fuld beskyttelsesplan",
      sunscreen: "SPF 30+ all exposed skin, reapply every 2 hours"
    }
  },
  uvIndex: {
    protectionNeeded: 3,
    highUvMonths: "April-September",
    peakHours: "12:00-15:00"
  },
  protectionMethods: {
    shade: ["Parasol", "Canopy/tent", "Trees", "Stroller canopy"],
    clothing: {
      features: ["Long sleeves", "Long pants", "Tightly woven fabric", "Dark colors"],
      hat: "Wide brim covering face, ears, neck"
    },
    sunscreen: {
      minSPF: 30,
      type: "Broad spectrum (UVA + UVB)",
      preferred: "Physical/mineral (zinc oxide, titanium dioxide)",
      avoidUnder12: ["4-MBC (hormone disrupting)"],
      reapplyHours: 2
    }
  },
  warnings: {
    strollerBlanket: "Do NOT cover stroller with blanket - causes overheating",
    strollerBlanketDa: "Dæk IKKE klapvognen med tæppe - forårsager overophedning"
  },
  keyMessage: "Keep non-mobile babies out of direct sun completely",
  keyMessageDa: "Hold ikke-mobile babyer helt væk fra direkte sollys",
  source: "Sundhedsstyrelsen"
};

const ALLERGY_PREVENTION = {
  eggIntroduction: {
    startAgeMonths: "4-6",
    amount: "Half a small hard-boiled egg",
    amountDa: "Halvt lille hårdkogt æg",
    frequency: "Twice per week",
    frequencyDa: "To gange om ugen",
    how: "Mixed with other food",
    howDa: "Blandet med anden mad"
  },
  commonAllergens: [
    { food: "Egg", foodDa: "Æg", notes: "Hard-boiled, well-cooked" },
    { food: "Peanut", foodDa: "Jordnød", notes: "Peanut butter, not whole nuts" },
    { food: "Fish", foodDa: "Fisk", notes: "Well-cooked" },
    { food: "Wheat", foodDa: "Hvede", notes: "In cereals, bread" },
    { food: "Milk products", foodDa: "Mælkeprodukter", notes: "Yogurt, cheese (not as drink)" }
  ],
  cautionIf: [
    "Family history of severe food allergies",
    "Baby has eczema",
    "Baby has existing known allergies",
    "Previous allergic reactions"
  ],
  keyMessage: "Early introduction of allergens may reduce allergy risk",
  keyMessageDa: "Tidlig introduktion af allergener kan reducere allergirisiko",
  source: "Sundhedsstyrelsen 2022"
};

const POOP_GUIDE = {
  meconium: {
    title: "Meconium",
    titleDa: "Mekonium",
    description: "First stool - black, sticky, tar-like",
    descriptionDa: "Første afføring - sort, klæbrig, tjæreagtig",
    duration: "First 24-48 hours",
    durationDa: "Første 24-48 timer"
  },
  breastfed: {
    title: "Breastfed baby",
    titleDa: "Ammet baby",
    colors: ["Yellow/mustard", "Yellow-green", "Brownish"],
    colorsDa: ["Gul/sennep", "Gulgrøn", "Brunlig"],
    consistency: "Creamy, grainy (like mustard)",
    consistencyDa: "Cremet, kornet (som sennep)",
    frequency: [
      { age: "0-4 weeks", freq: "After every feed (6-10x/day)", freqDa: "Efter hvert måltid (6-10x/dag)" },
      { age: "1+ months", freq: "1x/day to 1x/week", freqDa: "1x/dag til 1x/uge" }
    ]
  },
  formulaFed: {
    title: "Formula-fed baby",
    titleDa: "Flaskeernæret baby",
    colors: ["Light brown", "Tan", "Pale yellow"],
    colorsDa: ["Lysebrun", "Beige", "Bleg gul"],
    consistency: "Firmer, more formed",
    consistencyDa: "Fastere, mere formet",
    frequency: "1-2x daily",
    frequencyDa: "1-2x dagligt"
  },
  warningsSigns: [
    { sign: "White/pale", signDa: "Hvid/bleg", concern: "Liver issues", concernDa: "Leverproblemer", action: "See doctor immediately" },
    { sign: "Blood", signDa: "Blod", concern: "Irritation/allergy", concernDa: "Irritation/allergi", action: "See doctor" },
    { sign: "Black (after day 3)", signDa: "Sort (efter dag 3)", concern: "GI bleeding", concernDa: "Blødning", action: "See doctor immediately" }
  ]
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    MILESTONES,
    SLEEP_RECOMMENDATIONS,
    SLEEP_MILESTONES,
    HEALTH_CHECKUPS,
    VACCINATIONS,
    FEEDING_TIMELINE,
    D_VITAMIN,
    OUTDOOR_SLEEP,
    POOP_GUIDE,
    WEEKLY_EXPECTATIONS,
    // Critical Health Information
    JAUNDICE,
    FEVER_GUIDELINES,
    SIDS_PREVENTION,
    COLIC,
    UMBILICAL_CARE,
    SUN_PROTECTION,
    ALLERGY_PREVENTION
  };
}
