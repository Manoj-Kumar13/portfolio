import Image from "next/image";
import React from "react";
import companyLogo from "../../public/1ds-logo.png";

function Experience() {
  return (
    <section className="px-10">
      <h3 className="text-3xl py-1 text-center font-burtons dark:text-white">
        Chronicles of My Journey
      </h3>
      <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
        <Image
          className="mx-auto"
          alt="design"
          src={companyLogo}
          height={100}
        />
        <h3 className="text-xl font-medium pt-8 pb-2 font-mono text-black">
          Software Engineer at{" "}
          <span className="text-teal-600">1Digitalstack</span>
        </h3>
      </div>
    </section>
  );
}

export default Experience;
