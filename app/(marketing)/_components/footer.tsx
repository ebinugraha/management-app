import { Logo } from "@/components/logo";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full h-14 px-4 border-b border-t shadow-sm flex items-center bg-white">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Link href="/sign-in">Febrian Nugraha</Link>

          <Link href="/sign-up">10122202</Link>
          <Link href="/sign-up">IF 6</Link>
        </div>
      </div>
    </div>
  );
};
