import Header from './components/Header';
import Banner from './components/Banner';
import Blog from './components/Blog';
import News from './components/News';
import './App.css';

function App() {
	return (
		<>
			<Header />
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
		</>
	);
}

export default App;
