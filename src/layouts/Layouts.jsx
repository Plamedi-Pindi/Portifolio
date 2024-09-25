
// Router
import { Outlet, Link } from "react-router-dom";
 
// compontents
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";

export default function Layout() {
  return (
    <>
      <Navbar display={`hidden`}  />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
}
