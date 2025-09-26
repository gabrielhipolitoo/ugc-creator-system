import { loginSchema, LoginSchemaType } from "@/shcemas/validationZod";

export async function SignIn(prevState: any, formData: LoginSchemaType) {
  return { success: true };
}
