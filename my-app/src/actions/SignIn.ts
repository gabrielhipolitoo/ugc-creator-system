import { loginSchema } from "@/shcemas/validationZod";

export async function SignIn(prevState: any, formData: FormData) {
  const validatedForm = loginSchema.safeParse({
    email: formData.get("email"), 
    password: formData.get("password"),
  });
  
  if (!validatedForm.success) {
    return { errors: validatedForm.error.flatten().fieldErrors };
  } 

  return { success: true }; 
}
