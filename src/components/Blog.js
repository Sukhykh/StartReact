import BlogItem from './BlogItem';

function Blog() {
	return (
		<header className='blog'>
			<div className='blog__container'>
				<div className='blog__wrapper'>
					<h1 className='blog__title'>Blog</h1>
					<div className='blog__item'>
						<BlogItem />
						<BlogItem />
						<BlogItem />
						<BlogItem />
					</div>
				</div>
			</div>
		</header>
	);
}

export default Blog;
