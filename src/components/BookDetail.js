
import { useSelector} from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import GlobalStyle from "../appcss";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";



const BookDetail = ()=> {



    const getStars = () => {
        const stars = [];
        const text = "non ci sono abbastanza recensioni";
        const rating = Math.floor(book.volumeInfo.averageRating);
        for (let i = 1; i <= 5; i++) {
          if (i <= rating) {
            stars.push(<img alt="star" key={i} src={starFull}></img>);
          }
          else if (!rating) {
             return text;
            }
           else {
            stars.push(<img alt="star" key={i} src={starEmpty}></img>);
          }
        }
        return stars;
      };
    
const {book,isLoading} = useSelector ((state) => state.book);

    return (
        
  
        <>
          <GlobalStyle/>
        {!isLoading &&(
        <Book>

    <div className="searched">
    
  
    <h2>{book.volumeInfo.title ?book.volumeInfo.title: null }</h2>
  
   <Prima>
    <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.small : null } alt =""/>     
    
    
    <div>
    <h3>Author:{book.volumeInfo.authors ? book.volumeInfo.authors : null }</h3>

   
    <h4>Description:</h4>
    <h4  dangerouslySetInnerHTML={{ __html: book.volumeInfo.description}} />
    </div>
    </Prima>
    <Secondo>
     
    <h3> Categories:{book.volumeInfo.categories ? book.volumeInfo.categories[0] : null}</h3>

    
     
    <h3>Published Date:{book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate : null}</h3>
    <h3>Publisher:{book.volumeInfo.publisher ? book.volumeInfo.publisher : null}</h3>
    <h3>Lingua:{book.volumeInfo.language ? book.volumeInfo.language : null }</h3>
    
    <div className = "ratings">
    <h3>Ratings:</h3><h3>{getStars()}</h3> 
    </div>
   
  
    
    </Secondo>
 
    </div>
    </Book>
    )}

    </>

    );
};
export default BookDetail; 



const Book= styled(motion.div)`
width : 80%;
height:100%;
margin : auto;
box-shadow : 0px 5px 30px rgba(0,0,0,0.8);
background: linear-gradient(#1C86EE, #CAE1FF	);
h2{
  text-align : center;
margin : 20px ;
padding : 20px;
}
.ratings{
  display: flex;
}

 
`;

const Prima= styled(motion.div)` 
margin : 20px;
padding : 20px;
display:flex;
h4{
margin : 10px;
}
h3{
  margin :40px;
}
img{
  box-shadow : 0px 5px 30px rgba(0,0,0,0.8);
  max-height : 300px;
}

`;
const Secondo= styled(motion.div)`

margin : 20px;
padding : 20px;
`;
