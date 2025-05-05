import './globals.css';

export const metadata = {
  title: 'CryptoHub',
  description: 'Next.js + Tailwind Setup',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}