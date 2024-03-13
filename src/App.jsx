import { useSelector } from "react-redux";
import Header from "./componenets/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CrudPage from "./pages/CrudPage";
import Counter from "./pages/Counter";

const App = () => {
  //tema değişikliğini ekranda göstermek için store abone ol
  const {is_dark_theme} = useSelector((store)=>store.counterSlice)
  return (
    <div 
    style={{height:"100vh", width:"100vw"}}
    className={is_dark_theme ? "text-bg-light" : "text-bg-dark"}>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<CrudPage/>}/>
      <Route path="sayac" element={<Counter/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App;