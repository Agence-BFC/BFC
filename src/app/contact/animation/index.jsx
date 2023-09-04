"use client";
import { TypeAnimation } from "react-type-animation";
const Animation = () => {
  // const [textColor, setTextColor,] = useState('red');

  return (
    // style={{
    //   fontSize: '35px',
    //   color: textColor,}}
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "une Question ? :)",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "une idée ?",
        1000,
      ]}
      color="textColor"
      wrapper="span"
      speed={70}
      style={{ display: "inline-block" }}
      className=" text-center py-2 text-4xl "
      repeat={Infinity}
    />
  );
};
export default Animation;
