import Banner from './Banner';
import Blog from './Blog';
import News from './News';

import '../assets/scss/Main.scss';

function Main() {
	return (
		<main className='main'>
			<div className='main__container'>
				<div className='main__wrapper'>
					<Banner />
					<div className='main__content'>
						<Blog />
						<News />
					</div>
				</div>
			</div>
		</main>
	);
}

export default Main;
