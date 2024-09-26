import React from 'react';
import ServiceCard from './ui/ServiceCard';
import aboutUs from "../assets/images/about1.jpg";
import aboutSub from "../assets/images/aboutArch.jpg";
import aboutIntrrior from "../assets/images/aboute-interior1.jpg";
import about3d from "../assets/images/about3d.jpg";
import icon from "../assets/images/interior-01.png";
import icon3 from "../assets/images/interior-03.jpg";
import icon4 from "../assets/images/interior-04.png";
import icon12 from "../assets/images/interior-10.png";

// icon
import { SiInternetarchive } from "react-icons/si";


// Import Images
const servicesData = [
  {
    title: 'Architecture & Building',
    image: aboutUs,
    description: 'Planning, 3D Visualization, Landscape Design, Structural Drawing, CGI, Construction Supervision',
    icon: icon
  },
  {
    title: 'Interior and Exterior Design',
    image: aboutSub,
    description: 'Interior Design, Exterior Design, Renovation, Sustainable Design, Installation, 3D Experience',
    icon: icon3
  },
  {
    title: 'Furniture Productions',
    image: aboutIntrrior,
    description: 'Bespoke Furniture, Material Supply, Online Store, Distribute, 3D Modeling',
    icon: icon12
  },
  {
    title: 'Project Consulting & Supervisor',
    image: about3d,
    description: 'Project Analysis, Bid Documentation, Construction Supervisor',
    icon: icon4
  }
];

const ServicesSection = () => {
  return (
    <section className="bg-gray-50 py-24 min-h-screen">
    <div className="container mx-auto px-4">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-700">OUR SERVICES</h1>
      </div>

      {/* Grid Layout for Services */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            image={service.image}
            description={service.description}
            index={index}
          />
        ))}
      </div>
    </div>
  </section>
  );
};

export default ServicesSection;
