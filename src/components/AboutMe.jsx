import React from 'react'

const AboutMe = () => {
  return (
    <section id="about" className="bg-black">
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* About Me Section */}
        <div className="mb-16">
          <h2 className="text-[#49de80] font-bold text-3xl md:text-4xl mb-8">
            About Me
          </h2>
          
          <div className="space-y-6 text-[#8792b0] text-lg leading-8">
            <p>
            A highly motivated Full Stack Developer with expertise in building dynamic and responsive web
            applications using HTML, CSS, Tailwind, JavaScript, ReactJS, Redux Toolkit, Express.js, Node.js,
            MongoDB, and SQL databases. Currently working at CLEARCATNET company, where I specialize
            in both frontend and backend development, managing SQL and NoSQL databases, and creating
            scalable backend architectures. Experienced in developing user-friendly interfaces and integrating
            APIs to enhance functionality. 
            </p>
            
            <p>
            Passionate about leveraging modern web technologies to solve
            complex problems, deliver high-quality solutions, and continuously grow as a developer
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h2 className="text-[#49de80] font-bold text-3xl md:text-4xl mb-4">
            Experience
          </h2>
          
          <h3 className="text-slate-200 font-bold text-xl mb-8">
           Professional Journey
          </h3>
          
          <div className="space-y-6">
            <div className="border-l-2 border-[#49de80] pl-6">
              <h4 className="text-slate-200 font-bold text-lg mb-2">
                Software Engineer
              </h4>
              
              <p className="text-[#8792b0] text-base mb-4">
              ClearCatNet Company ( Lucknow,UP,India ) • November 2024 - Present
              </p>
              
              <ul className="space-y-3 text-[#8792b0] text-base leading-7">
                <li className="flex items-start">
                  <span className="text-[#49de80] mr-3 mt-1">•</span>
                  <span>
                  Developed a complete e-learning platform using MongoDB, Express.js, ReactJS, and Node.js (MERN Stack), 
                  handling both frontend and backend development.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#49de80] mr-3 mt-1">•</span>
                  <span>
                  Built Tutor & Student registration, Course Management, and Role-Based Dashboards with seamless user 
                  experience. 
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#49de80] mr-3 mt-1">•</span>
                  <span>
                  Integrated Razorpay and PayPal payment gateways for secure online transactions and order verification. 
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#49de80] mr-3 mt-1">•</span>
                  <span>
                  Created and integrated RESTful APIs for authentication (JWT), user management, and course operations. 
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#49de80] mr-3 mt-1">•</span>
                  <span>
                  Implemented real-time notifications and announcements using WebSocket (Socket.IO) to enhance 
                  engagement.                   </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#49de80] mr-3 mt-1">•</span>
                  <span>
                  Designed a responsive, modern UI using ReactJS, Redux Toolkit, Tailwind CSS, HTML, and CSS for optimal 
                  performance across devices.                   </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#49de80] mr-3 mt-1">•</span>
                  <span>
                  Ensured data security and efficiency with role-based access control, validation, and optimized MongoDB 
                  queries.                    </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#49de80] mr-3 mt-1">•</span>
                  <span>
                  Managed version control, testing, and deployment with Git, GitHub, and best development practices for maintainability.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
