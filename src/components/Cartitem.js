import { MdDeleteForever } from "react-icons/md";

import { useDispatch } from "react-redux"
import { remove } from "../redux/Slices/CartSlice";
// import { toast } from "react-toastify";


const Cartitem = ({item,itemIndex}) => {

    const dispatch = useDispatch();

    const removeFromCart = () =>{
        dispatch(remove(item.id));
        // toast.success("Item Remove")
    }
    return(
        <div className="max-w-6xl mx-auto mt-6  ">
           <div className="flex flex-row gap-x-4 max-w-[650px] ">
              <div className="h-[180px]">
                <img src={item.image} className="h-full w-full"/>
              </div>

              <div>
                <h1 className="text-gray-700 font-bold text-left truncate text-[20px]  mt-2">{item.title}</h1>
                <h1 className=" text-gray-500 font-normal text-[15px] mt-3 text-left ">{item.description.split(" ").slice(0,10).join(" ")+ "...."}</h1>
                <div className="flex justify-between mt-6">
                    <p className="text-green-600 font-semibold">${item.price}</p>
                    <div onClick={removeFromCart} className="text-[24px] bg-red-300 h-[30px] w-[30px] rounded-xl">
                    <MdDeleteForever className="flex mx-auto mt-1" />

                    </div>
                </div>
              </div>
           </div>

           <div className="w-full h-[2px] bg-black mt-4"></div>
        </div>
       
    )
}

export default Cartitem