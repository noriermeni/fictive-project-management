import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import ProjectHeader from "../../ProjectHeader/projectHeader.component";

export default function TasksBoard() {
    const {selectedProjectTasks} = useSelector(state => (state as any).project);

    useEffect(() => {
        console.log(selectedProjectTasks)
    }, [selectedProjectTasks])
    return (

        <>
            board</>
    );
}