import Section from "@/ui/Section/Section";
import "./benefits.scss";

const benefits = [
	{
		"icon": "images/benefit-1.svg",
		"text": "Большой ассортимент и выбор товаров"
	},
	{
		"icon": "images/benefit-2.svg",
		"text": "Гибкая система оплаты, отсрочка платежа"
	},
	{
		"icon": "images/benefit-3.svg",
		"text": "Работаем напрямую с  производителями"
	},
	{
		"icon": "images/benefit-4.svg",
		"text": "Гарантия на все товары"
	},
	{
		"icon": "images/benefit-5.svg",
		"text": "Доставляем товар по всей Республике"
	},
	{
		"icon": "images/benefit-6.svg",
		"text": "Предлагаем только качественные товары"
	},
]

export default () => {
	return (
		<Section className="benefits">
			<h2 className="visually-hidden">Преимущества</h2>
			<ul className="benefits__list">
				{benefits?.map(({ icon, text }) => (
					<li className="benefits__item benefit-item" key={text}>
						<figure className="benefit-item__icon">
							<img src={icon} alt={text} />
						</figure>
						<p className="benefit-item__text">{text}</p>
					</li>
				))}
			</ul>
		</Section>
	)
}
