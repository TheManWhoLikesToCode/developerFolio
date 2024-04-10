/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "TheManWhoLikesToCode",
  title: "Hey all, I'm Jaydin",
  subTitle: emoji(
    "A passionate Software Developer 🚀 with extensive hackathon experience, skilled in rapidly building innovative applications using Supabase, AWS, Vercel, Docker, JavaScript, React.js, Node.js, and React Native."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1eQWhsWcWDItmBoib0h6XurNeviKLb-TK/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/TheManWhoLikesToCode",
  linkedin: "https://www.linkedin.com/in/jaydin-freeman/",
  gmail: "jaydinfreemanwork@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE FULL STACK DEVELOPER EXPLORING NEW TECHNOLOGIES",
  skills: [
    emoji("⚡ Develop highly interactive and responsive web applications using modern frameworks like React and Next.js"),
    emoji("⚡ Build scalable and secure backend systems with Node.js, Django, and Flask"),
    emoji("⚡ Leverage cloud services such as AWS, Supabase, and Vercel for seamless deployment and integration")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "sass", fontAwesomeClassname: "fab fa-sass" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "TypeScript", fontAwesomeClassname: "fab fa-ts" }, // Added TypeScript
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "java", fontAwesomeClassname: "fab fa-java" }, // Added Java
    { skillName: "kotlin", fontAwesomeClassname: "fab fa-kotlin" }, // Added Kotlin
    { skillName: "nextjs", fontAwesomeClassname: "fab fa-react" }, // Next.js icon
    { skillName: "django", fontAwesomeClassname: "fab fa-python" }, // Django icon (assuming Python framework)
    { skillName: "flask", fontAwesomeClassname: "fab fa-python" }, // Flask icon
    { skillName: "npm", fontAwesomeClassname: "fab fa-npm" },
    { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "aws", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "git", fontAwesomeClassname: "fab fa-git-alt" } // Added Git
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Kettering University",
      logo: require("./assets/images/ketteringLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "July 2021 - Present (Expected June 2025)",
      desc: "Concentration: Artificial Intelligence. GPA: 3.76/4.0. Maintained strong academic standing while actively contributing to university organizations.",
      descBullets: [
        "Relevant Coursework: Object-Oriented Programming, Data Structures & Algorithms, AI, Machine Learning, Software Engineering, Algorithmic Analysis, Programming Paradigms",
        "- 6x Dean's List recipient, demonstrating consistent academic excellence.",
        "- President of Gamma Sigma Alpha National Greek Honor Society.",
        "- Member of Upsilon Pi Epsilon Computer Science Honor Society.",
        "- Founder and Chair of the Association for Computing Machinery (ACM) Chapter at Kettering.",
        "- Past Treasurer of Black Student Union.",
        "- Programs Chair of National Society of Black Engineers (NSBE).",
        "- Treasurer of International Club." 
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Rotational Engineering Co-op",
      company: "BorgWarner",
      companylogo: require("./assets/images/borgwarnerLogo.png"), // Replace with BorgWarner logo
      date: "July 2021 – Present",
      desc: "Contributed to the development and support of various engineering projects, focusing on improving efficiency and productivity within the Morse eVCT and E-motor development teams.",
      descBullets: [
        "Designed and implemented internal tools using Java, enhancing workflow efficiency.",
        "Developed and supported the Morse auto-code development environment.",
        "Utilized MATLAB-Simulink for auto-coding and participated in hardware-in-the-loop testing."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects & Hackathons",
  subtitle: "Showcasing my passion for innovation and problem-solving through personal projects and hackathon contributions.",
  projects: [
    {
      image: require("./assets/images/clearvueLogo.png"), // Replace with ClearVue logo
      projectName: "ClearVue",
      projectDesc: "An AI-powered assistive device for the visually impaired using GPT-4 and sensory technology. Overall Winner at GrizzHacks.",
      footerLink: [
        { name: "Visit Website", url: "https://clearvue.tech/" }
      ]
    },
    {
      image: require("./assets/images/planetpointsLogo.png"), // Replace with PlanetPoints logo
      projectName: "PlanetPoints",
      projectDesc: "A sustainability scanning app developed at #SpartaHack9, winning the Sustainability and Community Impact tracks. Uses Next.js, Kotlin, AWS Lambda, and Google Vision.",
      footerLink: [
        { name: "Visit Website", url: "https://planetpoints.us/" }
      ]
    },
    {
      image: require("./assets/images/archivemeLogo.png"), // Replace with ArchiveMe logo
      projectName: "ArchiveMe",
      projectDesc: "A full-stack platform for effortless academic archiving, built with Next.js, Supabase, and Vercel. Prioritizes data security and user feedback.",
      footerLink: [
        { name: "Visit Website", url: "https://archive-me.net/" }
      ]
    }
    // Add more projects here...
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Recognitions 🏆 "),
  subtitle: "Showcasing academic excellence, leadership roles, and hackathon successes.",
  achievementsCards: [
    {
      title: "Hackathon Wins",
      subtitle: "Demonstrated innovation and development skills in competitive hackathon environments.",
      image: require("./assets/images/hackathonWin.png"),
      imageAlt: "Hackathon Win Image",
      footerLink: [
        {
          name: "ClearVue Project",
          url: "https://devpost.com/software/clearvue"
        },
        {
          name: "PlanetPoints Project",
          url: "https://devpost.com/software/planetpoints"
        }
      ]
    },
    {
      title: "Archive-Me: SaaS Service",
      subtitle: "Built and deployed a SaaS service for archiving data.",
      image: require("./assets/images/archivemeDemo.png"),
      imageAlt: "Archive-Me Screenshot",
      footerLink: [
        {
          name: "Visit Archive-Me",
          url: "https://archive-me.net/"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "JaydinFreemanWork@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
