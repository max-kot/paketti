import Footer from "@/layouts/Footer/Footer"
import Header from "@/layouts/Header/Header"
import Section from "@/ui/Section/Section"
import './page-404.scss'

export const metadata = {
	title: 'Страница не найдена - Пакетти',
	lang: 'ru',
}

export default () => {
	return (
		<>
			<Header />
			<main className="main">
				<Section className="page-404">
					<h1 className="title-2 page-404__title">Страница не найдена</h1>
					<p className="page-404__404">404</p>
					<p className="page-404__text">Неправильно введен адрес или такой страницы не существует</p>
					<a className="page-404__btn btn btn--big" href="/../">На главную</a>
				</Section>
			</main>
			<Footer />
		</>
	)
}
