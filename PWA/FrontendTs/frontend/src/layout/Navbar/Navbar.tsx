import { Suspense } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import PageLoader from "../PageLoader";
import "./Navbar.scss";

export default function Navbar() {
    return (
        <Suspense fallback={<PageLoader />}>
            <nav>
                <NavbarRedirects />
                {/* <NavbarUserSection /> */}
            </nav>
        </Suspense>
    );
}

function NavbarRedirects() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    //const history = useHistory();

    return (
        <section>
            
            {/* <p className={pathname === "/menu" ? "bold-text" : ""} onClick={() => history.push("menu")}>
                Home
            </p> */}
            <p className={pathname === "/homescreen" ? "bold-text" : ""} onClick={() => navigate('/homescreen')}>HOME</p>
            <p className={pathname === "/safetyscreen" ? "bold-text" : ""} onClick={() => navigate('/safetyscreen')}>SAFETY</p>
        </section>
    );
}

// function NavbarUserSection() {
//     //const history = useHistory();
//     return (
//         null
//     );
// }