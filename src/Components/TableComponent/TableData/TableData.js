import React from 'react'

function TableData({data}) {

  return (
    <div className='dataFormContainer' >
      <h2> Employee's Details </h2> 
      <table className='table' >
        <thead>
          <tr >
            <th> Id </th>
            <th> Name </th> 
            <th> Username </th> 
            <th> City </th> 
            <th> Suite </th> 
            <th> Zip code </th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) =>{
           return(
                <tr key={item.id} >
                  <td data-label = "S.No" >  {item.id} </td>
                  <td data-label = "Name" >  {item.name} </td>
                  <td data-label = "Username" > {item.username} </td>
                  <td data-label = "City" >  {item["address"].city} </td>
                  <td data-label = "Suite" > {item["address"].suite} </td>
                  <td data-label = "Zipcode" > {item["address"].zipcode} </td>
                </tr>
              )
          })}
        </tbody>

      </table>
    </div>
  )
}

export default TableData