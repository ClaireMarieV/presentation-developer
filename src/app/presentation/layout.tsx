"use client";

import { ReactNode } from "react";
import { useSlideLayout } from "@/lib/useSlide";
import { usePathname, useSearchParams } from "next/navigation";
import * as style from "./layout.css";
import { AnimatePresence } from "framer-motion";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const communication = useSearchParams().get("communication") !== "false";

  const slide = useSlideLayout({
    communication,
  });
  const pathname = usePathname();

  return (
    <main className={style.layout}>
      {process.env.NODE_ENV === "development" && (
        <div className={style.debug}>
          {pathname.split("/").at(-1)} - {slide}
        </div>
      )}
      <AnimatePresence>{children}</AnimatePresence>
    </main>
  );
};

export default Layout;
