import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Pets = () =>{
    let [report, setReport] = useState([])


    useEffect(() => {
        axios.get("http://localhost:8000/api/Pets")
            .then(response => {

                //--------SORTING-----------------------
                response.data.results.sort(function(a, b) {
                    const nameA = a.type.toUpperCase(); // ignore upper and lowercase
                    const nameB = b.type.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                      return -1;
                    }
                    if (nameA > nameB) {
                      return 1;
                    }
                    // names must be equal
                    return 0;
                  })
                  //---------SORTING-------------------
                setReport(response.data.results)
            }).catch(err => {
                console.log("error 404... no API found." + err)
            })
    },[])




    
return<>
    <div className='flex'>
    <Link to="/pets/add" className='pushright'>add a pet to the shelter</Link>
    </div>
    <h1>Pets Shelter</h1>
    <h4>These pets are looking for a good home</h4>
    <table className="table table-striped w-auto mx-auto" >
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
            report.map((petObj)=>{
                return<tr key={petObj._id}>
                    <td>{petObj.name}</td>
                    <td>{petObj.type}</td>
                    <td><Link to={`/pet/details/${petObj._id}`}>details</Link> | <Link to={`/pet/edit/${petObj._id}`}>edit</Link></td>
                </tr>
            })
        }
        </tbody>
    </table>
</>





}

export default Pets