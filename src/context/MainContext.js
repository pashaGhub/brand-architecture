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

const MainContext = React.createContext();

function MainProvider({ children }) {
  const [main, setMain] = useState([...data]);
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    const newStatus = !mobileNav;

    setMobileNav(newStatus);
  };

  return (
    <MainContext.Provider value={{ main, mobileNav, toggleMobileNav }}>
      {children}
    </MainContext.Provider>
  );
}

export default MainContext;
export { MainProvider };
