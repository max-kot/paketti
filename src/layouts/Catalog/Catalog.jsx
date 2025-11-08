import Section from "@/ui/Section/Section";
import "./catalog.scss";

const data = [
	{
		"image": "images/catalog-1.png",
		"text": "Последняя цена",
		"href": "#"
	},
	{
		"image": "images/catalog-2.png",
		"text": "Сезонные предложения",
		"href": "#"
	},
	{
		"image": "images/catalog-3.png",
		"text": "Одноразовая посуда и аксессуары",
		"href": "#"
	},
	{
		"image": "images/catalog-4.png",
		"text": "Кондитерская упаковка",
		"href": "#"
	},
	{
		"image": "images/catalog-5.png",
		"text": "Упаковка для фастфуда",
		"href": "#"
	},
	{
		"image": "images/catalog-6.png",
		"text": "Барные аксессуары",
		"href": "#"
	},
	{
		"image": "images/catalog-7.png",
		"text": "Пакеты",
		"href": "#"
	},
	{
		"image": "images/catalog-8.png",
		"text": "Гигиеническая продукция",
		"href": "#"
	},
	{
		"image": "images/catalog-9.png",
		"text": "Бытовая химия",
		"href": "#"
	},
	{
		"image": "images/catalog-10.png",
		"text": "Хозяйственные губки, салфетки",
		"href": "#"
	},
	{
		"image": "images/catalog-11.png",
		"text": "Средства индивидуальной защиты",
		"href": "#"
	},
	{
		"image": "images/catalog-12.png",
		"text": "Инвентарь для уборки",
		"href": "#"
	},
	{
		"image": "images/catalog-13.png",
		"text": "Упаковочные материалы",
		"href": "#"
	},
	{
		"image": "images/catalog-14.png",
		"text": "Чековая лента и маркировочная продукция",
		"href": "#"
	},
	{
		"image": "images/catalog-15.png",
		"text": "Канцелярия",
		"href": "#"
	},
]

export default () => {
	return (
		<Section className="catalog">
			<h2 className="catalog__title title-2">
				Каталог продукции
			</h2>
			<ul className="catalog__list grid grid-4">
				{data?.map(({ image, text, href }) => (
					<li className="catalog-item" key={text}>
						<a className="catalog-item__link" href={href}>
							<figure className="catalog-item__image">
								<img src={image} alt={text} />
							</figure>
							<h3 className="catalog-item__text">
								{text}
							</h3>
						</a>
					</li>
				))}

			</ul>
		</Section>
	)
}
