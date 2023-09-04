"use client";
import PropTypes from "prop-types";

const Card = (props) => {
    return (<>
    <div className=" card flex flex-col items-center rounded-md   bg-yellow-500 mx-8 md:mx-52   hover: m-5 -z-10 pb-2   lg:px-10 lg:mx-16  lg:my-6 hover:ease-in-out hover:duration-200 lg:hover:scale-105 ">

    </div>
    <div className=" flex flex-col contain items-center justify-center px-8 m-4 lg:pb-1 lg:px-12  ">

    <div className="flex flex-row justify-center py-4  lg:pb-2 lg:h-44 lg:w-full">
    <h2 className="flex w-full justify-center pt-2  mx-5 text-amber-900 text-xl lg:px-14 lg:mx-20 lg:text-4xl lg:items-center ">
                Création web
                <br />
                <span className="">{props.title}</span>
              </h2>
              <p>
              <span className="font-bold ">
                Description
              </span>
              <br />
              {props.description}
            </p>
          <img src={props.icon} width="100px" height="80px" />
        </div>
</div>
    
    </>)
};

Card.propTypes = {
    className: PropTypes.string,
  };

export default Card 