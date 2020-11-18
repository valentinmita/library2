

const initState = {
 book: {volumeInfo:[]
},
isLoading:true,

};

const detailReducer  =(state = initState, action) => {

    switch(action.type){
        case "GET_DETAIL":
            return{
                ...state, 
                book: action.payload.book,
                isLoading:false,
                 };
                 case "LOADING_DETAIL":
                    return {
                      ...state,
                      isLoading: true,
                    };
                 default:
                    return {...state}
                }
            };
            
export default detailReducer;