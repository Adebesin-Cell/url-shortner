import { Fragment, useEffect, useState } from "react";
import LinkForm from "./Link/LinkForm";
import LinkList from "./Link/LinkList";
import Card from "./UI/Card";
import styles from "./About.module.scss";
import icon from "../assets/svgs/icon-brand-recognition.svg";
import icon__1 from "../assets/svgs/icon-detailed-records.svg";
import icon__2 from "../assets/svgs/icon-fully-customizable.svg";

const aboutList = [
  {
    id: 1,
    title: "Brand Recognition",
    details: `Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content.`,
    icon: icon,
  },

  {
    id: 2,
    title: "Detailed Records",
    details: `Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.`,
    icon: icon__1,
  },

  {
    id: 3,
    title: "Fully Customizable",
    details: `Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.`,
    icon: icon__2,
  },
];

const About = function () {
  const [links, setMylink] = useState(() => {
    const saved = localStorage.getItem("myLinks");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const addDataHandler = function (data) {
    setMylink((prevLink) => [...prevLink, data]);
  };

  useEffect(() => {
    localStorage.setItem("myLinks", JSON.stringify(links));
  }, [links]);

  return (
    <section className={styles["section-about"]}>
      <Fragment>
        <LinkForm onAddData={addDataHandler}></LinkForm>
        <LinkList links={links}></LinkList>
      </Fragment>
      <div className={styles.about}>
        <h1 className={styles["about__header"]}>Advanced Statistics</h1>
        <p className={styles["about__paragraph"]}>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className={styles["about__wrapper"]}>
          {aboutList.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              icon={item.icon}
              title={item.title}
              details={item.details}
            />
          ))}
          <hr className={styles["about__underline"]} />
        </div>
      </div>
    </section>
  );
};

export default About;
