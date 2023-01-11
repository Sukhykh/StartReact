import '../assets/scss/Banner.scss';
import banner from '../assets/img/banner.png';

function Banner() {
	return (
		<div className='banner__container'>
			<div className='banner__wrapper'>
				<picture>
					<source srcset='' type='image/webp' />
					<img
						className='banner__img'
						width='1177'
						height='145'
						src={banner}
						alt='banner'
					></img>
				</picture>
			</div>
		</div>
	);
}

export default Banner;
