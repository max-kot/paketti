import OrderItem from "@/components/OrderItem/OrderItem";
import "./order-section.scss";

const orders = [
	{
		date: '26.04.2024',
		number: '145',
		list: [
			{
				name: 'Соломка для напитков',
				value: '1000 шт',
			},
		],
		statusLabel: 'Доставка',
		descr: 'Будет доставлен: 28.04.2024',
		price: '1 080,00',
		className: 'delivery',
	},
	{
		date: '26.04.2024',
		number: '143',
		list: [
			{
				name: 'Соломка для напитков',
				value: '1000 шт',
			},
			{
				name: 'Соломка для напитков',
				value: '10 короб',
			},
			{
				name: 'Соломка для напитков',
				value: '1000 шт',
			},
			{
				name: 'Соломка для напитков',
				value: '10 короб',
			},
			{
				name: 'Соломка для напитков',
				value: '1000 шт',
			},
			{
				name: 'Соломка для напитков',
				value: '10 короб',
			},
		],
		statusLabel: 'Самовывоз',
		descr: 'Хранение до: 25.04.2024',
		price: '2 060,00',
		className: 'pick-up',
	},
	{
		date: '25.04.2024',
		number: '132',
		list: [
			{
				name: 'Соломка для напитков',
				value: '10 блк',
			},
		],
		statusLabel: 'Выполнен',
		descr: 'Доставлен 28.04.2024',
		price: '5 000,00',
		className: 'done',
	},
	{
		date: '24.04.2024',
		number: '111',
		list: [
			{
				name: 'Соломка для напитков',
				value: '1000 шт',
			},
			{
				name: 'Соломка для напитков',
				value: '1000 шт',
			},
		],
		statusLabel: 'Отмена',
		descr: 'Отмена',
		price: '10 000,00',
		className: 'canceled',
	},

]

export default () => {
	return (
		<form className="order-form">
			<table className="order-form__table order-table">
				<tbody className="order-table__tbody">
					{orders?.map(item => <OrderItem data={item} key={item} />)}
				</tbody>
			</table>
		</form>
	)
}
