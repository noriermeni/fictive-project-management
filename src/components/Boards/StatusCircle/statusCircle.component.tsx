import React from "react";
import {StatusEnum} from "../../../enums/Status/status.enum";
import classNames from "classnames";
import {mergeStyleSets, useTheme} from "@fluentui/react";
import {Depths} from "@fluentui/theme";

interface Props {
    status: StatusEnum;
}

export default function StatusCircle({status}: Props) {
    const {palette} = useTheme();

    const styles = mergeStyleSets({
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 20,
            height: "100%"
        },
        circle: {
            display: "block",
            width: 10,
            height: 10,
            borderRadius: 3
        },
        completed: {
            backgroundColor: palette.blueLight,
        },
        inProgress: {
            backgroundColor: palette.greenLight,
        },
        paused: {
            backgroundColor: palette.red,
        },
        waiting: {
            backgroundColor: palette.yellowLight,
        }
    });


    return (
        <div className={styles.container}>
            <span className={classNames({
                [styles.circle]: true,
                [styles.completed]: StatusEnum.COMPLETED === status,
                [styles.inProgress]: StatusEnum.IN_PROGRESS === status,
                [styles.paused]: StatusEnum.PAUSED === status,
                [styles.waiting]: StatusEnum.WAITING === status
            })} />
        </div>
    )
}