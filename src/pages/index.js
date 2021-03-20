import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`finance`, `investment`, `invest`, `trading`]}
        title="Home"
      />

      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <div className="sm:flex sm:flex-row-reverse sm:items-center">
          <div className="sm:px-2">
            <div>
              {/*
              <h1 className="px-4 pt-5 text-2xl text-left text-black-500 font-bold sm:text-3xl border-l-4">
                Hi There!
              </h1>
              */}
              <br />
              <br />
              <blockquote className="pl-8 leading-loose text-justify border-l-4 border-gray-900 text-4xl">
                Welcome to fatfish.finance
              </blockquote>
              <br />
              <br />
            </div>
          </div>

        </div>
      </main>
    </Layout>
  );
}

export default IndexPage;
