
import PropTypes from "prop-types";
const CardsServices = ({ key, title, date, description }) => {
  return (
    <div>
      <div key={key} className="p-6 lg:w-1/2">
        <h1 className="font-bold text-xl text-[#f0d06c]">{title}</h1>
        <div className="pt-1">
          <h2 className="text-[#9ef2e5]">{date}</h2>
          <p className="p-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

CardsServices.prototype = {
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
};
export default CardsServices;
