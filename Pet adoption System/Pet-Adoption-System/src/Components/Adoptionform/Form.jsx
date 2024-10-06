import './Form.css'
import { useState,useEffect } from 'react'


function Formpage(){
    const [adoptreqs,setadoptreqs]=useState([])
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [contact,setcontact]=useState('');
    const [address,setaddress]=useState('');

    return(
        <>
        <div className="Outer">
        <div className="body2">
            <div className='Formquote'>
            <div className='Formquote1'>
                <h1>Happy hearts leads to happy homes</h1>
                <p className='p1'>Rescued is my favorite Breed</p>
            </div></div>
            <form action="/Homepage" className='FormBox'>
                <h2 className='h2'>Adopt Me!!!</h2>
                <input className="input" type="text" value={name} onChange={((e)=>setname(e.target.value))} placeholder="Name*"/>
                <input className="input" type="text" value={email} onChange={((e)=>setemail(e.target.value))} placeholder="Email*"/>
                <input className="input" type="text" value={contact} onChange={((e)=>setcontact(e.target.value))} placeholder="Contact*"/>
                <input className="input" type="text" value={address} onChange={((e)=>setaddress(e.target.value))}placeholder="Address" />
                <button className="button" >Adopt</button>
            </form>
        </div>
        </div>
        </>
    )
}
export default Formpage