import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Está chovendo aí?",
  description: "Consulta de temperatura e discrição do tempo.",
  icons: {
    icon: ["/rainy-outline.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
