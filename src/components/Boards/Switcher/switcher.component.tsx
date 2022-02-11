import React from "react";
import {Link} from "react-router-dom";
import {mergeStyleSets} from "@fluentui/react";
import IconButton from "../../IconButton/iconButton.component";
import SettingsFieldWrapper from "../../SettingsField/settingsFieldWrapper.component";

interface Props {
    className?: string;
}

export default function Switcher({className}: Props) {

    const styles = mergeStyleSets({
        icon: { marginRight: 15 }
    });

    return (
        <SettingsFieldWrapper className={className} title={'Boards'}>
            <Link to={`board`}>
                <IconButton
                    icon={'TripleColumn'}
                    className={styles.icon}/>
            </Link>
            <Link to={`list`}>
                <IconButton icon={'GroupedList'}/>
            </Link>
        </SettingsFieldWrapper>
    )
}