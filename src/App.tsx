import React, { useEffect } from "react";
import About from "./components/AboutSection";
import Skill from "./components/SkillSection";
import Project from "./components/ProjectSection";
import Contact from "./components/ContactSection";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "./lib/store";
import { setCache } from "./lib/features/cacheSlice";
import apis from "./lib/apis";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const cacheData = useSelector((state: RootState) => state.cache.data);

  useEffect(() => {
    // Giả sử bạn fetch data từ API và muốn cache
    const fetchData = async () => {
      await apis
        .get("portfolio-page")
        .then(res => {
          const { data } = res.data;
          dispatch(setCache({ key: "homepage", value: data }));
        })
        .catch(err => {
          console.log("[GET_PAGE]: ", err.message);
        });
    };

    // Kiểm tra xem data đã được cache chưa
    if (!cacheData["homepage"]) {
      fetchData();
    }
  }, [cacheData, dispatch]);

  return (
    <React.Fragment>
      <About />
      <Skill />
      <Project />
      <Contact />
    </React.Fragment>
  );
}

export default App;
