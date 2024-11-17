import Header from "../components/Header";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import LatestNews from "../components/LatestNews";
const MainPages = () => {
    return (
        <div className="max-w-screen-xl mx-auto font-poppins">
            <Header></Header>
            <LatestNews></LatestNews>
            <Nav></Nav>
            <section className="my-2">
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default MainPages;