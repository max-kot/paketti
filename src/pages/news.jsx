import Pagination from "@/components/Pagination/Pagination"
import Footer from "@/layouts/Footer/Footer"
import Header from "@/layouts/Header/Header"
import HeroPage from "@/layouts/HeroPage/HeroPage"
import Section from "@/ui/Section/Section"
import './news.scss';

export const metadata = {
	title: 'Навiны - Пакетти',
	lang: 'ru',
}

export const news = [
	{
		thumb: 'images/news-post.jpg',
		title: 'Вакуумные контейнеры – первый шаг к быстрой кухне',
		text: 'Какая хозяйка не мечтает сократить время, затрачиваемое на приготовление еды для домочадцев? Не будем лукавить',
		date: '20.08.2024',
	},
	{
		thumb: 'images/news-post.jpg',
		title: 'Вакуумные контейнеры – первый шаг к быстрой кухне',
		text: 'Какая хозяйка не мечтает сократить время, затрачиваемое на приготовление еды для домочадцев? Не будем лукавить',
		date: '20.08.2024',
	},
	{
		thumb: 'images/news-post.jpg',
		title: 'Вакуумные контейнеры – первый шаг к быстрой кухне',
		text: 'Какая хозяйка не мечтает сократить время, затрачиваемое на приготовление еды для домочадцев? Не будем лукавить',
		date: '20.08.2024',
	},
	{
		thumb: 'images/news-post.jpg',
		title: 'Вакуумные контейнеры – первый шаг к быстрой кухне',
		text: 'Какая хозяйка не мечтает сократить время, затрачиваемое на приготовление еды для домочадцев? Не будем лукавить',
		date: '20.08.2024',
	},
	{
		thumb: 'images/news-post.jpg',
		title: 'Вакуумные контейнеры – первый шаг к быстрой кухне',
		text: 'Какая хозяйка не мечтает сократить время, затрачиваемое на приготовление еды для домочадцев? Не будем лукавить',
		date: '20.08.2024',
	},
	{
		thumb: 'images/news-post.jpg',
		title: 'Вакуумные контейнеры – первый шаг к быстрой кухне',
		text: 'Какая хозяйка не мечтает сократить время, затрачиваемое на приготовление еды для домочадцев? Не будем лукавить',
		date: '20.08.2024',
	},
	{
		thumb: 'images/news-post.jpg',
		title: 'Вакуумные контейнеры – первый шаг к быстрой кухне',
		text: 'Какая хозяйка не мечтает сократить время, затрачиваемое на приготовление еды для домочадцев? Не будем лукавить',
		date: '20.08.2024',
	},
	{
		thumb: 'images/news-post.jpg',
		title: 'Вакуумные контейнеры – первый шаг к быстрой кухне',
		text: 'Какая хозяйка не мечтает сократить время, затрачиваемое на приготовление еды для домочадцев? Не будем лукавить',
		date: '20.08.2024',
	},
	{
		thumb: 'images/news-post.jpg',
		title: 'Вакуумные контейнеры – первый шаг к быстрой кухне',
		text: 'Какая хозяйка не мечтает сократить время, затрачиваемое на приготовление еды для домочадцев? Не будем лукавить',
		date: '20.08.2024',
	},
]
export default () => {
	return (
		<>
			<Header />
			<main className="main">
				<HeroPage title="Навiны" breadcrumbs={['Главная', 'Навiны']} />
				<Section className="news">
					<ul className="news__grid grid grid-3">
						{news?.map(item => (
							<li className="news__item news-item" key={item}>
								<a className="news-item__link-wrapper" href="#">
									<figure className="news-item__image-box image-box">
										<img src={item.thumb} alt="" />
									</figure>
									<p className="news-item__meta">
										{item.date}
									</p>
									<h3 className="news-item__title title-3">{item.title}</h3>
									<p className="news-item__text">{item.text}</p>
								</a>

							</li>
						))}
					</ul>
					<Pagination />
				</Section>
			</main>
			<Footer />
		</>
	)
}
