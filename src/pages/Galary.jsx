import React, { useState } from "react";
import CategoryFilter from "../components/ui/CategoryFilter";

// Import images (example imports)
import inter1 from "../assets/images/inter (1).webp";
import inter2 from "../assets/images/inter (2).webp";
import inter3 from "../assets/images/inter (3).webp";
import inter4 from "../assets/images/inter (4).webp";
import inter5 from "../assets/images/inter (5).webp";
// garden
import gardenQaiwan1 from "../assets/images/gardenQaiwan (1).webp";
import gardenQaiwan2 from "../assets/images/gardenQaiwan (2).webp";
import gardenQaiwan3 from "../assets/images/gardenQaiwan (3).webp";
import gardenQaiwan4 from "../assets/images/gardenQaiwan (4).webp";
import gardenQaiwan5 from "../assets/images/gardenQaiwan (6).webp";
import gardenQaiwan6 from "../assets/images/gardenQaiwan (7).webp";
// green wall
import greenWall1 from "../assets/images/greenWall (1).webp";
import greenWall2 from "../assets/images/greenWall (2).webp";
import greenWall3 from "../assets/images/greenWall (3).webp";
// round about
import ra1 from "../assets/images/ra (1).webp";
import ra2 from "../assets/images/ra (2).webp";
import ra3 from "../assets/images/ra (3).webp";
import ra4 from "../assets/images/ra (4).webp";
import ra5 from "../assets/images/ra (5).webp";
import ra6 from "../assets/images/ra (6).webp";
import ra7 from "../assets/images/ra (7).webp";
import ra9 from "../assets/images/ra (9).webp";
import ra10 from "../assets/images/ra (10).webp";
import ra11 from "../assets/images/ra (11).webp";

const projects = [
  { id: 2, category: "interior", title: "Au Creative", image: [inter4,inter5, inter2, inter3, inter1] },
  { id: 1, category: "garden", title: "Au Creative", image: [gardenQaiwan1, gardenQaiwan2, gardenQaiwan3, gardenQaiwan4, gardenQaiwan5, gardenQaiwan6] },
  { id: 3, category: "garden", title: "Au Creative", image: [greenWall3, greenWall1, greenWall2] },
  { id: 4, category: "raoundAbout", title: "Au Creative", image: [ra1, ra2, ra3, ra4, ra5, ra6, ra7, ra9, ra10, ra11] },
  { id: 5, category: "exterior", title: "Au Creative", image: [inter5,inter2, inter3, inter1, inter4] },
];

const Galary = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null); // Track the clicked project
  const [selectedImage, setSelectedImage] = useState(null); // Track the selected image for modal

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // Function to open modal with selected image
  const openModal = (project) => {
    setSelectedProject(project);
    setSelectedImage(project.image[0]);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedProject(null);
    setSelectedImage(null);
  };

  return (
    <div className="py-24">
      {/* top image */}
      <section className="navigation">
        <div className="relative ">
          <img
            src={inter3}
            alt="background"
            className="object-cover h-[400px] w-full"
          />
          {/* Container for the text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-white via-transparent to-transparent">
            <h2 className="text-3xl lg:text-4xl text-white font-bold">Our Project</h2>
            <ul className="flex justify-center space-x-2 text-gray-300 mt-4">
              <li>
                <a href="/" className="text-yellow-500 text-xl font-semibold">
                  Home
                </a>
              </li>
              <span>/</span>
              <li className="text-yellow-500 text-xl font-semibold">
              / Gallery
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Filter Options */}
      <CategoryFilter
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 border-sky-200">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="relative group overflow-hidden shadow-xl border-2 border-white"
            onClick={() => openModal(project)} // Open modal when image is clicked
          >
            <img
              src={project.image[0]}
              alt={project.title}
              className="w-full h-72 object-cover rounded-sm"
            />

            {/* hover */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
              <h4 className="text-white text-lg font-bold">{project.title}</h4>
              <p className="text-white italic">
                {project.category === "interior"
                  ? "Interior"
                  : project.category === "exterior"
                  ? "Exterior"
                  : project.category === "garden"
                  ? "Garden"
                  : "Round About"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center overflow-y-auto">
          <div className="relative bg-white/80 p-4 rounded w-[90%] md:w-[60%] lg:w-[40%]">
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 text-black font-bold text-2xl"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt={selectedProject.title}
              className="w-full h-[300px] lg:h-[600px] object-cover rounded"
            />

            {/* Horizontal Thumbnail Scroll */}
            <div className="flex mt-4 justify-start space-x-2 overflow-x-auto">
              {selectedProject.image.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`thumbnail-${index}`}
                  className={`w-20 h-20 object-cover rounded cursor-pointer ${
                    selectedImage === img ? "border-2 border-[#49a3a3]" : ""
                  }`}
                  onClick={() => setSelectedImage(img)} // Set selected image on click
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galary;
