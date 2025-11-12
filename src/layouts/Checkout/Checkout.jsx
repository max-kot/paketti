import Section from "@/ui/Section/Section";
import "./checkout.scss";
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
const delivery = [
	{
		type: "radio",
		name: 'delivery-method',
		value: 'delivery-from-100',
		label: <>Доставка от <b>100,00 р</b> <a className="link" href="/">(Условия доставки)</a></>,
		isChecked: true,
	},
	{
		type: "radio",
		name: 'delivery-method',
		value: 'delivery-pickup-1',
		label: <>Самовывоз из магазина (г. Могилев, ул. Чигринова 9) <b>(от 50,00 р)</b></>,
		isChecked: false,
		spoiler: (<div className="checkout-form__delivery-info box delivery-info" data-delivery="delivery-pickup-1">
			<h4 className="delivery-info__title">Режим работы магазина 1</h4>
			<div className="delivery-info__descr">
				<p>Пн-пт 08:45 - 20:00</p>
				<p>Сб 09:00 - 19:00</p>
				<p>Вс 09:00 - 18:00</p>
			</div>
		</div>),
	},
	{
		type: "radio",
		name: 'delivery-method',
		value: 'delivery-pickup-2',
		label: <>Самовывоз из магазина (г. Могилев, пер. Комиссариатский 5) <b>(от 50,00 р)</b></>,
		isChecked: false,
		spoiler: (<div className="checkout-form__delivery-info box delivery-info" data-delivery="delivery-pickup-2">
			<h4 className="delivery-info__title">Режим работы магазина 2</h4>
			<div className="delivery-info__descr">
				<p>Пн-пт 08:45 - 20:00</p>
				<p>Сб 09:00 - 19:00</p>
				<p>Вс 09:00 - 18:00</p>
			</div>
		</div>
		),
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
const payment = [
	{
		type: "radio",
		name: 'payment-method',
		value: 'payment-method-1',
		label: 'Оплата при получении картой в розничных магазинах',
		isChecked: true,
	},
	{
		type: "radio",
		name: 'payment-method',
		value: 'payment-method-2',
		label: 'Оплата при получении наличными в розничных магазинах ',
		isChecked: false,
	},
	{
		type: "radio",
		name: 'payment-method',
		value: 'payment-method-3',
		label: 'Безналичный расчет',
		isChecked: false,
	},
]
const comments = {
	id: 'comments',
	label: false,
	req: false,
	isInput: false,
	placeholder: 'Комментарий к заказу',
}

export default () => {
	return (
		<Section className="checkout">
			<div className="checkout__form-wrapper box">
				<form className="checkout-form checkout__form" action="#">
					<div className="checkout-form__info">
						<h3 className="checkout-form__title title-3">Контактное лицо</h3>
						<div className="form-box">
							{contacts?.map(item => <FormInput className="checkout-form__form-input" data={item} key={item} />)}
						</div>
					</div>
					<div className="checkout-form__delivery">
						<h3 className="checkout-form__title title-3">Доставка</h3>
						<ul className="checkout-form__list delivery-options">
							{delivery?.map(del => (
								<li className="delivery-options__item" key={del}>
									<Checkbox className="delivery-options__checkbox" data={del} />
								</li>
							))}
						</ul>
					</div>
					<div className="checkout-form__company">
						<h3 className="checkout-form__title title-3">Информация о компании</h3>
						<div className="form-box">
							{company?.map(item => <FormInput className="checkout-form__form-input" data={item} key={item} />)}
						</div>
					</div>
					<div className="checkout-form__payment">
						<h3 className="checkout-form__title title-3">Оплата</h3>
						<ul className="checkout-form__list delivery-options">
							{payment?.map(item => (
								<li className="delivery-options__item" key={item}>
									<Checkbox className="delivery-options__checkbox" data={item} />
								</li>
							))}
						</ul>
					</div>
					<FormInput className="checkout-form__comments" data={comments} />
					<p className="checkout-form__text">
						<span className="red">*</span> поля, обязательные для заполнения
					</p>
				</form>
			</div>
			<div className="checkout__totals box cart-totals checkout-totals">
				<ul className="cart-totals__info">
					<li className="cart-totals__item">
						<span className="cart-totals__name">Товаров, 2 шт</span>
						<span className="cart-totals__value">2 060,00 р</span>
					</li>
					<li className="cart-totals__item">
						<span className="cart-totals__name">Скидка</span>
						<span className="cart-totals__value">200,00 р</span>
					</li>
					<li className="cart-totals__item">
						<span className="cart-totals__name">НДС</span>
						<span className="cart-totals__value">20,00 р</span>
					</li>
				</ul>
				<div className="cart-totals__btn-box">
					<div className="cart-totals__price-box">
						<span className="cart-totals__text">Итого</span>
						<span className="cart-totals__price">2 080,00 р</span>
					</div>
					<a className="checkout-totals__btn btn" href="/">Оформить заказ</a>
				</div>
			</div>
		</Section>
	)
}
