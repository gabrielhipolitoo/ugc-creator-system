import { loginSchema, LoginSchemaType } from "@/shcemas/validationZod";
import { signIn } from "next-auth/react";

export async function SignIn(prevState: any, formData: LoginSchemaType) {
  try {
    // validação antes de enviar
    const parsed = loginSchema.safeParse(formData);
    if (!parsed.success) {
      return { success: false, error: "Dados inválidos" };
    }

    const response = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false, // importante
    });

    if (response?.error) {
      return {
        success: false,
        error:
          response.error === "CredentialsSignin"
            ? "Email ou senha inválidos"
            : "Erro ao fazer login",
      };
    }

    if (response?.ok) {
      return { success: true };
    }

    return { success: false, error: "Erro desconhecido" };
  } catch (error) {
    console.error("Erro no SignIn:", error);
    return { success: false, error: "Erro interno do servidor" };
  }
}
