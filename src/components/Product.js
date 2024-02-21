import React from "react"


import { useDispatch, useSelector } from "react-redux"
import { add,remove } from "../redux/Slices/CartSlice";
// import { toast } from "react-toastify";


const Product = ({post}) => {
    
    const {cart} = useSelector((state)=>state);
   const dispatch = useDispatch ();

   const addToCart = () => {
    dispatch(add(post));
    // toast.success("Item Added To Cart "); 
   }
   const removeFromCart = () => {
    dispatch(remove(post.id));
    // toast.success("Item Remove From Cart "); 
   }



    return(
        <div className="flex flex-col items-center justify-center hover:scale-110 transition
         duration-300 ease-in border
         gap-3 p-4 mt-10 ml-5 border-orange-950 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
           <div>
            <p className="text-gray-700 font-semibold text-left truncate w-40 mt-1">{post.title}</p>
           </div>

           <div className="w-40 text-gray-400 font-normal text-[10px] text-left ">
            <p>{post.description.split(" ").slice(0,10).join(" ")+ "...."}</p>
           </div>

           <div className="h-[180px]">
            <img src={post.image} className="h-full w-full"/>
           </div>

         <div className="flex gap-14 items-center justify-center mt-5">
         <div>
            <p className="text-green-600 font-semibold">${post.price}</p>
           </div>

          {
            cart.some((p)=>p.id ==post.id) ?
            (<button onClick={removeFromCart} className="text-gray-700 border-2 border-gray-700 rounded-full
            text-[12px] p-1 px-3 
            hover:bg-gray-700 transition-all ease-in duration-300
            hover:text-white">Remove Item</button>):
            (<button onClick={addToCart} className="text-gray-700 border-2 border-gray-700 rounded-full
            text-[12px] p-1  hover:bg-gray-700
            hover:text-white transition-all duration-300 ease-in px-3" >Add to Cart</button>)
          }
         </div>

        </div>
    )
}

export default Product