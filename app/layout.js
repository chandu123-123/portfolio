import { Inter ,Poppins} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chandan Kumar",
  description: "chandan kumar netha's portfolio . My skills, projects and about me .",
};
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={(inter.className ,poppins.variable)}>{children}</body>
    </html>
  );
}
