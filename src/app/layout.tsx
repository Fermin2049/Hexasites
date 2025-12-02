import "./(site)/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-screen h-full m-0 bg-black text-white">{children}</body>
    </html>
  );
}
