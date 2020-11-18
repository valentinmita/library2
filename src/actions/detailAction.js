import axios from "axios";
import { DetailBooks } from "../api";




export const loadDetail = (id) =>async (dispatch) => {
    dispatch ({
type:"LOADING_DETAIL",
    });
    const detailData = await axios.get(DetailBooks(id))

    dispatch({
        type: "GET_DETAIL",
        payload: {
            book: detailData.data,
        },
            
        });
    };
    
