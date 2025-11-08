import "./cookie-banner.scss";

export default () => {
	return (
		<div id="cookie-banner" className="cookie-banner">
			<div className="cookie-banner__container container">
				<p className="cookie-banner__content">
					Для удобства пользователей сайта используются файлы cookie.
					<br />Продолжая просмотр этого сайта, вы соглашаетесь на
					обработку файлов cookie в соответствии с <a href="/cookie-policy" target="_blank">Политикой обработки файлов cookie</a>
				</p>
				<div className="cookie-banner__buttons">
					<button id="cookie-accept" className="btn">Принять</button>
					<button id="cookie-decline" className="btn btn--stroke">Отклонить</button>
				</div>
			</div>
		</div>
	)
}
