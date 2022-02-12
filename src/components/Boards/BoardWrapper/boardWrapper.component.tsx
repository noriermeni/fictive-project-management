import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {manipulateTasksByStatus} from "../../../utils/manipulateTasksByStatus";
import {StatusDetailsType} from "../../../types/StatusDetailsType/statusDetails.type";
import {mergeStyleSets} from "@fluentui/react";
import {getLastKeyFromPathname} from "../../../utils/splitPathname";
import {setProjectPathname} from "../../../store/slice/project.slice";

interface Props {
    cardElement(status: StatusDetailsType): void;
}

export default function BoardWrapper({cardElement}: Props) {
    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const [statusList, setStatusList] = useState<Array<StatusDetailsType>>([]);
    const {selectedProjectTasks, projectPathname} = useSelector(state => (state as any).project);

    const styles = mergeStyleSets({
        boardWrapper: {
            display: "flex",
            flexDirection: projectPathname === 'list' ? "column" : "row"
        }
    });

    useEffect(() => {
        dispatch(setProjectPathname(getLastKeyFromPathname(pathname)))
        const givenStatusList = [...Object.values(manipulateTasksByStatus(selectedProjectTasks))];
        setStatusList(givenStatusList);
    }, [selectedProjectTasks])

    return (
        <div className={styles.boardWrapper}>
            {statusList && statusList.map((status: StatusDetailsType) => cardElement({...status}))}
        </div>
    );
}