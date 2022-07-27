import React, { Component } from 'react';

class Addauto extends Component{
    state = {
        marque:'',
        modele:'',
        prix:'',
        km:'',
    }
    handleInput=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    saveAuto =async (e)=>{
   e.preventDefault();
   //const res = await axios.post('http://localhost:8000/api/add-auto',this.state);
    }

    render(){
        return (<>
            <div>
           <form onSubmit={this.saveAuto}>
               <div className='form-group mb-3'>
                   <label>marque</label>
                   <input type="text" name='marque' onChange={this.handleInput} value={this.state.marque}/>
               </div>
               <div className='form-group mb-3'>
                   <label>modele</label>
                   <input type="text" name='modele' onChange={this.handleInput} value={this.state.modele}/>
               </div>
               <div className='form-group mb-3'>
                   <label>prix</label>
                   <input type="text" name='prix' onChange={this.handleInput} value={this.state.prix}/>
               </div>
               <div className='form-group mb-3'>
                   <label>km</label>
                   <input type="text" name='km' value={this.state.km}/>
               </div>
               <div className='form-group mb-3'>
                   <button type="submit"/> save <button/>
               </div>
           </form>
            </div>
            </>  )
    }
}
export default Addauto 