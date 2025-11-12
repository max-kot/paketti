import Section from "@/ui/Section/Section";
import "./cart.scss";
import CartItem from "@/components/CartItem/CartItem";

const products = [
	{
		"link": "#",
		"image": "images/product-1.jpg",
		"title": "Соломка для напитков",
		"hasLabel": true,
		"sku": "123456",
		"price": {
			"priceTax": "1030",
			"oldPriceTax": "1040",
			"price": "1010",
			"oldPrice": "1020"
		},
		"hasAccount": true,
	},
	{
		"link": "#",
		"image": "images/product-2.jpg",
		"title": "Одноразовая посуда и аксессуары",
		"hasLabel": false,
		"sku": "789456",
		"price": {
			"priceTax": "1050",
			"price": "1040",
		},
		"hasAccount": false,
	},
	{
		"link": "#",
		"image": "images/product-1.jpg",
		"title": "Соломка для напитков",
		"hasLabel": true,
		"sku": "123456",
		"price": {
			"priceTax": "1030",
			"oldPriceTax": "1040",
			"price": "1010",
			"oldPrice": "1020"
		},
		"hasAccount": true,
	},
	{
		"link": "#",
		"image": "images/product-2.jpg",
		"title": "Соломка для напитков",
		"hasLabel": true,
		"sku": "123456",
		"price": {
			"priceTax": "1030",
			"oldPriceTax": "1040",
			"price": "1010",
			"oldPrice": "1020"
		},
		"hasAccount": true,
	},
];
export default () => {
	return (
		<Section className="cart">
			<table className="cart__table cart-table">
				<tbody className="cart-table__tbody">
					{products?.map(prod => <CartItem data={prod} key={prod} />)}
				</tbody>
			</table>
			<div className="cart__totals box cart-totals">
				<ul className="cart-totals__info">
					<li className="cart-totals__item">
						<span className="cart-totals__name">Товаров, 2 шт</span>
						<span className="cart-totals__value">2 060,00 р</span>
					</li>
					<li className="cart-totals__item">
						<span className="cart-totals__name">Скидка</span>
						<span className="cart-totals__value">200,00 р</span>
					</li>
					<li className="cart-totals__item">
						<span className="cart-totals__name">НДС</span>
						<span className="cart-totals__value">20,00 р</span>
					</li>
					<li className="cart-totals__item">
						<span className="cart-totals__name">Доставка</span>
						<span className="cart-totals__value">50,00 р</span>
					</li>
				</ul>
				<div className="cart-totals__btn-box">
					<div className="cart-totals__price-box">
						<span className="cart-totals__text">Итого</span>
						<span className="cart-totals__price">2 080,00 р</span>
					</div>
					<a className="cart-totals__link-checkout btn" href="#">Перейти к оформлению</a>
				</div>
			</div>
		</Section>
	)
}
