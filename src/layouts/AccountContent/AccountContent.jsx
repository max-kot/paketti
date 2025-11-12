import FormInput from "@/components/FormInput/FormInput";
import "./account-content.scss";
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
export default () => {
	return (
		<form className="account-form">
			<div className="account-form__box">
				<h3 className="account-form__title title-3">Информация о компании</h3>
				<div className="account-form__input-box form-box">
					{company?.map(item => <FormInput className="account-form__form-input" data={item} key={item} />)}
				</div>
			</div>
			<div className="account-form__box">
				<h3 className="account-form__title title-3">Контактное лицо</h3>
				<div className="account-form__input-box form-box">
					{contacts?.map(item => <FormInput className="account-form__form-input" data={item} key={item} />)}
				</div>
			</div>
			<div className="account-form__box">
				<h3 className="account-form__title title-3">Данные для входа </h3>
				<div className="account-form__input-box form-box">
					{loginData?.map(item => <FormInput className="account-form__form-input" data={item} key={item} />)}
				</div>
			</div>
			<button className="account-form__btn btn btn--stroke" type="submit">Сохранить изменения</button>
		</form>
	)
}
