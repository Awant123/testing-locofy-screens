import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import GeneralFrameAddPhotoCamera from "./pages/GeneralFrameAddPhotoCamera";
import GeneralFrameAddPhotoCamera1 from "./pages/GeneralFrameAddPhotoCamera1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/generalframeaddphotocamera1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<GeneralFrameAddPhotoCamera />} />
      <Route
        path="/generalframeaddphotocamera1"
        element={<GeneralFrameAddPhotoCamera1 />}
      />
    </Routes>
  );
}
export default App;
