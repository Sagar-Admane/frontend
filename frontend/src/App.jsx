import React, { useEffect, useState } from 'react'
import Header from './Components/Header/Header'
import "./App.css"
import Search from './Components/Header/Search/Search'
import Div from './Components/Divs/Div'
import axios from "axios"
import { questContext } from './Context/context'
import Button from './Components/Button/Button'
import Loader from './Components/Loader/Loader'

function App() {

  const [total , setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState('');
  const [type, setType] = useState('MCQ');
  const [quest, setQuest] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    async function fetchData(){
      try {
        setLoading(true);
        const res = await axios.get("https://backend-rrls.onrender.com");
        console.log(res.data);
        setTotal(res.data.result.total);
        setQuest(res.data.result.question);
        console.log(total);
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  },[])

  return (
    <div>
      <questContext.Provider value={{total, setTotal, page, setPage, title, setTitle, type, setType, quest, setQuest, loading, setLoading}} >
      <Header />
      <Search />
      {
        loading ? <Loader /> : 
        quest.map((val, index) => {
          console.log(val)
          return(
            <Div ttl={val.title} typ={val.type} />
          )
        })
      }
      {/* <Div /> */}
      <Button />
      </questContext.Provider>
    </div>
  )
}

export default App
