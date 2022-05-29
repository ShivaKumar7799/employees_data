import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TableData from './TableData/TableData'

function TableComponent() {
  const [data,setData] = useState(null)
  useEffect(() => {
      const url = "https://jsonplaceholder.typicode.com/users"
      axios.get(url).then((resp) => setData(resp.data)).catch(err => console.log(err))
  },[])
  return (
    <>
      <div> {data ? <TableData data= {data} /> : <span> Loading </span>} </div>
    </>
  )
}

export default TableComponent