import { createContext, useContext,useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../Reducer/productReducer"

const AppContext = createContext();

const Api = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
}

const AppProvider = ({children})=>{

    const [state, dispatch] =useReducer(reducer, initialState);

    const getProducts = async (url) =>{
        dispatch({type:'Set_Loading'});
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({type:'Set_Api_Data', payload: products});
        } catch (error) {
            dispatch({type: 'Api_Error'})
        }
    }

    useEffect(()=>{
        getProducts(Api);
    },[] )

    return (<AppContext.Provider value={{...state}}>
        {children}
    </AppContext.Provider> );
};

const useProductContext = ()=>{
    return useContext(AppContext);
}

export {AppProvider,AppContext,useProductContext};