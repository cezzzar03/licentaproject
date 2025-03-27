import './globals.css';

export const metadata = {
  title: 'Licenta',
  description: 'Next.js + Tailwind Setup',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}