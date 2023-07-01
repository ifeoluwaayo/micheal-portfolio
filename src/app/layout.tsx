import "./globals.css";
import { AppWrapper } from "@/wrappers";

export const metadata = {
  title: "Micheal's Portfolio",
  description: "Portfolio of Micheal's work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
