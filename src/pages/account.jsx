import AccountContent from "@/layouts/AccountContent/AccountContent"
import AccountSection from "@/layouts/AccountSection/AccountSection"
import Footer from "@/layouts/Footer/Footer"
import Header from "@/layouts/Header/Header"
import HeroPage from "@/layouts/HeroPage/HeroPage"

export const metadata = {
	title: 'Личный кабинет - Пакетти',
	lang: 'ru',
}

export default () => {
	return (
		<>
			<Header />
			<main className="main">
				<HeroPage title="Личный кабинет" breadcrumbs={['Главная','Личный кабинет', 'Учетная запись']} />
				<AccountSection page="0" content={<AccountContent />}/>
			</main>
			<Footer />
		</>
	)
}
