"use client";

import { Container } from "@/baseComponents/BoxComponent";
import InputComponent from "@/baseComponents/InputComponent";
import { useActionState } from "react";
import { SignIn } from "@/actions/SignIn";
import { Label } from "@/UiComponents/Label";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { loginSchema, LoginSchemaType } from "@/shcemas/validationZod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextComponent } from "@/baseComponents/TextComponent";

export const FormLogin = () => {
  const [state, action, pending] = useActionState(SignIn, undefined);

  const { control } = useForm<LoginSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
  });

  return (
    <Container display="flex" direction="flex-col" spaceContent="justify-start">
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <Label
            value="Seu Email"
            error={fieldState.error?.message}
            placeholder="Digite seu email"
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <Label
            value="sua senha"
            error={fieldState.error?.message}
            placeholder="Digite sua senha"
          />
        )}
      />
      <button
        type="submit"
        disabled={pending}
        className="cursor-pointer bg-green-100 border-[1px]  p-3 text-white rounded-sm"
      >
        {pending ? "Entrando..." : "Continuar"}
      </button>
      <button
        type="submit"
        disabled={pending}
        className="cursor-pointer border-[1px] border-neutral-100  p-3 text-neutral-100 rounded-sm"
      >
        {pending ? "Entrando..." : "Continuar com Google"}
      </button>
      <TextComponent
        alignText="text-center"
        value="Ainda não poussi uma conta?"
      />
      <Link href={""} className="text-center">
        Criar uma conta agora
      </Link>
    </Container>
  );
};
