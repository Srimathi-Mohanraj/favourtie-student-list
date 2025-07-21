import { ArrContext } from './ArrContextProvider'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const List = () => {
    const { list, fav, setfav } = useContext(ArrContext)
    

    const handleadd = (addid) => {
        var newlist = list.find(newlist => newlist.id === addid)
        newlist.favourite = true
        console.log(newlist)
        setfav([...fav, newlist])
}

    return (
        <div className='w-[500px] my-10 container mx-auto'>
            <div className=' flex justify-between items-center bg-red-400 font-semibold text-lg border rounded-md
             text-white px-2 py-3 underline underline-offset-4 decoration-black'>
                <h1> <Link to='/' >List of Students</Link></h1>
                <h1> <Link to='/add'  >Favourite Students</Link></h1>

            </div>
            <ul >
                {
                    list.map(function (item, index) {
                        return <li className='flex justify-between  items-center font-semibold'>{index + 1}. {item.name}
                            <button onClick={() => handleadd(item.id)} disabled={false}
                                className='bg-black text-white border rounded-md px-4 py-1 my-2' >Add to Favouritd</button></li>
                    })
                }
            </ul>

        </div>
    )
}

export default List