import FiltersBlock from "@/components/FiltersBlock/FiltersBlock"
import Pagination from "@/components/Pagination/Pagination"
import ProductBar from "@/components/ProductBar/ProductBar"
import ProductCard from "@/components/ProductCard/ProductCard"
import ContactSection from "@/layouts/ContactSection/ContactSection"
import Footer from "@/layouts/Footer/Footer"
import Header from "@/layouts/Header/Header"
import HeroPage from "@/layouts/HeroPage/HeroPage"
import SEOSection from "@/layouts/SEOSection/SEOSection"


export const metadata = {
	title: 'Каталог - Пакетти',
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
		"image": "images/product-2.jpg",
		"title": "Соломка для напитков",
		"hasLabel": true,
		"sku": "123456",
		"price": {
			"priceTax": "1030",
			"price": "1010",
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
				<HeroPage title="Одноразовая посуда и аксессуары" breadcrumbs={['Главная', 'Каталог', 'Одноразовая посуда и аксессуары']} />
				<div className="container product-section">
					<FiltersBlock className="product-section__filters" />
					<ProductBar className="product-section__product-bar"/>
					<ul className="product-section__product-grid grid grid-4">
						{products.map((product) => <ProductCard data={product} />)}
					</ul>
					<Pagination />
				</div>
				<ContactSection />
				<SEOSection />
			</main>
			<Footer />
		</>
	)
}
