import Benefits from "@/layouts/Benefits/Benefits"
import ContactSection from "@/layouts/ContactSection/ContactSection"
import Footer from "@/layouts/Footer/Footer"
import Header from "@/layouts/Header/Header"
import HeroPage from "@/layouts/HeroPage/HeroPage"
import SliderSection from "@/layouts/SliderSection/SliderSection"
import Section from "@/ui/Section/Section"
import "./about.scss";

export const metadata = {
	title: 'О компании - Пакетти',
	lang: 'ru',
}

const partners = [
	{
		image: "images/partner-1.png",
		text: "",
	},
	{
		image: "images/partner-2.png",
		text: "",
	},
	{
		image: "images/partner-3.png",
		text: "",
	},
	{
		image: "images/partner-4.png",
		text: "",
	},
	{
		image: "images/partner-5.png",
		text: "",
	},
	{
		image: "images/partner-6.png",
		text: "",
	},
	{
		image: "images/partner-2.png",
		text: "",
	},
	{
		image: "images/partner-3.png",
		text: "",
	},
	{
		image: "images/partner-4.png",
		text: "",
	},
	{
		image: "images/partner-5.png",
		text: "",
	},
	{
		image: "images/partner-6.png",
		text: "",
	},
];
export default () => {
	return (
		<>
			<Header />
			<main className="main">
				<HeroPage title="О компании" breadcrumbs={['Главная', 'О компании']} />
				<Section className="about">
					<div className="wp-block-media-text has-media-on-the-right is-stacked-on-mobile is-vertically-aligned-top">
						<div className="wp-block-media-text__content">
							<h4>«Пакетти» — больше, чем просто поставщик. Мы — команда экспертов работающих на ваш рост и прибыль.</h4>
							<p>Компания «ПАКЕТТИ» занимается продажей оптом одноразовой посуды, полиэтиленовых пакетов, туалетной бумаги, полотенец, скотча и многих других изделий бытового назначения, являясь поставщиком многих торговых компаний и представителей ресторанного бизнеса. Наша компания выгодно отличается от большинства конкурентов ассортиментом пластиковой одноразовой посуды, начиная одноразовыми пластиковыми стаканчиками и одноразовыми бумажными стаканчиками, и заканчивая пластиковыми пищевыми контейнерами и пакетами для мусора.</p>
							<p>Другое важное преимущество компании «ПАКЕТТИ» состоит в том, что к процессу продажи одноразовой посуды мы подходим крайне ответственно, обеспечивая всех наших клиентов заботой, вниманием, и предоставляем каждому покупателю индивидуального менеджера вне зависимости от объемов закупок, тем самым позволяя поднять качество обслуживания до зарубежных стандартов.</p>
							<p>Гибкая ценовая политика нашей компании предусматривает возможность предоставления больших скидок на весь ассортимент одноразовой посуды, делая наши цены на одноразовую посуду ещё более привлекательными как для небольших кофейных заведений, так и для крупных региональных дилеров.</p>
						</div>
						<figure className="wp-block-media-text__media">
							<img src="images/certificate.jpg" alt="" />
						</figure>
					</div>
				</Section>
				<Benefits title="Почему более 2000 компаний выбирают «Пакетти»" />
				<SliderSection className="partners" title="Наши партнеры" data={partners} />
				<ContactSection />
			</main>
			<Footer />
		</>
	)
}
