import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLine } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import SvgUp from "./svg/SvgUp";

const Identity = () => {
  return (
    <>
      <img className="rounded-full sm:w-[150px] w-[120px] border-white border-4" src="/img/mypic.jpg" alt="Rayhan Faridh" />
      <h1 className="sm:text-4xl text-3xl mb-2">Rayhan F</h1>
      <p className="font-semibold sm:text-xl text-lg mb-2">Web Developer</p>
    </>
  );
};

const SocialIcon = (slot) => {
  return (
    <a href={slot.url} target="__blank" className="text-3xl text-blue-500 hover:text-blue-700 mx-2">
      {slot.children}
    </a>
  );
};
const SocialMedia = () => {
  return (
    <div className="pb-8">
      <SocialIcon url="https://instagram.com/rayhan.frdh">
        <FontAwesomeIcon icon={faInstagram} />
      </SocialIcon>
      <SocialIcon url="https://line.me/ti/p/ri4YJFH8nX">
        <FontAwesomeIcon icon={faLine} />
      </SocialIcon>
      <SocialIcon url="https://www.linkedin.com/in/rayhanfrdh/">
        <FontAwesomeIcon icon={faLinkedin} />
      </SocialIcon>
      <SocialIcon url="https://github.com/Ray123fa">
        <FontAwesomeIcon icon={faGithub} />
      </SocialIcon>
    </div>
  );
};

const Hero = () => {
  const isDark = localStorage.getItem("theme") === "dracula" ? true : false;

  return (
    <div className="text-center bg-[#cbcfd5] dark:bg-[#e2e2e2] pt-16 flex flex-col justify-center items-center" id="home" data-aos="fade-down" data-aos-duration="5000">
      <Identity />
      <SocialMedia />
      <SvgUp className="translate-y-2" fill={isDark ? "#282A36" : "#fff"} />
    </div>
  );
};

export default Hero;
