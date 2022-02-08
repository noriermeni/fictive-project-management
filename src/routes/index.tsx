import React from "react";

import { useRoutes, Outlet } from "react-router-dom";

import ProjectDetails from "../containers/ProjectDetails/projectDetails.container";
import NotFound from "../containers/NotFound/notFound.container";
import Wrapper from "../components/layout/Wrapper/wrapper.component";
import Home from "../containers/Home/home.container";

const Routes = () => {

    const routes = [
        {
            path: '*',
            element: <NotFound />,
        },
        {
            path: '',
            element: <Home />,
        },
        {
            path: 'project/:id',
            element: <ProjectDetails />,
        }
    ]

    const routing = useRoutes(routes);

    return (
        <>
            {routing}
            <Outlet />
        </>
    )
}

export default Routes;