import Section from "@/ui/Section/Section";
import "./popular.scss";
import ProductCard from "@/components/ProductCard/ProductCard";
import clsx from "clsx";


export default ({title, className, products}) => {
	return (
		<Section className={clsx("popular", className)}>
			<h2 className="title-2 popular__title">{title}</h2>
			<ul className="popular__list grid grid-4">
				{products?.map((item, i) => <ProductCard key={i} data={item} />)}
			</ul>
		</Section>
	)
}
