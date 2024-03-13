import { useDispatch } from "react-redux"
import { changeTheme } from "../redux/slices/counterSlice";
import { NavLink } from "react-router-dom";


const Header = () => {
    const dispatch=useDispatch();
  return (
    <div className="d-flex justify-content-between mb-3 p-4">
      <h1>Redux Toolkit</h1>
      <nav className="d-flex gap-2 align-items-center">
        <NavLink to={"/"}>CRUD</NavLink>
        <NavLink to={"/sayac"}>COUNTER</NavLink>
      <button 
      onClick={()=>dispatch(changeTheme())}
      className="text-white rounded-3"
      >Change Theme</button>
      </nav>
    </div>
  )
}

export default Header
