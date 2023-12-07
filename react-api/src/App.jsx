import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Book from './ccomponents/Book'

function App() {

  const [data,setData] = useState([])
  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
    .then(res => {setData(res.data.books);console.log(res.data.books)})
  },[])

  return (
    <>
      {data.map((item,index) => (<Book title={item.title} img={item.imageLinks.thumbnail} desc={item.description} authors={item.authors} key={index}/>))}
    </>
  )
}

export default App
