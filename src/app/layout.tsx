import "./globals.css";
import { AppWrapper } from "@/wrappers";

export const metadata = {
  title: "Micheal's Portfolio",
  description:
    "As an accomplished Software Engineer with over 4 years of industry experience, I bring a wealth of expertise in backend engineering, with a focus on leveraging the power of Node.js and TypeScript. Throughout my career, I have consistently delivered exceptional results, ensuring software systems achieve an impressive 99.9% uptime. My versatility extends beyond languages and platforms, encompassing proficiency in embedded systems, leading to a remarkable 30% acceleration in development speed. Renowned for optimizing code efficiency by 40% and reducing resource consumption by 25%, I am dedicated to maximizing performance.",
  themeColor: "#000",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    locale: "en_US",
    title: "Micheal's Portfolio",
    description:
      "As an accomplished Software Engineer with over 4 years of industry experience, I bring a wealth of expertise in backend engineering, with a focus on leveraging the power of Node.js and TypeScript. Throughout my career, I have consistently delivered exceptional results, ensuring software systems achieve an impressive 99.9% uptime. My versatility extends beyond languages and platforms, encompassing proficiency in embedded systems, leading to a remarkable 30% acceleration in development speed. Renowned for optimizing code efficiency by 40% and reducing resource consumption by 25%, I am dedicated to maximizing performance.",
    images: [
      {
        url: "/logo.png",
        width: 1080,
        height: 607,
        alt: "Micheal's Portfolio",
      },
    ],
  },
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
