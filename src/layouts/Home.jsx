import Benefits from "./Benefits/Benefits"
import Header from "./Header/Header"
import Hero from "./Hero/Hero"
import Catalog from "./Catalog/Catalog"
import Popular from "./Popular/Popular"
import SliderSection from "./SliderSection/SliderSection"
import ContactSection from "./ContactSection/ContactSection"
import SEOSection from "./SEOSection/SEOSection"
import Footer from "./Footer/Footer"

const partners = [
	{
		image: "images/partner-1.png",
		text: "",
	},
	{
		image: "images/partner-2.png",
		text: "",
	},
	{
		image: "images/partner-3.png",
		text: "",
	},
	{
		image: "images/partner-4.png",
		text: "",
	},
	{
		image: "images/partner-5.png",
		text: "",
	},
	{
		image: "images/partner-6.png",
		text: "",
	},
	{
		image: "images/partner-2.png",
		text: "",
	},
	{
		image: "images/partner-3.png",
		text: "",
	},
	{
		image: "images/partner-4.png",
		text: "",
	},
	{
		image: "images/partner-5.png",
		text: "",
	},
	{
		image: "images/partner-6.png",
		text: "",
	},
];

export default ({ data, lang }) => {
	return (
		<>
			<Header />
			<main className="main">
				<Hero />
				<Benefits />
				<Catalog />
				<Popular />
				<SliderSection className="partners" title="Наши партнеры" data={partners} />
				<ContactSection/>
				<SEOSection/>
			</main>
			<Footer />
		</>
	)
}