"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";
import { BoardNavbar } from "./_components/board-navbar";
import { Board } from '@prisma/client';

interface GenerateMetaDataProps {
  params: { boardId: string };
}

export async function generateMetadata({ params }: GenerateMetaDataProps) {
  const { orgId } = await auth();
  const { boardId } = params;

  if (!orgId) {
    return {
      title: "Board",
    };
  }

  const board = await db.board.findUnique({
    where: {
      id: boardId,
      orgId,
    },
  });

  return {
    title: board?.title || "Board",
  };
}

interface BoardIdLayoutProps {
  children: React.ReactNode;
  params: { boardId: string };
}

const BoardIdLayout = async ({
  children,
  params,
}: BoardIdLayoutProps) => {
  const { orgId } = await auth();
  const { boardId } = params;

  if (!orgId) {
    redirect("/select-org");
  }

  const board = await db.board.findUnique({
    where: {
      id: boardId,
      orgId,
    },
  });

  if (!board) {
    notFound();
  }

  return (
    <div
      className="relative h-full bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${board.imageFullUrl})`,
      }}
    >
      <BoardNavbar data={board} />
      <div className="absolute inset-0 bg-black/10" />
      <main className="relative pt-28 h-full">{children}</main>
    </div>
  );
};

export default BoardIdLayout;
