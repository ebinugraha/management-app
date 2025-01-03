"use client";

import { useOrganization } from "@clerk/nextjs";
import { CreditCard } from "lucide-react";
import Image from "next/image";
import { Skeleton } from '@/components/ui/skeleton';

export const Info = () => {
  const { organization, isLoaded } = useOrganization();

  if (!isLoaded) {
    return <Info.Skeleton />;
  }

  return (
    <div className="flex items-center gap-x-4 bg-slate-900 rounded-md p-4 text-white">
      <div className="w-[60px] h-[60px] relative">
        <Image
          fill
          src={organization?.imageUrl as string}
          alt="Organization"
          className="rounded-md object-cover"
        />
      </div>
      <div className="space-y-1">
        <p className="font-semibold text-xl">{organization?.name}</p>
        <div className="flex items-center text-xs text-muted-foreground">
          <CreditCard className="h-3 w-3 mr-1" />
          free
        </div>
      </div>
    </div>
  );
};

Info.Skeleton = function SkeletonInfo() {
  return (
    <div className="flex items-center gap-x-4">
      <div className="w-[60px] h-[60px] relative">
        <Skeleton className="w-full h-full rounded-md" />
      </div>
      <div className="space-y-1">
        <Skeleton className="w-[120px] h-[20px] rounded" />
        <Skeleton className="w-[80px] h-[16px] rounded" />
      </div>
    </div>
  );
};
