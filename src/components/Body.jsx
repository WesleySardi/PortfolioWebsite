import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Projects from "../pages/Projects";

export default function Body() {
  const commonStyles = {
    backgroundImage: `url('/background.jpg')`,
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Welcome
              className="flex-1 flex justify-center flex-col"
              style={commonStyles}
            />
          }
        />
        <Route
          path="/projects"
          element={
            <Projects
              className="flex-1 flex justify-center flex-col"
              style={commonStyles}
            />
          }
        />
      </Routes>
    </Router>
  );
}
