"use client";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

export default function Carousel () {
  return (
    <>
      <section>
        <div className="">
          <Carousel autoPlay infiniteLoop showArrows={true} className={styles}>
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
        </div>
      </section>
    
    </>
  );
}
