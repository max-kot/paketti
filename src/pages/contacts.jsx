import PhoneBox from "@/components/PhoneBox/PhoneBox"
import Footer from "@/layouts/Footer/Footer"
import Header from "@/layouts/Header/Header"
import HeroPage from "@/layouts/HeroPage/HeroPage"
import Section from "@/ui/Section/Section"
import './contacts.scss'

export const metadata = {
	title: 'Контакты - Пакетти',
	lang: 'ru',
}

const shop1 = [
	{
		"type": "address",
		"text": 'г. Могилев, ул. Чигринова 9',
		"href": 'https://yandex.by/maps/-/CLvTjHyZ',
	},
	{
		"text": '+375 29 389-70-34',
		"href": '+375293897034',
		"viber": false,
		"tg": false,
	},
	{
		"type": 'time',
		"text": <p>пн-пт 09:00 - 18:00 <br />сб 09:00 - 13:00<br />вс выходной</p>,
	},
]
const shop2 = [
	{
		"type": "address",
		"text": 'г. Могилев, пер. Комиссариатский 5',
		"href": 'https://yandex.by/maps/-/CLvTjXj-',
	},
	{
		"text": '+375 44 732-06-00',
		"href": '+375447320600',
		"viber": false,
		"tg": false,
	},
	{
		"type": 'time',
		"text": <p>пн-пт 09:00 - 18:00 <br />сб 09:00 - 13:00<br />вс выходной</p>,
	},
]
const office = [
	{
		"type": "address",
		"text": 'г. Могилев, ул. Чигринова 9',
		"href": 'https://yandex.by/maps/-/CLvTjHyZ',
	},
	{
		"text": '+375 29 395-51-71',
		"href": '+375293955171',
		"viber": true,
		"tg": true,
	},
	{
		"text": '+375 222 63-71-71',
		"href": '+375222637171',
		"viber": false,
		"tg": false,
	},
	{
		"type": "link",
		"icon": "../images/icons/inst.svg",
		"text": 'paketti.by',
		"href": 'https://www.instagram.com/paketti.by/',
	},
]

export default () => {
	return (
		<>
			<Header />
			<main className="main">
				<HeroPage title="Контакты" breadcrumbs={['Главная', 'Контакты']} />
				<Section className="contacts">
					<div className="contacts__content">
						<div className="contacts__box">
							<h3 className="contacts__title title-3">
								Магазин
							</h3>
							<PhoneBox className="contacts__phone-box" data={shop1} />
						</div>
						<div className="contacts__box">
							<h3 className="contacts__title title-3">
								Магазин
							</h3>
							<PhoneBox className="contacts__phone-box" data={shop2} />
						</div>
						<div className="contacts__box">
							<h3 className="contacts__title title-3">
								Офис
							</h3>
							<PhoneBox className="contacts__phone-box" data={office} />
						</div>
					</div>
					<div className="contacts__map">
						<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A612a0974256b95e2c99062121526b92d9b5d0ee8001e2d0f8c980fc19f59c30e&amp;source=constructor" width="100%" height="100%" frameBorder="0" title="Карта"></iframe>
					</div>
				</Section>
			</main>
			<Footer />
		</>
	)
}
