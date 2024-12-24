import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";

const jetbrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  weights: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Victor Vazquez",
  description: "Software engineer web portfolio Victor Vazquez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrains_Mono.variable}>
        <Toaster richColors={true} />
        {children}
      </body>
    </html>
  );
}
