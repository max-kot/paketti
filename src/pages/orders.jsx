import AccountSection from "@/layouts/AccountSection/AccountSection"
import Footer from "@/layouts/Footer/Footer"
import Header from "@/layouts/Header/Header"
import HeroPage from "@/layouts/HeroPage/HeroPage"
import OrderSection from "@/layouts/OrderSection/OrderSection"

export const metadata = {
	title: 'Личный кабинет - Пакетти',
	lang: 'ru',
}

export default () => {
	return (
		<>
			<Header />
			<main className="main">
				<HeroPage title="Личный кабинет" breadcrumbs={['Главная', 'Личный кабинет', 'История заказов']} />
				<AccountSection page="1" className="account-order" content={<OrderSection />} />
			</main>
			<Footer />
		</>
	)
}
