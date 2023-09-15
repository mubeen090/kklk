import styles from "./Services.module.css";
import Heading from "../common/Heading/Heading";
import Image from "next/image";

import market from "../../../public/assets/serviceAssets/market.png";
import ui from "../../../public/assets/serviceAssets/ui.png";
import web from "../../../public/assets/serviceAssets/web.png";

const data = [
  {
    logo: web,
    heading: "User Experience",
    para: "Lessons on design that cover the most recent developments.",
  },
  {
    logo: ui,
    heading: "IT Services",
    para: "Classes in development that cover the most recent advancements in web.",
  },
  {
    logo: market,
    heading: "Non-IT Services",
    para: "Marketing courses that cover the most recent marketing trends",
  },
];
const Services = () => {
  return (
    <>
      <section className={styles.services_container} id="services">
        <Heading
          para1={"Our Services"}
          heading={"Fostering a playful & engaging learning environment"}
          para2={""}
        />
        <div className={styles.services}>
          {data.map((item, index) => {
            return (
              <div className={styles.service} key={index}>
                <div className={styles.row1}>
                  <div className={styles.image_container}>
                    <Image src={item.logo} />
                  </div>
                  <h1 className={styles.heading}>{item.heading}</h1>
                </div>
                <p className={styles.para}>{item.para}</p>
                <h2 className={styles.learn_more}>Learn More {">"}</h2>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
