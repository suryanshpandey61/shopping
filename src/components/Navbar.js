import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {


    const {cart} =useSelector((state) => state);

    return(
        <div className="w-full ">
            <div className="flex items-center h-20 max-w-6xl mx-auto justify-between">
               <NavLink to="/">
                   <div className="ml-5">
                   <img 
               className="h-14 "
               src="../logo.png"/>
                   </div>
               </NavLink>
           <div className="flex flex-row mr-5 gap-x-6 font-medium items-center text-slate-100">
           <NavLink to="/">
               <div>
                    <p className="text-xl">Home</p>
               
                </div>
               </NavLink>
                <NavLink to="/cart">
                    <div className="relative">
                    <FaCartShopping className="text-2xl"/>
                     {
                        cart.length > 0 &&
                        <span
                        className="absolute -top-3 -right-3 bg-green-600 text-xs w-5 h-5 flex
                        justify-center items-center animate-bounce rounded-full text-white"
                        >{cart.length}</span>
                        
                     }
                    </div>
                </NavLink>
           </div>
            </div>
        </div>
    )
}

export default Navbar