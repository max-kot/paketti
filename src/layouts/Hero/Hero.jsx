import Section from "@/ui/Section/Section";
import "./hero.scss";
import Button from "@/ui/Button/Button";

export default () => {
	return (
		<Section className="hero" hasContainer={false}>
			<div className="container hero__container">
				<div className="hero__content">
					<h2 className="title hero__title">
						Ваш бизнес начинается с надежной упаковки
					</h2>
					<ul className="hero__list">
						<li className="hero__item">
							Более 15 лет поставляем качественную упаковку для тысяч компаний по всей стране
						</li>
						<li className="hero__item">
							Быстрые поставки, выгодные цены и персональный подход
						</li>
					</ul>
					<Button className="hero__btn btn--big" href="#">Перейти в каталог</Button>
				</div>
			</div>
			<figure className="image-box hero__image-box">
				<img className="bg-full" src="images/hero.jpg" alt="Ваш бизнес начинается с надежной упаковки" />
				<img className="bg-mobile" src="images/hero-mobile.jpg" alt="Ваш бизнес начинается с надежной упаковки" />
			</figure>
		</Section>
	)
}
