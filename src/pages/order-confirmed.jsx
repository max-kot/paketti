import Footer from "@/layouts/Footer/Footer"
import Header from "@/layouts/Header/Header"
import HeroPage from "@/layouts/HeroPage/HeroPage"
import NotificationSection from "@/layouts/NotificationSection/NotificationSection"

export const metadata = {
	title: 'Заказ оформлен - Пакетти',
	lang: 'ru',
}

export default () => {
	return (
		<>
			<Header />
			<main className="main">
				<HeroPage title="Заказ оформлен" breadcrumbs={['Главная', 'Оформление заказа', 'Заказ оформлен']} />
				<NotificationSection descr={<p><b>Ваш заказ поступил в обработку, в ближайшее время с Вами свяжется менеджер для уточнения деталей!</b></p>}/>
			</main>
			<Footer />
		</>
	)
}
