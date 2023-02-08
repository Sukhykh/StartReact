import '../assets/scss/_Logo.scss';
import onWave from '../assets/img/logo.png';

function Logo() {
	return (
		<div className='logo__wrapper'>
			<picture>
				<source srcset='' type='image/webp' />
				<img
					className='logo__img'
					width='181'
					height='37'
					src={onWave}
					alt='logo'
				></img>
			</picture>
		</div>
	);
}

export default Logo;
