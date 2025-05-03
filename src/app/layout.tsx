import type { Metadata } from "next";
import "@progress/kendo-theme-material/dist/material-main.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "AceIt: An Assignment Tracking Dashboard",
  description: "AceIt is an assignment tracking dashboard for students to manage their assignments, tasks and team collaborations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet" />
      </head>
      <body
        className="antialiased"
      >
        <div className="relative h-screen w-screen bg-grey-300">
          {children} 
        </div>
      </body>
    </html>
  );
}
