import SendGAEvent from "@/components/SendGAEvent";
import SignOut from "@/components/SignOut";
import Link from "next/link";
import { login } from "../../actions/login";

export default function SignUpPage() {
  return (
    <>
      <SignOut />
      <main className="flex min-h-screen w-screen flex-col items-center justify-center bg-colabBlue">
        <section className="text-center font-theGreat text-5xl font-bold text-white">
          Entrar
        </section>
        <section className="flex w-full items-center justify-center text-sm text-gray-500">
          <form className="group  flex flex-col rounded-md bg-white p-5 shadow-lg sm:w-[95%] md:p-10 xl:w-[50%]">
            <label htmlFor="email" className="mb-5">
              <span>Email</span>
              <input
                type="email"
                name="email"
                id="email"
                className="peer mt-2 w-full appearance-none rounded border border-gray-300 bg-inherit p-3 text-neutral-800 shadow shadow-gray-100 outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                placeholder=" "
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
              <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                Por favor insira um endereço de e-mail válido
              </span>
            </label>
            <label htmlFor="password" className="mb-5">
              <span>Senha</span>
              <input
                type="password"
                name="password"
                id="password"
                className="peer mt-2 w-full appearance-none rounded border border-gray-300 bg-inherit p-3 text-neutral-800 shadow shadow-gray-100 outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                placeholder=" "
                required
                pattern=".{7,}"
              />
              <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                Sua senha deve ter pelo menos 7 caracteres
              </span>
            </label>
            <button
              type="submit"
              className="mt-5 rounded-md bg-blue-500 py-3 text-white group-invalid:pointer-events-none group-invalid:opacity-50"
              formAction={login}
            >
              Entrar
            </button>
            <span className="mt-2 flex flex-row items-center justify-around">
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="/signup"
              >
                <SendGAEvent
                  action="clicked_to_create_account"
                  category="click"
                  label="User clicked to create account"
                  value="O usuário clicou para criar a conta"
                >
                  Criar uma conta
                </SendGAEvent>
              </Link>

              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="/theme"
              >
                <SendGAEvent
                  action="clicked_to_theme"
                  category="click"
                  label="User clicked to go back to the theme screen"
                  value="O usuário clicou para voltar para a tela de tema"
                >
                  Voltar
                </SendGAEvent>
              </Link>
            </span>
          </form>
        </section>
      </main>
    </>
  );
}
