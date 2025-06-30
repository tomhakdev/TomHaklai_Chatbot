export const portfolioData = {
  personal: {
    name: "Tom Haklai",
    title: "Software Engineer",
    location: "Kingston, ON",
    email: "haklaitom@gmail.com",
    phone: "343-363-2701",
    linkedin: "linkedin.com/in/tomhaklai",
    github: "github.com/tomhakdev",
    website: "tomhaklai.netlify.app",
    dateOfBirth: "August 31, 2004",
    age: 20,
    pronouns: "he/him",
    hometown: "Kingston, ON"
  },

  family: {
    parents: {
      mother: "Not sure I want to give that out",
      father: "Not sure I want to give that out",
      relationship: "Very close, they are very loving and supportive"
    },
    siblings: [
      {
        name: "Not sure I want to give that out",
        relationship: "Older sister",
        age: 24,
        note: "She's very smart. Reads a lot, enjoys art history, psychology and painting."
      }
    ],
    pets: [
      {
        name: "Ivy",
        type: "Chocolate Lab",
        age: 9,
        personality: "Very sweet and loving, loves being pet. Also very hungry all the time. She loves eating carrots and peanut butter.",
        dateOfBirth: "July 1st"
      }
    ]
  },

  education: {
    degree: "Bachelor of Applied Science in Computer Engineering",
    university: "Queen's University",
    graduationYear: "April 2027",
    gpa: "Not great (but I'm learning that grades aren't everything!)",
    relevantCourses: [
      "Data Structures & Algorithms in C",
      "Object-Oriented Programming with Java",
      "Introduction to Data Science in Python",
      "Operating Systems in C",
      "Database Systems",
      "Web Development",
      "Machine Learning",
      "Software Engineering",
      "Computer Networks",
      "Digital Logic Design",
      "Embedded Systems",
      "Signal Processing"
    ],
    scholarships: [
      "Queen's Excellence Scholarship Award"
    ],
    clubs: [
      "Queen's Data Analytics Association (QDAA)",
      "inQUbate (Queen's startup accelerator)",
      "Queen's Hyperloop Design Team",
      "Queen's Engineering Society Software Development Team (ESSDev)",
      "Queen's Baja SAE"
    ],
    achievements: [
      "2nd place inQUbate pitch competition",
      "AWS Certified Solutions Architect – Associate (Expected Sept 2025)"
    ],
    favoriteProf: "Dr. Manjikia from Microprocessors - I liked his teaching style and tutorials. Found him very entertaining as well",
    worstSubject: "Chemistry. Had to take it in first year, not my thing"
  },

  skills: {
    languages: ["C", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "SQL", "Java"],
    frameworks: ["Node.js", "Express.js", "React.js", "Next.js", "Flask", "Pandas", "NumPy", "TensorFlow"],
    tools: ["MySQL", "Firebase", "AWS (Lambda, S3, DynamoDB, RDS, EC2)", "Git", "Docker", "Jenkins", "Jira", "VS Code"],
    databases: ["MySQL", "Firebase", "DynamoDB"],
    concepts: ["RESTful APIs", "CI/CD", "Agile Scrum", "Machine Learning", "LSTM Models", "Real-time Data Processing"],
    currentlyLearning: ["Advanced AWS services", "Transformers", "LLMs", "Speech Processing"],
    wantToLearn: ["Everything I can about AI and cloud technology"]
  },

  experience: [
    {
      company: "Ford Motor Company",
      position: "Software Quality Engineer Intern",
      duration: "January 2025 – Present",
      location: "Ottawa, Ontario",
      responsibilities: [
        "Resolved 200+ software issues by analyzing Jira bug reports, identifying root causes in source code, and implementing targeted code-level fixes",
        "Orchestrated software module updates using internal tools and CI/CD pipelines using Jenkins",
        "Installed, tested, and validated 10-20 development builds weekly on in-vehicle modules",
        "Supporting user acceptance testing across multiple vehicle platforms and accelerating feedback cycles"
      ],
      funFact: "I get to work on the software that goes into actual cars! Working with real automotive systems is incredible."
    },
    {
      company: "Laboratory for Ethnic Conflict Research",
      position: "Software Engineer Intern",
      duration: "May 2024 – Present",
      location: "Kingston, Ontario",
      responsibilities: [
        "Developed an interactive world map for the 3+ year research project 'Settlers and Territorial Conflicts in the Post-WWII Era'",
        "Leveraged React.js, Node.js, and SQL to visualize geopolitical data across 21 countries",
        "Implemented dynamic UI components to display region-specific insights on user interaction",
        "Presented to 30+ Harvard political science faculty and visiting scholars",
        "Collaborated in an Agile Scrum environment with sprint planning, daily standups, and code reviews"
      ],
      funFact: "Combining tech with social research - never thought I'd be helping solve real-world conflicts through code!"
    },
    {
      company: "STAM.ai",
      position: "Co-Founder/Full-Stack AI Developer",
      duration: "March 2024 – Present",
      location: "Remote",
      responsibilities: [
        "Engineered an AI-powered speech therapy web app using React.js, Node.js and AWS",
        "Integrated Librosa for speech signal processing and deployed an LSTM model for pronunciation accuracy",
        "Achieved 85% success rate in identifying correct word articulation",
        "Generated $2,000 in early-stage revenue through product demos and outreach"
      ],
      funFact: "Placed 2nd in a pitch competition and earned a 75% subsidized trip to San Francisco! Building AI that helps kids with speech therapy is incredibly rewarding."
    }
  ],

  leadershipExperience: [
    {
      organization: "Queen's Data Analytics Association (QDAA)",
      position: "Project Manager",
      duration: "April 2024 – April 2025",
      location: "Kingston, Ontario",
      responsibilities: [
        "Led a team of 6 students to build FundFinder, a personalized investment platform",
        "Leveraged user profiling and real-time market data via Yahoo Finance API",
        "Featured LSTM-powered dynamic prediction charts for portfolio growth",
        "Oversaw end-to-end development across ML, frontend, and backend teams"
      ]
    },
    {
      organization: "Engineering Society Software Development Team (ESSDev)",
      position: "Full-Stack Developer",
      duration: "September 2023 – April 2024",
      location: "Kingston, Ontario",
      responsibilities: [
        "Co-developed a cross-platform tool-sharing and messaging app with a team of 5",
        "Leveraged Flutter and Dart to deliver responsive, intuitive user interface",
        "Engineered real-time messaging and secure user authentication using Firebase",
        "Scaled cloud-based data handling for 100+ active users"
      ]
    }
  ],

  projects: [
    {
      name: "FundFinder",
      description: "Python web-based investment recommendation tool that generates personalized suggestions based on user inputs such as investment type, desired return, risk tolerance, and preferred sector",
      technologies: ["Python", "React.js", "Node.js", "Yahoo Finance API", "LSTM", "TensorFlow"],
      github: "github.com/tomhakdev/fundfinder",
      live: "fundfinder-demo.vercel.app",
      highlights: [
        "Integrated Yahoo Finance API to retrieve real-time financial data",
        "Implemented LSTM model with 99% accuracy for future investment projections",
        "Dynamic prediction charts for portfolio growth visualization",
        "Led team of 6 students as Project Manager at QDAA"
      ],
      story: "Built this as part of QDAA to help students make better investment decisions. The 99% LSTM accuracy was a huge breakthrough for our team!"
    },
    {
      name: "STAM.ai Speech Therapy Platform",
      description: "AI-powered speech therapy web app delivering interactive speech-based games tailored to children with speech impediments",
      technologies: ["React.js", "Node.js", "AWS", "Librosa", "LSTM", "TensorFlow"],
      github: "github.com/tomhakdev/stam-ai",
      live: "stam-ai.vercel.app",
      highlights: [
        "85% success rate in identifying correct word articulation",
        "Child-friendly UI with interactive speech-based games",
        "Speech signal processing using Librosa",
        "Generated $2,000 in early-stage revenue"
      ],
      story: "Co-founded this startup to help kids with speech therapy. Placing 2nd in the pitch competition and seeing real impact on children's speech development has been incredible!"
    },
    {
      name: "Interactive Geopolitical Research Map",
      description: "Interactive world map for Harvard research project visualizing territorial conflicts across 21 countries in the post-WWII era",
      technologies: ["React.js", "Node.js", "SQL", "D3.js", "Express.js"],
      github: "github.com/tomhakdev/conflict-research-map",
      live: "conflict-research.vercel.app",
      highlights: [
        "Visualizes geopolitical data across 21 countries",
        "Dynamic UI components for region-specific insights",
        "Presented to 30+ Harvard political science faculty",
        "Optimized backend queries for performance and scalability"
      ],
      story: "Working with Harvard researchers to visualize complex geopolitical data was an amazing learning experience. Seeing professors use our tool for their research is incredibly fulfilling!"
    }
  ],

  travel: {
    countriesVisited: [
      "Canada", "United States", "United Kingdom", "France", "Greece", 
      "Netherlands", "Italy", "Jordan", "Israel", "Belgium", "Switzerland", "Mexico", "Dominican Republic"
    ],
    favoriteTrip: {
      destination: "Switzerland",
      year: "2018",
      highlights: ["Amazing scenery", "I loved the view of the alps", "Visited cute villages in mountain valleys", "Visited tallest point in Europe"],
    },
    bucketList: ["Iceland", "Peru", "Japan", "Australia"],
    travelStyle: "Plan visits ahead, but leave time open for spontaneous fun and exploring"
  },

  favorites: {
    colors: {
      primary: "Deep blue (like #1e3a8a)",
      secondary: "Forest green", 
      why: "Blue feels calming and professional - reminds me of the ocean, green reminds me of hiking"
    },
    food: {
      cuisine: "Japanese (especially sushi)",
      dish: "Spicy California roll",
      dessert: "Tiramisu",
      drink: "Anything peach-flavoured",
      cookingSkill: "I make a crisp, medium-rare steak"
    },
    videoGames: {
      allTime: "The Legend of Zelda: Breath of the Wild",
      current: "Baldur's Gate 3",
      genre: "Open-world RPGs and puzzle games",
      platform: "Nintendo Switch and PC",
      childhood: "Pokémon Red (still have my original Game Boy)",
      multiplayer: "Among Us (yes, I'm basic)"
    },
    movies: {
      genre: "Sci-fi and comedy",
      allTime: "The Matrix (rewatched it after learning to code and mind = blown)",
      recent: "Everything Everywhere All at Once",
      guilty_pleasure: "Marvel movies (I know they're formulaic but I love them)"
    },
    music: {
      genres: ["Indie rock", "Electronic", "Lo-fi hip hop", "Video game soundtracks"],
      artists: ["Tame Impala", "Daft Punk", "Arctic Monkeys", "Porter Robinson"],
      codingPlaylist: "Lo-fi beats and Zelda soundtracks",
      concert: "Saw Tame Impala live in Toronto - life-changing experience"
    },
    books: {
      fiction: "Ready Player One (cliché but I love it)",
      nonFiction: "The Pragmatic Programmer",
      currentlyReading: "Klara and the Sun by Kazuo Ishiguro",
      format: "Physical books > e-books (I like the smell of pages)"
    },
    animals: {
      favorite: "Dogs (obviously, see: Ivy)",
      spirit_animal: "Otter (playful but surprisingly capable)",
      fear: "Spiders (I know they're helpful but NOPE)"
    },
    weather: {
      season: "Fall (perfect hoodie weather)",
      temperature: "18°C and sunny",
      least_favorite: "Humid summer days (my laptop overheats)"
    }
  },

  hobbies: {
    coding: {
      type: "Obviously my main passion",
      sideProjects: "Always have 3-4 random projects going",
      openSource: "Contributor to several small libraries",
      hackathons: "Participated in 8 hackathons, won 2"
    },
    sports: {
      background: "Previously international volleyball athlete",
      current: "Still love playing volleyball recreationally",
      otherSports: "Hiking, scuba diving"
    },
    guitar: {
      experience: "6 years, self-taught from YouTube",
      style: "Indie rock and fingerpicking",
      gear: "Fender acoustic, saving up for an electric",
      proudMoment: "Played at an open mic night (was terrified but nailed it)"
    },
    photography: {
      type: "Nature and street photography",
      gear: "Canon EOS Rebel T7 (my first 'real' camera)",
      instagram: "@tomsnaps (shameless plug)",
      style: "Golden hour lighting and candid moments"
    },
    hiking: {
      favoriteTrail: "Bruce Trail sections near Kingston",
      gear: "Still building my collection, but I have good boots",
      goal: "Want to hike the entire Bruce Trail eventually",
      worstExperience: "Got caught in a thunderstorm with no rain gear. Learned my lesson."
    },
    scubaDiving: {
      experience: "Certified open water diver",
      favoriteSpot: "Caribbean waters in Dominican Republic",
      goal: "Want to dive the Great Barrier Reef someday"
    },
    gaming: {
      setup: "Custom PC build (proud of my cable management)",
      genres: ["RPGs", "Puzzle games", "Indie games"],
      multiplayer: "Play Rocket League with engineering classmates",
      retro: "Love my Nintendo Switch for nostalgic gaming"
    }
  },

  interests: [
    "Machine Learning & AI", 
    "Speech Processing & Therapy Technology",
    "Financial Technology & Investment Platforms",
    "Geopolitical Data Visualization",
    "Open Source Contributions",
    "Mobile App Development",
    "Photography",
    "International Volleyball",
    "Hiking & Outdoor Activities",
    "Scuba Diving",
    "Playing Guitar", 
    "Reading Tech Blogs",
    "Sustainable Technology",
    "Space Exploration",
    "Retro Gaming",
    "Travel & Cultural Exploration"
  ],

  randomExperiences: [
    "Co-founded a startup and placed 2nd in a pitch competition, earning a trip to San Francisco",
    "Presented technical work to 30+ Harvard faculty members and visiting scholars",
    "Resolved 200+ software bugs in automotive systems at Ford",
    "Built an AI that helps kids with speech therapy and saw real impact on their development",
    "Led a team of 6 students to build an investment platform with 99% LSTM accuracy",
    "Competed internationally in volleyball before focusing on engineering",
    "Generated $2,000 in startup revenue through product demos and outreach",
    "Visualized geopolitical conflicts across 21 countries for academic research",
    "Worked with real automotive software that goes into actual Ford vehicles",
    "Built a tool-sharing app that scaled to 100+ active users at Queen's"
  ],

  funFacts: [
    "I was an international volleyball athlete before becoming a software engineer",
    "I co-founded an AI startup that helps kids with speech therapy and it actually makes money!",
    "I've resolved 200+ software bugs in Ford's automotive systems",
    "My LSTM model for investment predictions has 99% accuracy (still can't believe it worked)",
    "I once presented my geopolitical visualization work to Harvard professors",
    "I'm getting AWS certified while still in university",
    "I can solve a Rubik's cube in under 2 minutes, which is basically my only non-tech party trick",
    "I've visited 13 countries and am a certified scuba diver",
    "I built my first website when I was 14 using table layouts (don't judge me, it was 2019!)",
    "I once spent 6 hours debugging code only to find a missing semicolon. We don't talk about that day.",
    "I name all my personal projects after food items. My latest side project? 'Ramen Router'",
    "My GitHub contribution graph looks like a very inconsistent lawn mower pattern",
    "I have strong opinions about tabs vs spaces (spaces, obviously) and will die on this hill",
    "Ivy (my chocolate lab) thinks my keyboard is the perfect place to rest her head during coding sessions"
  ],

  techPreferences: {
    stack: "React.js, Next.js, Node.js, Python, AWS, MySQL",
    approach: "I prefer modern, scalable solutions with clean code and excellent user experience. My go-to stack combines React for dynamic UIs, Node.js for backend services, Python for AI/ML work, AWS for cloud infrastructure, and SQL databases for reliable data storage.",
    philosophy: "Code should be readable, maintainable, and solve real problems. If my grandmother can't understand what my app does, I've probably over-engineered it.",
    learningStyle: "Hands-on learner who learns best by building real projects that solve actual problems - like speech therapy apps or investment platforms"
  },

  personalityTraits: {
    strengths: ["Curious", "Persistent", "Collaborative", "Adaptable", "Detail-oriented", "Leadership"],
    quirks: ["Talks to rubber duck when debugging", "Names variables after Lord of the Rings characters", "Always has at least 47 browser tabs open"],
    workStyle: "I'm definitely a morning person for deep focus work, but I get my best creative ideas around 2 AM (not great for productivity)",
    communication: "I prefer Slack over email, face-to-face over video calls, and whiteboarding over PowerPoint presentations"
  },

  currentGoals: {
    short_term: [
      "Complete AWS Solutions Architect certification by September 2025",
      "Graduate with a strong GPA from Queen's University",
      "Scale STAM.ai to help more children with speech therapy",
      "Land a full-time software engineering role at a top tech company"
    ],
    long_term: [
      "Build STAM.ai into a successful company that impacts thousands of children",
      "Become an expert in AI/ML and speech processing technology",
      "Travel to all continents while working remotely",
      "Mentor other aspiring developers and entrepreneurs"
    ],
    personal: [
      "Complete my scuba diving advanced certification",
      "Hike the entire Bruce Trail",
      "Visit Japan and experience the tech culture firsthand",
      "Learn to cook more than just the perfect steak"
    ]
  }
}