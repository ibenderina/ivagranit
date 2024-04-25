import './Style.css';

const benefits = [
    {
        benefitName: "Широкая география",
        benefit: "Устанавливаем мемориалы по Москве и Московской области. Отправляем готовые изделия транспортной компанией по всей России.",
        benefitLink: "Наши контакты"
    },
    {
        benefitName: "Гарантия качества",
        benefit: "У нас вы найдете выгодные цены и высокое качество работ.",
        benefitLink: "Связаться с нами"
    },
    {
        benefitName: "Индивидуальный подход",
        benefit: "Выполним работы любой сложности под индивидуальный запрос.",
        benefitLink: "Заказать памятник"
    },
]

const RenderBenefitList = () => {
    return (
        <ul className="Benefits-list">
            {benefits.map(({benefitName,benefit,benefitLink}) => (
                <li className="Benefits-item">
                    <h4>{benefitName}</h4>
                    <p>{benefit}</p>
                    <a href="#contacts" className="Benefits-item-link">{benefitLink}</a>
                </li>
            ))}
        </ul>
    );
};

function Benefits() {

  return (
    <div className="Benefits-wrapper">
      <div className="Benefits">
          {RenderBenefitList()}
      </div>
    </div>
  );
}

export default Benefits;