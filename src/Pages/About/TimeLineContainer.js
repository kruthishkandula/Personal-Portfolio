import { useEffect, useRef, useState } from "react";
import Loader from "../../Components/Loader";
import useHttpService from "../../services/http";
import "../../Styles/timeline.css";
import TimelineItem from "./TimeLineItem";

let data = [
  {
    id: 0,
    text: "Completed Intermediate education at Sri Chaitanya Junior College, Hyderabad",
    date: "2016 - 2018",
    category: { tag: "education", color: "#9932CC" },
    link: {
      url: "#viewmore",
      text: "View More",
    },
    details: [
      "Completed MPC (Mathematics, Physics, Chemistry) stream",
      "Achieved 89% in board examinations",
      "Participated in science exhibitions and coding competitions"
    ]
  },
  {
    id: 1,
    text: "Graduated with Bachelor of Technology in Electrical Electronics Engineering from Guru Nanak Institutions Technical Campus",
    date: "2018 - 2022",
    category: { tag: "education", color: "#9932CC" },
    link: {
      url: "#viewmore",
      text: "View More",
    },
    details: [
      "CGPA: 8.5/10",
      "Final year project on IoT-based Smart Grid System",
      "Active member of Technical Club and Coding Society",
      "Participated in multiple hackathons and technical fests"
    ],
    technologies: ["C", "C++", "Python", "MATLAB", "Arduino", "IoT"]
  },
  {
    id: 2,
    text: "Completed Full Stack Developer Apprenticeship at NxtWave Disruptive Technologies",
    date: "2021 - 2022",
    category: { tag: "education", color: "#9932CC" },
    links: [
      {
        url: "#viewmore",
        text: "View Details",
        type: "primary"
      },
      {
        url: "https://www.nxtwave.tech/",
        text: "NxtWave",
        type: "secondary"
      }
    ],
    details: [
      "Intensive 6-month program focused on MERN Stack",
      "Built 15+ real-world projects including e-commerce and social media apps",
      "Learned industry best practices and Agile methodologies",
      "Mentored by industry professionals from top tech companies"
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript", "HTML", "CSS"]
  },
  {
    id: 3,
    text: "Started as Product Development Engineer at Comviva Technologies",
    date: "September 2022",
    category: { tag: "career", color: "#2E8B57" },
    links: [
      {
        url: "https://www.comviva.com/",
        text: "Company Info",
        type: "primary"
      },
      {
        url: "#viewmore",
        text: "View More",
        type: "secondary"
      }
    ],
    details: [
      "Joined as React Native Developer in Mobile Engineering Team",
      "Responsible for developing cross-platform mobile applications",
      "Working on telecom and fintech solutions for African markets",
      "Collaborating with international teams across multiple time zones"
    ]
  },
  {
    id: 4,
    text: "Developed MyMTN self-care mobile application using React Native",
    date: "October 2022 - December 2023",
    category: { tag: "project", color: "#4169E1" },
    links: [
      {
        url: "https://play.google.com/store/apps/details?id=com.mtn.selfcare.app",
        text: "Play Store",
        type: "playstore"
      },
      {
        url: "https://apps.apple.com/app/mymtn/id1490912737",
        text: "App Store",
        type: "appstore"
      },
      {
        url: "#viewmore",
        text: "View Details",
        type: "secondary"
      }
    ],
    details: [
      "Led end-to-end development of self-care mobile application",
      "Integrated 20+ telecom APIs for data usage, billing, and subscription management",
      "Implemented real-time data synchronization and offline capabilities",
      "Served 500K+ active users across multiple African countries",
      "Achieved 4.2+ rating on app stores with 99.9% crash-free sessions"
    ],
    technologies: ["React Native", "Redux", "TypeScript", "REST APIs", "Firebase", "SQLite"]
  },
  {
    id: 5,
    text: "Achieved 80% performance improvement through application modernization",
    date: "2023",
    category: { tag: "achievement", color: "#FFD700" },
    link: {
      url: "#viewmore",
      text: "View Details",
    },
    details: [
      "Migrated legacy codebase to modern React Native architecture",
      "Implemented code splitting and lazy loading for better performance",
      "Optimized API calls and implemented efficient caching strategies",
      "Reduced app bundle size by 60% through tree shaking and optimization",
      "Improved app startup time from 8 seconds to 1.5 seconds"
    ]
  },
  {
    id: 6,
    text: "Received React Native Developer Certificate from Udemy",
    date: "2023",
    category: { tag: "certification", color: "#32CD32" },
    links: [
      {
        url: "#viewmore",
        text: "View Certificate",
        type: "primary"
      },
      {
        url: "https://www.udemy.com/course/the-complete-react-native-and-redux-course/",
        text: "Udemy Course",
        type: "secondary"
      }
    ],
    details: [
      "Completed comprehensive 40-hour React Native course",
      "Learned advanced concepts including animations, navigation, and state management",
      "Built 5 complex mobile applications as part of the curriculum",
      "Scored 95% in final assessment"
    ]
  },
  {
    id: 7,
    text: "Promoted to Senior Software Engineer",
    date: "January 2024",
    category: { tag: "career", color: "#2E8B57" },
    link: {
      url: "#viewmore",
      text: "Learn More",
    },
    details: [
      "Promoted based on exceptional performance and leadership skills",
      "Leading React Native development for fintech applications",
      "Mentoring junior developers and conducting code reviews",
      "Responsible for architectural decisions and technical planning"
    ]
  },
  {
    id: 8,
    text: "Led development of MTN MoMo fintech platform",
    date: "January 2024 - Present",
    category: { tag: "project", color: "#FF6347" },
    links: [
      {
        url: "https://play.google.com/store/apps/details?id=com.mtn.momo.consumer",
        text: "Play Store",
        type: "playstore"
      },
      {
        url: "https://apps.apple.com/app/mtn-momo/id1548328006",
        text: "App Store",
        type: "appstore"
      },
      {
        url: "https://appgallery.huawei.com/app/C102975251",
        text: "Huawei Gallery",
        type: "huawei"
      },
      {
        url: "#viewmore",
        text: "View Details",
        type: "secondary"
      }
    ],
    details: [
      "Leading development of mobile money platform serving 2M+ users",
      "Implemented secure payment processing handling $50M+ monthly transactions",
      "Built features for money transfer, bill payments, and merchant services",
      "Deployed across Ghana, CDI, Uganda, Cameroon, and Zambia",
      "Integrated with local banking systems and regulatory compliance"
    ],
    technologies: ["React Native", "Node.js", "Hybrid apps", "MySql", "Redis", "Azure", "Docker", "Kubernetes"]
  },
  {
    id: 9,
    text: "Worked onsite in Ghana providing technical consultation",
    date: "2024",
    category: { tag: "international", color: "#9370DB" },
    link: {
      url: "#viewmore",
      text: "Experience Details",
    },
    details: [
      "3-month onsite assignment in Accra, Ghana",
      "Provided direct client support and technical consultation",
      "Led knowledge transfer sessions with local development teams",
      "Implemented localization features for Ghanaian market",
      "Collaborated with MTN Ghana's technical and business teams"
    ]
  },
  {
    id: 10,
    text: "Received MTN Ghana Appreciation Certificate",
    date: "2024",
    category: { tag: "recognition", color: "#FFD700" },
    link: {
      url: "#viewmore",
      text: "View Certificate",
    },
    details: [
      "Recognized for exceptional React Native development work",
      "Acknowledged for outstanding client collaboration and communication",
      "Appreciated for going above and beyond in delivering solutions",
      "Certificate presented by MTN Ghana's CTO"
    ]
  },
  {
    id: 11,
    text: "Developed GroceryPlus e-commerce application",
    date: "2025",
    category: { tag: "project", color: "#32CD32" },
    links: [
      {
        url: "https://github.com/kruthishkandula/groceryplus",
        text: "GitHub",
        type: "github"
      },
      {
        url: "https://groceryadminportal.onrender.com",
        text: "Live Demo",
        type: "demo"
      },
      {
        url: "#viewmore",
        text: "View Details",
        type: "secondary"
      }
    ],
    details: [
      "Built using React Native Expo for cross-platform development",
      "Integrated Strapi CMS for content management",
      "PostgreSQL database for robust data storage",
      "Features include shopping cart, payment integration, and order tracking",
      "Implemented real-time inventory management"
    ],
    technologies: ["React Native", "Expo", "Strapi", "PostgreSQL", "Stripe", "Redux Toolkit"]
  },
  {
    id: 12,
    text: "Built personal portfolio website with modern React.js",
    date: "Present",
    category: { tag: "project", color: "#1E90FF" },
    links: [
      {
        url: "https://kruthishkandula.free.nf/",
        text: "Visit Portfolio",
        type: "website"
      },
      {
        url: "https://github.com/kruthishkandula/Personal-Portfolio",
        text: "GitHub",
        type: "github"
      },
      {
        url: "#viewmore",
        text: "View Details",
        type: "secondary"
      }
    ],
    details: [
      "Built with React.js and modern web technologies",
      "Responsive design with smooth animations",
      "Showcases professional projects and achievements",
      "Deployed with continuous integration pipeline",
      "SEO optimized and performance focused"
    ],
    technologies: ["React.js", "JavaScript", "CSS3", "HTML5", "Render", "Git"]
  },
];

const Timeline = () => {
  const [JourneyData, setJourneyData] = useState([]);
  const { get } = useHttpService();
  const renderAfterCalled = useRef(false);

  const fetchJourney = async () => {
    try {
      const response = await get("/api/journeys/getJourneys");
      // Reverse the data from API to show latest first
      setJourneyData([...response.data].reverse());
    } catch (error) {
      console.log("Using static timeline data");
      // Reverse the static data to show latest first
      setJourneyData([...data].reverse());
    }
  };

  useEffect(() => {
    if (!renderAfterCalled.current) {
      fetchJourney();
    }
    renderAfterCalled.current = true;
  }, []);

  return (
    <div>
      {JourneyData.length > 0 && (
        <div className="timeline-container my-0">
          {JourneyData.map((item) => (
            <TimelineItem data={item} key={item.id} />
          ))}
        </div>
      )}
      {JourneyData.length === 0 && (
        <div className="my-5">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Timeline;