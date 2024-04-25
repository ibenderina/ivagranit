import './Style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useState, useEffect } from 'react';

const SCREEN_LG = 992;

const photos = [
    "/img/1.jpg",
    "/img/2.jpg",
    "/img/3.jpg",
    "/img/4.jpg",
    "/img/5.jpg",
    "/img/6.jpg",
    "/img/7.jpg",
    "/img/8.jpg",
    "/img/9.jpg",
    "/img/10.jpg",
]

export const useResize = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = (event) => {
            setWidth(event.target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        width,
        isScreenLg: width >= SCREEN_LG,
    };
};

const RenderPhotos = () => {
    return (
        <div className="Gallery-list">
            {photos.map((photo) => (
                <SwiperSlide>
                    <div className="Gallery-item">
                        <img className="Gallery-photo" src={photo} alt={"Фото памятника"}></img>
                    </div>
                </SwiperSlide>
            ))}
        </div>
    );
};


function Gallery() {
  return (
    <div className="Gallery-wrapper" id="gallery">
      <div className="Gallery">
        <h2>Наши работы</h2>
          <Swiper className="swiper-full"
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={3}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}>
              {RenderPhotos()}
          </Swiper>
          <Swiper className="swiper-mobile"
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}>
              {RenderPhotos()}
          </Swiper>
      </div>
    </div>
  );
}

export default Gallery;
