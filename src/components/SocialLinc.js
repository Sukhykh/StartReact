import '../assets/scss/SocialLinc.scss';

function SocialLinc(props) {
	let classNameValue = '';

	if (
		props.site === 'https://www.youtube.com/' ||
		props.site === 'https://twitter.com/'
	) {
		classNameValue = 'social__link-icon social__link-icon--another';
	} else {
		classNameValue = 'social__link-icon';
	}
	return (
		<a
			className='social__link'
			href={props.site}
			target='_blank'
			rel='noindex, nofollow, noreferrer, noopener'
		>
			<svg className='social__link-svg'>
				<use className={classNameValue} xlinkHref={props.sprite}></use>
			</svg>
		</a>
	);
}

export default SocialLinc;
