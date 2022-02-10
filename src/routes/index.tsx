import React from "react";
import {useRoutes} from "react-router-dom";
import Project from "../containers/Project/project.container";
import NotFound from "../containers/NotFound/notFound.container";
import Home from "../containers/Home/home.container";

const Routes = () => {

    const routes = [
        { path: '*', element: <NotFound /> },
        { path: '', element: <Home /> },
        { path: 'project/:id', element: <Project /> }
    ]

    return useRoutes(routes);
}

export default Routes;