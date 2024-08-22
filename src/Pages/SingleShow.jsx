import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getOneContacts } from "../Redux/Contacts.Slice/Contacts.Slice"


export default function SingleShow() {
    const navigate = useNavigate()
    const {id} = useParams()
    const dispatch = useDispatch()

     const state =useSelector(state=>state.contacts)

    useEffect(()=>{
      
        dispatch(getOneContacts(id))
    },[dispatch,id])

    if(state.oneCard){
      console.log(state?.oneCard)
      return (
        <>
        <div className="w-full h-screen bg-teal-600 flex flex-col">
        <header className="flex justify-between items-center bg-teal-700 py-6 shadow-lg">
          <div className="flex items-center text-2xl cursor-pointer" onClick={() => navigate("/contacts")}>
            <i className="fa-solid fa-id-badge pl-2" style={{ color: "#B197FC" }}></i>
            <p className="text-white">وب اپلیکشن مدیریت</p>
            <span className="text-[#B197FC]">مخاطبین</span>
          </div>
        </header>
      
        <div className="flex flex-col items-center justify-center flex-grow">
          <p className="text-[#68d6f7] text-3xl font-bold border-b w-full text-center py-6">اطلاعات مخاطب</p>
      
          <div className="flex w-full mt-6 justify-center">
            <div className="bg-teal-500 w-full max-w-4xl mx-4 rounded-md flex items-center p-6">
              <img src={`../${state?.oneCard?.image}`} alt="profile" className="w-32 h-32 rounded-md object-cover mr-6" />
      
              <div className="flex flex-col gap-4 w-full">
                <div className="bg-teal-300 rounded-md shadow p-4">
                  <p className="text-center border-b border-teal-400 py-2">نام و نام خانوادگی: <span className="font-bold">{state?.oneCard?.fullName}</span></p>
                  <p className="text-center border-b border-teal-400 py-2">شماره موبایل: <span className="font-bold">{state?.oneCard?.phoneNumber}</span></p>
                  <p className="text-center border-b border-teal-400 py-2">ادرس ایمیل: <span className="font-bold">{state?.oneCard?.email}</span></p>
                  <p className="text-center border-b border-teal-400 py-2">شغل: <span className="font-bold">{state?.oneCard?.job}</span></p>
                  <p className="text-center py-2">گروه: <span className="font-bold">{state?.oneCard?.kinship}</span></p>
                </div>
      
                <button className="bg-purple-400 rounded-md py-2 font-bold hover:bg-purple-500 transition-all duration-300" onClick={() => navigate("/contacts")}>
                  برگشت به صفحه اصلی
                </button>
              </div>
            </div>
          </div>
        </div>
      </div><div className="w-full h-screen bg-teal-600 flex flex-col">
  <header className="flex justify-between items-center bg-teal-700 py-6 shadow-lg">
    <div className="flex items-center text-2xl cursor-pointer" onClick={() => navigate("/contacts")}>
      <i className="fa-solid fa-id-badge pl-2" style={{ color: "#B197FC" }}></i>
      <p className="text-white">وب اپلیکشن مدیریت</p>
      <span className="text-[#B197FC]">مخاطبین</span>
    </div>
  </header>

  <div className="flex flex-col items-center justify-center flex-grow">
    <p className="text-[#68d6f7] text-3xl font-bold border-b w-full text-center py-6">اطلاعات مخاطب</p>

    <div className="flex w-full mt-6 justify-center">
      <div className="bg-teal-500 w-full max-w-4xl mx-4 rounded-md flex items-center p-6">
        <img src={`../${state?.oneCard?.image}`} alt="profile" className="w-32 h-32 rounded-md object-cover mr-6" />

        <div className="flex flex-col gap-4 w-full">
          <div className="bg-teal-300 rounded-md shadow p-4">
            <p className="text-center border-b border-teal-400 py-2">نام و نام خانوادگی: <span className="font-bold">{state?.oneCard?.fullName}</span></p>
            <p className="text-center border-b border-teal-400 py-2">شماره موبایل: <span className="font-bold">{state?.oneCard?.phoneNumber}</span></p>
            <p className="text-center border-b border-teal-400 py-2">ادرس ایمیل: <span className="font-bold">{state?.oneCard?.email}</span></p>
            <p className="text-center border-b border-teal-400 py-2">شغل: <span className="font-bold">{state?.oneCard?.job}</span></p>
            <p className="text-center py-2">گروه: <span className="font-bold">{state?.oneCard?.kinship}</span></p>
          </div>

          <button className="bg-purple-400 rounded-md py-2 font-bold hover:bg-purple-500 transition-all duration-300" onClick={() => navigate("/contacts")}>
            برگشت به صفحه اصلی
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</>
      )

    }else{
      return <div>._.</div>
    }
}
