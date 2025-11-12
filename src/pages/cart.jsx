import Cart from "@/layouts/Cart/Cart"
import Footer from "@/layouts/Footer/Footer"
import Header from "@/layouts/Header/Header"
import HeroPage from "@/layouts/HeroPage/HeroPage"
import Popular from "@/layouts/Popular/Popular"


export const metadata = {
	title: 'Корзина - Пакетти',
	lang: 'ru',
}

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
		<>
			<Header />
			<main className="main">
				<HeroPage title="Корзина" breadcrumbs={['Главная', 'Корзина']} />
				<Cart/>
				<Popular products={products} className="interested-products" title="Возможно вас заинтересует" />
			</main>
			<Footer />
		</>
	)
}
