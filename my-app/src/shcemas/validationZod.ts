import { z } from "zod";


export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "Digite um email válido." }),
   
  password: z
    .string()
    .min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;

export type FormState =
  | {
      errors?: {
        email?: string;
        password?: string;
      };
      message?: string;
    }
  | undefined;