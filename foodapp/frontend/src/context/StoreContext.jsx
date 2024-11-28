import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StroeContext=createContext(null);

const StroeContextProvider =(props)=>{
    const[cartitem ,setcartitem]=useState({});

    const addtoCart=(itemId)=>{
        if (!cartitem[itemId]) {
            setcartitem((prev)=>({...prev,[itemId]:1}))
        }else{
            setcartitem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeCart=(itemId)=>{
        setcartitem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    useEffect(() => {
      console.log(cartitem);
    }, [cartitem])
    

    const contextValue={
        food_list ,
        cartitem,
        setcartitem,
        addtoCart,
        removeCart,
    }

    return(<StroeContext.Provider value={contextValue}>
        {props.children}
    </StroeContext.Provider>);
}
export default StroeContextProvider;