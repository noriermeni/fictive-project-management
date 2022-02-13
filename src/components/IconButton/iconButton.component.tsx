import React from "react";
import classNames from "classnames";
import {Icon, mergeStyleSets} from "@fluentui/react";

interface Props {
    icon: string;
    className?: string;
    iconSize?: number;
    title?: string;

    onClick?(): void;
}

export default function IconButton({onClick, className = "", icon, iconSize, title}: Props) {

    const styles = mergeStyleSets({
        icon: {
            fontSize: iconSize ? iconSize : 25,
            cursor: "pointer"
        }
    });

    return (
        <Icon className={classNames({
            [styles.icon]: true,
            [className]: className
        })}
              title={title}
              iconName={icon}
              onClick={onClick}
        />
    )
}