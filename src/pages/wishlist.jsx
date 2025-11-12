
import AccountSection from "@/layouts/AccountSection/AccountSection"
import Footer from "@/layouts/Footer/Footer"
import Header from "@/layouts/Header/Header"
import HeroPage from "@/layouts/HeroPage/HeroPage"
import Wishlist from "@/layouts/Wishlist/Wishlist"

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
				<AccountSection page="2" className="account-wishlist" content={<Wishlist />} />
			</main>
			<Footer />
		</>
	)
}
