export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header>[header]</header>
      <main>{children}</main>
      <footer>[footer]</footer>
    </html>
  );
}
