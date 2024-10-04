
const joblist = [
	{
		id:0,
		img:'./1.png',
		title:'Polo',
		description:'asdasd'
	},
	{
		id:1,
		img:'./2.png',
		title:'Polo',
		description:'asdasd'
	},
	{
		id:2,
		img:'./3.png',
		title:'Polo',
		description:'asdasd'
	},
	{
		id:3,
		img:'./5.png',
		title:'Polo',
		description:'asdasd'
	},
	{
		id:4,
		img:'./6.png',
		title:'Polo',
		description:'asdasd'
	},
	{
		id:5,
		img:'./7.png',
		title:'Polo',
		description:'asdasd'
	},
	
]

const Jobs = () => {
	return (
		<div className='flex flex-wrap gap-4 w-full'>
			{joblist.map(item =>
				<a href={`/job/${item.id}`} className='my-2 w-full md:w-[32%] xl:w-[24%] h:full md:h-[45vh] bg-slate-300' key={item.id}>
					<img className=' object-cover w-full h-full hover:brightness-50 transition relative' src={item.img} alt="" />
					<h5>item.title</h5>
					<p className='text-slate-400'>item.description</p>
				</a>
			)}
		</div>
	)
}

export default Jobs