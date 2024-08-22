import { useDispatch } from "react-redux"
import { DeleteContacts } from "../../Redux/Contacts.Slice/Contacts.Slice"
import { ToastContainer, toast } from 'react-toastify';

export default function ModalDelete({modalDel,currentUser}) {
    const dispatch = useDispatch()

    function handelDelete(){
        dispatch(DeleteContacts(currentUser.id))
        toast.error(`مخاطب ${currentUser.fullName} حذف شد`)
        modalDel(false)
    }

  return (
    <div className="w-full h-screen bg-white/30 flex justify-center items-center z-20">  
  <div className="w-96 flex flex-col gap-4 bg-slate-700 rounded-lg p-6 shadow-lg">  
    <h1 className="text-3xl font-bold text-yellow-400 text-center">پاک کردن مخاطب</h1>  
    <p className="text-lg text-gray-200 text-center">آیا می‌خواهید اکانت {currentUser.fullName} پاک کنید؟</p>  
    <div className="flex justify-center gap-4">  
      <button   
        className="bg-purple-500 hover:bg-purple-600 transition-all duration-300 py-2 px-4 rounded-md font-bold text-white"   
        onClick={handelDelete}  
      >  
        بله میخواهم  
      </button>  
      <button   
        className="bg-blue-400 hover:bg-blue-500 transition-all duration-300 py-2 px-4 rounded-md font-bold text-white"   
        onClick={() => modalDel(false)}  
      >  
        انصراف  
      </button>  
    </div>  
  </div>  
</div>
  )
}
