import Footer from "@/layouts/Footer/Footer"
import Header from "@/layouts/Header/Header"
import Section from "@/ui/Section/Section"
import './success.scss'
import Button from "@/ui/Button/Button"

export const metadata = {
	title: 'Спасибо! - Пакетти',
	lang: 'ru',
}

export default () => {
	return (
		<>
			<Header />
			<main className="main">
				<Section className="hero" hasContainer={false}>
					<div className="container hero__container">
						<div className="hero__content">
							<h2 className="title hero__title">
								Спасибо!
							</h2>
							<p className="hero__text">Мы получили заявку и скоро свяжемся с вами</p>
							<Button className="hero__btn btn--big" href="/../">Вернуться назад</Button>
						</div>
					</div>
					<figure className="image-box hero__image-box">
						<img className="bg-full" src="images/hero.jpg" alt="Ваш бизнес начинается с надежной упаковки" />
						<img className="bg-mobile" src="images/hero-mobile.jpg" alt="Ваш бизнес начинается с надежной упаковки" />
					</figure>
				</Section>
			</main>
			<Footer />
		</>
	)
}
