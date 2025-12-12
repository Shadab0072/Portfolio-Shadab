import React from 'react'
import img1 from '../assets/image.png'
import img2 from '../assets/srujana.png'
import img3 from '../assets/fable.png'
import img4 from '../assets/blogify.png'
import img5 from '../assets/skin.png'
import img6 from '../assets/admin.png'




const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Ed-Tech Platform",
      description: "A modern Ed-Tech platform that enables learners to discover and enroll in live, expert-led training programs across multiple technology domains. It includes advanced course search, category-based navigation, and real-time support for seamless user experience. Built with a clean, responsive UI optimized for clarity, speed, and accessibility.",
      image: img1,
      technologies: ["ReactJS", "Node.js", "MongoDB", "Payment Gateway"],
      liveLink: "https://www.learnees.com/",
    },
    {
      id: 2,
      title: "Tech Consulting Platform",
      description: "A tech consulting platform that provides expert guidance and support for businesses looking to implement technology solutions. It includes a comprehensive knowledge base, a directory of certified consultants, and a platform for scheduling consultations and managing projects. Built with a clean, responsive UI optimized for clarity, speed, and accessibility.",
      image: img2,
      technologies: ["React", "Redux", "Tailwind"],
      liveLink: "https://www.srujana.solutions/",
    },
    {
      id: 3,
      title: "Personalized Children’s Storybook Platform",
      description:"The Fable is a magical digital platform that creates personalized storybooks where children become the heroes of their own adventures. It generates beautifully illustrated, imaginative stories tailored to each child, boosting creativity, joy, and confidence. With an intuitive interface and ready-made story options, the platform makes storytelling fun, engaging, and unforgettable.", 
      image: img3,
      technologies: ["React", "TypeScript", "Tailwind CSS", "API Integration", "Payment Gateway"],
      liveLink: "https://thefable.app/",
    },
    {
      id: 6,
      title: "Magazine Management Admin Panel",
      description: "A secure, role-based admin dashboard built for managing magazine data, subscriptions, stock, and dispatch workflows. It includes CRUD operations, searchable tables, export options (CSV, Excel, PDF), and a clean UI for efficient data handling. Designed to streamline back-office operations with organized modules and smooth navigation.",
      image: img6,
      technologies: ["React", "Node.js", "MySQL"],
    },
    {
      id: 4,
      title: "Minimalistic Blogging Platform",
      description: "Blogify is a minimalistic blogging platform that allows users to create and publish their own blogs. It provides a clean, responsive interface for writing and managing posts, with features like tag management, category organization, and comment moderation. Built with a focus on simplicity, speed, and ease of use.",
      image: img4,
      technologies: ["React", "Node.js", "MongoDB"],
      liveLink: "https://blogify-0072.netlify.app/",
    },
    {
      id: 5,
      title: "Skin Clinic & Dermatology Service Website",
      description:  "A modern and elegant website designed for a dermatology clinic to showcase professional skin treatments and services. It features detailed sections for acne care, skin solutions, gallery highlights, and easy appointment booking. The clean layout and soothing visuals help build trust while offering patients a smooth, informative browsing experience.",
      image: img5,
      technologies: ["UI/UX Design"],
      liveLink: "https://lucknow-skin-clinic.netlify.app/",
    },
  ]

  return (
    <section id="projects" className="bg-black text-white">
       
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-[#49de80] font-bold text-3xl md:text-4xl mb-4">
          Projects
        </h2>
        <p className="text-[#8792b0] text-lg mb-12 max-w-2xl">
          Here are some of my recent projects that showcase my skills and experience in full-stack development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors duration-200 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                {project.liveLink ? (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow h-full">
                <h3 className="text-slate-200 font-bold text-xl mb-3 min-h-[3rem] flex items-start">
                  {project.title}
                </h3>
                
                <p className="text-[#8792b0] text-sm leading-6 mb-4 flex-grow min-h-[7.5rem] overflow-hidden">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4 min-h-[2.5rem] items-start">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-900 text-[#49de80] text-xs rounded-full border border-[#49de80]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto min-h-[2.5rem] items-center">
                  {project.liveLink ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#49de80] text-black px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#49de80]/90 hover:scale-105 transition-all duration-200 shadow-lg shadow-[#49de80]/20"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </a>
                  ) : (
                    <span className="text-[#8792b0] text-sm font-semibold">(private link)</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Projects
