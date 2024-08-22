import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import httpService from "../../Servies/Servies"
import { contactURL } from "../../Constant/Constant"

const initialState={
cards:[],
currentUser:null,
oneCard:null,
loading:false,
error:false
}

export const getContacts = createAsyncThunk("user/get_user",async(searchVal)=>{
    try{
        const response = await httpService.get(`${contactURL}?fullName_like=${searchVal?searchVal:""}`)
        // console.log(response.data)
        return response.data
    }catch(e){
        console.log(e.message)
    }
})
export const getOneContacts = createAsyncThunk("user/get_one_user",async(id)=>{
    
        const response = await httpService.get(`${contactURL}/${id}`)
        // console.log(response.data)
        return response.data
   
})
export const DeleteContacts = createAsyncThunk("user/delete_user",async(id)=>{
    try{
        const response = await httpService.delete(`${contactURL}/${id}`)
        // console.log(response.data)
        return id
    }catch(e){
        console.log(e.message)
    }
})
export const editContacts = createAsyncThunk("user/edit_user",async({id,editedUser})=>{
    try{
        const response = await httpService.patch(`${contactURL}/${id}`,editedUser)
        // console.log(response.data)
        return {id,editedUser}
    }catch(e){
        console.log(e.message)
    }
})
export const createContact=createAsyncThunk("user/create_user", async(newUser)=>{
    
    try{
        const response =await httpService.post(contactURL,newUser)
        return newUser
    }catch(e){
        console.log(e.message)
    }
})

export const contactsSlice=createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers:builder =>{
        builder
            .addCase(getContacts.pending,(state,action)=>{
                state.loading=true
            })
            .addCase(getContacts.fulfilled,(state,action)=>{
                state.loading=false
                state.cards=action.payload
            })
            .addCase(getContacts.rejected,(state,action)=>{
                state.error=true
            })
            .addCase(createContact.fulfilled,(state,action)=>{
                state.loading=false
                state.cards.push(action.payload)
            })
            .addCase(getOneContacts.fulfilled,(state,action)=>{
                state.loading=false
                // console.log(action.payload)
                state.oneCard=action.payload
                
            })
            .addCase(DeleteContacts.fulfilled,(state,action)=>{
                state.loading=false
                state.cards = state.cards.filter(user=>user.id !== action.payload)
            })
            .addCase(editContacts.fulfilled,(state,action)=>{
                state.loading=false
                state.currentUser=action.payload
            })
    }
})

export default contactsSlice.reducer