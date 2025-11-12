import ProductCard from "@/components/ProductCard/ProductCard";
import "./wishlist.scss";
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
];
export default () => {
	return (
		<ul className="wishlist grid grid-4">
			{products?.map((item, i) => <ProductCard key={i} data={item} />)}
		</ul>
	)
}
