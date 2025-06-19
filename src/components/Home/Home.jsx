import coverImg from "../../assets/icons/undraw_feeling-proud_tdos.svg"
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div id="Home" className='text-white md:flex w-full justify-between min-h-screen items-start p-8 pt-24 md:py-28'>
      <div className='md:w-2/4 pt-5 md:pt-10'>
        <h1 className='text-xl md:text-4xl flex items-center py-4 md:py-7 font-bold'>
          "Hi,<TextChange />"
        </h1>
        <p className="text-sm md:text-base">Hello! My name is Kyachingprue Marma, and I’m from Singinala Muhamoni Para. I’m currently pursuing my studies at the National University through Mohalchai Degree College.

          I am a passionate and self-driven web developer. My journey began with learning the fundamentals of HTML and CSS, and I’ve since gained experience with modern frameworks such as Tailwind CSS, DaisyUI, and AceternityUI to build responsive and attractive user interfaces.

          I have a strong foundation in JavaScript, and I work extensively with the React library to build dynamic web applications. I also use tools like Axios for API communication and React Router for client-side routing.

          For back-end development, I use Node.js with Express.js, and I’m familiar with databases such as MongoDB and Firebase for storing and managing data.</p>
        <button className='btn btn-outline mt-5 md:md-10'>Contact Me</button>
      </div>
      <div className="ml-5 md:w-[500px] mt-10 md:mt-4 ">
        <img className="w-full h-full" src={coverImg} alt="" />
      </div>
    </div>
  );
};

export default Home;