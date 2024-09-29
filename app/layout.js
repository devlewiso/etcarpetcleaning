// app/layout.js
import { Inter } from 'next/font/google';
import Script from 'next/script'; // Importar el componente Script
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
      <head></head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6DM47GQXM4"
          strategy="afterInteractive" // Carga el script después de que la página es interactiva
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6DM47GQXM4');
            `,
          }}
        />
      </body>
    </html>
  );
}
