import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import '../mockApi/MockApi'

export const getProfileData = createAsyncThunk(
    'auth/getProfileDataByEmail',
    async(arg,{rejectWithValue}) => {
        try{
            const {data} = await axios.get(`users/${arg}`)
            return data
        }
        catch (error){
            rejectWithValue(error.response.data)
        }
    }
)
const initialState = {
    profileData: {},
    access: false,
    loading: false,
    message: "",
    isSuccess: false

}
export const authSlice = createSlice({
    name:"auth",
    initialState,
   reducers:{},
   extraReducers:(builder)=>{
    builder.addCase(getProfileData.pending,(state)=>{
        state.loading = true;
    })
    builder.addCase(getProfileData.fulfilled,(state,{payload})=>{
        state.loading = false;
        state.profileData = payload;
        state.isSuccess = true;
    })
    builder.addCase(getProfileData.rejected,(state,{payload})=>{
        state.loading = false;
        state.message = payload;
        state.isSuccess = false
    })
   } 
}) 
// export const {}=authSlice.actions
export default authSlice.reducer