"use client";

import { useEffect, useState } from "react";
import qrcode from "qrcode";

type QRCodeProps = {
  link: string;
};

const QRCode = ({ link }: QRCodeProps) => {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvas) {
      qrcode.toCanvas(canvas, link);
    }
  }, [canvas, link]);

  return (
    <a href={link} target="_blank">
      <canvas ref={setCanvas} />
    </a>
  );
};

export default QRCode;
