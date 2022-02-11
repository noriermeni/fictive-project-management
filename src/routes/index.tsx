import React from "react";
import {useRoutes} from "react-router-dom";
import Project from "../containers/Project/project.container";
import NotFound from "../containers/NotFound/notFound.container";
import Home from "../containers/Home/home.container";
import TasksBoard from "../components/Boards/Board/tasksBoard.component";
import TaskList from "../components/Boards/List/tasksList.component";

const Routes = () => {

    const routes = [
        { path: '*', element: <NotFound /> },
        { path: '', element: <Home /> },
        {
            path: 'project/:id',
            element: <Project />,
            children: [
                { path: 'board', element: <TasksBoard /> },
                { path: 'list', element: <TaskList /> }
            ]
        }
    ]

    return useRoutes(routes);
}

export default Routes;