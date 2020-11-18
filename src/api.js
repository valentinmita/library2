






const base_url =`https://www.googleapis.com/books/v1/volumes?q=`;
const base_urlId = `https://www.googleapis.com/books/v1/volumes/`;

const key= process.env.REACT_APP_API_KEY ;

const horror =`+subject:horror`;
const history =`+subject:history`;
const biographies = `+subject:biographies`;

/*
https://www.googleapis.com/books/v1/volumes?q=+subject:horror&key=AIzaSyDpvG8m0LxAladqshBpzy9RODjEkJCX_Y8
 https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
*/

 

export const HorrorBooks = () => `${base_url}${horror}&key=${process.env.REACT_APP_API_KEY}`;
export const  HistoryBooks = () => `${base_url}${history}&key=${process.env.REACT_APP_API_KEY}`;
export const BiographiesBooks = () => `${base_url}${biographies}&key=${process.env.REACT_APP_API_KEY}`;
export const SearchBooks = (book_name) => `${base_url}${book_name}&key=${process.env.REACT_APP_API_KEY}`;

export const DetailBooks = (book_id) => `${base_urlId}${book_id}?&key=${process.env.REACT_APP_API_KEY}`;
console.log(DetailBooks());


/*
export const  HistoryBooks = () => `${base_url}${history}${key}`;
export const BiographiesBooks = () => `${base_url}${biographies}${key}`;
console.log(HorrorBooks());
// console.log(randomBooks());*/
