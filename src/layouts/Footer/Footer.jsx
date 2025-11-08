import Logo from "@/components/Logo/Logo";
import "./footer.scss";
import PhoneBox from "@/components/PhoneBox/PhoneBox";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import CookieBanner from "../CookieBanner/CookieBanner";

const menu = [
	{
		"text": "О компании",
		"href": "#"
	},
	{
		"text": "Навiны",
		"href": "#"
	},
	{
		"text": "Вопрос-ответ",
		"href": "#"
	},
	{
		"text": "Возврат и обмен",
		"href": "#"
	},
	{
		"text": "Оплата и доставка",
		"href": "#"
	},
	{
		"text": "Контакты",
		"href": "#"
	}
]
const phones = [
	{
		"text": '+375 222 63-71-71',
		"href": '+375222637171',
		"viber": false,
		"tg": false,
	},
	{
		"text": '+375 29 395-51-71',
		"href": '+375293955171',
		"viber": true,
		"tg": true,
	},
	{
		"type": "email",
		"text": 'pakettiby@gmail.com',
		"href": 'pakettiby@gmail.com',
	},
	{
		"type": "link",
		"icon": "images/icons/inst.svg",
		"text": 'paketti.by',
		"href": 'https://www.instagram.com/paketti.by/',
	},
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

]
export default () => {
	return (
		<>
			<footer className="footer">
				<div className="container footer__container">
					<div className="footer__top footer-top">
						<div className="footer-top__col-info">
							<Logo className="footer__logo" />
							<div className="footer__descr">
								<p>Актуальные действующие цены и наличие товара уточняйте у Вашего менеджера</p>
							</div>
							<div className="footer__links-box">
								<a href="#" className="footer__link">Политика обработки персональных данных</a>
								<a href="#" className="footer__link">Политика обработки файлов куки</a>
							</div>
						</div>
						<div className="footer-top__col-nav">
							<nav className="footer__nav footer-menu">
								<h3 className="footer__title">Меню</h3>
								<ul className="footer-menu__list">
									{menu?.map(({ href, text }, i) => (
										<li key="i">
											<a href={href}>{text}</a>
										</li>
									))}

								</ul>
							</nav>
							<div className="footer__subscribe">
								<h3 className="footer__title">
									Оставайтесь в курсе новостей и акций
								</h3>
								<form className="footer__subscribe-form subscribe-form">
									<div className="subscribe-form__input-box">
										<input className="subscribe-form__input" type="email" placeholder="E-mail" />
										<button className="btn subscribe-form__btn" type="submit">Подписаться</button>
									</div>
								</form>
							</div>
						</div>

						<div className="footer-top__col-contacts">
							<h3 className="footer__title">Как с нами связаться</h3>
							<PhoneBox data={phones} className="footer__phone-box" />
						</div>

					</div><div className="footer-block footer__content-descr">
						<p>
							&copy; 2025 Общество с ограниченной ответственностью "ПАКЕТТИ", интернет-магазин www.paketti.by, <a href="mailto:pakettiby@gmail.com">pakettiby@gmail.com</a> ООО "ПАКЕТТИ". Зарегистрировано Минским городским исполнительным комитетом №970 от 31.08.2000г. УНП 790643321. Регистрация в Торговом реестре Республики Беларусь №210825 04.03.2015г.
						</p>
						<img
							src="images/pay-method.png"
							alt="Принимаем платежи"
							aria-label="Принимаем платежи"
						/>
					</div>
					<div className="footer-block footer__content-descr">
						<p>
							Контакты для обращения покупателей (по вопросам нарушения их прав): <br /> <a href="tel:+375222637171">+375 222 63-71-71</a>, <a href="mailto:pakettiby@gmail.com">pakettiby@gmail.com</a>
						</p>
						<p>
							Телефон уполномоченных по защите прав потребителей: <br /> <a href="tel:+375 172805465">+375 17 280 54 65</a> – администрация Первомайского района г.Минска
						</p>
					</div>
				</div>
			</footer>
			<ScrollToTop />
			<CookieBanner />
		</>
	)
}
