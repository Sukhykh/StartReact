import NewsItem from './NewsItem';

function News() {
	return (
		<header className='news'>
			<div className='news__container'>
				<div className='news__wrapper'>
					<h1 className='news__title'>News</h1>
					<div className='news__item'>
						<NewsItem />
						<NewsItem />
						<NewsItem />
					</div>
				</div>
			</div>
		</header>
	);
}

export default News;
