import './Icon.scss'
import clsx from 'clsx'
import { Icon as MinistaIcon } from 'minista'

export default (props) => {
	const { className, iconId, hasFill = true, ariaLabel } = props

	return (
		<span className={clsx('icon', className)} aria-label={ariaLabel}>
			<MinistaIcon
				iconId={iconId}
				fill={hasFill ? 'currentColor' : 'none'}
				stroke={hasFill ? 'none' : 'currentColor'}
			/>
		</span>
	)
}
