import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  '/user(.*)'
]);


export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
    matcher: [
      '/((?!.*\\..*|_next).*)', // Matches all paths except those containing a dot or starting with _next
      '/(api|trpc)(.*)',        // Matches all paths starting with /api or /trpc
      '/((?!^/$).*)',
                 // Excludes the root path (/) from being matched
    ],
  };