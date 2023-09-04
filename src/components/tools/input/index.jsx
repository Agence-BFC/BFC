import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <input
      type={props.type}
      className={`border border-amber-800 focus-visible:border-amber-800 focus:border-amber-800 rounded-lg bg-green-900 hover:transition hover:ease-in-out hover:duration-200 hover:bg-slate-100 dark:hover:bg-amber-950 text-black ${props.className}`}
    />
  );
};

Input.PropTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Input;
