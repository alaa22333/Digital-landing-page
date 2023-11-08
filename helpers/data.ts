import social from "@/public/social.svg";
import seo from "@/public/Seo.svg";
import developer from "@/public/Software developer.svg";
import peolpe from "@/public/people.svg";
import result from "@/public/result.svg";
export const links = [
  { title: "Home", hash: "#home" /*  icon: AiOutlineHome  */ },
  { title: "About", hash: "#about" /* icon: FaUserAlt */ },
  { title: "Work", hash: "#work" /* icon: IoMdCreate */ },
  {
    title: "Services",
    hash: "#services" /* icon: AiOutlineFundProjectionScreen */,
  },
] as const;

export const services = [
  {
    img: social,
    heading: "Social media marketing",
    direction: "right",
    subHeadings: [
      "Using social media platforms to connect with and engage potential and existing customers.",
      "Helping Your business create and manage social media campaigns and monitor their social media presence.",
    ],
  },
  {
    img: seo,
    heading: "Search Engine Optimization(SEO)",
    direction: "left",
    subHeadings: [
      "SEO helps businesses improve their ranking in search engine results pages (SERPs)",
      "More people will see their website when they search for relevant keywords.",
    ],
  },
  {
    img: developer,
    heading: "Website design and development",
    direction: "right",
    subHeadings: [
      "Creating and maintaining a professional and user-friendly website.",
      "Helping Your business grow fast.",
    ],
  },
] as const;

export const about = [
  {
    img: result,
    subHeadig:
      "We have a proven track record of delivering results for our clients.",
  },
  {
    img: peolpe,
    subHeadig:
      "We're a team of experienced marketing professionals who are passionate about helping businesses succeed.",
  },
] as const;
