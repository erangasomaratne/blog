import { Fragment } from "react";
import MainNaivation from "./main-navigation";


const Layout = ({ children }) => {
    return (
        <Fragment>
            <MainNaivation />
            <main>{children}</main>
        </Fragment>
    );
};

export default Layout;