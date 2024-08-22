import { configureStore } from "@reduxjs/toolkit";
import ContactsReducer from "./Contacts.Slice/Contacts.Slice";


const store = configureStore({
    reducer:{
        contacts : ContactsReducer
    }
})


export default store