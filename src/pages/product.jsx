import ContactSection from "@/layouts/ContactSection/ContactSection"
import Footer from "@/layouts/Footer/Footer"
import Header from "@/layouts/Header/Header"
import HeroPage from "@/layouts/HeroPage/HeroPage"
import Popular from "@/layouts/Popular/Popular"
import Product from "@/layouts/Product/Product"


export const metadata = {
	title: 'Соломка для напитков - Пакетти',
	lang: 'ru',
}
const recentProducts = [
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
];
const similarProducts = [
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
];
export default () => {
	return (
		<>
			<Header />
			<main className="main">
				<HeroPage title="Соломка для напитков" breadcrumbs={['Главная', 'Каталог', 'Одноразовая посуда и аксессуары', 'Соломка для напитков']} />
				<Product />

				<Popular products={recentProducts} className="recent-products" title="Недавно просмотренные товары" />
				<Popular products={similarProducts} className="similar-products" title="Похожие товары" />
				<ContactSection />
			</main>
			<Footer />
		</>
	)
}
