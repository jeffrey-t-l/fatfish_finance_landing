import PropTypes from "prop-types";
import React from "react";
import SEO from "./seo";
import { Link } from "gatsby"

function Layout({ children }) {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen bg-blue-600">
        <nav className="flex items-center justify-between flex-wrap p-6 bg-black text-white font-semibold bg-blue-600">
          <div className="flex items-left flex-no-shrink text-white mr-6">
            {/*<svg className="h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>*/}
            <Link to="/"><span className="font-semibold text-2xl tracking-tight text-white-600">FatFish.finance</span></Link>
          </div>
          {/*}
          <div className="w-full block flex-grow lg:flex lg:items-left lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <Link to="/page1">
                <span className="p-4 bg-black text-white text-s rounded shadow hover:bg-gray-700">
                  Link 1
                </span>
              </Link>
              <Link to="/page2">
                <span className="p-4 bg-black text-white text-s rounded shadow hover:bg-gray-700">
                  Link 2
                </span>
              </Link>
            </div>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-right lg:w-auto">
            <div  className="text-sm">
              <a href="https://github.com/" target="_blank" rel="noreferrer"
                    className="p-4 bg-black text-white text-xs rounded shadow hover:bg-gray-700">
                    GitHub
              </a>
            </div>
          </div>
          */}
        </nav>
        {children}
        <footer className="p-1 bg-black bg-blue-600 text-xs text-right align-bottom text-gray-800">
          <div>Icons by <a href="https://www.freepik.com"  target="_blank" rel="noreferrer" title="Freepik">Freepik</a></div>
        </footer>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
