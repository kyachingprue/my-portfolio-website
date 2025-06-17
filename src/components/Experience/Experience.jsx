import { BiLogoTailwindCss } from "react-icons/bi";
import { FaCss3, FaGoogle, FaAmazon, FaFigma, FaReact, FaHtml5, FaJs, FaNode } from "react-icons/fa";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { RiNetflixFill } from "react-icons/ri";
import { SiAxios, SiDaisyui, SiExpress, SiMongodb, SiReactrouter, SiVite } from "react-icons/si";

const Experience = () => {
  return (
    <div className="p-10 md:p-24">
      <h2 className="text-xl pb-5 md:text-2xl front-semibold text-center text-white">---------- Experience ----------</h2>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-3/5 mx-auto gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex mx-auto items-center rounded-2xl">
            <FaHtml5 color='#ff5733' size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex mx-auto items-center rounded-2xl">
            <FaCss3 color='#3342ff' size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex mx-auto items-center rounded-2xl">
            <BiLogoTailwindCss color='#33ffff' size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex mx-auto items-center rounded-2xl">
            <SiDaisyui color='#338aff' size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex mx-auto items-center rounded-2xl">
            <FaJs color='#FFC300 ' size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex mx-auto items-center rounded-2xl">
            <SiAxios color='#338aff' size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex mx-auto items-center rounded-2xl">
            <IoLogoFirebase color='#FFC300 ' size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex mx-auto items-center rounded-2xl">
            <FaNode color='#33ff61' size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex mx-auto items-center rounded-2xl">
            <SiExpress color='#07536a' size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex mx-auto items-center rounded-2xl">
            <FaFigma color='#0e9714' size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex mx-auto items-center rounded-2xl">
            <SiMongodb color='#0e9714' size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex mx-auto items-center rounded-2xl">
            <FaReact color='#15eac0' size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex mx-auto items-center rounded-2xl">
            <SiReactrouter color='#FF5733 ' size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex mx-auto items-center rounded-2xl">
            <SiVite color='#15baea' size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex mx-auto items-center rounded-2xl">
            <IoLogoVercel color='#15baea' size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-700/50 mt-4 rounded-lg p-4 items-center">
            <FaGoogle color="#4285FA" size={50} />
            <span className="text-white">
              <h2 className="text-xl">
                Software Engineer, Google
              </h2>
              <p className="text-sm font-thin">sept 2023 - present</p>
              <ul className="text-sm p-2">
                <li>- Work as software developer</li>
                <li>- Senior SDE developer</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-700/50 mt-4 rounded-lg p-4 items-center">
            <RiNetflixFill color="#E50914" size={50} />
            <span className="text-white">
              <h2 className="text-xl">
                Software Engineer, Netflix
              </h2>
              <p className="text-sm font-thin">sept 2023 - present</p>
              <ul className="text-sm p-2">
                <li>- Work as software developer</li>
                <li>- Senior SDE developer</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-700/50 mt-4 rounded-lg p-4 items-center">
            <FaAmazon color="#FF9900" size={50} />
            <span className="text-white">
              <h2 className="text-xl">
                Software Engineer, Amazon
              </h2>
              <p className="text-sm font-thin">sept 2023 - present</p>
              <ul className="text-sm p-2">
                <li>- Work as software developer</li>
                <li>- Senior SDE developer</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;