"use client";

import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
export default function () {
  return (
    <>
      <section>
        <Carousel showArrows={true} className={styles}>
          <div>
            <h3>PORTFOLIO</h3>
          </div>
          <div>
            <h3>WEB DEVELOPEMENT</h3>
          </div>
          <div>
            <h3>lOGO</h3>
          </div>
          <div>
            <h3>REFONTE WEB</h3>
          </div>
          <div>
            <h3>CHARTE GRAPHIQUE</h3>
          </div>
        </Carousel>
      </section>
    </>
  );
}
