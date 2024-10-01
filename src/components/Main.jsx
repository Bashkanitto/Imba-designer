import Jobs from './Jobs'


const Main = () => {
	return (
		<main className='p-4'>
			<header className='flex flex-col items-start md:items-center my-10'>
				<h1 className='leading-[40px] md:leading-[60px] mb-4 text-left sm:text-center text-4xl sm:text-6xl md:text-7xl'>независимый дизайн <br /> команда imba design</h1>
				<p className='text-slate-500'>создан для того взаимодействия, для того что бы соединять</p>
			</header>
			<Jobs />
		</main>
	)
}

export default Main