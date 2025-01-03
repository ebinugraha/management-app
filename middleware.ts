import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)", "/"]);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect();
  }

  const { userId, orgId } = await auth();

  if (userId && isPublicRoute(request)) {
    let path = "/select-org";

    if (orgId) {
      path = `/organization/${orgId}`;
    }

    return NextResponse.redirect(new URL(path, request.url));
  }

  if(!userId && !isPublicRoute(request)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
