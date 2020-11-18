import React from "react";


import { useDispatch } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import {loadDetail} from "../actions/detailAction";
import {Link} from "react-router-dom";

const Book = ({name,authors,id,image,key}) =>{
    const dispatch = useDispatch();
    const loadDetailHan=() =>{
        dispatch(loadDetail(id));
        console.log(id);
    }
 
    return (
        
        <StyledGame onClick={loadDetailHan} >
            <Link to={`/${id}`}>
            <h1 id={id}>{name} 
            </h1>
            <h2>{authors}</h2>
            <img src={image} alt={name}/>
            </Link>
        </StyledGame >
     
   
    );
}


const StyledGame =styled(motion.div)`

border : 3px solid #6dd4ff;
overflow:hidden;
margin : 10px;
padding:10px;
border-radius:20px;
box-shadow : 0px 5px 30px rgba(0,0,0,0.3);
width: 500px;
height: 250px;



h1{ 
    margin:5px;
   
    font-size : 15px;
    text-overflow: ellipsis;
    overflow:hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
    -webkit-box-orient: vertical;  
}
a{
    text-decoration : none;
    color:#00008B;
}
h2{
    margin:5px;
    color:#00008B;
    font-size : 10px;
}
text-align:center;
justify-content:center;
align-items:center;
`;


export default Book;

