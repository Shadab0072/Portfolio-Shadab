import React from 'react';
import { 
  SiHtml5, 
  SiCss3, 
  SiBootstrap, 
  SiJavascript, 
  SiTypescript, 
  SiTailwindcss,
  SiDotnet,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiDocker,
  SiVercel,
  SiNetlify,
  SiReact,
  SiRedux ,
  SiSocketdotio ,
  SiPostman 
} from 'react-icons/si';
import { FaAngular, FaCodeBranch, FaAws, FaHtml5 as FaHtml, FaCss3Alt, FaJsSquare, FaNodeJs, FaGitAlt } from 'react-icons/fa';

const Skills = () => {

  const skillCategories = [
    {
      title: "Front-end",
      skills: [
        { name: "HTML", icon: FaHtml, color: "text-orange-500" },
        { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-blue-500" },
        { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-500" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
        {name : "React", icon: SiReact , color: "text-blue-400" },
        {name : "Redux", icon: SiRedux  , color: "text-blue-400" },
        { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
        { name: "Express.js", icon: SiExpress, color: "text-white" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
        { name: "Websocket", icon: SiSocketdotio , color: "text-black" },
        { name: "Postman ", icon: SiPostman , color: "text-orange-600" },
        { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
        { name: "AWS", icon: FaAws, color: "text-orange-500" },
        { name: "Vercel", icon: SiVercel, color: "text-white" },
        { name: "Netlify", icon: SiNetlify, color: "text-green-500" },

      ]
    }
  ];

  // Flatten all skills from all categories into a single array
  const allSkills = skillCategories.flatMap(category => category.skills);

  return (
    <section id="skills" className="bg-black text-white py-14 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8">
        <h2 className="text-[#49de80] font-bold text-3xl sm:text-4xl mb-6 sm:mb-8 text-center sm:text-left">
          Skills
        </h2>

        <div className="rounded-2xl bg-gray-900/50 px-4 py-6 sm:px-6 sm:py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
            {allSkills.map((skill, skillIndex) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skillIndex}
                  className="flex flex-col items-center gap-2 rounded-xl bg-gray-800/80 px-3 py-4 sm:px-4 sm:py-5 shadow-sm hover:-translate-y-1 hover:bg-gray-700/80 transition duration-200"
                >
                  <IconComponent
                    className={`text-2xl sm:text-3xl ${skill.color}`}
                  />
                  <span className="text-xs sm:text-sm text-center text-gray-200">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
