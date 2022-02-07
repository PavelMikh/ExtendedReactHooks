import React from "react";

const withAuth = (Component) => (props) => {
    const isAuth = localStorage.getItem("auth");

    return (<>
        { isAuth ? <Component {...props} /> : "auth" }
    </>);
};

export default withAuth;
