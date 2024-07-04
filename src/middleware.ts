import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
    matcher: [
      '/((?!.*\\..*|_next).*)', // Matches all paths except those containing a dot or starting with _next
      '/(api|trpc)(.*)',        // Matches all paths starting with /api or /trpc
      '/((?!^/$).*)'            // Excludes the root path (/) from being matched
    ],
  };