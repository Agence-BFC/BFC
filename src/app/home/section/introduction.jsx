import Image from "next/image";
import { BsWindowFullscreen } from "react-icons/bs";
const Introduction = () => {
  return (
    <>
      <section className=" pt-16  flex flex-col  lg:pt-32   ">
        <div className="pt-10 contain my-10 mx-6 lg:flex lg:flex-col lg:items-center lg:mx-60 lg:my-96  ">
          <div className="flex flex-row justify-center  animate-pulse lg:flex-row lg:justify-center lg:items-center  ">
            <Image src="/images/chloe.png" width={80} height={80} alt="chloe" />
            <div className="px-1 lg:px-40 ">
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
          <div className="lg:flex lg:flex-col  my-10  ">
            <p className="card  text-white pt-4 mx-6 my-12 md:mx-28 lg:pt-10 lg:mx-28   lg:text-2xl px-3 py-3    ">
              Nous sommes une équipe composé de 3 personnes. Chloé notre CTO
              ainsi que Bollo et Florian les développeurs. Notre agence aime les
              nouveaux challenges et sera ravis de vous aider dans votre projet
              web.
            </p>

            <div className="flex flex-row justify-center items-center text-xl lg:text-4xl lg:flex lg:items-center lg:my-10 ">
              <a href="https://devise-portfolio.fr/">
                <BsWindowFullscreen />
              </a>
              <div className="px-8 lg:px-40">
                <a href="https://grumiaux-portfolio.fr/">
                  <BsWindowFullscreen />
                </a>
              </div>
              <a href="https://sabine-portfolio.fr/">
                <BsWindowFullscreen />
              </a>
            </div>
          </div>
          
            <div className=" card m-6 flex flex-col items-center justify-center md:mx-28  lg:w-4/5  lg:pb-10  ">
            <a href="http://localhost:3000/">
              <Image
                src="/images/logos/white-logo.svg"
                width={300}
                height={200}
                alt="logo"
                className="  py-2  md:px-2   "
              />
              </a>
            </div>
          
        </div>

      </section>
    </>
  );
};

export default Introduction;
