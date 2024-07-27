import { createSlice} from "@reduxjs/toolkit";



const initialState={
    value:"INR"
}

const currencySlice=createSlice({
    name:'currency',
    initialState,
    reducers:{
        setCurrency:(state,action)=>{
            state.value=action.payload;
        }
    }
})


export const {setCurrency}=currencySlice.actions;

export default currencySlice.reducer