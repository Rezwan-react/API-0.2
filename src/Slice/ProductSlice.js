import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value:localStorage.getItem('data') 
    ? JSON.parse(localStorage.getItem('data')) 
    : null
  },
  reducers: {
    ProductData: (state, action)=>{
        state.value = action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { ProductData } = counterSlice.actions

export default counterSlice.reducer