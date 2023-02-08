import BlogItem from './BlogItem';
import Title from './Title';

import '../assets/scss/_Blog.scss';

function Blog() {
	return (
		<div className='blog'>
			<div className='blog__container'>
				<div className='blog__wrapper'>
					<Title title='Blog' />
					<div className='blog__item'>
						<BlogItem />
						<BlogItem />
						<BlogItem />
						<BlogItem />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Blog;
