import project1 from "../assets/projects/Well Visit.png";
import project2 from "../assets/projects/EcommerceHome.png";
import project3 from "../assets/projects/Netflix.png";
import project4 from "../assets/projects/Olx.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With an year of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 year of  experience, I have worked with a variety of technologies, including React, Node.js, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "MERN-Stack Developer",
    company: "Brototype",
    description: `I am committed to continuous learning, advancing my skills through practical projects and constructive feedback from seasoned professionals. This mentorship has been pivotal in my development, enabling me to successfully complete two industrial-level projects. These experiences have honed my abilities, making me a confident and capable developer, well-prepared for challenging opportunities.

`,
    technologies: [
      "Javascript",
      "React.js",
      "Next.js",
      "mongoDB",
      "PostgreSQL",
      "Node.js",
      "AWS",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Well Visit- Doctor Booking App",
    image: project1,
    description:
      "Developed a dynamic online platform facilitating doctor booking and consultation. Enables seamless appointment scheduling, video consultation and real-time chat support for instant assistance.",

    technologies: [
      "Node.js",
      "Express.js",
      "React",
      "Redux",
      "MongoDB",
      "Socket.IO",
      "Tailwind CSS",
      "Stripe",
      "Zego Cloud API",
    ],
    liveUrl: "https://wellvisit.online/",
    githubUrl:
      "https://github.com/Harikrishnan391/WellVisit-Doctor_Booking.git",
  },
  {
    title: "Mobardo - Ecommerce Application",
    image: project2,
    description:
      "Developed a secure e-commerce platform for selling watches, enabling seamless product browsing, selection and secure payment processing. Implemented order tracking functionality to enhance the customer experience and ensure transparency.",
    technologies: [
      "Express",
      "Node.js",
      "Mongoose",
      "EJS",
      "JavaScript",
      "MongoDB",
      "Bootstrap",
      "Twilio",
      "Razorpay",
    ],
    liveUrl: "https://harikrishnan.life",
    githubUrl: "https://github.com/Harikrishnan391/Ammobardo.git",
  },
  {
    title: "Netflix React Clone",
    image: project3,
    description:
      "Developed a Netflix clone with dynamic content fetching powered by the TMDB API, enabling real-time updates to movies. Implemented Seamless API calls using the Axios module, optimizing data retrieval process for efficient performance and readability",
    technologies: ["React", "TailwindCSS", "TMDB API"],
    githubUrl: "https://github.com/Harikrishnan391/React-NetflixClone.git",
  },
  {
    title: "OLX Clone",
    image: project4,
    description:
      "Developed an OLX clone project using React.js and utilized Firebase as the backend to handle user authentication.",
    technologies: ["React", "CSS", "Firebase"],
    githubUrl: "https://github.com/Harikrishnan391/React-olxClone.git",
  },
];

export const CONTACT = {
  address: "Ernakulam(D) N.parvur Kerala-683594",
  phoneNo: "+91 8129383991 ",
  email: "harivk1998@gmail.com",
};
