import React, { useState, useEffect } from "react";
import data from "./data";
import { async } from "q";

// data structure template:const DEFAULT_MAIN_CONTEXT = {
//   sections: [
//     {
//       layout: String // options: window, rail, stretch
//       sectionTitle: String,
//       sectionText: String,
//       sectionImgs: [
//           {
//             image: String,
//             alt: String,
//             imgText: String
//           }
//       ]
//     }
//   ]
// };

const MainContext = React.createContext();

function MainProvider({ children }) {
  const [main, setMain] = useState([...data]);
  const [mobileNav, setMobileNav] = useState(false);
  const [targetToObserve, setTargetToObserve] = useState([]);

  const toggleMobileNav = () => {
    const newStatus = !mobileNav;
    setMobileNav(newStatus);
  };

  window.addEventListener("load", () => {
    let arr = document.querySelector("#thirdItem");
    setTargetToObserve([arr]);
  });
  console.log(targetToObserve);

  useEffect(() => {
    console.log(targetToObserve);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio === 0.1) {
          console.log("It works!");
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
      }
    );
    if (targetToObserve.current) {
      observer.observe(targetToObserve.current);
    }
  }, []);

  return (
    <MainContext.Provider value={{ main, mobileNav, toggleMobileNav }}>
      {children}
    </MainContext.Provider>
  );
}

export default MainContext;
export { MainProvider };
