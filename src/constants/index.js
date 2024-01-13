import { tesla, persona, logo, logoLight, tpgs } from "../assets/images";
import {
    upwork,
    css,
    github,
    html,
    javascript,
    linkedin,
    nodejs,
    react,
    tailwindcss,
    typescript,
    django,
    python,
    estate,
    fist,
    pawprint,
    sword,
    programing,
    godot,
    c_sharp,
    blender,
    rnrSeaside
} from "../assets/icons";

export const meStuffs = [
    {
        imageUrl: persona,
        name: "Robert Andrei N. Bamba",
        allias: "Drei Abmab",
        imageLogoUrl: logo,
        imageLogoLightUrl: logoLight
    }
]

export const skills = [
    {
        imageUrl: godot,
        name: "godot",
        type: "Game Development",
    },
    {
        imageUrl: c_sharp,
        name: "c_sharp",
        type: "Game Development",
    },
    {
        imageUrl: blender,
        name: "blender",
        type: "3D modelling",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Frontend/Backend",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend",
    },
];

export const experiences = [
    {
        title: "Software Developer",
        company_name: "The Philippine Global School",
        icon: tpgs,
        iconBg: "#E77044",
        date: "September 2019 - June 2020",
        points: [
            "Developing and maintaining software such as mobile and website applications",
            "Collaborating with cross-functional teams including designers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Website Developer",
        company_name: "RnR Seaside Condo-Aprtment",
        icon: rnrSeaside,
        iconBg: "#3C84BD",
        date: "Jan 2022 - June 2022",
        points: [
            "Developing and maintaining web applications using HTML, CSS, Javascript, Github and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Utilize modern and new emerging technologies within the project"
        ],
    }
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Dreigannadoit',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/robert-a-b-3b56311ab/',
    },
    {
        name: 'UpWork',
        iconUrl: upwork,
        link: 'https://www.upwork.com/freelancers/~01b289c0a98a48fadd',
    }
];

export const projects = [
    {
        iconUrl: programing,
        theme: 'btn-back-blue',
        name: 'Made Easy',
        description: 'Designed a Web application for an Online Organization that specializes in teaching children basic programing and computer science.',
        link: 'https://dreigannadoit.github.io/madeeasy.github.io/Pages/header-page.html',
    },
    {
        iconUrl: sword,
        theme: 'btn-back-red',
        name: 'Pygame - 8-bit Zelda Game',
        description: 'Developed a pythone application that runs a 8-bit stylized game similar to the popular Nintendo GamEe: Zelda. ',
        link: 'https://github.com/Dreigannadoit/pygame_zelda_dark_souls',
    },
    {
        iconUrl: pawprint,
        theme: 'btn-back-green',
        name: 'Dog Portfolio',
        description: 'Created a fully fledge web application that showcases my three (3) Dogs.',
        link: 'https://dreigannadoit.github.io/doogos.github.io/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Anti-Cyber-Grooming Website',
        description: 'Designed a website that containes information regarding the topic of Cyber-Grooming.',
        link: 'https://dreigannadoit.github.io/MilMiniPt.github.io/index.html',
    },
    {
        iconUrl: fist,
        theme: 'btn-back-black',
        name: 'Street Fighter inspired Game',
        description: 'Designed a basic street fighter game',
        link: 'https://github.com/Dreigannadoit/javascript_street_fighter_game.github.io',
    },
];