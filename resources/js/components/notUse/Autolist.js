import React, { useState, useEffect } from 'react';

function Autolist(){
    const [data, setData]= useState([]);
    useEffect(async () =>{
        let result = await fetch('http://localhost:8000/api/list');
        let resd= await result.json();
        console.log(resd)
        setData(resd);
    },[]);
    console.warn(resd);
      return(<>
          <div>
              <h1>list</h1>
          </div>
          </>
      );
}
export default Autolist;