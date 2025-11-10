import PriceBox from "@/components/PriceBox/PriceBox";
import "./product.scss";

const spec = [
	{ "name": "Количество в коробке, шт.", "value": "1000" },
	{ "name": "Цена указана", "value": "без НДС" },
	{ "name": "Производитель", "value": "ООО \"МИСТЕРИЯ\"" },
	{ "name": "Импортёр", "value": "ООО \"ПСПфабрик\"" },
	{ "name": "Тип", "value": "Гофрированные" },
	{ "name": "Цвет", "value": "Ассорти" },
	{ "name": "Размер", "value": "5 мм" }
]
const price = {
	"priceTax": "1030",
	"oldPriceTax": "1040",
	"price": "1010",
	"oldPrice": "1020"
};

export default () => {
	return (
		<div className="product container section">
			<div className="product__summary product-summary">
				<a className="product-summary__image image-box" href="images/product-1.jpg" data-fancybox>
					<img src="images/product-1.jpg" alt="Соломка для напитков" />
					<span className="product-summary__flash hit-flash">Хит</span>
				</a>
				<div className="product-summary__content">
					<p className="product-summary__sku">Арт. 123456789</p>
					<div className="product-summary__spec-box">
						<h3 className="product-summary__title title-3">Характеристики</h3>
						<ul className="product-summary__spec spec">
							{spec?.map(({ name, value }) => (
								<li className="spec__item" key={name}>
									<span className="spec__name">{name}</span>
									<span className="spec__value">{value}</span>
								</li>
							))}
						</ul>
					</div>
					<div className="product-summary__order-box order-box box">
						<div className="order-box__info">
							Поставляется партиями кратно 25 шт<br /> блок: 25 шт, коробка: 2500 шт
						</div>
						<PriceBox className="order-box__price-box" data={price} />
						<div className="order-box__cart-btn-box">
							<form className="order-box__form">
								<div className="order-box__input-box">
									<input type="number" value="25" min="25" step="25" />
									<select>
										<option value="pcs" selected>шт</option>
										<option value="block">блк</option>
										<option value="boxes">кор</option>
									</select>
								</div>
								<button type="submit" className="order-box__cart-btn btn">В корзину</button>
							</form>
							<a className="order-box__fav-btn fav-btn" href="#">
								<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M16.8545 0.5C18.6949 0.500054 20.3925 1.25512 21.626 2.62207C22.8428 3.97075 23.5 5.79832 23.5 7.75586C23.5 9.79739 22.7489 11.6457 21.2061 13.5479C19.8411 15.2307 17.8894 16.9286 15.6846 18.8486C15.3059 19.1782 14.9029 19.5296 14.4834 19.8975L13.1836 21.0469C12.8576 21.3383 12.437 21.5 12 21.5C11.5627 21.5 11.1426 21.3377 10.8164 21.0459C9.93044 20.2543 9.07547 19.5099 8.31934 18.8516L8.31543 18.8486L6.71484 17.4473C5.17142 16.0807 3.81772 14.81 2.79395 13.5479C1.25111 11.6455 0.5 9.79741 0.5 7.75586C0.500011 5.79829 1.15724 3.97072 2.37402 2.62207C3.6075 1.25511 5.30495 0.5001 7.14551 0.5C8.44459 0.5 9.64334 0.896193 10.7021 1.66797L10.9121 1.82715L11.1191 1.99707C11.4324 2.26478 11.7262 2.56388 12 2.8916C12.3333 2.49274 12.6965 2.13644 13.0879 1.82715C14.1972 0.95049 15.4688 0.5 16.8545 0.5Z" stroke="currentColor" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="box product__details product-details">
				<h3 className="product-details__title title-3">Описание товара</h3>
				<div className="product-details__descr">
					<p>Идеальны как для прохладительных напитков, так и для густых коктейлей. Качественное сырье обеспечивает безопасность при контакте с пищевыми продуктами. Подойдут как для предприятий общественного питания, так и для домашнего использования.</p>
					<p>Размеры: 240 х 8 мм.</p>
					<p>Количество в упаковке: 250 шт.</p>
					<p>Количество в коробке: 20 упак.</p>
					<p>Внешний вид товара, включая цвет, могут незначительно отличаться от представленных на фотографии.</p>
					<p>Страна-производитель: Беларусь.</p>
					<p>Изготовитель: ООО "Эксталайн", РБ, г. Могилев.</p>
				</div>
			</div>
		</div>
	)
}
