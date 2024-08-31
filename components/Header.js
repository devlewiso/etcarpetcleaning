import Image from 'next/image';
import Link from 'next/link'; // Import Link from next/link

export default function Header() {
  return (
    <header className="bg-background text-foreground py-4 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo.png" // Asegúrate de que esta ruta sea correcta
              alt="Company Logo"
              width={120}
              height={40}
              className="rounded-lg shadow-lg"
            />
          </Link>
        </div>
        <nav className="flex-grow flex justify-end">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-sm hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-sm hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
