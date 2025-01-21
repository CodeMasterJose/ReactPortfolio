import "./Pages.css";
import projImgOne from "../Assets/device.png";
import { useNavigate } from "react-router-dom";

function Portfolio() {
  const navigate = useNavigate();

  // Array of projects with image, description, and target route
  const projects = [
    {
      label: "Smart Calendar and Reminder Device",
      route: "/portfolio/project1",
      status: "in-progress",
      description: "This is a preview of Project 1.",
      imageUrl: projImgOne, // Path to the project image
    },
    {
      label: "Show Tracker",
      route: "/portfolio/project2",
      status: "Finished",
      description:
        "Web television show tracker app utilizing Supabase backend with over 165 thousand shows in database",
      imageUrl: null,
    },
    {
      label: "This Website",
      route: "/portfolio/project2",
      status: "in-progress",
      description: "This is a preview of Project 2.",
      imageUrl: null,
    },
    {
      label: "Homelab",
      route: "/portfolio/project3",
      status: "Never Ending",
      description: "This is a preview of Project 3.",
      imageUrl: null,
    },
    {
      label: "Discord Translator and Music Player Bot",
      route: "/portfolio/project2",
      status: "Finished",
      description:
        "Discord bot built on python that automatically translates Turkish to English with Machine Translation and capable of playing audio on voice calls",
      imageUrl: null,
    },
  ];

  const handleDivClick = (route) => {
    navigate(route); // Navigate to the passed route
  };

  return (
    <div className="flex flex-col gap-4">
      {projects.map((project, index) => (
        <div
          key={index}
          className="rounded-lg inside-content text-white p-4 cursor-pointer hover:bg-[#eb6e34]/20 hover:animate-pulse"
          onClick={() => handleDivClick(project.route)}
        >
          {/* Display the project image */}

          {/* Conditionally render the image if it exists */}
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.label}
              className="w-full min-h-40 max-h-80 object-cover rounded-t-lg"
            />
          ) : (
            <div className="mb-4 text-gray-500">No image available</div> // Fallback content if no image
          )}

          {/* <img
            src={project.imageUrl}
            alt={project.label}
            className="w-full min-h-40 max-h-80 object-cover rounded-t-lg"
          /> */}
          {/* Display the project label */}
          <p className="text-2sm mt-2">Status: {project.status}</p>
          <h2 className="text-2xl mt-2">{project.label}</h2>
          {/* Display a brief description */}
          <p className="text-sm mt-1">{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
