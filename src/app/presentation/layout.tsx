import { ReactNode } from "react";
import * as style from "./layout.css";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <main className={style.layout}>{children}</main>
);

export default Layout;
