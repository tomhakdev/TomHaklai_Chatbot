export const portfolioData = {
  personal: {
    name: "Tom Haklai",
    title: "Software Engineer",
    location: "Kingston, ON",
    email: "haklaitom@gmail.com",
    phone: "Not sure I want to give that out",
    linkedin: "linkedin.com/in/tomhaklai",
    github: "github.com/tomhakdev",
    website: "tomhaklai.com",
    dateOfBirth: "August 31, 2004", // Adjust as needed
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
        note: "She's very smart. Reads a lot, Enjoys Art history, psychology and painting."
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
    graduationYear: "2027",
    gpa: "Not great (but I'm learning that grades aren't everything!)",
    relevantCourses: [
      "Data Structures & Algorithms",
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
      "Queen's Excellence Scholarship"
    ],
    clubs: [
      "Queen's Data Analytics Association",
      "inQUbate (Queen's startup accelerator)",
      "Queen's Hyperloop Design Team",
      "Queen's Engineering Society Software Development Team",
      "Queen's Baja SAE"
    ],
    favoriteProf: "Dr. Manjikia from Microprocessors - I liked his teaching style and tutorials. Found him very entertaining as well",
    worstSubject: "Chemistry. Had to take it in first year, not my thing"
  },

  skills: {
    languages: ["JavaScript", "C", "Python", "Java", "SQL", "HTML", "CSS"],
    frameworks: ["React", "Next.js", "Node.js", "TensorFlow", "Pandas", "NumPy", "Flask"],
    tools: ["Git", "Docker", "AWS", "Vercel", "Windows OS", "VS Code", "Figma"],
    databases: ["MySQL", "Firebase"],
    concepts: ["RESTful APIs", "CI/CD", "Agile"],
    currentlyLearning: ["More AWS", "Transformers", "LLMs"],
    wantToLearn: ["Everything I can about AI and cloud technology"]
  },

  experience: [
    {
      company: "Ford Motor Company",
      position: "Software Quality Engineer",
      duration: "May 2025 - Current",
      responsibilities: [
        "Testing automotive software systems for safety and reliability",
        "Automated testing pipeline development",
        "Bug tracking and quality assurance documentation",
        "Collaboration with engineering teams on software validation"
      ],
      funFact: "I get to work on the software that goes into actual cars! Still can't believe it."
    },
    {
      company: "Ford Motor Company", 
      position: "User Acceptance Testing Intern",
      duration: "January 2025 - May 2025",
      location: "Ottawa, ON (hybrid, 3 days in office)",
      responsibilities: [
        "Manual and automated testing of user interfaces",
        "Creating test cases and documentation", 
        "User experience validation",
        "Bug reporting and regression testing"
      ],
      funFact: "My first real tech job! I was terrified on day one but everyone was super welcoming."
    },
    {
      company: "Laboratory for Ethnic Conflict Research",
      position: "Software Developer",
      duration: "May 2024 - Current",
      location: "Remote",
      responsibilities: [
        "Building data visualization tools for research analysis",
        "Web development for research project portals",
        "Database management for research data",
        "Creating interactive dashboards for researchers"
      ],
      funFact: "Combining tech with social research - never thought I'd be helping solve real-world conflicts through code!"
    }
  ],

  projects: [
    {
      name: "Campus Food Tracker",
      description: "A web app that tracks dining hall wait times and menu items at Queen's University",
      technologies: ["React", "Node.js", "Express", "MySQL", "Socket.io"],
      github: "github.com/tomhakdev/campus-food-tracker",
      live: "queenseats.vercel.app",
      highlights: [
        "Real-time wait time updates using WebSockets",
        "Menu tracking with dietary restriction filters",
        "Used by 500+ students daily",
        "Mobile-responsive design for on-the-go checking"
      ],
      story: "Got tired of walking to the dining hall only to find massive lines. Built this in a weekend hackathon and it actually took off!"
    },
    {
      name: "Study Buddy Matcher",
      description: "Platform to connect Queen's students for study groups based on courses and schedules",
      technologies: ["Next.js", "Firebase", "Tailwind CSS", "Algolia"],
      github: "github.com/tomhakdev/study-buddy",
      live: "studybuddy-queens.vercel.app",
      highlights: [
        "Smart matching algorithm based on course overlap",
        "Calendar integration for scheduling study sessions",
        "Anonymous chat before revealing contact info",
        "Rating system for reliable study partners"
      ],
      story: "Created this after struggling to find study partners during COVID. Now it's used across multiple engineering courses!"
    },
    {
      name: "Personal Finance Dashboard",
      description: "A comprehensive expense tracking and budgeting app for students",
      technologies: ["React", "Chart.js", "Express", "MongoDB"],
      github: "github.com/tomhakdev/student-finance",
      live: "finance-dashboard-tom.vercel.app",
      highlights: [
        "Automated transaction categorization",
        "Budget alerts and spending insights",
        "Split bill calculator for roommates",
        "Semester-based budget planning"
      ],
      story: "Built this when I realized I had no idea where my money was going. Turns out, mostly coffee and late-night food delivery."
    }
  ],

  travel: {
    countriesVisited: [
      "Canada", "United States", "United Kingdom", "France", "Greece", 
      "Netherlands", "Italy", "Jordan", "Israel", "Belgium", "Switzerland", "Mexico", "Dominican Republic"
    ],
    favoriteTrip: {
      destination: "Not sure, maybe Switzerland",
      year: "2018",
      highlights: ["Amazing scenery", "I loved the view of the alps", "Visited cute villages in mountain vallies", "Visited talled point in Europe"],
    },
    bucketList: ["Iceland", "Peru", "Japan", "Australia"],
    travelStyle: "Plan visits ahead, but leave time open for spontaneous fun and exploring"
  },

  favorites: {
    colors: {
      primary: "Deep blue (like #1e3a8a)",
      secondary: "Forest green", 
      why: "Blue feels calming and professional- reminds me of the ocean, green reminds me of hiking"
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
      favorite: "Dogs (obviously, see: Pixel)",
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
    cooking: {
      skill: "Beginner but enthusiastic",
      signature: "Spaghetti carbonara (only thing I've mastered)",
      goal: "Learn to make proper ramen from scratch",
      disaster: "Once tried to make soufflé. Kitchen looked like a war zone."
    },
    gaming: {
      setup: "Custom PC build (proud of my cable management)",
      genres: ["RPGs", "Puzzle games", "Indie games"],
      multiplayer: "Play Rocket League with engineering classmates",
      retro: "Love my Nintendo Switch for nostalgic gaming"
    }
  },

  interests: [
    "Open Source Contributions",
    "Machine Learning & AI", 
    "Mobile App Development",
    "Photography",
    "Hiking & Outdoor Activities",
    "Playing Guitar", 
    "Reading Tech Blogs",
    "Cooking (attempting to)",
    "Sustainable Technology",
    "Space Exploration",
    "Retro Gaming",
    "Coffee Culture",
    "Minimalist Design",
    "Psychology of User Experience"
  ],

  randomExperiences: [
    "Accidentally joined a flash mob in downtown Toronto (just went with it)",
    "Won a local coding competition with a team that formed 10 minutes before",
    "Got stuck in an elevator for 3 hours and coded a simple game to pass time",
    "Taught my grandmother how to use FaceTime during COVID (she's now better at it than my dad)",
    "Volunteered to teach kids programming at a summer camp (they taught me more than I taught them)",
    "Accidentally ordered food in Korean when I meant to practice my app's translation feature",
    "Built a robot in high school that was supposed to sort colored balls but kept eating them instead",
    "Went viral on TikTok for a coding joke (15 minutes of fame, very surreal)",
    "Camped outside for 3 days during a power outage and coded on battery power",
    "Met the creator of my favorite indie game at a coffee shop and nerded out for 2 hours"
  ],

  funFacts: [
    "I've contributed to 15+ open source projects on GitHub (and yes, I actually read the documentation first... sometimes 😅)",
    "I can solve a Rubik's cube in under 2 minutes, which is basically my only party trick",
    "I've visited 10 countries and speak 2.5 languages fluently (the .5 is my terrible French)",
    "I built my first website when I was 14 using table layouts (don't judge me, it was 2019!)",
    "I once spent 6 hours debugging code only to find a missing semicolon. We don't talk about that day.",
    "I maintain a tech blog with over 1K monthly readers who somehow enjoy my rambling about JavaScript",
    "I'm a coffee enthusiast and have tried coffee from 15+ countries - my wallet is not happy about this habit",
    "I have a playlist called 'Coding Vibes' that's 47 hours long and growing",
    "I name all my personal projects after food items. My latest side project? 'Ramen Router'",
    "I've broken production exactly once. It involved forgetting to test on mobile. I learned my lesson... hopefully.",
    "My GitHub contribution graph looks like a very inconsistent lawn mower pattern",
    "I once debugged a problem for 4 hours only to realize my computer wasn't plugged in",
    "I have strong opinions about tabs vs spaces (spaces, obviously) and will die on this hill",
    "My most-used VS Code extension is probably the one that plays Mario sounds when I complete tasks"
  ],

  techPreferences: {
    stack: "Next.js, React, Tailwind CSS, Node.js, MySQL, Vercel",
    approach: "I prefer modern, scalable solutions with clean code and excellent user experience. My go-to stack combines the power of Next.js for full-stack development, React for dynamic UIs, Tailwind for rapid styling, Node.js for backend services, MySQL for reliable data storage, and Vercel for seamless deployment.",
    philosophy: "Code should be readable, maintainable, and solve real problems. If my grandmother can't understand what my app does, I've probably over-engineered it.",
    learningStyle: "Hands-on learner who learns best by breaking things and figuring out how to fix them"
  },

  personalityTraits: {
    strengths: ["Curious", "Persistent", "Collaborative", "Adaptable", "Detail-oriented"],
    quirks: ["Talks to rubber duck when debugging", "Names variables after Lord of the Rings characters", "Always has at least 47 browser tabs open"],
    workStyle: "I'm definitely a morning person for deep focus work, but I get my best creative ideas around 2 AM (not great for productivity)",
    communication: "I prefer Slack over email, face-to-face over video calls, and whiteboarding over PowerPoint presentations"
  },

  currentGoals: {
    short_term: [
      "Graduate with a decent GPA",
      "Land a full-time software engineering role", 
      "Contribute to a major open source project",
      "Learn React Native well enough to build a mobile app"
    ],
    long_term: [
      "Start my own tech company (classic, I know)",
      "Travel to all continents while working remotely",
      "Mentor other aspiring developers",
      "Build something that positively impacts millions of people"
    ],
    personal: [
      "Hike the entire Bruce Trail",
      "Learn to cook more than just pasta",
      "Read 24 books this year (currently at 8)",
      "Take better care of my plants (RIP to the succulents I've killed)"
    ]
  }
}