import React from "react";
import PublicFooter from "../Public-Footer";
import PublicHeader from "../Public-Header";
export default function BaseLayout(props) {
  const { children } = props;
  return (
    <>
      <PublicHeader />
      {children}
      {<PublicFooter />}
    </>
  );
}
