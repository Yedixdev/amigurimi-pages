import "./globals.css"; 
import { CartProvider } from "../app/components/header/CartContext";

export const metadata = {
  title: "Landing pages - Chepicrochet.",
  description: "Descripción de mi proyecto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
