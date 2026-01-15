import { Raleway} from "next/font/google";
import "./globals.css";


const raleway = Raleway({
  subsets: ["latin"]
})

export const metadata = {
  title: "Bethesda Pool Ministries Zm",
  description: "Website for Bethesda Pool Ministries Zambia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.className}`}>
        {children}
      </body>
    </html>
  );
}
