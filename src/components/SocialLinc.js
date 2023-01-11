import '../assets/scss/SocialLinc.scss';

function SocialLinc(props) {
	return (
		<a
			class='social__link'
			href={props.site}
			target='_blank'
			rel='noindex, nofollow, noreferrer, noopener'
		>
			<svg class='social__link-svg'>
				<use class='social__link-icon' xlinkHref={props.sprite}></use>
			</svg>
		</a>
	);
}

export default SocialLinc;
