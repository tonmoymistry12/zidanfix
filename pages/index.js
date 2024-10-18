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
      <a
        href="https://wa.me/9233141733" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-icon"
      >
        
        <img src={'/images/clipart/whatsapp.svg'} alt="WhatsApp" />
      </a>
    </BaseLayout>
  );
}
