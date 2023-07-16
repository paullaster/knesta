import { Route, Routes } from "react-router-dom";
import App from "../App.jsx";

const router =
  <Routes>
    <Route path="/"  element={<App />}/>
    <Route path={`/#id`} />
  </Routes>
  ;

export default router;