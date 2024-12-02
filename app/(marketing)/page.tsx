import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col font-bold">
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          No 1 task management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Mosi helps team move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-2 w-fit">
          work forward.
        </div>
      </div>
      <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo pariatur
        molestias amet alias est inventore earum debitis sed. Sequi nobis aut
        esse expedita sit vero repellat. Natus ut itaque vitae.
      </div>
      <Button asChild className="mt-8" size="lg">
        <Link href="/sign-up">
            Get Mosi for free
        </Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
