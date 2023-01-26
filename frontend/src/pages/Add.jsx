import React from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios'

import './Add.css'
import schema from './../schema/FormValidation';
import { useState } from 'react';

const News = () => {

    const [state, setState] = useState({
        image: "",
        title: "",
        content: "",
        authorPhoto: "",
        authorName: "",
        price: null
    })

    const addData = () => {
        axios.post("http://localhost:3070/courses", state)

        setState({
            image: "",
            title: "",
            content: "",
            authorPhoto: "",
            authorName: "",
            price:""
        })
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmitHandler = (data) => {
        console.log(data);
        addData()
    };


    return (
        <>
            <Helmet>
                <title>Add</title>
            </Helmet>
            <div className="add-wrapper">
                <form onSubmit={handleSubmit(onSubmitHandler)} className='register-form' action="" style={{ margin: "200px auto", position: "absolute" }}>

                    <input name='image' value={state.image} {...register("image")} className='register-input add-input' type="text" placeholder='image url' onChange={handleChange} />
                    <p>{errors.image?.message}</p>

                    <input name='title' value={state.title} {...register("title")} className='register-input add-input' type="text" placeholder='title' onChange={handleChange} />
                    <p>{errors.title?.message}</p>

                    <input name='content' value={state.content} {...register("content")} className='register-input add-input' type="text" placeholder='content' onChange={handleChange} />
                    <p>{errors.content?.message}</p>

                    <input name='authorPhoto' value={state.authorPhoto} {...register("authorPhoto")} className='register-input add-input' type="text" placeholder='authorPhoto' onChange={handleChange} />
                    <p>{errors.authorPhoto?.message}</p>

                    <input name='authorName' value={state.authorName} {...register("authorName")} className='register-input add-input' type="text" placeholder='authorName' onChange={handleChange} />
                    <p>{errors.email?.message}</p>

                    <input name='price' value={state.price} {...register("price")} className='register-input add-input' type="number" placeholder='price' onChange={handleChange} />
                    <p>{errors.price?.message}</p>

                    <button style={{ border: "none", backgroundColor: "RGB(255, 182, 6)", color: "white", padding: "5px 10px" }}>SEARCH COURSE</button>
                </form>
            </div>

        </>
    )
}

export default News