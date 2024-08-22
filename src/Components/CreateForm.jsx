import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createContact, editContacts } from "../Redux/Contacts.Slice/Contacts.Slice";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import userValidation from "../schema/UserSchema";
import { ToastContainer, toast } from 'react-toastify';
import {Helmet} from "react-helmet";

export default function CreateForm({editUser}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(userValidation),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      job: "",
      kinship: "",
      image: "",
    },
  });
  function onSubmit(values) {
    console.log(values);
    if(!editUser){
      dispatch(createContact(values));
      toast.success(`مخاطب ${values.fullName} اضافه شد`)
      navigate("/contacts")
      reset()
    }else{
      dispatch(editContacts({id:editUser.id,editedUser:values}))
      toast.warn(`مخاطب ${values.fullName} ویرایش شد`)
      navigate("/contacts")
      reset()
    }
  }

  if(editUser){
    setValue("fullName",editUser.fullName)
    setValue("image",editUser.image)
    setValue("phoneNumber",editUser.phoneNumber)
    setValue("email",editUser.email)
    setValue("job",editUser.job)
    setValue("kinship",editUser.kinship)
  }

  return (
    <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>ساخت مخاطب جدید</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center gap-4 p-6 bg-indigo-800 rounded-lg shadow-lg w-full max-w-md"
    >
      <input
        {...register("fullName")}
        className="py-2 pr-4 border-2 border-indigo-600 rounded-lg w-full bg-indigo-700 text-white placeholder:text-indigo-400"
        type="text"
        placeholder="نام و نام خانوادگی"
      />
      {errors?.fullName?.message && (
        <span className="text-red-500 bg-indigo-900 px-2 py-1 rounded-md">
          {errors.fullName.message}
        </span>
      )}
  
      <select
        className="py-2 pr-4 border-2 border-indigo-600 rounded-lg w-full bg-indigo-700 text-white placeholder:text-indigo-400"
        name="image"
        {...register("image")}
      >
        <option value="">جنسیت</option>
        <option value="./profileMen.jfif">مرد</option>
        <option value="./womenProfile.jpg">زن</option>
      </select>
      {errors?.image?.message && (
        <span className="text-red-500 bg-indigo-900 px-2 py-1 rounded-md">
          {errors.image.message}
        </span>
      )}
  
      <input
        {...register("phoneNumber")}
        className="py-2 pr-4 border-2 border-indigo-600 rounded-lg w-full bg-indigo-700 text-white placeholder:text-indigo-400"
        type="number"
        placeholder="شماره موبایل"
      />
      {errors?.phoneNumber?.message && (
        <span className="text-red-500 bg-indigo-900 px-2 py-1 rounded-md">
          {errors.phoneNumber.message}
        </span>
      )}
  
      <input
        {...register("email")}
        className="py-2 pr-4 border-2 border-indigo-600 rounded-lg w-full bg-indigo-700 text-white placeholder:text-indigo-400"
        type="email"
        placeholder="آدرس ایمیل"
      />
      {errors?.email?.message && (
        <span className="text-red-500 bg-indigo-900 px-2 py-1 rounded-md">
          {errors.email.message}
        </span>
      )}
  
      <input
        {...register("job")}
        className="py-2 pr-4 border-2 border-indigo-600 rounded-lg w-full bg-indigo-700 text-white placeholder:text-indigo-400"
        type="text"
        placeholder="شغل"
      />
      {errors?.job?.message && (
        <span className="text-red-500 bg-indigo-900 px-2 py-1 rounded-md">
          {errors.job.message}
        </span>
      )}
  
      <select
        className="py-2 pr-4 border-2 border-indigo-600 rounded-lg w-full bg-indigo-700 text-white placeholder:text-indigo-400"
        id="kinship"
        name="kinship"
        {...register("kinship")}
      >
        <option value="">انتخاب گروه</option>
        <option value="فامیل">فامیل</option>
        <option value="آشنا">آشنا</option>
        <option value="همکار">همکار</option>
        <option value="دوست">دوست</option>
      </select>
      {errors?.kinship?.message && (
        <span className="text-red-500 bg-indigo-900 px-2 py-1 rounded-md">
          {errors.kinship.message}
        </span>
      )}
  
      <div className="flex items-center justify-center gap-4 mt-4">
        <input
          className="font-bold py-2 px-4 bg-indigo-600 text-white rounded-md transition duration-200 hover:bg-indigo-500"
          type="submit"
          value={editUser ? "ویرایش مخاطب" : "ساخت مخاطب"}
        />
        <button
          onClick={() => navigate("/contacts")}
          className="font-bold py-2 px-4 bg-blue-500 text-white rounded-md transition duration-200 hover:bg-blue-400"
        >
          انصراف
        </button>
      </div>
    </form>
  </div>
  );
}
