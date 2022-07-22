import React, { useState } from 'react'

function ContentPa() {
    const [donne ,setDonne] = useState([]);
    axios.get(`http://localhost:8000/api/list/all`).then(response =>{
       
        setDonne(response.data);
      })
  return (
    <div>ContentPa
{console.log(donne.autos)}
        {/* {donne.autos.map((info,i)=>{
            return(<div>
                <li>{info}</li>
            </div>
                
            )
        })} */}
    </div>
  )
}

export default ContentPa