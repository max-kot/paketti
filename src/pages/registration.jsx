import Registration from "@/layouts/Registration/Registration"
import Footer from "@/layouts/Footer/Footer"
import Header from "@/layouts/Header/Header"
import HeroPage from "@/layouts/HeroPage/HeroPage"
export const metadata = {
	title: 'Регистрация - Пакетти',
	lang: 'ru',
}
export default () => {
	return (
		<>
			<Header />
			<main className="main">
				<HeroPage title="Зарегистрироваться" breadcrumbs={['Главная', 'Регистрация']} />
				<Registration />
			</main>
			<Footer />
		</>
	)
}
