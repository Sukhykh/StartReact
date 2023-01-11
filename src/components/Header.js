import Logo from './Logo';
import SocialLinc from './SocialLinc';
import '../assets/scss/Header.scss';
import sprite from '../assets/img/sprite.svg';
/*
let social = [
	{
		name: instagram,
		link: 'https://www.instagram.com/',
	},
	{
		name: facebook,
		link: 'https://www.facebook.com/',
	},
	{
		name: pinterest,
		link: 'https://www.pinterest.com/',
	},
	{
		name: twitter,
		link: 'https://twitter.com/',
	},
	{
		name: youtube,
		link: 'https://www.youtube.com/',
	},
];

function createSocial(array) {
	array.forEach((element) => {
		let svgstring = element.name
	});
}
*/
function Header() {
	return (
		<header className='header'>
			<div className='header__container'>
				<div className='header__wrapper'>
					<Logo />
					<h1 className='header__title'>Blog name</h1>
					<div className='header__social-bar'>
						<SocialLinc
							sprite='../assets/img/sprite.svg#instagram'
							site='https://www.instagram.com/'
						/>
						<SocialLinc
							sprite='../assets/img/sprite.svg#facebook'
							site='https://www.facebook.com/'
						/>
						<SocialLinc
							sprite='../assets/img/sprite.svg#pinterest'
							site='https://www.pinterest.com/'
						/>
						<SocialLinc
							sprite='../assets/img/sprite.svg#twitter'
							site='https://twitter.com/'
						/>
						<SocialLinc
							sprite='../assets/img/sprite.svg#youtube'
							site='https://www.youtube.com/'
						/>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
