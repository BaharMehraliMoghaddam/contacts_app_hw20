import { z } from "zod";


const userValidation=z.object({
    fullName: z.string().min(3,{message: "Must be 3 or more characters long"}),
    image: z.string().min(3,{message: "please select gender"}),
    phoneNumber: z.string().min(7,{message: "Must be 7 or more characters long"}),
    email: z.string().email({ message: "Invalid email address" }),
    job: z.string().min(3,{message: "Must be 3 or more characters long"}),
    kinship: z.string().min(3,{message: "kinship is required"})
})

export default userValidation