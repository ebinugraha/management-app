import {
  ArrowRight,
  CalendarDays,
  Pencil,
  Ruler,
  Timer,
} from "lucide-react";
import Link from "next/link";

const MarketingPage = () => {
  return (
    <div className="flex flex-col md:px-40 px-10">
      <div className="flex flex-col font-bold">
        <h1 className="text-3xl md:text-6xl text-neutral-800 mb-6">
          Mosi helps team move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-2 w-fit">
          Collaborate
        </div>
      </div>
      <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl">
        Ini adalah sebuah aplikasi yang membantu Anda untuk mengelola
        tugas-tugas Anda dengan lebih efisien. Dengan fitur-fitur yang kami
        sediakan, Anda dapat dengan mudah membuat, mengelola, dan menyelesaikan
        tugas-tugas Anda.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
          <div className="flex mb-4">
            <Timer className="h-10 w-10 text-purple-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Hemat Waktu</h3>
          <p className="text-gray-400 mb-4">
            Menghemat waktu dengan mengerjakan projek anda
          </p>
          <Link href="/sign-in" className="text-amber-400">
            Read more <ArrowRight className="inline-block ml-1" />
          </Link>
        </div>
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
          <div className="flex mb-4">
            <Ruler className="h-10 w-10 text-yellow-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Kolaborasi Team</h3>
          <p className="text-gray-400 mb-4">
            Kolaborasi dengan team anda, dengan mengundang via email
          </p>
          <Link href="/sign-in" className="text-amber-400">
            Read more <ArrowRight className="inline-block ml-1" />
          </Link>
        </div>
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
          <div className="flex mb-4">
            <CalendarDays className="h-10 w-10 text-fuchsia-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Fleksible</h3>
          <p className="text-gray-400 mb-4">
            Bisa Create, Read, Update, Delete
          </p>
          <Link href="/sign-in" className="text-amber-400">
            Read more <ArrowRight className="inline-block ml-1" />
          </Link>
        </div>
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
          <div className="flex mb-4">
            <Pencil className="h-10 w-10 text-green-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">User friendly</h3>
          <p className="text-gray-400 mb-4">
            Dengan tampilan yang menarik dan mudah digunakan
          </p>
          <Link href="/sign-in" className="text-amber-400">
            Read more <ArrowRight className="inline-block ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MarketingPage;
