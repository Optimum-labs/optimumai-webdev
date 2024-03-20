import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]">
      <div className="privacy-policy px-8">
        <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2] text-center">
          Privacy Policy
        </h2>
        <p className="mb-10 text-base text-justify leading-relaxed text-body-color dark:text-dark-6">
          When you trust us with your personal information, we take our complete
          responsibility to safeguard it very seriously. We respect your
          privacy, and your rights to control your personal information. The
          primary purpose of collecting your data is to provide you with
          services offered by our platform and connect you to the right doctor.
          It is mandatory to provide the required information to make the
          process easy and convenient. We do not and will not let your
          information be known to any third party.
        </p>
        <p className="mb-10 text-base text-justify leading-relaxed text-body-color dark:text-dark-6">
          THE WEBSITE: We take a proactive approach to user privacy and ensure
          the necessary steps are taken to protect the privacy of our users
          throughout their visiting experience.
          <br /> <br />
          When you use or contact our website, you do so at your own discretion
          and provide any personal details requested at your own risk. Your
          personal information is kept private and stored securely until it is
          no longer required or has no use, as detailed below. Every effort has
          been made to ensure a safe and secure form to email submission process
          but we advise users using our forms that you do so at your own risk.
        </p>

        <p className="mb-10 text-base text-justify leading-relaxed text-body-color dark:text-dark-6">
          Information you give us : We collect the information you voluntarily
          provide to us by filling in forms on our website{" "}
          <span className="text-primary font-bold cursor-pointer">
            goodmind.co
          </span>
          , by corresponding with us by phone, e-mail, live-chat services, or in
          other ways. The information you give us may include your name,
          address, e-mail address, and phone number. Where we take any financial
          payments from you, these will be done securely and in accordance with
          industry standards.
        </p>
        <p className="mb-10 text-base text-justify leading-relaxed text-body-color dark:text-dark-6">
          If you fail to provide personal data: <br />
          If you choose not to provide the personal information we request, you
          can still visit most areas of the website but you may be unable to
          access certain options and services. You have the final decision on
          whether to proceed with any activity that requests personal
          information.
        </p>
        <p className="mb-10 text-base text-justify leading-relaxed text-body-color dark:text-dark-6">
          In some cases, the collection of personal data may be a statutory or
          contractual requirement, and we will be limited in the services we can
          provide you if you don’t provide your personal data - for example, if
          you do not provide us with your personal data, you will not be able to
          apply for a digital subscription to our magazine or other essential
          services.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
