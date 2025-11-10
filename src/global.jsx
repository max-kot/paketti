import '@/scss/main.scss';
import { Head } from 'minista'
export default (props) => {
	const { children, title, url, lang = "ru" } = props

	return (
		<>
			<Head htmlAttributes={{ lang: lang, class: lang }}>
				<title>{title}</title>
				<script
					src="https://code.jquery.com/jquery-3.7.1.min.js"
					integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
					crossorigin="anonymous"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/js/ion.rangeSlider.min.js"></script>
				<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
				<script src="/src/js/main.js" type="module" />
			</Head>
			<div className='wrapper' lang={lang}>
				{children}
			</div>
		</>
	)
}
