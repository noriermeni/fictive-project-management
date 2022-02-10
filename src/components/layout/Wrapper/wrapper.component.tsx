import React from "react";
import classNames from "classnames";
import {mergeStyleSets} from "@fluentui/react";

interface Props {
    children: React.ReactNode;
    className?: any;
}

export default function Wrapper({children, className}: Props) {

    const styles = mergeStyleSets({
        container: {
            maxWidth: 1365,
            width: '100%',
            margin: '0 auto',
        },
        innerContainer: {
            paddingInline: 10
        }
    });

    return (
        <div className={styles.container}>
            <div className={classNames({
                [styles.innerContainer]: true,
                [className]: className
            })}>{children}</div>
        </div>
    );
}