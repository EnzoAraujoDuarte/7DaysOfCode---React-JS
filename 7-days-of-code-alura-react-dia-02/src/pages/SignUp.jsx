import classNames from "classnames";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { App } from "../layouts/App";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = ({ email, password }) => {
    console.log("Criando uma nova conta...", email, password);
  };

  return (
    <App>
      <div className="flex items-center justify-center w-screen h-screen flex-col">
        <h1 className="font-sans text-3xl text-sky-500 pb-1">Aluritter</h1>
        <p className="pb-5 text-gray-500">
          Crie uma nova conta e comece para navegar.
        </p>
        <form
          className="flex flex-col w-full lg:w-1/4 md:w-1/3 sm:w-1/2 px-10 sm:px-0"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div>
            <input
              {...register("email", {
                required: true,
                maxLength: 255,
                minLength: 5,
              })}
              className={classNames(
                "w-full p-2 border border-slate-400 rounded text-gray-500 placeholder-slate-400",
                {
                  "border-red-500": errors.email?.type === "required",
                }
              )}
              placeholder="email@exemplo.com"
              type="email"
            />
            {errors.email?.type === "required" ? (
              <span className="text-xs text-red-500 pl-1">
                Email é obrigatório
              </span>
            ) : null}
            {errors.email?.type === "minLength" ? (
              <span className="text-xs text-red-500 pl-1">
                O email precisa ter pelo menos cinco caracteres
              </span>
            ) : null}
          </div>
          <div className="mt-2.5">
            <input
              {...register("password", {
                required: true,
                maxLength: 255,
                minLength: 8,
              })}
              className={classNames(
                "w-full p-2 border border-slate-400 rounded text-gray-500 placeholder-slate-400",
                {
                  "border-red-500": !!errors.password,
                }
              )}
              placeholder="Senha"
              type="password"
            />
            {errors.password?.type === "required" ? (
              <span className="text-xs text-red-500 pl-1">
                Senha é obrigatória
              </span>
            ) : null}
            {errors.password?.type === "minLength" ? (
              <span className="text-xs text-red-500 pl-1">
                A senha precisa ter pelo menos oito caracteres
              </span>
            ) : null}
          </div>
          <button
            className="mt-5 p-2 rounded bg-emerald-500 hover:bg-emerald-600 text-slate-100"
            type="submit"
          >
            Criar uma nova conta
          </button>
        </form>
        <span className="text-sm mt-2 text-gray-500">
          Já possui uma conta?{" "}
          <Link className="text-sky-500 hover:underline" to="/sign-in">
            Acesse agora!
          </Link>
        </span>
      </div>
    </App>
  );
};
