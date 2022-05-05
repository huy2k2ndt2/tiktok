import { useEffect } from "react";

function Sidebar() {
  useEffect(() => {
    console.log("useEffect sidebar");
  }, []);

  console.log("component sidebar");
  return <h2>Sidebar</h2>;
}

export default Sidebar;
