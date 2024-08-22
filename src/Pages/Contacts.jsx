import { useEffect, useState } from "react";
import ContactCard from "../Components/ContactCard/ContactCard";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../Redux/Contacts.Slice/Contacts.Slice";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import ModalDelete from "../Components/ModalDelete/ModalDelete";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Helmet} from "react-helmet";

export default function Contacts() {
  const [Modal,setModal] = useState(false)
  const [selectedUser,setSelectedUser]= useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [searchVal,setSearchVal] = useState("")
    const [searchParams,setSearchParams] = useSearchParams()
    
    

    const {cards,loading,error} = useSelector((state)=>state.contacts)

    useEffect (()=>{
      dispatch(getContacts(searchParams.get("fullName_like") || "" ))
    },[searchParams.get("fullName_like"),dispatch])
    
    const notify = () => toast("._.");
    
  return (
    <div className="w-full min-h-screen pb-10 bg-indigo-800 flex flex-col items-start">

    <Helmet>
      <meta charSet="utf-8" />
      <title>وب اپلیکشن مدیریت مخاطبین</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
  
    <header className="flex justify-between items-center w-full bg-indigo-900 py-4 shadow-lg">
      <div
        className="mx-2 flex items-center text-3xl cursor-pointer text-white hover:text-[#FFC107] transition-colors"
        onClick={() => {
          setSearchParams((prev) => {
            prev.delete("fullName_like");
            setSearchVal("");
            return prev;
          });
        }}
      >
        <i className="fa-solid fa-id-badge pl-2 text-[#FFC107]"></i>
        <p className="font-semibold">وب اپلیکشن مدیریت</p>
        <span className="text-[#FFC107] font-semibold">مخاطبین</span>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="جستوجی مخاطب ..."
          className="py-2 pr-4 border-2 border-[#FFC107] rounded-lg w-76 bg-indigo-700 text-white placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-[#FFC107] transition-all"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <button
          className="bg-[#FFC107] py-2 px-4 rounded-lg text-white font-semibold hover:bg-[#FFA000] transition-colors"
          onClick={() => setSearchParams((prev) => {
            prev.set("fullName_like", searchVal);
            return prev;
          })}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </header>
  
    {Modal ? (
      <ModalDelete modalDel={(text) => setModal(text)} currentUser={selectedUser} />
    ) : (
      <main className="px-10 pt-4 w-full">
        <button
          className="bg-[#c738f3] py-3 px-8 rounded-md font-bold hover:bg-[#900ce7] transition-colors mb-4"
          onClick={() => navigate("add")}
        >
          ساخت مخاطب جدید <i className="fa-solid fa-circle-plus pr-2"></i>
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.length > 0 ? (
            cards.map((card) => (
              <ContactCard
                modalDel={(text) => setModal(text)}
                currentUser={(text) => setSelectedUser(text)}
                detail={card}
                key={card.id}
              />
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 h-40 bg-indigo-700 flex flex-col gap-4 justify-center items-center text-white rounded-lg shadow-md">
              <p className="text-2xl font-semibold">
                <span className="font-bold">"{searchVal}"</span> پیدا نشد
              </p>
              <p
                className="text-xs text-green-300 cursor-pointer hover:underline"
                onClick={() => {
                  setSearchVal("");
                  navigate("/contacts");
                }}
              >
                « بازگشت به صفحه مخاطبین »
              </p>
            </div>
          )}
        </div>
      </main>
    )}
  </div>
  );
}
