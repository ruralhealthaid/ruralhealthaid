import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import stylesheet from "./app.css?url";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "utils/http/http";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* =================================================================================================== */}

        <meta
          name="description"
          content="Providing comprehensive health aid services that empower families, promote preventive care, and foster community resilience.."
        />
        <link rel="icon" href="/logo.png" />

        <meta
          name="keywords"
          content="rural health aid, alima bawa, alima, bawa, tamale, ghana, cowtribe, rural health, rural, health, aid, women"
        />
        <meta name="author" content="Louis Marie Atoluko Ayariga" />
        <link rel="canonical" href="https://www.ruralhealthaid.org/" />

        <meta property="og:title" content="Rural Health Aid" />
        <meta
          property="og:description"
          content="Providing comprehensive health aid services that empower families, promote preventive care, and foster community resilience.."
        />
        <meta property="og:image" content="/logo.png" />

        <meta property="og:url" content="https://www.ruralhealthaid.org/" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content="Rural Health Aid" />
        <meta
          name="twitter:description"
          content="Providing comprehensive health aid services that empower families, promote preventive care, and foster community resilience.."
        />
        <meta name="twitter:image" content="/logo.png" />
        <meta
          name="google-site-verification"
          content="JyEkghGUuoSRZ0LDCIRIiF0aXbB59imo4XcgB8NSYDM"
        />
        {/* =================================================================================================== */}
        <Meta />
        <Links />
      </head>
      <body>
        <div id="overlays"></div>
        <div id="root"></div>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />;
    </QueryClientProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
