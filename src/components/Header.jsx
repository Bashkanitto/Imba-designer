import { useState } from 'react'
import { useLocation } from 'react-router-dom'



const Header = () => {
	const [activeTab, setActiveTab] = useState()
	const location = useLocation()

	const menuLink = [
		{
			id:0,
			title:'главная',
			pathName: '/'
		},
		{
			id:1,
			title:'о нас',
			pathName: '/about'
		},
		{
			id:2,
			title:'наши работы',
			pathName: '/works'
		},
		{
			id:3,
			title:'рекомендации',
			pathName: '/recomendation'
		},
		{
			id:4,
			title:'контакты ',
			pathName: '/contacts'
		},
	]

	return (
		<header className='p-4 flex justify-between gap-20'>
			<img src="./logo.png" className='w-12' alt="" />
			<ul className='hidden sm:flex w-full justify-between'>
			{menuLink.map(item => (
					<a 
						className={item.pathName == location.pathname && 'active-link' }
					  key={item.id} 
						href={item.pathName}
						>
							{item.title}
					</a>
				)
			)}
			</ul>
			<button className='flex sm:hidden px-2 border'>=</button>
			
		</header>
	)
}

export default Header