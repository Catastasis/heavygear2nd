export const SKILLS = {
        "acrobatics": {
            "name": "Acrobatics",
            "attribute": "AGI",
            "isComplex": false,
            "defaultSpecs": ["Leaps and Jumps", "Tumbling", "Tightrope", "Trapeze", "Diving"],
            "prerequisites": []
        },
        "aircraftPilot": {
            "name": "Aircraft Pilot",
            "attribute": "AGI",
            "isComplex": true,
            "defaultSpecs": ["Jets", "VTOL", "Hot Air Balloon", "Prop", "Helicopter"],
            "prerequisites": []
        },
        "animalHandling": {
            "name": "Animal Handling",
            "attribute": "CRE",
            "isComplex": false,
            "defaultSpecs": ["Specific Animal", "Herding", "Performing Tricks"],
            "prerequisites": []
        },
        "archery": {
            "name": "Archery",
            "attribute": "AGI",
            "isComplex": false,
            "defaultSpecs": ["Longbow", "Compound Bow", "Crossbow", "Sling"],
            "prerequisites": []
        },
        "athletics": {
            "name": "Athletics",
            "attribute": "FIT",
            "isComplex": false,
            "defaultSpecs": ["Running", "Football", "Volleyball", "Climbing", "Break Fall"],
            "prerequisites": []
        },
        "bureaucracy": {
            "name": "Bureaucracy",
            "attribute": "KNO",
            "isComplex": true,
            "defaultSpecs": ["Government", "Military", "Customs", "Bribery", "Corporate"],
            "prerequisites": []
        },
        "business": {
            "name": "Business",
            "attribute": "KNO",
            "isComplex": true,
            "defaultSpecs": ["Finance", "Management", "Trade", "Accounting", "Economics"],
            "prerequisites": []
        },
        "camouflage": {
            "name": "Camouflage",
            "attribute": "CRE",
            "isComplex": false,
            "defaultSpecs": ["Jungle", "Urban", "Desert", "Winter"],
            "prerequisites": []
        },
        "combatSense": {
            "name": "Combat Sense",
            "attribute": "PER",
            "isComplex": false,
            "defaultSpecs": ["Urban", "Jungle", "Marsh", "Night-time", "Ambushes"],
            "prerequisites": []
        },
        "communications": {
            "name": "Communications",
            "attribute": "KNO",
            "isComplex": true,
            "defaultSpecs": ["Coded Messages", "Jamming", "Listening Devices"],
            "prerequisites": []
        },
        "computer": {
            "name": "Computer",
            "attribute": "KNO",
            "isComplex": true,
            "defaultSpecs": ["Programming", "Systems Administration", "Neural Nets"],
            "prerequisites": []
        },
        "cooking": {
            "name": "Cooking",
            "attribute": "CRE",
            "isComplex": false,
            "defaultSpecs": ["Vegetarian", "Country", "Meats", "Baking"],
            "prerequisites": []
        },
        "craftSpecific": {
            "name": "Craft (Specific)",
            "attribute": "CRE",
            "isComplex": false,
            "defaultSpecs": ["Commercial", "Specific sub-category of the Craft"],
            "prerequisites": []
        },
        "dance": {
            "name": "Dance",
            "attribute": "AGI",
            "isComplex": false,
            "defaultSpecs": ["Ballroom", "Tribal", "Modern", "Ballet"],
            "prerequisites": []
        },
        "demolition": {
            "name": "Demolition",
            "attribute": "KNO",
            "isComplex": true,
            "defaultSpecs": ["Mining", "Military", "Construction"],
            "prerequisites": []
        },
        "disguise": {
            "name": "Disguise",
            "attribute": "CRE",
            "isComplex": false,
            "defaultSpecs": ["Specific Disguise", "Theatrical Special Effects"],
            "prerequisites": []
        },
        "dodge": {
            "name": "Dodge",
            "attribute": "AGI",
            "isComplex": false,
            "defaultSpecs": ["Unarmed Attacks", "Melee Attacks", "Ranged Attacks"],
            "prerequisites": []
        },
        "drive": {
            "name": "Drive",
            "attribute": "AGI",
            "isComplex": false,
            "defaultSpecs": ["Racing", "Cargo Trucks", "Combat Vehicles", "Motorcycles"],
            "prerequisites": []
        },
        "earthSciences": {
            "name": "Earth Sciences",
            "attribute": "KNO",
            "isComplex": true,
            "defaultSpecs": ["Geology", "Geography", "Mineral Survey"],
            "prerequisites": []
        },
        "electronicDesign": {
            "name": "Electronic Design",
            "attribute": "KNO",
            "isComplex": true,
            "defaultSpecs": ["Computers", "Sensors", "Communications"],
            "prerequisites": ["electronics-2"]
        },
        "electronicWarfare": {
            "name": "Electronic Warfare",
            "attribute": "CRE",
            "isComplex": true,
            "defaultSpecs": ["Sensors", "ECM", "Underwater Sensors"],
            "prerequisites": []
        },
        "electronics": {
            "name": "Electronics",
            "attribute": "KNO",
            "isComplex": true,
            "defaultSpecs": ["Vehicle", "Industrial", "Robotic", "Military", "Security Systems"],
            "prerequisites": []
        },
        "etiquette": {
            "name": "Etiquette",
            "attribute": "INF",
            "isComplex": false,
            "defaultSpecs": ["Military", "Business", "Aristocratic"],
            "prerequisites": []
        },
        "firstAid": {
            "name": "First Aid",
            "attribute": "KNO",
            "isComplex": false,
            "defaultSpecs": ["Combat Medic", "Aquatic Injuries", "Sports Injuries"],
            "prerequisites": []
        },
        "foreignLanguage": {
            "name": "Foreign Language (Specific)",
            "attribute": "KNO",
            "isComplex": false,
            "defaultSpecs": ["Specific Dialect", "Specific Jargon"],
            "prerequisites": []
        },
        "forgery": {
            "name": "Forgery",
            "attribute": "CRE",
            "isComplex": true,
            "defaultSpecs": ["Electronic", "Written", "Art", "Counterfeiting"],
            "prerequisites": []
        },
        "forwardObserving": {
            "name": "Forward Observing",
            "attribute": "PER",
            "isComplex": false,
            "defaultSpecs": ["Specific Terrain", "Specific Weapon"],
            "prerequisites": []
        },
        "gHandling": {
            "name": "G-Handling",
            "attribute": "FIT",
            "isComplex": false,
            "defaultSpecs": ["None"],
            "prerequisites": []
        },
        "gambling": {
            "name": "Gambling",
            "attribute": "PER",
            "isComplex": false,
            "defaultSpecs": ["Specific Game", "Cheating", "Bookkeeping"],
            "prerequisites": []
        },
        "gunnerySpecific": {
            "name": "Gunnery (Specific)",
            "attribute": "PER",
            "isComplex": true,
            "defaultSpecs": ["Vehicle Model", "Projectiles", "Missiles", "Energy Weapons"],
            "prerequisites": []
        },
        "haggling": {
            "name": "Haggling",
            "attribute": "INF",
            "isComplex": false,
            "defaultSpecs": ["Specific Commodity", "Specific Culture", "Barter"],
            "prerequisites": []
        },
        "handToHand": {
            "name": "Hand-to-Hand",
            "attribute": "AGI",
            "isComplex": false,
            "defaultSpecs": ["Striking", "Grappling", "Tripping", "Throwing"],
            "prerequisites": []
        },
        "heavyGearArchitecture": {
            "name": "Heavy Gear Architecture",
            "attribute": "KNO",
            "isComplex": true,
            "defaultSpecs": ["Specific Gear Model"],
            "prerequisites": ["electronics-2", "mechanics-2"]
        },
        "heavyGearPilot": {
            "name": "Heavy Gear Pilot",
            "attribute": "AGI",
            "isComplex": true,
            "defaultSpecs": ["Specific Model"],
            "prerequisites": []
        },
        "heavyWeapons": {
            "name": "Heavy Weapons",
            "attribute": "AGI",
            "isComplex": false,
            "defaultSpecs": ["Mortars", "Grenade Launchers", "Missiles"],
            "prerequisites": []
        },
        "humanPerception": {
            "name": "Human Perception",
            "attribute": "PSY",
            "isComplex": false,
            "defaultSpecs": ["Body Language", "Voice Tone", "Eye Contact"],
            "prerequisites": []
        },
        "interrogation": {
            "name": "Interrogation",
            "attribute": "CRE",
            "isComplex": false,
            "defaultSpecs": ["Casual Questioning", "Torture", "Specific Type of Informant"],
            "prerequisites": []
        },
        "intimidate": {
            "name": "Intimidate",
            "attribute": "BLD",
            "isComplex": false,
            "defaultSpecs": ["Coerce", "Terrify", "Enforce"],
            "prerequisites": []
        },
        "investigation": {
            "name": "Investigation",
            "attribute": "PER",
            "isComplex": true,
            "defaultSpecs": ["Searching", "Surveillance", "Forensics"],
            "prerequisites": []
        },
        "law": {
            "name": "Law",
            "attribute": "KNO",
            "isComplex": true,
            "defaultSpecs": ["Corporate", "Criminal", "International", "Civil", "Research"],
            "prerequisites": []
        },
        "leadership": {
            "name": "Leadership",
            "attribute": "INF",
            "isComplex": false,
            "defaultSpecs": ["Military", "Political", "Business", "Cult"],
            "prerequisites": []
        },
        "lifeSciences": {
            "name": "Life Sciences",
            "attribute": "KNO",
            "isComplex": true,
            "defaultSpecs": ["Zoology", "Botany", "Microbiology", "Physiology"],
            "prerequisites": []
        },
        "literature": {
            "name": "Literature",
            "attribute": "CRE",
            "isComplex": false,
            "defaultSpecs": ["French Poetry", "Shakespeare", "Science Fiction"],
            "prerequisites": []
        },
        "mechanicalDesign": {
            "name": "Mechanical Design",
            "attribute": "KNO",
            "isComplex": true,
            "defaultSpecs": ["Vehicles", "Industrial Equipment", "Agricultural Equipment"],
            "prerequisites": ["mechanics-2"]
        },
        "mechanics": {
            "name": "Mechanics",
            "attribute": "KNO",
            "isComplex": false,
            "defaultSpecs": ["Automotive", "Industrial", "Locks", "Military"],
            "prerequisites": []
        },
        "medicine": {
            "name": "Medicine",
            "attribute": "KNO",
            "isComplex": true,
            "defaultSpecs": ["Neurology", "Forensics", "Surgery", "Toxicology"],
            "prerequisites": ["firstAid", "lifeSciences-2"]
        },
        "melee": {
            "name": "Melee",
            "attribute": "AGI",
            "isComplex": false,
            "defaultSpecs": ["Knives", "Clubs", "Fencing", "Impressive Moves"],
            "prerequisites": []
        },
        "music": {
            "name": "Music",
            "attribute": "CRE",
            "isComplex": false,
            "defaultSpecs": ["Classical", "Rock", "Mixing", "Critic", "Singing"],
            "prerequisites": []
        },
        "navalPilot": {
            "name": "Naval Pilot",
            "attribute": "PER",
            "isComplex": true,
            "defaultSpecs": ["Capital Ships", "Submarines", "Gunboats", "Yachting"],
            "prerequisites": []
        },
        "navigationSpecific": {
            "name": "Navigation (Specific)",
            "attribute": "KNO",
            "isComplex": true,
            "defaultSpecs": ["Night-time", "Map and Compass", "Star Position", "Terrain Type"],
            "prerequisites": []
        },
        "notice": {
            "name": "Notice",
            "attribute": "PER",
            "isComplex": false,
            "defaultSpecs": ["Specific Sense", "Night-time"],
            "prerequisites": []
        },
        "parachuting": {
            "name": "Parachuting",
            "attribute": "AGI",
            "isComplex": false,
            "defaultSpecs": ["High-Altitude", "High-Wind", "Night-Time"],
            "prerequisites": []
        },
        "physicalSciences": {
            "name": "Physical Sciences",
            "attribute": "KNO",
            "isComplex": true,
            "defaultSpecs": ["Nuclear Physics", "Organic Chemistry", "Astronomy"],
            "prerequisites": []
        },
        "psychology": {
            "name": "Psychology",
            "attribute": "KNO",
            "isComplex": true,
            "defaultSpecs": ["Counseling", "Perception", "Learning", "Psychological Warfare"],
            "prerequisites": []
        },
        "riding": {
            "name": "Riding",
            "attribute": "AGI",
            "isComplex": false,
            "defaultSpecs": ["Specific Animal", "Racing", "Dressage"],
            "prerequisites": []
        },
        "security": {
            "name": "Security",
            "attribute": "KNO",
            "isComplex": true,
            "defaultSpecs": ["Specific Type of Device", "Banks", "Military Bases"],
            "prerequisites": []
        },
        "seduction": {
            "name": "Seduction",
            "attribute": "APP",
            "isComplex": false,
            "defaultSpecs": ["Specific Sex", "Eye Contact", "Specific Seduction Style"],
            "prerequisites": []
        },
        "sleightOfHand": {
            "name": "Sleight-of-Hand",
            "attribute": "AGI",
            "isComplex": false,
            "defaultSpecs": ["Pickpocket", "Magic Tricks", "Shoplifting"],
            "prerequisites": []
        },
        "smallArms": {
            "name": "Small Arms",
            "attribute": "AGI",
            "isComplex": false,
            "defaultSpecs": ["Pistols", "Rifles", "SMGs"],
            "prerequisites": []
        },
        "sniping": {
            "name": "Sniping",
            "attribute": "PER",
            "isComplex": false,
            "defaultSpecs": ["Specific Weapon"],
            "prerequisites": ["smallArms-2"]
        },
        "socialSciences": {
            "name": "Social Sciences",
            "attribute": "KNO",
            "isComplex": true,
            "defaultSpecs": ["Sociology", "Political Science", "Philosophy", "History"],
            "prerequisites": []
        },
        "spacePilot": {
            "name": "Space Pilot",
            "attribute": "CRE",
            "isComplex": true,
            "defaultSpecs": ["Specific Type of Vehicle"],
            "prerequisites": []
        },
        "stealth": {
            "name": "Stealth",
            "attribute": "AGI",
            "isComplex": true,
            "defaultSpecs": ["Urban", "Indoors", "Jungle", "Woodlands", "Nighttime"],
            "prerequisites": []
        },
        "streetwise": {
            "name": "Streetwise",
            "attribute": "INF",
            "isComplex": false,
            "defaultSpecs": ["Gangs", "Organized Crime", "Homeless", "Prostitutes"],
            "prerequisites": []
        },
        "striderPilot": {
            "name": "Strider Pilot",
            "attribute": "AGI",
            "isComplex": true,
            "defaultSpecs": ["Specific Model"],
            "prerequisites": []
        },
        "survival": {
            "name": "Survival",
            "attribute": "CRE",
            "isComplex": false,
            "defaultSpecs": ["Jungle", "Desert", "Winter", "Urban", "Foraging", "Shelter", "Space"],
            "prerequisites": []
        },
        "swimming": {
            "name": "Swimming",
            "attribute": "FIT",
            "isComplex": false,
            "defaultSpecs": ["Endurance", "Speed", "Diving", "SCUBA Diving"],
            "prerequisites": []
        },
        "tactics": {
            "name": "Tactics",
            "attribute": "CRE",
            "isComplex": false,
            "defaultSpecs": ["Infantry", "Armored", "Aerial", "Naval", "Space"],
            "prerequisites": []
        },
        "teaching": {
            "name": "Teaching",
            "attribute": "CRE",
            "isComplex": false,
            "defaultSpecs": ["Any other Skill"],
            "prerequisites": []
        },
        "theatrics": {
            "name": "Theatrics",
            "attribute": "INF",
            "isComplex": false,
            "defaultSpecs": ["Drama", "Con Artist", "Comedy", "Directing", "Media Editing"],
            "prerequisites": []
        },
        "throwing": {
            "name": "Throwing",
            "attribute": "AGI",
            "isComplex": false,
            "defaultSpecs": ["Knives", "Javelin", "Balls", "Grenades", "Darts"],
            "prerequisites": []
        },
        "tinker": {
            "name": "Tinker",
            "attribute": "CRE",
            "isComplex": true,
            "defaultSpecs": ["Vehicles", "Weapons", "Appliances", "Computers"],
            "prerequisites": []
        },
        "visualArt": {
            "name": "Visual Art",
            "attribute": "CRE",
            "isComplex": false,
            "defaultSpecs": ["Painting", "Sculpting", "Computer Graphics", "Layout"],
            "prerequisites": []
        },
        "zeroG": {
            "name": "Zero-G",
            "attribute": "AGI",
            "isComplex": false,
            "defaultSpecs": ["Specific Martial Art", "Hand Weapons"],
            "prerequisites": []
        }
    }