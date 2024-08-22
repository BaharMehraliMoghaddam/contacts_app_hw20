import { useNavigate } from "react-router-dom"





export default function ContactCard({detail , modalDel,currentUser}) {
    const {
        id,
        fullName,
        phoneNumber,
        email,
        job,
        kinship,
        image
    }=detail
    
    const navigate = useNavigate()
    

  

  return (
    <div className="col-span-1">
  <div className="bg-teal-500 w-full h-auto rounded-lg flex items-start gap-4 p-4 shadow-md">
    <img src={image} alt="profile" className="w-52 h-40 rounded-md object-cover" />
    <div className="flex flex-col justify-between w-full">
      <div className="bg-teal-300 rounded-md shadow-inner">
        <p className="py-3 px-4 text-center border-b border-teal-400">
          نام و نام خانوادگی: <span className="font-bold">{fullName}</span>
        </p>
        <p className="py-3 px-4 text-center border-b border-teal-400">
          شماره موبایل: <span className="font-bold">{phoneNumber}</span>
        </p>
        <p className="py-3 px-4 text-center">
          آدرس ایمیل: <span className="font-bold">{email}</span>
        </p>
      </div>
      <div className="flex justify-center gap-3 mt-2">
        <button
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md flex items-center gap-1 transition-all duration-300"
          onClick={() => navigate(`${id}`)}
        >
          <i className="fa-solid fa-eye"></i> مشاهده
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md flex items-center gap-1 transition-all duration-300"
          onClick={() => navigate(`edit/${id}`)}
        >
          <i className="fa-solid fa-pen"></i> ویرایش
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md flex items-center gap-1 transition-all duration-300"
          onClick={() => {
            modalDel(true);
            currentUser({ id, fullName });
          }}
        >
          <i className="fa-solid fa-trash"></i> حذف
        </button>
      </div>
    </div>
  </div>
</div>
  )
}
