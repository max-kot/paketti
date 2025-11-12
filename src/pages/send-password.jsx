import Footer from "@/layouts/Footer/Footer"
import Header from "@/layouts/Header/Header"
import HeroPage from "@/layouts/HeroPage/HeroPage"
import NotificationSection from "@/layouts/NotificationSection/NotificationSection"

export const metadata = {
	title: 'Пароль отправлен! - Пакетти',
	lang: 'ru',
}

export default () => {
	return (
		<>
			<Header />
			<main className="main">
				<HeroPage title="Пароль отправлен!" breadcrumbs={['Главная', 'Личный кабинет', 'Забыли пароль', 'Пароль отправлен!']} />
				<NotificationSection descr={<p>Инструкция по восстановлению пароля отправлена на указанный e-mail адрес. <br /> Проверьте новые письма. </p>}/>
			</main>
			<Footer />
		</>
	)
}
