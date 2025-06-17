import coverImg from "../../assets/icons/undraw_feeling-proud_tdos.svg"

const Home = () => {
  return (
    <div className='text-white md:flex w-full justify-between min-h-screen items-start p-10 md:p-20'>
      <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-2xl md:text-5xl py-4 md:py-7 font-bold'>'Hello', I am Kyachingprue </h1>
        <p>My name is kyachingprue Marma. I am from singinala muhamoni para. I read in National university from mohalchai degree college. I am a web developer. I learn JavaScript (Programming language). I started HTML, CSS (framework: tailwind css, daisyui , aceternityUI), Javascript(library: react, dependence: axios, react-router, database: mongodb, firebase, back-end: Node.js(express.js))</p>
        <button className='btn btn-outline mt-5 md:md-10'>Contact Me</button>
      </div>
      <div className="ml-5 md:w-[500px] mt-10 md:mt-1 ">
        <img className="w-full h-full" src={coverImg} alt="" />
      </div>
    </div>
  );
};

export default Home;