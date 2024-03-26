"use client";

import { useEffect } from "react";

type SetUserIdCookieProps = {
  userId: string;
};

const SetUserIdCookie = ({ userId }: SetUserIdCookieProps) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.cookie = `userId=${userId}`;
    }
  }, [userId]);

  return <></>;
};

export default SetUserIdCookie;
