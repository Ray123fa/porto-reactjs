import PropTypes from "prop-types";

const SvgUp = (props) => {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill={props.fill}
        fillOpacity="1"
        d="M0,96L34.3,106.7C68.6,117,137,139,206,128C274.3,117,343,75,411,96C480,117,549,203,617,208C685.7,213,754,139,823,90.7C891.4,43,960,21,1029,42.7C1097.1,64,1166,128,1234,133.3C1302.9,139,1371,85,1406,58.7L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
      ></path>
    </svg>
  );
};
SvgUp.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
};

export default SvgUp;
