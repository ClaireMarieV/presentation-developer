import QRCode from "@/ui/QRCode";
import { headers } from "next/headers";

const Presentation = () => {
  const host = headers().get("host");

  return (
    <QRCode
      link={`http${
        process.env.NODE_ENV !== "development" ? "s" : ""
      }://${host}/questionnaires`}
    />
  );
};

export default Presentation;
