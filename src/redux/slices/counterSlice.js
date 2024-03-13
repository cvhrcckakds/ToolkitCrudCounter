/* Hem reducerları hem aksiyonları farklı dosyalarda oluşturmak yerine slice dosyasında tek noktada tanımlarız

? Slice Oluşturma
1) import createSlice
2) gerekli parametreleri tanıml
- - name: slice ismi "string"
- - initialState: başlangıç stati
- - reducers: aksiyonların görevini tamınladığımız fonksiyonlar
*/

import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name: "counter", //slice ismi
    initialState: {count: 0, is_dark_theme: false },
    //state'in nasıl değişeceğine karar veren fonksiyonlar
    //Reducer/akisyon fonksiyonları iki parametre alır
    //tüm aksiyon fonksiyonları iki parametre alır
    // 1- statein son hali
    // 2- aksiyon objesi
    reducers: {
        // aksiyon fonks reduxtaki reducerlarda tanımladığımız case'lerden temel farkı stati doğrudan günceller
        increase: (state)=>{
            state.count++;
        },

        decrease:(state)=>{
            //0'n altına inmesini istemiyorsan state.count !==0 && 
            state.count--;
        },

        //payload kullanacaksak ikinci parametre aksiyonu alırız
        set_count:(state, action)=>{
            state.count=action.payload;
        },

        changeTheme: (state)=>{
            state.is_dark_theme=!state.is_dark_theme
        }

    },

});

console.log(counterSlice)
//createSlice methodu bizim için klasik redux'ta switch case'lerle tanımladığımız reducer fonksiyonunu kendisi oluşturur.
export default counterSlice.reducer;

//create slice metodu bizim oluşturduğumuz aksiyon oluşturan fonksiyon oluşturan fonks kendisi otamatik oluşturur biz sadece export edip istediğimiz bileşende kullanırız.
export const {increase, decrease, set_count, changeTheme}= counterSlice.actions;