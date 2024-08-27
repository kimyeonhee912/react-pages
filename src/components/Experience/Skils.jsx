import React from "react";
import Slider from "react-slick"; // 슬라이더 가져오기
import "slick-carousel/slick/slick.css"; // 슬라이더 스타일 가져오기
import "slick-carousel/slick/slick-theme.css"; // 슬라이더 테마 스타일 가져오기
import styles from "./Experience.module.css"; // 기존 스타일
import { SkillCard } from "./SkillCard";

export const Skils = ({ skillsData }) => {
  const settings = {
    dots: true, // 페이지 네비게이션 점 표시
    infinite: true, // 무한 스크롤
    speed: 500, // 슬라이드 속도
    slidesToShow: 6, // 한 번에 보이는 슬라이드 수
    autoplay: true, // 자동 재생 활성화
    autoplaySpeed: 3000, // 3초마다 슬라이드 전환
    slidesToScroll: 1, // 한번에 스크롤되는 슬라이드 수
    responsive: [
      {
        breakpoint: 1024, // 1024px 이하의 화면 크기
        settings: {
          slidesToShow: 3, // 슬라이드 수 조정
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // 600px 이하의 화면 크기
        settings: {
          slidesToShow: 1, // 슬라이드 수 조정
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
