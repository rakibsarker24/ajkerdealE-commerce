import React, { useEffect, useState } from 'react'
import Topber from '../topber/Topber'
import Navber from '../navber/Navber'
import Footer from '../footer/Footer'
import Borka from '../borka/Borka'
import axios from 'axios';
import Pagination from '../borka/Pagination'

const Pborka = () => {

  const [currentPage,setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(12)

  
  let [borka,setBorka] = useState([])
  useEffect(()=>{
      async function borka(){
          let data = await axios.get("https://fakestoreapi.com/products")
          setBorka(data.data)
          console.log(data.data)
      }
      borka()
  },[])


  const lastPostIndex = currentPage*postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = borka.slice(firstPostIndex,lastPostIndex) 

  return (
    <>
        <Topber/>
        <Navber/>
        <Borka borka={currentPosts}/>
        <Pagination totalPosts={borka.length}
          postsPerPage={postsPerPage}
          setCurretPage={setCurrentPage}
        />
        <Footer/>
    </>
  )
}

export default Pborka