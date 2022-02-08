import React from "react";
import {mergeStyleSets, useTheme} from "@fluentui/react";
import classNames from "classnames";

interface Props {
    children: React.ReactNode;
    className?: any;
}

export default function Wrapper({children, className}: Props) {

    const { palette } = useTheme();

    const styles = mergeStyleSets({
        container: {
            maxWidth: 1365,
            width: '100%',
            backgroundColor: palette.white,
            margin: '0 auto'
        },
    });

    return (
        <div className={classNames({
            [styles.container]: true,
            [className]: classNames
        })}>{children}</div>
    );
}