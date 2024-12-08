"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";
import { BoardNavbar } from "./_components/board-navbar";

// Function untuk generate metadata
export async function generateMetadata({
  params,
}: {
  params: { boardId: string };
}) {
  const { orgId } = await auth();
  const { boardId } = params;

  if (!orgId) {
    return {
      title: "Board", // Return default title if orgId is missing
    };
  }

  const board = await db.board.findUnique({
    where: {
      id: boardId,
      orgId, // Ensure the orgId matches the board's orgId
    },
  });

  return {
    title: board?.title || "Board",
  };
}

const BoardIdLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { boardId: string }; // Ensure the `params` here is not a Promise
}) => {
  const { orgId } = await auth();
  const { boardId } = params; // Destructure params properly

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
    notFound(); // Handle case where board is not found
  }

  return (
    <div>
      <BoardNavbar data={board} />
      {children}
    </div>
  );
};

export default BoardIdLayout;
