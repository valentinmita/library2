import React, {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {loadBooks} from "../actions/booksAction";

import Book from "../components/Book";

import styled from "styled-components";
import { motion } from "framer-motion";
import Carousel from 'react-elastic-carousel';
import Nav from "../components/nav";






const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 750,itemsToShow: 3 },
    { width: 1000, itemsToShow: 5 },
    {width: 1250, itemsToShow: 6 }
  ];

 const Home = ()=> {

    const dispatch = useDispatch();
    useEffect(() =>{
      dispatch(loadBooks());
    }, [dispatch]);

 //get data 
    const {horror,history,biographies,search} = useSelector (state => state.books);
   
    
    return(
        
        <BooksList>
            
            
<Nav/>
         
{search.length ?(
<div className="searched">
    <h2>Searched Books</h2>
            <Books>
            <Carousel breakPoints={breakPoints}>
                {search.map(book =>(
                    <Book
                            name = {book.volumeInfo.title}
                            authors = {book.volumeInfo.authors}
                            id = {book.id}
                            key ={book.id}
                            image = {book.volumeInfo.imageLinks.smallThumbnail}
                           
                            />
               
                ))}
              
                 </Carousel>
                 
            </Books>
            </div>
            
            ) : (
             ""
            )}
  
            <h2>Horror Books</h2>
            <Books>
            <Carousel breakPoints={breakPoints}>
                {horror.map((book) =>(
                    <Book
                            name = {book.volumeInfo.title}
                            authors = {book.volumeInfo.authors}
                            id = {book.id}
                            key ={book.id}
                            image = {book.volumeInfo.imageLinks.smallThumbnail}
                            />
                ))}
                 </Carousel>
            </Books>


            <h2>History Books</h2>
            <Books>
            <Carousel breakPoints={breakPoints}>
                {history.map((book) =>(
                    <Book
                            name = {book.volumeInfo.title}
                            authors = {book.volumeInfo.authors}
                            id = {book.id}
                            key ={book.id}
                            image = {book.volumeInfo.imageLinks.smallThumbnail}
                            />
                ))}
                 </Carousel>
            </Books>



            <h2>Biographies Books</h2>
            <Books>
            <Carousel breakPoints={breakPoints}>
                {biographies.map((book) =>(
                    <Book
                            name = {book.volumeInfo.title}
                            authors = {book.volumeInfo.authors}
                            id = {book.id}
                            key ={book.id}
                            image = {book.volumeInfo.imageLinks.smallThumbnail}
                            />
                ))}
                 </Carousel>
            </Books>
           
        </BooksList>
    );






};
const BooksList = styled(motion.div)`
padding: 10px 5px;


`;
const Books = styled(motion.div)`

display: grid;
grid-template-columns:repeat(auto-fit, minmax(500px,1fr));
grid-column-gap: 3rem;
grid-row-gap: 5rem;

`;


export default Home;




 



    
