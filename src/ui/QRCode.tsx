"use client";

import { useEffect, useState } from "react";
import qrcode from "qrcode";
import * as style from "./QRCode.css";

type QRCodeProps = {
  link: string;
};

const QRCode = ({ link }: QRCodeProps) => {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvas) {
      qrcode.toCanvas(canvas, link, { scale: 7 });
    }
  }, [canvas, link]);

  return (
    <a href={link} target="_blank">
      <canvas ref={setCanvas} className={style.canvas} />
    </a>
  );
};

export default QRCode;
