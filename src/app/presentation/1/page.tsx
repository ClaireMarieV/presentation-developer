import QRCode from "@/ui/QRCode";
import { headers } from "next/headers";

const Slide = () => {
  const host = headers().get("host");

  return (
    <>
      <h1>
        Qu&apos;est-ce qu&apos;une développeuse
        <br />
        Qu&apos;est qu&apos;un développeur ?
      </h1>
      <QRCode
        link={`http${
          process.env.NODE_ENV !== "development" ? "s" : ""
        }://${host}/questionnaire`}
      />
    </>
  );
};

export default Slide;
