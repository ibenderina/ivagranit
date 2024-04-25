import './Style.css';

const renderMap = () => {
    return (
        <div className="Contacts-map">
            <iframe title="map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A776c246b8b8e0b5201f88eba4a127ca01722e950b27ffe9c0e700bcdbce05ed7&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
        </div>
    );
}

function Contacts() {
  return (
    <div className="Contacts-wrapper" id="contacts">
      <div className="Contacts">
        <div className="Contacts-header-wrapper"><h1>Контакты</h1></div>
        <div className="Contacts-content-wrapper">
            <div className="Contacts-info">
                <h4>Связаться с нами</h4>
                <div className="Contacts-info-list">
                    <div className="Contacts-info-item">
                        <p>Адрес: Московская область, городской округ Электросталь, село Иванисово, 26 (вход напротив Казанского храма) </p>
                    </div>
                    <div className="Contacts-info-item">
                        <p>Телефон: <a href="tel:79251162717" className="Contacts-info-link">+7 (925) 116-27-17</a></p>
                    </div>
                    <div className="Contacts-info-item">
                        <p>WhatsApp: <a href="https://wa.me/<79251162717>" className="Contacts-info-link">+7 (925) 116-27-17</a></p>
                    </div>
                    <div className="Contacts-info-item">
                        <p>Email: <a href="mailto:granitivanis@yandex.ru" className="Contacts-info-link">granitivanis@yandex.ru</a></p>
                    </div>
                </div>
            </div>
            {renderMap()}
        </div>
      </div>
    </div>
  );
}

export default Contacts;
