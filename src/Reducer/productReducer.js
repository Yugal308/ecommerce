const ProductReducer = (state,action) => {
    switch (action.type){
        case "Set_Loading":
            return {
                ...state,
                isLoading: true,
            }
        case "Set_Api_Data":
            const featureData = action.payload.filter((curr)=>{
                return curr.featured === true;
            })
            return{
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: featureData,
            }
        case "Api_Error":
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        default: return state;
    }
};

export default ProductReducer;