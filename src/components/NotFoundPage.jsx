
const NotFoundPage = () => {
	return (
		<div className='flex gap-4 justify-center items-center h-[80vh]'>
			<h2 className='text-[200px] text-zinc-500 font-bold swap'>404</h2>
			<div>
			<p className='tracking-tighter text-1xl'>Oops... Кажется тут нет страницы </p>
			<a className='mt-4 border-b-2 border-black' href="/">Назад</a>
		</div>
			</div>
	)
}

export default NotFoundPage