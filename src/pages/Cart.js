import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import Cartitem from "../components/Cartitem";
import { useEffect, useState } from "react";



const Cart = () => {
    
    const {cart}= useSelector((state)=> state);
    const [totalAmount,setTotalAmount]=useState(0);

    useEffect(()=>{
        setTotalAmount(cart.reduce((acc,curr)=> acc+ curr.price,0));
    },[cart])

    return(
        <div className="flex flex-row max-w-6xl mx-auto gap-x-[150px] ">
            {
                cart.length> 0 ?
                (<div className="">
                    <div>
                        {
                            cart.map((item,index)=>{
                                return <Cartitem key={item.id} item={item} itemIndex={index}/>
                            })
                        }
                    </div>


                


                </div>):
                (<div className="max-w-6xl mx-auto">
                 
                <div className="mt-[200px]">
                <h1 className="text-xl text-green-600 font-semibold">Cart Empty</h1>
                 <Link to={"/"}>
                    <button className="bg-green-700 px-[60px] font-bold py-2 rounded-md text-white mt-4">
                        Shop Now
                    </button>
                 </Link>
                    </div>

                </div>)
            }
             <div className="flex flex-col mt-[50px]">
                    <div className="text-xl font-semibold text-green-600">Your Cart</div>
                    <div className="text-[40px] font-semibold text-green-600">Summary</div>

                    <p>
                        <span className="text-[20px] font-bold">
                            Total Items : {cart.length}
                        </span>
                    </p>

                    <div className="mt-[150px]">
                    <p className="font-semibold text-[20px]">Total Amount : $ {totalAmount}</p>
                    <button className="bg-green-700 px-[60px] font-bold py-2 rounded-md text-white mt-4">
                        Checkout Now
                    </button>
                 </div>
                 </div>

               
           
        </div>
    )
}

export default Cart