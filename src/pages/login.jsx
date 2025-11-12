import FormInput from "@/components/FormInput/FormInput"
import Footer from "@/layouts/Footer/Footer"
import Header from "@/layouts/Header/Header"
import HeroPage from "@/layouts/HeroPage/HeroPage"
import Section from "@/ui/Section/Section"
// стили в checkout.scss

export const metadata = {
	title: 'Вход - Пакетти',
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
	{
		id: 'login_password',
		label: 'Пароль',
		req: true,
		type: 'password',
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
				<HeroPage title="Вход" breadcrumbs={['Главная', 'Вход']} />
				<Section className="login">
					<p className="registration__text">У вас еще нет аккаунта? <a className="link" href="/">Зарегистрироваться</a></p>
					<div className="login__wrapper box">
						<form className="checkout-form login__form" action="#">
							<div className="checkout-form__box">
								{login?.map(item => <FormInput className="checkout-form__form-input" data={item} key={item} />)}
							</div>
							<div className="checkout-form__btn-box-flex">
								<button className="checkout-form__btn btn" type="submit">Войти</button>
								<a className="link" href="/">Забыли пароль?</a>
							</div>
						</form>
					</div>
				</Section>
			</main>
			<Footer />
		</>
	)
}
