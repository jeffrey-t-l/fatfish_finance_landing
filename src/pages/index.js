import React from "react";
import heroImage from "../images/ws-me-point-reyes-2017.jpg"
import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <div className="sm:flex sm:flex-row-reverse sm:items-center">
          <div className="sm:px-2">
            <div>
              <h1 className="px-4 pt-5 text-2xl text-left text-black-500 font-bold sm:text-3xl">
                Hi There!
              </h1>
 {/*
              <p className="px-4 mt-8 text-lg text-gray-700 sm:mt-8">
                I am Jeff. I currently reside in <a href="https://goo.gl/maps/eVYSz1HcDd2iFE2E7" target="_blank" rel="noreferrer">Astoria, NY.</a>
              </p>
  */}
              <br />
              <br />
            </div>
          </div>
          <img
            className="w-full max-w-lg mt-16 mx-auto sm:w-1/2"
            src={heroImage}
            alt="Pt. Reyes National Seashore"
          ></img>
        </div>
      </main>
    </Layout>
  );
}

export default IndexPage;
