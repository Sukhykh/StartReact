import Logo from './Logo';
import SocialLinc from './SocialLinc';

function Header() {
	return (
		<header className='header'>
			<div className='header__container'>
				<div className='header__wrapper'>
					<Logo />
					<h1 className='header__title'>Blog name</h1>
					<div className='header__social-bar'>
						<SocialLinc />
						<SocialLinc />
						<SocialLinc />
						<SocialLinc />
						<SocialLinc />
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
