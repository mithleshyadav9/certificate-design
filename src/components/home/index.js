import React, { useState } from 'react'
import './home.css'
import Certificate from '../certificate'

function Home() {
    const [btn,setBtn] = useState(false)
    const [error, setError] = useState({
        fname:'',
        lname:'',
        desc:'',
        ltext: ''
    })
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [desc, setDesc] = useState('')
    const [ltext, setLtext] = useState('')

    const submit = () => {
        setError({})
        if(fname === '') {
            return setError({fname:'Please provide your first name.'})
        }

        if(lname === '') {
            return setError({lname:'Please provide your last name.'})
        }

        if(desc === '') {
            return setError({desc:'Please provide the description.'})
        }

        if(desc === '') {
            return setError({ltext:'Please provide the logo title'})
        }
        setFname(fname.trim())
        setLname(lname.trim())
        setDesc(desc.trim())
        setLtext(ltext.trim())

        setBtn(true)
    }



    if(btn) {
        return <Certificate name={`${fname} ${lname}`} desc={desc} ltext={ltext} back={()=>setBtn(false)} />
    } else {
        return (

            <div className="background">
            <div className="form">
                <h3>Please Enter Your Detail To Generate The Certifiacte</h3>
            <div className="form-group">
                <input type="text" id="fname" maxLength="8" value={fname} onChange={((e)=>setFname(e.target.value))} required />
                <label htmlFor="fname" >First Name (8 Characters)</label>
                <p className="error">{error.fname}</p>
            </div>

    
            <div className="form-group">
                <input type="text" id="lname" maxLength="8" value={lname} onChange={((e)=>setLname(e.target.value))} required />
                <label htmlFor="lname" >Last Name (8 Characters)</label>
                <p className="error">{error.lname}</p>
            </div>

            <div className="form-group">
                <textarea id="description" maxLength="232" onChange={(e)=>setDesc(e.target.value)} required>{desc}</textarea>
                <label htmlFor="description">Description</label>
                <p className="error">{error.desc}</p><span>{desc.length}/232</span>
            </div>

            <div className="form-group">
                <input type="text" id="lTitle" maxLength="11" value={ltext} onChange={((e)=>setLtext(e.target.value))} required />
                <label htmlFor="lTitle" >Logo Title</label>
                <p className="error">{error.ltext}</p><span>{ltext.length}/11</span>
            </div>
    
            

            <div><button className="btn" onClick={submit} >Generate</button></div>
            </div>
            </div>
        )
    }
    
}

export default Home