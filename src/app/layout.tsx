"use client";
import Advertising from "@/components/advertising";
import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/header";
import LeftSide from "@/components/leftSide";
import "./globals.scss";
import PhotoCollection from "./(pages)/(home)/components/photoCollection";
import DownloadApp from "./(pages)/(home)/components/downloadApp";
import { usePathname } from "next/navigation";

function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <html lang="en">
        <body className="bg-[#F7F7F7]">
          <Container>
            <Advertising
              img="https://ads.uza.uz/www/images/a832188f39ef76299985a21c1b09df26.gif"
              radius={0}
              height={110}
            />
            <Header />
            <div className="flex">
              <LeftSide />
              <main className="w-full bg-[#F7F7F7]">{children}</main>
            </div>
            {pathname == "/" ? (
              <>
                <PhotoCollection />
                <DownloadApp />
              </>
            ) : (
              <></>
            )}
            <Footer />
          </Container>
        </body>
      </html>
    </>
  );
}

export default RootLayout;
