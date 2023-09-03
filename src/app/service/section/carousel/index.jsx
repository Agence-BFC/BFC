"use client";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const Servyce = () => {
  return (
    <>
      <section>
        <Carousel  autoPlay infiniteLoop showArrows={true} className={styles}>
          <div>
            <Image src="/next.svg" alt="" width={50} height={50} />
            <p>Agence Devnet</p>
          </div>
          <div>
            <Image src="/vercel.svg" alt="" width={50} height={50} />
            <p>WEB DEVELOPEMENT</p>
            
          </div>
          <div>
            <Image src="/next.svg" alt="" width={50} height={50} />
            <p>LOGO</p>
          </div>
          <div>
            <h3>REFONTE WEB</h3>
          </div>
          <div>
            <Image src="/vercel.svg" alt="" width={50} height={50} />
            <p>Charte Graphique</p>
          </div>
        </Carousel>

      <div className="px-2 lg:ml-28">
          <div className="contain-yellow p-4 w-7/12 lg:w-2/12">
            <h2 className="font-bold font-bungeeRegular">Contact</h2>
          </div>
          <div className="contain-pink p-4 mt-4 lg:w-3/4 lg:ml-4 font-expletusRegular">
            <p data-aos="zoom-in-down" className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
              aliquam doloremque inventore voluptatum ad deserunt aspernatur eos
              quam blanditiis labore ratione, asperiores rerum tempora
              voluptatem maxime! Quia ducimus ipsam laborum.
            </p>
          </div>
          <br />
        </div>
        

      </section>

      <div></div>
    </>
  );
};
export default Servyce;
