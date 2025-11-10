import '@/scss/main.scss';
import { Head } from 'minista'
export default (props) => {
	const { children, title, url, lang = "ru" } = props

	return (
		<>
			<Head htmlAttributes={{ lang: lang, class: lang }}>
				<title>{title}</title>
				<script src="/src/js/main.js" type="module" />
			</Head>
			<div className='wrapper' lang={lang}>
				{children}
			</div>
		</>
	)
}
