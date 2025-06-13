import { portfolioData } from '../data/portfolioData';

export function generateChatResponse(userMessage) {
  const message = userMessage.toLowerCase();
  
  // Personal Information
  if (message.includes('name') || message.includes('who are you')) {
    return `Hi! I'm ${portfolioData.personal.name}, a ${portfolioData.personal.title} based in ${portfolioData.personal.location}. I'm passionate about creating innovative web applications and solving complex problems through code.`;
  }

  // Contact Information
  if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('reach')) {
    return `You can reach me through several channels:
📧 Email: ${portfolioData.personal.email}
📱 Phone: ${portfolioData.personal.phone}
💼 LinkedIn: ${portfolioData.personal.linkedin}
🐙 GitHub: ${portfolioData.personal.github}
🌐 Website: ${portfolioData.personal.website}

I'm always open to discussing new opportunities and interesting projects!`;
  }

  // Education
  if (message.includes('education') || message.includes('school') || message.includes('university') || message.includes('degree')) {
    return `I graduated from ${portfolioData.education.university} in ${portfolioData.education.graduationYear} with a ${portfolioData.education.degree}. I maintained a ${portfolioData.education.gpa} GPA and received several academic honors including ${portfolioData.education.scholarships.join(', ')}.

Some key courses I took include: ${portfolioData.education.relevantCourses.join(', ')}. These courses gave me a strong foundation in both theoretical computer science and practical software development.`;
  }

  // Skills & Technologies
  if (message.includes('skill') || message.includes('technology') || message.includes('programming') || message.includes('language')) {
    return `I have experience with a wide range of technologies:

🔤 Programming Languages: ${portfolioData.skills.languages.join(', ')}
⚛️ Frameworks & Libraries: ${portfolioData.skills.frameworks.join(', ')}
🛠️ Tools & Platforms: ${portfolioData.skills.tools.join(', ')}
🗄️ Databases: ${portfolioData.skills.databases.join(', ')}
💡 Key Concepts: ${portfolioData.skills.concepts.join(', ')}

I'm always learning new technologies and staying up-to-date with industry trends!`;
  }

  // Tech Stack Preference
  if (message.includes('stack') || message.includes('preferred') || message.includes('favorite tech')) {
    return `My preferred tech stack is: ${portfolioData.techPreferences.stack}

${portfolioData.techPreferences.approach}

This stack allows me to build fast, scalable, and maintainable applications from prototype to production. I love how each technology complements the others to create a seamless development experience.`;
  }

  // Work Experience
  if (message.includes('experience') || message.includes('work') || message.includes('job') || message.includes('internship')) {
    let response = "Here's my professional experience:\n\n";
    portfolioData.experience.forEach((job, index) => {
      response += `🏢 ${job.company} - ${job.position}
📅 ${job.duration} | 📍 ${job.location}

Key responsibilities:
${job.responsibilities.map(resp => `• ${resp}`).join('\n')}`;
      if (index < portfolioData.experience.length - 1) response += '\n\n';
    });
    return response;
  }

  // Projects
  if (message.includes('project') || message.includes('portfolio') || message.includes('built') || message.includes('created')) {
    let response = "Here are some of my key projects:\n\n";
    portfolioData.projects.forEach((project, index) => {
      response += `🚀 **${project.name}**
${project.description}

🔧 Technologies: ${project.technologies.join(', ')}
🔗 GitHub: ${project.github}
🌐 Live Demo: ${project.live}

Key highlights:
${project.highlights.map(highlight => `• ${highlight}`).join('\n')}`;
      if (index < portfolioData.projects.length - 1) response += '\n\n';
    });
    return response;
  }

  // Interests & Hobbies
  if (message.includes('interest') || message.includes('hobby') || message.includes('free time') || message.includes('outside of work')) {
    return `When I'm not coding, I enjoy: ${portfolioData.interests.join(', ')}.

I believe having diverse interests helps me approach problems from different angles and keeps me creative. Whether I'm hiking in nature, contributing to open source projects, or learning a new song on guitar, I'm always exploring new ways to grow and learn!`;
  }

  // Fun Facts
  if (message.includes('fun fact') || message.includes('interesting') || message.includes('tell me something') || message.includes('random')) {
    const randomFact = portfolioData.funFacts[Math.floor(Math.random() * portfolioData.funFacts.length)];
    return `Here's a fun fact about me: ${randomFact}

Want to hear another one? Just ask! I have plenty more interesting stories to share.`;
  }

  // Achievements & Awards
  if (message.includes('achievement') || message.includes('award') || message.includes('scholarship') || message.includes('recognition')) {
    return `I've been fortunate to receive several recognitions:

🎓 Academic: ${portfolioData.education.scholarships.join(', ')}

I'm also proud of my contributions to the open source community and maintaining a tech blog that reaches thousands of developers each month. These experiences have taught me the value of sharing knowledge and giving back to the community.`;
  }

  // Location
  if (message.includes('where') && (message.includes('live') || message.includes('located') || message.includes('from'))) {
    return `I'm currently based in ${portfolioData.personal.location}. I love the tech scene here and the opportunities it provides for networking and collaboration. I'm open to both local and remote opportunities!`;
  }

  // Default response for unmatched queries
  return `I'd be happy to tell you more about my background! You can ask me about:

• My education and academic achievements
• Technical skills and preferred technologies  
• Work experience and internships
• Projects I've built
• Personal interests and hobbies
• Contact information
• Fun facts about me

What would you like to know?`;
}

export function getWelcomeMessage() {
  return `Hello! I'm ${portfolioData.personal.name}, a ${portfolioData.personal.title}. I'm excited to chat with you about my background, projects, and experience. 

Feel free to ask me anything - whether it's about my technical skills, work experience, education, or even some fun facts about me! What would you like to know?`;
}