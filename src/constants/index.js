import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    threejs,
    python,
    c,
    cpp,
    bootstrap,
    express,
    sql,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "python",
        icon: python,
    },
    {
        name: "c",
        icon: c,
    },
    {
        name: "cpp",
        icon: cpp,
    },
    {
        name: "bootstrap",
        icon: bootstrap,
    },
    {
        name: "express",
        icon: express,
    },
    {
        name: "sql",
        icon: sql,
    }
];

const experiences = [
    {
        title: "Bachelor of Technology",
        company_name: "Jain University - Bangalore",
        icon: web,
        iconBg: "#383E56",
        date: "Aug 2022 - Present",
        points: [
            "Web Development: Proficiency in HTML, CSS, JavaScript, React.js, Node.js, and MongoDB, allowing you to build responsive and dynamic web applications, including e-commerce sites and appointment management systems.",
            "Version Control System (VCS): Experience with Git for version control, enabling collaborative development and efficient code management through branching, committing, and merging.",
            "Data Structures and Algorithms: Knowledge of fundamental data structures (like arrays, linked lists, and trees) and algorithms, providing a strong foundation for problem-solving and optimizing code performance.",
            "Cloud Computing: Understanding of cloud technologies and services, which enhances application scalability and deployment, and allows for effective data storage and management.",
        ],
    },
    {
        title: "XII - PCM",
        company_name: "Golden Public School - Muzaffarnagar | UP",
        icon: backend,
        iconBg: "#E6DEDD",
        date: "March 2021 - June 2022",
        points: [
            "Computer Science: Learned SQL and Python, and developed a hospital management system project using Python, which laid the foundation for your interest in software development.",
            "Physics: Studied key concepts such as mechanics, electricity, and magnetism, developing analytical and problem-solving skills essential for understanding complex systems.",
            "Mathematics: Mastered advanced topics like calculus, algebra, and statistics, enhancing your ability to think critically and apply mathematical concepts in various fields, including coding and data analysis.",
            "Chemistry: Gained knowledge of chemical reactions, thermodynamics, and organic chemistry, building a strong understanding of the properties and behaviors of matter, which helped develop a structured approach to problem-solving.",
        ],
    },
    {
        title: "X",
        company_name: "Golden Public School - Muzaffarnagar | UP",
        icon: mobile,
        iconBg: "#383E56",
        date: "April 2019 - March 2020",
        points: [
            "Computer Science: Developed basic programming skills and learned about computer fundamentals, which sparked your interest in technology.",
            "Mathematics: Strengthened problem-solving and analytical skills, including algebra, geometry, and trigonometry.",
            "Science: Gained foundational knowledge in physics, chemistry, and biology, focusing on concepts like electricity, chemical reactions, and the human body.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        // image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        // image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        // image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };