import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Navbar></Navbar>

        <div className="container mt-4">{children}</div>
      </body>
    </html>
  );
}
