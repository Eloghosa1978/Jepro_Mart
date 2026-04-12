import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PublicRouter from "./routes/PublicRouter.jsx";
import PrivateRouter from "./routes/PrivateRouter.jsx";

const App = () => {
  return <div>
    <Router>
      <Routes>
        <Route path="/*" element={<PublicRouter />} />
        <Route path="/user/*" element={<PrivateRouter />} />
      </Routes>
    </Router>
  </div>;
};

export default App;
