import { Form, Link } from "react-router-dom";

import { CTA } from "../components";
import { arrow } from "../assets/icons";
// import AI-SYS-Global from '../assets/img'
import AISYSGlobal from '../assets/images/AISYSGlobal.png'
import AmbreHolidays from '../assets/images/AmbreHolidays.png'
import akinox from '../assets/images/akinox.jpg'

const projects = [
  {
    name: "Ambre Holidays",
    techStack: "HTML, CSS, JavaScript | Backend: Email API",
    description:
      "A travel management website designed with a responsive user interface. Integrated email-based functionalities for bookings, inquiries, and itinerary sharing.",
    link: "https://ambreholidays.com/",
    iconUrl: AmbreHolidays,
    theme: "bg-blue-200",
  },
  {
    name: "AI SYS Global",
    techStack: "React, TailwindCSS, Nodemailer",
    description:
      "An AI service provider website featuring a modern front-end and interactive user experience. Integrated backend email services for client communication and service confirmations.",
    link: "https://www.aisysglobal.in/",
    iconUrl: AISYSGlobal,
    theme: "bg-green-200",
  },
  {
    name: "Akinox eCommerce Website",
    techStack: "MERN Stack (MongoDB, Express, React, Node.js), Stripe",
    description:
      "A fully functional e-commerce platform for watches, offering product browsing, checkout, user authentication, and secure payments. Integrated Stripe for seamless transactions.",
    link: "#",
    iconUrl: akinox,
    theme: "bg-yellow-200",
  },
];

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className='w-15 h-15 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;
