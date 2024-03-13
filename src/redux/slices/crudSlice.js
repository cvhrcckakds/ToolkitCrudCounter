import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

//başlangıç stati
const initialState={
    task: [
        {
            id: "3224",
            title: "Navbar animasyonu",
            author: "Bera",
            assigned_to: "Cevahir",
            end_date: "12.03.2024"
        },

        {
            id: "3rfsd4",
            title: "Footer Responsive",
            author: "Sad",
            assigned_to: "Mustafa",
            end_date: "16.03.2024"
        },
    ]
}

//splice oluştur
const crudSlice = createSlice({
name: "crud",
initialState,
reducers:{
    addTask:(state, action)=>{
        //1- todoya id ekle
        action.payload.id=v4()

        //2-veriyi task arasına ekle
        state.task.push(action.payload)
    },
    deleteTask:(state, action)=>{
       //1. yöntem>filter
       const filtered=state.task.filter(
        (task)=>task.id !==action.payload
       );
       state.task=filtered

       //2.yöntem>splice
       //a)silinecek elemanın sırasını bulma
      //! const i = state.task.findIndex((t)=> t.id ===action .payload)
       //b)elemanı diziden kaldırma
       // ! state.task.splice(i,1)
    },
    editTask:(state, action)=>{
        //güncellenecek elemanın dizideki sırasını bu
        const i=state.task.findIndex((t)=>t.i===action.payload)
        //elemanı güncelle
        state.task.splice(i,1, action.payload)
    },
},
});

//3 aksiyonları export et
export const {addTask,editTask,deleteTask}=crudSlice.actions;



//4 reducerları export et
export default crudSlice.reducer;
