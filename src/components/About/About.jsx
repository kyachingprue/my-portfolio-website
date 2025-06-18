import { IoArrowForward } from 'react-icons/io5';
import aboutImg from '../../assets/icons/about_images.svg'

const About = () => {
  return (
    <div id='About'>
      <h2 className='text-xl md:text-3xl font-semibold text-white text-center pb-4 md:pb-8'>---------- About ----------</h2>
      <div className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
        <div>
          <div className="md:flex flex-wrap flex-col md:flex-row items-center">
            <img className="md:h-80 md:pr-8" src={aboutImg} alt="about page images" />
            <ul>
              <div className="flex gap-3 py-4">
                <IoArrowForward size={30} className='mt-1' />
                <span className='w-90'>
                  <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
                  <p className='text-sm md:text-md'>A frontend developer test may ask you to build a responsive web page using HTML, CSS, and JavaScript.
                    You could be given a design to recreate pixel-perfectly.
                    Tasks may include creating forms, modals, sliders, or navigation menus.
                    JavaScript challenges often test DOM manipulation or API fetching.
                  </p>
                </span>
              </div>
              <div className="flex gap-3 py-4">
                <IoArrowForward size={30} className='mt-1' />
                <span className='w-90'>
                  <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend Developer</h1>
                  <p className='text-sm md:text-md'>A backend developer test may involve building a RESTful API using Node.js and Express.
                    You might be asked to connect to a database like MongoDB or PostgreSQL and perform CRUD operations.
                    Authentication tasks such as login, JWT token handling, and role-based access are common.
                    Handling errors, middleware, and proper project structure are often evaluated.</p>
                </span>
              </div>
              <div className="flex gap-3 py-4">
                <IoArrowForward size={30} className='mt-1' />
                <span className='w-90'>
                  <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Database Developer</h1>
                  <p className='text-sm md:text-md'>A database developer test may include designing relational or NoSQL database schemas.
                    You might be asked to write complex SQL queries, joins, and subqueries for data retrieval.
                    Tasks often involve creating stored procedures, triggers, and optimizing queries for performance.</p>
                </span>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;