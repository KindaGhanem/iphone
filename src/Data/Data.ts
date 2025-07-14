

type VideoSlide = {
  id: number;
  src: string;
  texts: string[];
};


import imgIphone1 from "./../assets/images/Iphone-one.png";
import imgIphone2 from "./../assets/images/Iphone-two.png";
import imgIphone3 from "./../assets/images/Iphone-three.png";
import imgIphone4 from "./../assets/images/Iphone-four.png";



import video1 from "./../assets/videos/highlight-first.mp4";
import video2 from "./../assets/videos/hightlight-sec.mp4";
import video3 from "./../assets/videos/hightlight-third.mp4";
import video4 from "./../assets/videos/highlight-first.mp4";


import explore1Img from './../assets/images/explore1.jpg'
import explore2Img from './../assets/images/explore2.jpg'

export const navItems = [ 
  {
    id: 1,
    name : "Store"
  },
  {
    id: 2 ,
    name : "Mac"
  },
  {
    id:3 ,
    name : "iPhone"
  },
  {
    id:4 ,
    name : "Support"
  },
]
export const models = [
  {
    title: "iPhone1",
    color: ["#283a4f"],
    img: imgIphone1,
  },
  {
    title: "iPhone2",
    color: ["#283227"],
    img: imgIphone2,
  },
  {
    title: "iPhone3",
    color: ["#af1e7b"],
    img: imgIphone3,
  },
  {
    title: "iPhone4",
    color: ["#74392B"],
    img: imgIphone4,
  },
];
export const sizes = [
    { label: "6.1", value: "small" },
    { label: "6.7", value: "large" },
];
export const footerLinks = [
  { id: 1, link: "Privacy Policy |" },
  { id: 2, link: "Terms of Use |" },
  { id: 3, link: "Sales Policy |" },
  { id: 4, link: "Legal |" },
  { id: 5, link: "Site Map |" },
];

export const slides: VideoSlide[] = [
  {
    id: 1,
    src: video1,
    texts: ["Enter A17 Pro.", "Game-changing chip.", "Groundbreaking performance."],
  },
  {
    id: 2,
    src: video2,
    texts: ["Designed for durability.", "Built to last.", "Beautiful and strong."],
  },
  {
    id: 3,
    src: video3,
    texts: ["Next-level camera.", "Capture every detail.", "Pro photography redefined."],
  },
  {
    id: 4,
    src: video4,
    texts: ["All-day battery life.", "Stay powered.", "No limits."],
  },
];

 export const images = [
    {
      src: explore1Img,
      alt: "titanium"
    },
    {
      src: explore2Img,
      alt: "titanium 2"
    }
  ];
