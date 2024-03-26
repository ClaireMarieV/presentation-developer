import QRCode from "@/ui/QRCode";
import { headers } from "next/headers";
import Title from "./Title";

const Slide = () => {
  const host = headers().get("host");

  return (
    <>
      <Title />

      <QRCode
        link={`http${
          process.env.NODE_ENV !== "development" ? "s" : ""
        }://${host}/questionnaire`}
      />
    </>
  );
};

export default Slide;
