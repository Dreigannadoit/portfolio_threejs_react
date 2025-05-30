import { 
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
    zelda,
    thumbnail_web,
    vidac_1,
    vidac_2,
    hireCulture,
    DentalSystem,
    utr,
    DentalAppointment
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
    aR,
    codepen,
    plant,
    thumbnailProjectIcon,
    hireCultureLogo,
    DentalSystemIcon,
    utrIcon,
    DentalAppointmentIcon,
    Postgresql,
    MySQL,
    Spring_Boot,
    Vue
} from "../assets/icons";

import{
    cv
} from "../cv"

import{
    vlog_1,
    vlog_2,
    vlog_3,
    vlog_4,
    vlog_5
} from "../assets/vlog"

export const meStuffs = [
    {
        imageUrl: persona,
        name: "Robert Andrei N. Bamba",
        allias: "Drei Abmab",
        imageLogoUrl: logo,
        imageLogoLightUrl: logoLight,
        cv: cv
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
        imageUrl: Vue,
        name: "Vue",
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
    {
        imageUrl: Spring_Boot,
        name: "Spring Boot",
        type: "Backend",
    },
    {
        imageUrl: Postgresql,
        name: "Postgresql",
        type: "Database",
    },
    {
        imageUrl: MySQL,
        name: "MySQL",
        type: "Database",
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
    },
    {
        name: 'codepen',
        iconUrl: codepen,
        link: 'https://codepen.io/dreigannadoit',
    }
];
// vidac_1
export const projects = [
    {
        iconUrl: DentalAppointmentIcon,
        iconBg: "#40BBED",
        theme: 'btn-blue-black',
        img: DentalAppointment, 
        name: 'Patient Dental Clinic Appointment App Template - Design and Developed',
        description: 'Developed a static template in react for a fictional clinic using React.',
        link: 'https://dreigannadoit.github.io/DoctorAppointmentHCI/',
        responsive: '',
        date: 'May 2024',
    },
    {
        iconUrl: utrIcon,
        iconBg: "#40BBED",
        theme: 'btn-blue-black',
        img: utr, 
        name: '19-Hour Cloud-Based Fullstack Web Game Development Challenge',
        description: 'Developed a web-only game within 19 hours using a full-stack architecture: PostgreSQL, Spring Boot, and React. Integrated the backend and frontend using Node.js and Axios for seamless API communication. The API system was containerized and deployed using Docker for efficient cloud-based hosting.',
        link: 'https://until-they-return.netlify.app/',
        responsive: '',
        date: 'April 2024',
    },
    {
        iconUrl: DentalSystemIcon,
        iconBg: "#40BBED",
        theme: 'btn-blue-black',
        img: DentalSystem, 
        name: 'Frontend Software Developer/Designer – U.S. Dental Platform (React- Demo)',
        description: 'Clean and Seal is a U.S.-based dental software solution designed to streamline dental records management by consolidating all patient information in one place. Built with React for a fast and modern user experience.',
        link: 'https://dreigannadoit.github.io/dental_software/',
        responsive: 'Not responsive',
        date: 'Feb 2025',
    },
    {
        iconUrl: hireCultureLogo,
        iconBg: "#40BBED",
        theme: 'btn-blue-black',
        img: hireCulture, 
        name: 'React and WordPress Developer',
        description: 'At hireCulture, I contributed as a Full-Stack Developer, leveraging React and WordPress to deliver virtual assistant services.',
        link: 'https://hirecultureva.com',
        responsive: '',
        date: 'Dec 2024',
    },
    {
        iconUrl: thumbnailProjectIcon,
        iconBg: "#40BBED",
        theme: 'btn-back-black',
        img: thumbnail_web, 
        name: 'Landing Page of Thumbnail Inspiration Hub Demo',
        description: 'Concept Design of Thubnail Inspiration hub landing page',
        link: 'https://dreigannadoit.github.io/thumbnailsite.github.io/',
        responsive: '',
        date: 'June 2024',
    },
    {
        iconUrl: plant,
        iconBg: "#40BBED",
        theme: 'btn-back-green',
        img: vidac_2, 
        name: 'Plant People Website - FIGMA DESIGN',
        description: 'Concept Design of Artificial plants e commerce website',
        link: 'https://www.figma.com/design/wc0NhDO6BxWzqKXjjADxqx/Plant-People?node-id=0-1&t=SScceFei9Uzp1u1E-1',
        responsive: '',
        date: 'May 2024',
    },
    {
        iconUrl: estate,
        iconBg: "#40BBED",
        theme: 'btn-back-blue',
        img: vidac_1, 
        name: 'VINDAC DESIGNERS AND BULDERS INC - FIGMA DESIGN',
        description: 'Concept Design of VINDAC landing page',
        link: 'https://www.figma.com/proto/BPyE7eq0qtOKC0qlB7rQJi/Untitled?node-id=3185-70&t=XFcDycNdc0HHsYH4-1&scaling=min-zoom&content-scaling=fixed&page-id=3176%3A2&starting-point-node-id=3185%3A70',
        responsive: '',
        date: 'April 2024',
    },
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


// Note events are catigorized from latest(top most) to oldest(bottom most).


export const vlogEvents = [   
    {
        date: 'March 05, 2024',
        time_entry: '10:12 PM',
        headline: 'Dart && Basics',
        discription: "Finished A six hour introductory course today. I am now certified in the basics (literally)",
        img: vlog_5,
        bg_color: "bg-green-500 ",
    },
    {
        date: 'March 05, 2024',
        time_entry: '4:07 PM',
        headline: 'Flutter and Dart',
        discription: "I atteneded a code camp the specifically teaches Dart. A language I don't know (yet). I was able to get 68% of the basics completed in 3 hours. I may be able to finish the entire course by the end of the day. I also got a certificate, so that cool.",
        img: vlog_4,
        bg_color: "bg-blue-200 ",
    },
    {
        date: 'March 04, 2024',
        time_entry: '12:03 PM',
        headline: 'Another Godot Project (Project Finite Space)',
        discription: "Now that I'm done making the vlog page on my portflio, I can continue Project: Finite Space. This is going to be one of the first projects I'll rebuild after my Unity projects got currupted :(. Right now I want to focus on a universal movement system for all my future projects.",
        img: vlog_3,
        bg_color: "bg-indigo-100",
    },
    {
        date: 'March 04, 2024',
        time_entry: '11:33 AM',
        headline: 'Created Vlog Page',
        discription: "Template is done for now, I think it looks nice.",
        img: vlog_2,
        bg_color: "bg-red-200",
    },
    {
        date: 'March 04, 2024',
        time_entry: '10:27 AM',
        headline: 'Development of Page',
        discription: "This page is going to be for checking my progress as I continue my prgramming journey. And so I can update my github more frequently.",
        img: vlog_1,
        bg_color: "bg-orange-200 ",
    },
];