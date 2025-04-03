import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const data = useLoaderData()
    const [data , setdata ] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then((response)=>response.json())
        .then(data => {
            console.log(data) ;
            setdata(data);
        })
    } , [])
  return (
    <div className='text-center m-5 bg-gray-800 text-white text-3xl  '>
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="Git photo" width={300}/>
    </div>
  )
}

export default Github
export const githubInfoLoader = async () => {
   const response =  await fetch ('https://api.github.com/users/hiteshchoudhary')

   return response.json()
}
