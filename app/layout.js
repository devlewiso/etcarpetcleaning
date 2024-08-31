// app/layout.js
import { Inter } from 'next/font/google';
import '../app/globals.css'; // Asegúrate de que este archivo contenga los estilos globales
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Carpet Cleaning Company SLO',
  description: 'Professional carpet cleaning services in San Luis Obispo',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
