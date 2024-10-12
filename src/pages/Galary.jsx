import React, { useState } from "react";
import bg_4 from "../assets/images/BGG4.jpg";
import bg_3 from "../assets/images/BGG3.webp";
import bg_2 from "../assets/images/BGG2.webp";
import bg_1 from "../assets/images/BGG1.webp";
import CategoryFilter from "../components/ui/CategoryFilter";

const projects = [
  { id: 1, category: "agency", title: "Au Creative", image: bg_1 },
  { id: 2, category: "agency", title: "Au Creative", image: bg_2 },
  { id: 3, category: "agency", title: "Au Creative", image: bg_3 },
  { id: 4, category: "ecomer", title: "Au Creative", image: bg_4 },
  { id: 5, category: "agency", title: "Au Creative", image: bg_1 },
  { id: 6, category: "agency", title: "Au Creative", image: bg_2 },
  { id: 7, category: "agency", title: "Au Creative", image: bg_3 },
  { id: 8, category: "resident", title: "Au Creative", image: bg_1 },
  { id: 9, category: "resident", title: "Au Creative", image: bg_3 },
  { id: 10, category: "resident", title: "Au Creative", image: bg_4 },
  { id: 11, category: "agency", title: "Au Creative", image: bg_2 },
  { id: 12, category: "agency", title: "Au Creative", image: bg_1 },
];

const Galary = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="py-20">

        {/* top iamge */}
      <section className="navigation">
        <div className="relative ">
          <img
            src={bg_1}
            alt="background"
            className="object-cover h-[400px] w-full "
          />
          {/* Container for the text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-white via-transparent to-transparent">
            <h2 className="text-3xl text-white font-bold">3 Columns Grid v1</h2>
            <ul className="flex justify-center space-x-2 text-gray-300 mt-4">
              <li>
                <a href="/" className="hover:text-yellow-500">
                  Home
                </a>
              </li>
              <span>/</span>
              <li className="text-yellow-500 font-semibold">
                3 Columns Grid v1
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  border-sky-200 ">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="relative group overflow-hidden shadow-lg border-2 border-white "
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-72 object-cover rounded-sm "
            />

            {/* hover */}
            <div className="absolute  inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
              <h4 className="text-white text-lg font-bold">{project.title}</h4>
              <p className="text-white italic">
                {project.category === "agency"
                  ? "Agency Interior"
                  : project.category === "ecomer"
                    ? "Ecommerce Interior"
                    : "Residential Interior"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-8">
        <button className="bg-yellow-500 text-white py-2 px-6 rounded-full">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Galary;
