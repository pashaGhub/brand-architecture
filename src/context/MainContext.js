import React, { useState } from "react";
import data from "./data";

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

const DEFAULT_MOBILE_NAV_CONTEXT = {
  show: false,
  currentSection: " "
};

const MainContext = React.createContext();

function MainProvider({ children }) {
  const [main, setMain] = useState([...data]);
  const [mobileNav, setMobileNav] = useState(DEFAULT_MOBILE_NAV_CONTEXT);
  const [popup, setPopup] = useState(false);

  const toggleMobileNav = () => {
    const newStatus = !mobileNav.show;
    setMobileNav({ ...mobileNav, show: newStatus });
  };

  const setCurrentSection = title => {
    // console.log(title);

    setMobileNav({ ...mobileNav, currentSection: title });
  };

  const showPopup = () => {
    setPopup(true);

    setTimeout(() => {
      setPopup(false);
    }, 2500);
  };

  return (
    <MainContext.Provider
      value={{
        main,
        popup,
        showPopup,
        mobileNav,
        toggleMobileNav,
        setCurrentSection
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainContext;
export { MainProvider };
