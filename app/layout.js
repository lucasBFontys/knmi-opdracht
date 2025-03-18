import Footer from "./components/footer/footer.jsx";
import "./globals.css";

export const metadata = {
  title: "KNMI Weer App",
  description: "De KNMI Weer App is de beste weer app van Nederland.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
