import Slider from "react-slick";
import styles from "../styles/Events.module.css";

export default function Events() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    dotsClass: "slick-dots " + styles.dots,
  };
  return (
    <div className={styles.sliderContainer}>
      <h2> Gallery</h2>
      <Slider {...settings}>
        <div>
          <img src="/acm_1.png" />
        </div>
        <div>
          <img src="/acm_2.png" />
        </div>
        <div>
          <img src="/acm_3.png" />
        </div>
        <div>
          <img src="/acm_4.png" />
        </div>
      </Slider>
    </div>
  );
}


