import PhoneBox from "@/components/PhoneBox/PhoneBox";
import "./notification-section.scss";
import Section from "@/ui/Section/Section";

const phones = [
	{
		"text": '+375 222 63-71-71',
		"href": '+375222637171',
		"viber": false,
		"tg": false,
	},
	{
		"text": '+375 29 395-51-71',
		"href": '+375293955171',
		"viber": true,
		"tg": true,
	},
]

export default ({ descr }) => {
	return (
		<Section className="notification-section">
			<div className="notification-section__icon">
				<svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clipPath="url(#clip0_36_2976)">
						<path d="M39 0C31.2865 0 23.7463 2.28731 17.3328 6.57268C10.9193 10.8581 5.92053 16.949 2.96871 24.0753C0.0168976 31.2017 -0.755432 39.0433 0.749392 46.6085C2.25422 54.1738 5.9686 61.1229 11.4229 66.5771C16.8771 72.0314 23.8262 75.7458 31.3915 77.2506C38.9567 78.7554 46.7983 77.9831 53.9247 75.0313C61.051 72.0795 67.1419 67.0807 71.4273 60.6672C75.7127 54.2537 78 46.7135 78 39C77.9794 28.6629 73.8638 18.7551 66.5544 11.4456C59.2449 4.13615 49.3371 0.0206124 39 0ZM39 74.88C31.9036 74.88 24.9666 72.7757 19.0662 68.8331C13.1657 64.8906 8.56689 59.2869 5.85122 52.7307C3.13555 46.1745 2.425 38.9602 3.80944 32.0001C5.19388 25.0401 8.61112 18.6469 13.629 13.629C18.6469 8.6111 25.0401 5.19386 32.0002 3.80942C38.9602 2.42499 46.1745 3.13553 52.7307 5.8512C59.2869 8.56687 64.8906 13.1657 68.8331 19.0661C72.7757 24.9666 74.88 31.9036 74.88 39C74.8697 48.5128 71.0862 57.633 64.3596 64.3596C57.633 71.0861 48.5128 74.8697 39 74.88Z" fill="#23B24B" />
						<path fillRule="evenodd" clipRule="evenodd" d="M32.0005 49.4874L22.9388 40.8792C22.6108 40.5676 22.1659 40.3926 21.7021 40.3926C21.2382 40.3926 20.7934 40.5676 20.4654 40.8792C20.1374 41.1908 19.9531 41.6134 19.9531 42.054C19.9531 42.2722 19.9984 42.4882 20.0863 42.6898C20.1742 42.8914 20.303 43.0746 20.4654 43.2288L30.7763 53.0239C31.4609 53.6742 32.5652 53.6742 33.2498 53.0239L59.3478 28.2316C59.6758 27.9201 59.8601 27.4975 59.8601 27.0568C59.8601 26.6162 59.6758 26.1936 59.3478 25.882C59.0199 25.5704 58.575 25.3954 58.1111 25.3954C57.6473 25.3954 57.2024 25.5704 56.8744 25.882L32.0005 49.4874Z" fill="#23B24B" />
					</g>
					<defs>
						<clipPath id="clip0_36_2976">
							<rect width="78" height="78" fill="white" />
						</clipPath>
					</defs>
				</svg>
			</div>
			<div className="notification-section__descr">
				{descr}
			</div>
			<div className="notification-section__contacts">
				<p className="notification-section__text">
					При возникновении вопросов вы можете связаться с нами по телефонам:
				</p>
				<PhoneBox className="notification-section__phone-box" data={phones} />
			</div>
			<div className="notification-section__btn-box">
				<a className="notification-section__btn btn" href="/">На главную</a>
				<a className="notification-section__btn btn btn--stroke" href="/">В личный кабинет</a>
			</div>
		</Section>
	)
}
