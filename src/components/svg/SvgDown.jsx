import PropTypes from "prop-types";

const SvgDown = (props) => {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill={props.fill}
        fillOpacity="1"
        d="M0,192L34.3,208C68.6,224,137,256,206,256C274.3,256,343,224,411,192C480,160,549,128,617,112C685.7,96,754,96,823,133.3C891.4,171,960,245,1029,234.7C1097.1,224,1166,128,1234,106.7C1302.9,85,1371,139,1406,165.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
      ></path>
    </svg>
  );
};
SvgDown.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
};

export default SvgDown;
