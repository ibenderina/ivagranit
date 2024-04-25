import './Style.css';

function About() {
  return (
    <div className="About-wrapper" id="about">
      <div className="About">
        <h1>Гранитная мастерская</h1>
        <p>Наша гранитная мастерская уже более 15 лет оказывает услуги по изготовлению мемориальных изделий по Московской области. У нас вы получите качественные услуги по доступным ценам. </p>
        <div className="About-contacts-wrapper">
            <a href="tel:79251162717" className="About-contact-link">+7 (925) 116-27-17</a>
            <a href="mailto:granitivanis@yandex.ru" className="About-contact-link">granitivanis@yandex.ru</a>
        </div>
        <div className="About-button-wrapper">
          <a className="About-button-link" href="#gallery">Фото наших работ</a>
        </div>
      </div>
    </div>
  );
}

export default About;
