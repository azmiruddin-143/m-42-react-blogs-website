
import { useState } from "react"
import Header from "./Components/Header/Header"
import Blogs from "./Components/Mainsection/BlogAllPost/Blogs"

function App() {
   
  const [card, setcard] = useState([])

  const [redingtime, settime] = useState(0)

  const timegenarate =  (time) => {
     let finaltime = redingtime + time
     settime(finaltime)
  }

   const carddilet = (id) =>{
      const diletcard = card?.filter(p => p.id != id)
      setcard(diletcard)
   }


  const cardadd = (blogtrransfer) =>{
    const reqwordcard = card?.find(cardfind => cardfind.id == blogtrransfer.id)
    if(reqwordcard){
       alert("Alredy Added")
    }
    else{
      const finalcard = [...card,blogtrransfer]
     setcard(finalcard)
    }
  }

  return (
    <>
      <Header></Header>
      <Blogs cardadd = {cardadd} card = {card} timegenarate ={timegenarate} redingtime ={redingtime} carddilet={carddilet} ></Blogs>
      
    </>
    
  )
}

export default App
