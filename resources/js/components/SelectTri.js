import React from 'react'
import {useState} from 'react';

function SelectTri(props) {
    
    const options = [
        {value: '', text: 'Defaut'},
        {value: 'ASC', text: 'Prix Asc 🍏'},
        {value: 'DESC', text: 'Prix Desc 🍌'},
        {value: 'kiwi', text: 'Nouveaux Arrivages 🥝'},
      ];
    
      const [selected, setSelected] = useState(options[0].value);
    
      const handleChange = event => {
    //   console.log(event.target.value);
       props.handleTriTextChange(event.target.value)
        setSelected(event.target.value);
       
      };
      
    
      return (
        <div className='seach_container'>
          <select value={selected} onChange={handleChange}>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
      );
    };

export default SelectTri