import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Experience.module.css";
import { SkillCard } from "./SkillCard";

export const Skils = ({ skillsData }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {skillsData.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <SkillCard
              imgSrc={skill.imgSrc}
              altText={skill.altText}
              skillName={skill.skillName}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
