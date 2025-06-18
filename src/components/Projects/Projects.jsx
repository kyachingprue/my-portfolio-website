import ProjectCard from './ProjectCard';
import youtubeImg from '../../assets/projectCard/youtube-my-play.jpg'
import netflixImg from '../../assets/projectCard/netlify-cover.png'
import githubImg from '../../assets/projectCard/netlify.png'
import vercelImg from '../../assets/projectCard/vercel.webp'
import blogImg from '../../assets/projectCard/signin-3-3.jpg'
import netlifyImg from '../../assets/projectCard/netlify-deploy.png'

const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl text-center text-white font-bold'>------- Projects -------</h1>
      <div className='py-6 md:py-12 md:px-8 flex mx-auto flex-wrap gap-5'>
        <ProjectCard title="Blogging Website" main="This is a blogging website created in next js and used some component library used some component library" images={blogImg} />
        <ProjectCard title="Youtube Clone" main="This is a blogging website created in next js and used some component library used some component library" images={youtubeImg} />
        <ProjectCard title="Netflix Clone" main="This is a blogging website created in next js and used some component library used some component library" images={netflixImg} />
        <ProjectCard title="Github Clone" main="This is a blogging website created in next js and used some component library used some component library" images={githubImg} />
        <ProjectCard title="Vercel Clone" main="This is a blogging website created in next js and used some component library used some component library" images={vercelImg} />
        <ProjectCard title="Netlify Clone" main="This is a blogging website created in next js and used some component library used some component library" images={netlifyImg} />
      </div>
    </div>
  );
};

export default Projects;