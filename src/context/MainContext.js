import React, { useState, useEffect } from "react";
import data from "./data";

import { API_ENDPOINTS } from "../constants";

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
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState({
    message: "Sorry, something went wrong",
    err: false,
    devMessage: ""
  });
  const [mobileNav, setMobileNav] = useState(DEFAULT_MOBILE_NAV_CONTEXT);
  const [topic, setTopic] = useState(" ");
  const [popup, setPopup] = useState(false);

  async function apiCall() {
    setLoader(true);
    const response = await fetch(API_ENDPOINTS.sections, {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
    });

    if (response.ok) {
      const resJSON = await response.json();

      const data = resJSON.map(({ title, acf }) => {
        return {
          id: title.rendered.replace(/\s+/g, ""),
          sectionTitle: title.rendered,
          topics: acf.topic.map(topic => {
            const mainInfo = {
              topicID: topic.topic_title.replace(/\s+/g, ""),
              layout: topic.topic_layout,
              topicTitle: topic.topic_title,
              topicText: topic.topic_text
            };

            switch (topic.topic_layout) {
              case "video":
                return { ...mainInfo, topicVideo: topic.video.url };
              case "itemsList":
                return {
                  ...mainInfo,
                  topicImgs: topic.image_block.map(
                    ({ img, image_title, image_text }) => ({
                      image: img.url,
                      alt: img.alt,
                      subtitle: image_title,
                      imgText: image_text
                    })
                  )
                };
              case "color":
                return {
                  ...mainInfo,
                  layout: "rail",
                  topicImgs: topic.image_block.map(({ img, color_info }) => ({
                    image: img.url,
                    alt: img.alt,
                    imgText: color_info.map(info => info.parameter)
                  }))
                };
              default:
                return {
                  ...mainInfo,
                  topicImgs: topic.image_block.map(({ img, image_text }) => ({
                    image: img.url,
                    alt: img.alt,
                    imgText: image_text
                  }))
                };
            }
          })
        };
      });
      setMain(data);
      setError({ ...error, err: false });
    } else {
      setError({ ...error, err: true, devMessage: response });
    }

    setLoader(false);
  }

  const toggleMobileNav = () => {
    const newStatus = !mobileNav.show;
    setMobileNav({ ...mobileNav, show: newStatus });
  };

  const setCurrentSection = title => {
    setMobileNav({ ...mobileNav, currentSection: title });
  };

  const setCurrentTopic = topic => {
    setTopic(topic);
  };

  const showPopup = () => {
    setPopup(true);

    setTimeout(() => {
      setPopup(false);
    }, 2500);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <MainContext.Provider
      value={{
        main,
        loader,
        error,
        popup,
        showPopup,
        mobileNav,
        toggleMobileNav,
        setCurrentSection,
        setCurrentTopic,
        topic
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainContext;
export { MainProvider };
