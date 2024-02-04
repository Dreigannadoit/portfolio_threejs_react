import { 
    tesla, 
    persona, 
    logo, 
    logoLight, 
    tpgs,
    ar,
    doggos,
    groom,
    made_easy,
    sea,
    street_fighter,
    zelda
} from "../assets/images";
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
    rnrSeaside,
    git,
    aR
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
        imageUrl: git,
        name: "git",
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
        name: "Tailwind",
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
        orgType: "Educatuional Organization",
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
        orgType: "Air BnB Business",
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
        iconUrl: fist,
        iconBg: "#40BBED",
        theme: 'btn-back-black',
        img: street_fighter, 
        name: 'Street Fighter inspired Game',
        description: 'A basic street fighter game I made for fun.',
        link: 'https://dreigannadoit.github.io/streetfighergame.github.io/',
        responsive: '',
        date: 'Jan 2024',
    },
    {
        iconUrl: sword,
        iconBg: "#D59A2D",
        theme: 'btn-back-red',
        img: zelda, 
        name: 'Pygame - 8-bit Zelda Game',
        description: 'A pythone application that runs a 8-bit stylized game similar to the popular Nintendo GamEe: Zelda. ',
        link: 'https://github.com/Dreigannadoit/pygame_zelda_dark_souls/tree/master',
        responsive: 'Download file and then open .exe file',
        date: 'Dec 2023',
    },
    {
        iconUrl: pawprint,
        iconBg: "#5BD52D",
        theme: 'btn-back-green',
        img: doggos, 
        name: 'Dog Portfolio',
        description: 'An intricately designed website exuding a touch of sophistication tailored for my three elegant canine companions.',
        link: 'https://dreigannadoit.github.io/doogos.github.io/',
        responsive: 'Best viewed on PC',
        date: 'Nov 2023',
    },
    {
        iconUrl: aR,
        iconBg: "#2D44D5",
        theme: 'btn-back-red',
        img: ar, 
        name: 'Video Utilizing Augmented Reality',
        description: 'Video project utilizing 3D augmented reality.',
        link: 'https://youtu.be/ExgiUAlb8NQ',
        responsive: '',
        date: 'Oct 2023',
    },
    {
        iconUrl: rnrSeaside,
        iconBg: "#2DAFD5",
        theme: 'btn-back-blue',
        img: sea, 
        name: 'RnR Seaside Condotel',
        description: 'A Web application for an Online Air BnB Business that displays the facilities of this apartment.',
        link: 'https://rnrseasideapartment.github.io/',
        responsive: '',
        date: 'March 2023',
    },
    {
        iconUrl: estate,
        iconBg: "#D52DC6",
        theme: 'btn-back-black',
        img: groom, 
        name: 'Anti-Cyber-Grooming Website',
        description: 'A website that containes information regarding the topic of Cyber-Grooming.',
        link: 'https://dreigannadoit.github.io/MilMiniPt.github.io/index.html',
        responsive: 'Best viewed on PC',
        date: 'Jan 2023',
    },
    {
        iconUrl: programing,
        iconBg: "#D5512D",
        theme: 'btn-back-blue',
        img: made_easy, 
        name: 'Made Easy',
        description: 'A Web application for an Online Organization that specializes in teaching children basic programing and computer science.',
        link: 'https://dreigannadoit.github.io/madeeasy.github.io/Pages/header-page.html',
        responsive: 'Best viewed on PC',
        date: 'Nov 2022',
    }
];