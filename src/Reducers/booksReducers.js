

const initState ={

    horror:[],
    history:[],
    biographies:[],
    search:[],

};
//action creator
const booksReducer=(state = initState, action) => {

    switch(action.type){
        case "FETCH_BOOKS":
            return{
                ...state, 
                horror: action.payload.horror,
                history: action.payload.history, 
                biographies: action.payload.biographies,  };
        case "FETCH_SEARCH":  
        return{
            ...state, 
            search: action.payload.search,
        };
            default:
                return {...state};
    }
};

export default booksReducer;