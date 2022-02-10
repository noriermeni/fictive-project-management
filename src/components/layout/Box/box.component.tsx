import React from "react";
import {mergeStyleSets} from "@fluentui/react";
import {Depths} from "@fluentui/theme";
import classNames from "classnames";

interface Props {
    children: React.ReactNode;
    className?: string;
}

export default function Box({children, className = ""}: Props) {

    const styles = mergeStyleSets({
        container: {
            width: "100%",
            boxShadow: Depths.depth4,
        },
    });

    return (
        <div className={classNames({
            [styles.container]: true,
            [className]: className
        })}>
            {children}
        </div>
    )
}