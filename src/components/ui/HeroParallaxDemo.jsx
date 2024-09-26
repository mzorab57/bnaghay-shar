import React from "react";
import HeroParallax from "./HeroParallax"; // Import the HeroParallax component
import aboutUs from "../../assets/images/about1.jpg";
import aboutSub from "../../assets/images/aboutArch.jpg";
import aboutIntrrior from "../../assets/images/aboute-interior1.jpg";
import about3d from "../../assets/images/about3d.jpg";

const products = [
 
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: aboutIntrrior,
  },
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: about3d,
  },
  
  
  
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: aboutSub,
  },
  {
    title: "Soza",
    link: "https://gomoonbeam.com",
    thumbnail: aboutUs,
  },
  {
    title: "Nuseba",
    link: "https://cursor.so",
    thumbnail: aboutSub,
  },
  {
    title: "Qwta",
    link: "https://gomoonbeam.com",
    thumbnail: aboutUs,
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: aboutIntrrior,
  },
  {
    title: "Off",
    link: "https://gomoonbeam.com",
    thumbnail: about3d,
  },
  
  // ... other product data
];

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export default HeroParallaxDemo;
