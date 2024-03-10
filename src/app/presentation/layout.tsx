"use client";

import { ReactNode } from "react";
import { useSlide } from "@/lib/useSlide";
import * as style from "./layout.css";
import { useParams, usePathname } from "next/navigation";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { slide } = useSlide();
  const pathname = usePathname();

  return (
    <main className={style.layout}>
      {process.env.NODE_ENV === "development" && (
        <div className={style.debug}>
          {pathname.split("/").at(-1)} - {slide}
        </div>
      )}
      {children}
    </main>
  );
};

export default Layout;
