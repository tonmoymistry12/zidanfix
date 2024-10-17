
import React from "react";
import FirstPage from "../component/Landing-Page/First-Page";
import SecondPage from "../component/Landing-Page/Second-Page";
import ThirdPage from "../component/Landing-Page/Third-Page";
import BaseLayout from "../component/Layouts/BaseLayout";
import PublicFooter from "../component/Public-Footer";

export default function Home() {
  return (
    <BaseLayout>
      <FirstPage />
      <SecondPage />
      {/* <ThirdPage /> */}

    </BaseLayout>
  );
}
