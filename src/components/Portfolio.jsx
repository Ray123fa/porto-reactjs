import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SvgUp from "./svg/SvgUp";
import { zoomIn, zoomOut, imgOpen } from "../helpers/zoom";

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

const CardBody = ({ title, desc, url }) => {
  return (
    <div className="card-body">
      <h2 className="dark:text-white card-title font-bold">{title}</h2>
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
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  url: PropTypes.string,
};

const Project = ({ img, alt, title, desc, url, aos }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-lg w-full md:w-1/3 border border-gray-400 mx-4" data-aos={aos} data-aos-duration="5000">
      <CardImage img={img} alt={alt} />
      <CardBody title={title} desc={desc} url={url} />
    </div>
  );
};
Project.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  url: PropTypes.string,
  aos: PropTypes.string.isRequired,
};

const Portfolio = () => {
  const isDark = localStorage.getItem("theme") === "dracula" ? true : false;
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}?page=${page}`);
      const result = await response.json();
      if (result.success) {
        setProjects(result.data.data);
        setCurrentPage(result.data.current_page);
        setTotalPages(result.data.last_page);
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#cbcfd5] dark:bg-[#e2e2e2]" id="portfolio">
      <h2 className="md:text-4xl text-3xl font-bold text-center mb-12">Portfolio</h2>

      <div className="flex flex-wrap flex-row justify-evenly items-center gap-5 w-full px-4">
        {projects.length > 0 &&
          projects.map((project, index) => (
            <Project key={index} img={`${import.meta.env.VITE_API_IMAGE_URL + project.image}`} alt={project.title} title={project.title} desc={project.description} url={project.url} aos={index % 2 === 0 ? "flip-right" : "flip-left"} />
          ))}
        {projects.length === 0 && <Project img="https://dummyimage.com/1920x1080/cccccc/fff&text=COMING+SOON" alt="Coming Soon" title="Coming Soon" desc="Sebuah project yang sedang dalam tahap pengembangan." url="" />}
      </div>

      {projects.length > 0 && (
        <div className="join mt-6">
          <button className="join-item btn btn-md" disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
            &laquo;
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button key={index + 1} className={currentPage === index + 1 ? "join-item btn btn-md btn-active" : "join-item btn btn-md"} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          ))}
          <button className="join-item btn btn-md" disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
            &raquo;
          </button>
        </div>
      )}
      <SvgUp className="translate-y-2" fill={isDark ? "#282A36" : "#fff"} />
    </div>
  );
};

export default Portfolio;
