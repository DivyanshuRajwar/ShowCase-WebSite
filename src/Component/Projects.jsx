"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import UiUx from "../assets/uiux.png";
import Ecommerce from "../assets/Ecommerce.jpg";
import Shopify from "../assets/shopify.webp";
import Restro from "../assets/restaurant.png";
import Ai from "../assets/ai.avif";
import BecomeClient from "./BecomeClient";

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [showClientHome, setShowClientHome] = useState(false); // State to toggle the "Become a Client" view

  const projects = [
    {
      id: 1,
      name: "UI UX Design ",
      description:
        "In Syfter App, we made it easy for people to invest into crypto and stock market assets with its user friendly interface and interactive swiping",
      image: UiUx,
      tech: ["React Native", "UI/UX", "Fintech"],
      liveLink: "#",
    },
    {
      id: 2,
      name: "E-commerce Website ",
      description:
        "Developed a modern and responsive e-commerce platform using React and Tailwind CSS, ensuring smooth shopping experience across all devices.",
      image: Ecommerce,
      tech: ["React", "Tailwind CSS", "E-commerce"],
      liveLink: "#",
    },
    {
      id: 3,
      name: "Shopify Website Development",
      description:
        "Created a fully functional Shopify store with custom themes and optimized shopping flows for maximum conversion and user satisfaction.",
      image: Shopify,
      tech: ["Shopify", "Liquid", "E-commerce"],
      liveLink: "#",
    },
    {
      id: 4,
      name: "Restaurant Website ",
      description:
        "Designed and developed a beautiful restaurant website with online menu, reservation system, and responsive design using React and Tailwind CSS.",
      image: Restro,
      tech: ["React", "Tailwind CSS", "Restaurant"],
      liveLink: "https://restaurant-web-nine-gray.vercel.app/",
    },
    {
      id: 5,
      name: "AI-Powered Analytics Dashboard",
      description:
        "Data visualization platform with AI-driven insights for business intelligence",
      image: Ai,
      tech: ["Vue.js", "Python", "TensorFlow"],
      liveLink: "#",
    },
  ];

  const prevCards = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const nextCards = () => {
    setStartIndex((prevIndex) => Math.min(projects.length - 3, prevIndex + 1));
  };

  // Function to show the client home component
  const handleBecomeClientClick = () => {
    setShowClientHome(true);
  };

  // Function to go back to the projects
  const handleBackToProjectsClick = () => {
    setShowClientHome(false);
  };

  return (
    <div className="bg-black min-h-screen w-full text-white">
      {showClientHome ? (
        // Show BecomeClient component when the state is true
        <BecomeClient onBack={handleBackToProjectsClick} />
      ) : (
        <>
          <div className="flex items-center justify-between p-7 md:p-6 bg-gradient-to-r from-[#1a1a2e] to-[#16213e]">
            <div>
              <h1 className="text-4xl md:text-3xl font-extrabold text-[#6c63ff] tracking-wide">
                Zyrix Craft
              </h1>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2">
              <h2 className="text-3xl md:text-3xl font-bold text-white tracking-wide">
              Projects Showcase
              </h2>
            </div>

            {/* Right Side - Buttons */}
            <div className="flex gap-6">
              <button
                onClick={handleBecomeClientClick} // Click handler
                className="bg-[#6c63ff] hover:bg-[#8a84ff] text-white font-semibold px-4 py-3 rounded-full shadow-lg transition duration-300"
              >
                Become a Client
              </button>
              <button
                className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-4 py-3 rounded-full shadow-lg transition duration-300"
                onClick={() => window.open("https://zyrixcraft.in/", "_blank")}
              >
                Back to Main
              </button>
            </div>
          </div>

          {/* Paragraph Section */}
          <div className="flex items-center justify-center p-10 md:p-20">
            <h3 className="text-lg md:text-2xl text-gray-300 text-center leading-relaxed font-light max-w-5xl min-w-[300px] ">
              At{" "}
              <span className="text-[#6c63ff] font-semibold">Zyrix Craft</span>,
              we specialize in creating high-quality websites using modern
              technologies like{" "}
              <span className="text-[#6c63ff] font-semibold">React</span> and
              <span className="text-[#6c63ff] font-semibold">
                {" "}
                Tailwind CSS
              </span>
              . Our team focuses on delivering responsive and user-friendly
              solutions for various industries, including{" "}
              <span className="text-[#6c63ff] font-semibold">e-commerce</span>,
              <span className="text-[#6c63ff] font-semibold"> restaurants</span>
              , and
              <span className="text-[#6c63ff] font-semibold">
                {" "}
                professional services
              </span>
              .
            </h3>
          </div>

          {/* Project Cards */}
          <div className="relative w-full px-4 md:px-8 lg:px-16 pb-20">
            <div className="max-w-7xl mx-auto">
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {projects.slice(startIndex, startIndex + 3).map((project) => (
                    <div
                      key={project.id}
                      className="bg-[#1a1a2e] rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-8px]"
                    >
                      <div className="h-[220px] overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3">
                          {project.name}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, idx) => (
                            <span
                              key={idx}
                              className="bg-[#2d2d42] text-xs px-2 py-1 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.liveLink}
                          className="inline-flex items-center text-sm font-medium text-[#6c63ff] hover:text-[#8a84ff]"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between mt-12">
                  <div className="flex gap-5">
                    <button
                      onClick={prevCards}
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-[#1a1a2e] border-[#2d2d42] text-white hover:bg-[#2d2d42]"
                      disabled={startIndex === 0}
                    >
                      <ArrowLeft className="h-5 w-5" />
                      <span className="sr-only">Previous</span>
                    </button>
                    <button
                      onClick={nextCards}
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-[#1a1a2e] border-[#2d2d42] text-white hover:bg-[#2d2d42]"
                      disabled={startIndex >= projects.length - 3}
                    >
                      <ArrowRight className="h-5 w-5" />
                      <span className="sr-only">Next</span>
                    </button>
                  </div>

                  <a
                    href=""
                    className="inline-flex items-center text-white hover:text-[#6c63ff] transition-colors"
                  >
                    View All Cases <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
