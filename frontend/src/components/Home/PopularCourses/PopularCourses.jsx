import React from 'react'
import './PopularCourses.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

const PopularCourses = () => {
    const [courses, setCourses] = useState(null)
    const [value, setValue] = useState('')
    const [sorted,setSorted]=useState({
        
    })


    const getData = () => {
        fetch('http://localhost:3070/courses')
            .then((response) => response.json())
            .then((data) => setCourses(data));
    }
    const handleDelete = async (id) => {
        axios.delete(`http://localhost:3070/courses/${id}`)
        getData()
    }

    const handleChanges = (e) => {
        setValue(e.target.value)
    }


    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className='pop-courses__wrapper'>
                <div className='pop-span my-4'></div>
                <h1 style={{ fontSize: "36px" }}>Popular Courses</h1>
                <p>Filter...</p>
                <input type='text' onChange={handleChanges}></input>
                <div className="container pop-container">
                    <div className="row">
                        {
                            courses?.filter(data => {
                                return value.trim().toLowerCase() === "" ? data : data.title.toLowerCase().includes(value.toLowerCase())
                            })
                                .map(({ _id, image, title, content, authorPhoto, authorName, price }) => (
                                    <div className="col-4">
                                        <div class="card my-4" style={{ width: "20rem" }}>
                                            <img src={image} className="card-img-top" alt="..." style={{ width: "100%", height: "250px" }} />
                                            <div className="card-body g-0" style={{ height: "200px" }}>
                                                <h5 className="card-title">{title}</h5>
                                                <p className="card-text"><Link style={{ textDecoration: "none", color: "black" }}>{content}</Link></p>
                                                <div className='card-footer' style={{ width: "100%", height: "60px" }}>
                                                    <div className='card-footer__img'>
                                                        <img style={{ width: "100%", height: "100%" }} src={authorPhoto} alt="" />
                                                    </div>
                                                    <div className='card-author__name'>
                                                        Uzeyir Nagizade <span style={{ color: "gray" }}>{authorName}</span>
                                                    </div>
                                                    <div className="card-price">
                                                        <span style={{ fontSize: "18px", display: 'flex', justifyContent: "center", alignItems: "center", color: "white" }}>$ {price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={() => handleDelete(_id)} className='delete-btn'>DELETE</button>

                                    </div>

                                ))
                        }


                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularCourses