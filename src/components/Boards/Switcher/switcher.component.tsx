import React from "react";
import {Link} from "react-router-dom";
import {mergeStyleSets, useTheme} from "@fluentui/react";
import IconButton from "../../IconButton/iconButton.component";
import SettingsFieldWrapper from "../../SettingsField/settingsFieldWrapper.component";
import classNames from "classnames";

interface Props {
    className?: string;
}

export default function Switcher({className}: Props) {
    const {palette} = useTheme();

    const styles = mergeStyleSets({
        icon: {
            marginRight: 15
        },
        color: {
            color: palette.themeDarker
        }
    });

    return (
        <SettingsFieldWrapper className={className} title={'Boards'}>
            <Link to={`board`}>
                <IconButton
                    icon={'TripleColumn'}
                    className={classNames({
                        [styles.icon]: true,
                        [styles.color]: true
                    })}/>
            </Link>
            <Link to={`list`}>
                <IconButton className={styles.color} icon={'GroupedList'}/>
            </Link>
        </SettingsFieldWrapper>
    )
}