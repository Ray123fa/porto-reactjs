import { useContext } from "react";
import PropTypes from "prop-types";
import SvgUp from "./svg/SvgUp";
import { zoomIn, zoomOut, imgOpen } from "../helpers/zoom";
import Context from "../helpers/Context";

const CardImage = ({ img, alt }) => {
  return (
    <figure className="border-b-2 border-gray-300" onMouseOver={(e) => zoomIn(e.target)} onMouseOut={(e) => zoomOut(e.target)} onClick={(e) => imgOpen(e.target)}>
      <img className="w-full cursor-pointer" src={img} alt={alt} />
    </figure>
  );
};
CardImage.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

const CardBody = ({ desc, url }) => {
  return (
    <div className="card-body">
      <p className="dark:text-white text-base">{desc}</p>
      {url && (
        <div className="card-actions justify-start">
          <a className="btn btn-outline btn-sm btn-primary" href={url} target="_blank" rel="noreferrer">
            View Project
          </a>
        </div>
      )}
    </div>
  );
};
CardBody.propTypes = {
  desc: PropTypes.string.isRequired,
  url: PropTypes.string,
};

const Project = ({ img, alt, desc, url, aos }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-lg w-full md:w-1/3 border border-gray-400 mx-4" data-aos={aos} data-aos-duration="5000">
      <CardImage img={img} alt={alt} />
      <CardBody desc={desc} url={url} />
    </div>
  );
};
Project.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string,
  desc: PropTypes.string.isRequired,
  url: PropTypes.string,
  aos: PropTypes.string.isRequired,
};

const Portfolio = () => {
  const { project } = useContext(Context);
  const isDark = localStorage.getItem("theme") === "dracula" ? true : false;

  return (
    <div className="flex flex-col items-center justify-center bg-[#cbcfd5] dark:bg-[#e2e2e2]" id="portfolio">
      <h2 className="md:text-4xl text-3xl font-bold text-center mb-12">Portfolio</h2>

      <div className="flex flex-wrap flex-row justify-evenly items-center gap-5 w-full px-4">
        {project.map((item, index) => (
          <Project key={index} img={item.img} alt={item.alt} desc={item.desc} url={item.url} aos={index % 2 == 0 ? "flip-left" : "flip-right"} />
        ))}
      </div>

      <SvgUp className="translate-y-2" fill={isDark ? "#282A36" : "#fff"} />
    </div>
  );
};

export default Portfolio;
