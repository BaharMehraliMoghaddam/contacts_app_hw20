import { useNavigate, useParams } from "react-router-dom";  
import CreateForm from "../Components/CreateForm";  
import { useDispatch, useSelector } from "react-redux";  
import { useEffect } from "react";  
import { getOneContacts } from "../Redux/Contacts.Slice/Contacts.Slice";  
import { Helmet } from "react-helmet";  

export default function EditContact() {  
    const navigate = useNavigate();  
    const { id } = useParams();  
    const dispatch = useDispatch();  
    const state = useSelector(state => state.contacts);  
    
    useEffect(() => {  
        dispatch(getOneContacts(id));  
    }, [dispatch, id]);  
    
    const title = state?.oneCard?.fullName ? `ویرایش مخاطب ${state.oneCard.fullName}` : 'ویرایش مخاطب';  

    return (  
        <div className="w-full h-screen bg-teal-600">
  <Helmet>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <link rel="canonical" href="http://mysite.com/example" />
  </Helmet>

  <header className="flex justify-around w-full bg-teal-700 py-6 drop-shadow-xl">
    <div className="flex items-center text-2xl cursor-pointer" onClick={() => navigate("/contacts")}>
      <i className="fa-solid fa-id-badge pl-2" style={{ color: "#B197FC" }}></i>
      <p className="text-white">وب اپلیکشن مدیریت</p>
      <span className="text-[#B197FC]">مخاطبین</span>
    </div>
  </header>
  <div className="flex flex-col justify-center items-center p-6">
    <p className="text-[#f2b147] text-3xl font-bold border-b w-full text-center py-6">ویرایش مخاطب</p>
    <div className="flex w-2/3 rounded-lg mt-6 bg-teal-800">
      <div className="w-1/2 mt-8">
        <CreateForm editUser={state.oneCard} />
      </div>
      <img src={`../../${state?.oneCard?.image}`} alt="ProfileImage" className="p-6" />
    </div>
  </div>
</div>
    );  
}