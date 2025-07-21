
import React, { useContext } from 'react'
import { ArrContext } from './ArrContextProvider'
import { Link } from 'react-router-dom'


const Add = () => {

  const { fav,setfav} = useContext(ArrContext)

  const handleRemove =(removeid)=>{
     
      var temfavlist = fav.filter(function(item)
    {
      if(item.id === removeid){
        return false
      }else{
        return true
      }
    })
    setfav(temfavlist)
     }



  return (
    <div className='w-[500px] my-10 container mx-auto'>
      <div className=' flex justify-between items-center bg-red-400 font-semibold text-lg border rounded-md
             text-white px-2 py-3 underline underline-offset-4 decoration-black'>
        <h1> <Link to='/' className='underline' >List of Students</Link></h1>
        <h1> <Link to='/add' className='underline' >Favourite Students</Link></h1>

      </div>
      <ul >
        {
          fav.map(function(item) {
            return <li className='flex justify-between my-2 items-center
            font-semibold'> {item.name}
              <button className='bg-red-600 text-white border rounded-md px-4 py-2'
             onClick={()=>handleRemove(item.id)} >Remove</button></li>

          })
        }

      </ul>
    </div>
  )
}

export default Add