import PropTypes from "prop-types";
import SvgDown from "./svg/SvgDown";

const Description = ({ children }) => {
  return <p className="sm:text-lg text-md text-justify flex-1">{children}</p>;
};
Description.propTypes = {
  children: PropTypes.node.isRequired,
};

const About = () => {
  const isDark = localStorage.getItem("theme") === "dracula" ? true : false;

  return (
    <div className="flex flex-col items-center justify-center dark:text-white" id="about">
      <h2 className="md:text-4xl text-3xl font-bold text-center mb-12">About</h2>
      <div className="flex md:flex-row flex-col px-16 gap-x-20 gap-y-8">
        <Description>
          Ini cuma formalitas aja ya ges ya, lagi gabisa nyusun kata-katanya. Jadi pake lorem aja yak😂
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ratione asperiores. Repudiandae, molestias voluptatibus. Neque, porro? Tempora suscipit, unde repellendus odit eius nulla perferendis, fugit quaerat temporibus aliquam cum quis.
        </Description>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quaerat consequuntur nisi fugiat, ea nam dolore asperiores magni itaque ad velit aut ex omnis animi.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, minus exercitationem, rem libero dignissimos aliquid consequatur quidem accusantium laborum ratione atque officiis doloremque! Cupiditate architecto eum, consectetur sint saepe dolorum!
        </Description>
      </div>
      <SvgDown className="translate-y-2" fill={isDark ? "#e2e2e2" : "#cbcfd5"} />
    </div>
  );
};

export default About;
