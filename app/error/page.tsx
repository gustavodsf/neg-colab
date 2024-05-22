import { ArrowLeftFromLine, ServerCrash } from "lucide-react";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-colabPurple text-white gap-3">
      <ServerCrash size={48} />
      <span className="font-theGreat text-5xl text-center">
        Eita! Deu problema ao criar seu usuário
      </span>
      <Link
        href="/signin"
        className="flex flex-row p-2 font-theGreat text-5xl font-medium text-colabGray hover:text-colabDarkGreen hover:underline"
      >
        <ArrowLeftFromLine size={48} className="mr-4" />
        Voltar
      </Link>
    </div>
  );
}
