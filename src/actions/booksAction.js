
import axios from "axios";
import {HorrorBooks,
    HistoryBooks,
    BiographiesBooks,
    SearchBooks,
} from "../api";

/*action creator
const booksReducer=(state = initState, action) => {

    switch(action.type){
        case "Fetch_books":
            return{...state}
            default:
                return {...state}
    }
}
*/

export const loadBooks = () =>async (dispatch) =>{
 const horrorData =await axios.get(HorrorBooks());
 const historyData =await axios.get(HistoryBooks());
 const biographiesData =await axios.get(BiographiesBooks());
    

        console.log(horrorData.data.items);
        dispatch({
            type: "FETCH_BOOKS",
            payload: {
                horror: horrorData.data.items,
                history: historyData.data.items,
                biographies: biographiesData.data.items,
    
            },
         
            
        });    
};

export const fetchSearch = (book_name) =>async (dispatch) =>{
const searchData = await axios.get(SearchBooks(book_name));
dispatch({
    type: "FETCH_SEARCH",
    payload: {
        search: searchData.data.items,
    },
        
    });
};
