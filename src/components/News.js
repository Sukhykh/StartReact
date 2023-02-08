import NewsItem from './NewsItem';
import Title from './Title';

import '../assets/scss/_News.scss';

function News() {
	return (
		<div className='news'>
			<div className='news__container'>
				<div className='news__wrapper'>
					<Title title='News' />
					<div className='news__item'>
						<NewsItem />
						<NewsItem />
						<NewsItem />
					</div>
				</div>
			</div>
		</div>
	);
}

export default News;
