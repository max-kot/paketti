import Checkout from "@/layouts/Checkout/Checkout"
import Footer from "@/layouts/Footer/Footer"
import Header from "@/layouts/Header/Header"
import HeroPage from "@/layouts/HeroPage/HeroPage"
export const metadata = {
	title: 'Оформление заказа - Пакетти',
	lang: 'ru',
}
export default () => {
	return (
		<>
			<Header />
			<main className="main">
				<HeroPage title="Оформление заказа" breadcrumbs={['Главная', 'Оформление заказа']} />
				<Checkout />
			</main>
			<Footer />
		</>
	)
}
