import zoom from "@/public/Screenshot 2024-10-26 015532.png"
import medium from "@/public/Screenshot 2024-12-12 005542.png"
import Chatapp from "@/public/Screenshot 2024-12-18 051507.png"
import portfolio from "@/public/Screenshot 2024-12-18 053649.png"
import typescript from "@/public/typescript.png"
import nextjs from "@/public/nj.webp"
import mui from "@/public/mui.png"
import hono from "@/public/hono.jpeg"
import prisma from "@/public/prisma.png"
import clouldflare from "@/public/clould.png"
import ps from "@/public/postgres1.png"
import payzee from "@/public/Screenshot 2025-01-07 235310.png"
import docker from "@/public/docker1.png"
import react from "@/public/react (1).png";
import tbc from "@/public/to be continue.jpg";
import { link } from "fs"
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Payzee",
    des: "",
    img: payzee.src,
    iconLists: [typescript.src, nextjs.src, prisma.src, ps.src, docker.src],
    link: "https://github.com/pavaniupadhyay/payzee", // Updated with proper URL
  },
  {
    id: 2,
    title: "TalkNest",
    des: "",
    img: zoom.src,
    iconLists: [typescript.src, mui.src, nextjs.src],
    link: "https://zoom-clone-eight-zeta.vercel.app", // Updated with proper URL
  },
  {
    id: 3,
    title: "Scribble-Scroll",
    des: "",
    img: medium.src,
    iconLists: [clouldflare.src, hono.src, prisma.src, ps.src, react.src],
    link: "https://scribble-scroll.vercel.app", // Updated with proper URL
  },
  {
    id: 4,
    title: "Portfolio",
    des: "",
    img: portfolio.src,
    iconLists: [""],
    link: "", // You can add a link here when ready
  },
  {
    id: 5,
    title: "To be continued",
    des: "",
    img: tbc.src,
    iconLists: [""],
    link: "", // You can add a link here when ready
  },
];



export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
 
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];