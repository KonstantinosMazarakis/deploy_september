import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {useHistory } from "react-router-dom";
import { useParams } from "react-router";



const DetailsPet = () =>{
    let [name,setName] = useState("")
    let [type,setType] = useState("")
    let [description,setDescription] = useState("")
    let [skill1,setSkill1] = useState("nothing")
    let [skill2,setSkill2] = useState("nothing")
    let [skill3,setSkill3] = useState("nothing")

    const history = useHistory()
    const {_id} = useParams();


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/Pets/${_id}`)
            .then(res=>{
                setName(res.data.results.name)
                setType(res.data.results.type)
                setDescription(res.data.results.description)
                setSkill1(res.data.results.skill1)
                setSkill2(res.data.results.skill2)
                setSkill3(res.data.results.skill3)
            })
            .catch(err=>{
                console.log("error 404... no API found." + err)
            })

    }, [])

    const deletePets = () =>{
        axios.delete(`http://localhost:8000/api/Pets/${_id}`)
                .then(res=>{
                    console.log(res)
                    history.push('/')
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
    <h4 className='mb-4'>Details about: {name}</h4>
    <button to="/" onClick={deletePets} className='btn btn-danger adopt'>Adopt {name}</button>
    <li>
        <ul><span className='fw-bold'>Pet Type: </span><span>{type}</span></ul>
        <ul><span className='fw-bold'>Description:</span> <span>{description}</span></ul>
        <ul className='flexed'>
            <div><p className='fw-bold'>skills: </p></div>
            <div>
                <p>{skill1}</p>
                <p>{skill2}</p>
                <p>{skill3}</p>
            </div>
        </ul>

    </li>
    <button className='btn btn-success'>Like {name}</button> <span>0 like(s)</span>
    </>
}
export default DetailsPet