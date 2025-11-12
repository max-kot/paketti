import Section from "@/ui/Section/Section";
import "./registration.scss";
import FormInput from "@/components/FormInput/FormInput";
import Checkbox from "@/ui/Checkbox/Checkbox";

// Data
const contacts = [
	{
		id: 'last_name',
		label: 'Фамилия',
		req: true,
		type: 'text',
		isInput: true,
		hint: false,
		placeholder: '',
	},
	{
		id: 'first_name',
		label: 'Имя',
		req: true,
		type: 'text',
		isInput: true,
		hint: false,
		placeholder: '',
	},
	{
		id: 'position',
		label: 'Должность',
		req: false,
		type: 'text',
		isInput: true,
		hint: false,
		placeholder: '',
	},
	{
		id: 'phone',
		label: 'Телефон',
		req: true,
		type: 'phone',
		isInput: true,
		hint: false,
		placeholder: '',
	},
]
const company = [
	{
		id: 'company_name',
		label: 'Название',
		req: true,
		type: 'text',
		isInput: true,
		hint: false,
		placeholder: '',
	},
	{
		id: 'company_unp',
		label: 'УНП',
		req: true,
		type: 'text',
		isInput: true,
		hint: false,
		placeholder: '',
	},
	{
		id: 'company_account',
		label: 'Расчётный счёт',
		req: true,
		type: 'text',
		isInput: true,
		hint: false,
		placeholder: '',
	},
	{
		id: 'company_bank',
		label: 'Банк',
		req: true,
		type: 'text',
		isInput: true,
		hint: false,
		placeholder: '',
	},
	{
		id: 'company_address',
		label: 'Юр.адрес',
		req: true,
		type: 'text',
		isInput: true,
		hint: false,
		placeholder: '',
	},
	{
		id: 'company_shipping_address',
		label: 'Адрес разгрузки',
		req: true,
		type: 'text',
		isInput: true,
		hint: false,
		placeholder: '',
	},
]
const loginData = [
	{
		id: 'login_email',
		label: 'E-mail',
		req: true,
		type: 'email',
		isInput: true,
		hint: 'Является логином для входа на сайт',
		placeholder: '',
	},
	{
		id: 'login_password',
		label: 'Пароль',
		req: true,
		type: 'password',
		isInput: true,
		hint: 'Длина не менее 8 символов',
		placeholder: '',
	},
	{
		id: 'login_password_2',
		label: 'Подтвердите пароль',
		req: true,
		type: 'password',
		isInput: true,
		hint: false,
		placeholder: '',
	},

]
const accept = {
	type: "checkbox",
	name: "accept-form",
	value: "accept-form",
	label: <span>Я соглашаюсь с  <a href="/" className="link">Политикой обработки персональных данных</a></span>,
	isChecked: true,
	spoiler: false,
	required: true,
}
export default () => {
	return (
		<Section className="registration">
			<p className="registration__text">У вас уже есть аккаунт? <a className="link" href="/">Войти</a></p>
			<div className="registration__form-wrapper box">
				<form className="registration__form  checkout__form checkout-form" action="#">
					<div className="checkout-form__info">
						<h3 className="checkout-form__title title-3">Контактное лицо</h3>
						<div className="form-box">
							{contacts?.map(item => <FormInput className="checkout-form__form-input" data={item} key={item} />)}
						</div>
					</div>
					<div className="checkout-form__company">
						<h3 className="checkout-form__title title-3">Информация о компании</h3>
						<div className="form-box">
							{company?.map(item => <FormInput className="checkout-form__form-input" data={item} key={item} />)}
						</div>
					</div>
					<div className="checkout-form__login-info">
						<h3 className="checkout-form__title title-3">Данные для входа</h3>
						<div className="form-box">
							{loginData?.map(item => <FormInput className="checkout-form__form-input" data={item} key={item} />)}
						</div>
					</div>
					<p className="checkout-form__text">
						<span className="red">*</span> поля, обязательные для заполнения
					</p>
					<div className="checkout-form__btn-box">
						<Checkbox className="checkout-form__accept" data={accept} />
						<button className="checkout-form__btn btn" type="submit">Зарегистрироваться</button>
					</div>
				</form>
			</div>
			<div className="registration__info box">
				<div className="registration__box">
					<h3 className="registration__title title-3">Условия сотрудничества</h3>
					<div className="registration__descr">
						<ul>
							<li>Мы сотрудничаем только с юридическими лицами и индивидуальными предпринимателями.</li>
							<li>Возможен наличный и безналичный расчёт, расчёт в розничных магазинах.</li>
							<li>Доставка по Беларуси.</li>
						</ul>
					</div>
				</div>
				<div className="registration__box">
					<h3 className="registration__title title-3">Как стать нашим клиентом</h3>
					<div className="registration__descr">
						<ol>
							<li>Заполните заявку при помощи формы обратной связи или позвоните менеджеру</li>
							<li>Заключите договор</li>
							<li>Получите индивидуальную скидку, доступ к полной версии оптового интернет-магазина</li>
							<li>Совершайте оптовые закупки товаров для дома, офиса и школы на самых выгодных условиях!</li>
						</ol>
					</div>
				</div>
			</div>
		</Section>
	)
}
