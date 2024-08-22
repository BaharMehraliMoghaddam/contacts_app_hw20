import { useNavigate } from "react-router-dom"
import CreateForm from "../Components/CreateForm"

export default function AddContact() {
  const navigate = useNavigate()
  
  return (
    <div className="w-full h-screen bg-teal-600">
    <header className="flex justify-around w-full bg-teal-700 py-6 drop-shadow-xl">
      <div className="flex items-center text-2xl cursor-pointer" onClick={() => navigate("/contacts")}>
        <i className="fa-solid fa-id-badge pl-2" style={{ color: "#7e798d" }}></i>
        <p className="text-white">وب اپلیکشن مدیریت</p>
        <span className="text-[#7e798d]">مخاطبین</span>
      </div>
    </header>
  
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-[#53d23c] text-3xl font-bold border-b-2 border-[#53d23c] w-full text-center py-6">
        ساخت مخاطب جدید
      </h1>
  
      <div className="flex w-full mt-8 gap-8">
        <div className="w-1/2 bg-white rounded-md shadow-md p-6">
          <CreateForm />
        </div>
        <img src=".././addBackground.png" alt="createAdd" className="w-1/2 rounded-md shadow-md" />
      </div>
    </div>
  </div>
  )
}
