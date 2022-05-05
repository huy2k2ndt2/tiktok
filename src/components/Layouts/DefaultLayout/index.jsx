import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "./Sidebar";

function DefaultLayout({ children }) {
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate("/login");
    } else {
      setIsLogin(true);
    }
  }, []);

  console.log("default lay out run");

  return isLogin ? (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        {children}
      </div>
    </div>
  ) : (
    <></>
  );
}

export default DefaultLayout;
