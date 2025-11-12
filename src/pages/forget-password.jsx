import FormInput from "@/components/FormInput/FormInput"
import Footer from "@/layouts/Footer/Footer"
import Header from "@/layouts/Header/Header"
import HeroPage from "@/layouts/HeroPage/HeroPage"
import Section from "@/ui/Section/Section"
// стили в checkout.scss

export const metadata = {
	title: 'Забыли пароль? - Пакетти',
	lang: 'ru',

}

const login = [
	{
		id: 'login_email',
		label: 'E-mail',
		req: true,
		type: 'email',
		isInput: true,
		hint: false,
		placeholder: '',
	},
]
export default () => {
	return (
		<>
			<Header />
			<main className="main">
				<HeroPage title="Забыли пароль?" breadcrumbs={['Главная', 'Личный кабинет', 'Забыли пароль?']} />
				<Section className="login">
					<div className="login__wrapper box">
						<p className="login__text">Введите E-mail Вашей учетной записи и нажмите кнопку Продолжить, и мы вышлем инструкцию для восстановления пароля на Вашу электронную почту </p>
						<form className="checkout-form login__form" action="#">
							<div className="checkout-form__box">
								{login?.map(item => <FormInput className="checkout-form__form-input" data={item} key={item} />)}
							</div>
							<div className="checkout-form__btn-box-flex">
								<button className="checkout-form__btn btn" type="submit">Продолжить</button>
								<a className="checkout-form__btn btn btn--stroke" href="/">Отмена</a>
							</div>
						</form>
					</div>
				</Section>
			</main>
			<Footer />
		</>
	)
}
