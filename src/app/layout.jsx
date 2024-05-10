import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

const roboto = Roboto_Slab({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s - Restaurantes y mas",
    default: "Restaurantes y mas",
  },
  description:
    "Generado para restaurantes que quieren ofrecer una mejor experiencia de usuario a sus clientes",
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-gray-50" lang="es">
      <body className={roboto.className}>
        <Providers>
          <div>
            <NavBar />
          </div>
          <div className="mt-10">{children}</div>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
