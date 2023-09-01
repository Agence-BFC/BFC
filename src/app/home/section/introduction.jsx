import Image from "next/image";
import { BsWindowFullscreen } from "react-icons/bs";
const Introduction = () => {
  return (
    <>
      <section className=" pt-16  flex flex-col lg:flex lg:flex-row lg:pt-32 ">
        <div className="pt-10 contain my-10 mx-6 ">
          <div className="flex flex-row justify-center ">
            <Image src="/images/chloe.png" width={80} height={80} alt="chloe" />
            <div className="px-1">
              <Image
                src="/images/bollo.png"
                width={80}
                height={80}
                alt="bollo"
              />
            </div>
            <Image
              src="/images/florian.png"
              width={80}
              height={80}
              alt="florian"
            />
          </div>
          <div className="  lg:px-8 my-10 lg:my-60 lg:mx-60 ">
            <p className=" text-white pt-4 mx-6 my-12 md:mx-28 lg:pt-10 lg:mx-2 lg:px-32  lg:text-4xl card px-3 py-3    ">
              Nous sommes une équipe composé de 3 personnes. Chloé notre CTO
              ainsi que Bollo et Florian les développeurs. Notre agence aime les
              nouveaux challenges et sera ravis de vous aider dans votre projet
              web.
            </p>
            <div className="flex flex-row justify-center items-center text-xl lg:text-4xl ">
              <a href="https://devise-portfolio.fr/">
                <BsWindowFullscreen />
              </a>
              <div className="px-8">
                <a href="https://grumiaux-portfolio.fr/">
                  <BsWindowFullscreen />
                </a>
              </div>
              <a href="https://sabine-portfolio.fr/">
                <BsWindowFullscreen />
              </a>
            </div>
          </div>
          <a href="http://localhost:3000/">
            <div className="w-full flex justify-center   ">
              <Image
                src="/images/logos/white-logo.svg"
                width={300}
                height={200}
                alt="logo"
                className="card my-4  mx-6  lg:my-96 "
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Introduction;
