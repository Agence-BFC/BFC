import Image from "next/image";

const Introduction = () => {
  return (
    <>
      <section className=" pt-20 lg:pt-32 flex flex-col lg:grid lg:grid-cols-2 "> 
     
        <div className=" lg:px-8 lg lg:my-60 lg:mx-60 ">
        
          <p className=" text-white pt-4 mx-14 my-6 md:mx-28 lg:pt-10 lg:mx-2 lg:px-32  lg:text-4xl backdrop-blur-xl   ">
        Nous sommes une équipe composé de 3 personnes. Chloé notre CTO ainsi que Bollo et Florian les développeurs. Notre agence aime les nouveaux challenges et sera ravis de vous aider dans votre projet web.
          </p>
        </div>
          
        <div className="w-full flex justify-center   ">
          <Image
            src="/images/logos/white-logo.svg"
            width={300}
            height={200}
            alt="logo"
            className="backdrop-blur-xl pb-6 mx-14 lg:my-96 "
            />
          </div>
          
      </section>
    </>
  );
};

export default Introduction;
