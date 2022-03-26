import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {useHistory } from "react-router-dom";


const AddPet = () =>{
    let [name,setName] = useState("")
    let [type,setType] = useState("")
    let [description,setDescription] = useState("")
    let [skill1,setSkill1] = useState("nothing")
    let [skill2,setSkill2] = useState("nothing")
    let [skill3,setSkill3] = useState("nothing")

    let[validations,setValidations] = useState({})
    const history = useHistory()


    const addPetToDB = (e) =>{
        e.preventDefault()

        let formInfo = {name,type,description,skill1,skill2,skill3};

        axios.post("http://localhost:8000/api/Pets",formInfo)
        .then(res=>{
            console.log(res);
            if(res.data.error){
                setValidations(res.data.error.errors)
            }else{
                history.push('/')
            }
        })
        .catch(err=>{
            console.log("error 404... no API found." + err)
        })
    }




return<>
    <div className='flex'>
    <Link to="/" className='pushright'>back to home</Link>
    </div>
    <h1>Pets Shelter</h1>
    <h4>Know a pet needing a home?</h4>
    <div className='w-25 m-auto'>
    <form onSubmit={addPetToDB}>
    <p className='text-danger'>{validations.name?.message}</p>
        <label className="form-label">Pet Name: </label>
        <input className="form-control"  type="text" onChange={(e)=>{setName(e.target.value)}} />
        <p className='text-danger'>{validations.type?.message}</p>
        <label  className="form-label">Pet Type: </label>
        <input className="form-control" type="text"  onChange={(e)=>{setType(e.target.value)}}/>
        <p className='text-danger'>{validations.description?.message}</p>
        <label className="form-label">Pet Description: </label>
        <input className="form-control" type="text" onChange={(e)=>{setDescription(e.target.value)}}/>
        <p className='m-3'>Skills (optional)</p>
        <label className="form-label">Skill 1: </label>
        <input  className="form-control" type="text" onChange={(e)=>{setSkill1(e.target.value)}}/>
        <label className="form-label">Skill 2: </label>
        <input className="form-control" type="text"  onChange={(e)=>{setSkill2(e.target.value)}}/>
        <label className="form-label">Skill 3: </label>
        <input  className="form-control" type="text"  onChange={(e)=>{setSkill3(e.target.value)}}/>
        <input type="submit" value="add Pet" className='btn btn-primary m-3'/>
    </form>
    </div>


</>

}
export default AddPet