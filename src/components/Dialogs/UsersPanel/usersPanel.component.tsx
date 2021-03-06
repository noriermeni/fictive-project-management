import React from "react";
import { Panel } from '@fluentui/react/lib/Panel';
import ThemeSwitcher from "../../ThemeSwitcher/themeSwitcher.component";
import LanguageSwitcher from "../../LanguageSwitcher/languageSwitcher.component";
import UsersList from "../../UsersList/usersList.component";
import {useSelector} from "react-redux";
import {mergeStyleSets} from "@fluentui/react";

interface Props {
    isOpen: boolean;
    dismissPanel(): void;
}

export default function UsersPanel({isOpen, dismissPanel}: Props) {
    const { selectedUsersList } = useSelector(state => (state as any).project);

    const styles = mergeStyleSets({
        boxListClassName: {
            flexDirection: "column"
        }
    });

    return (
        <Panel isLightDismiss
               isOpen={isOpen}
               onDismiss={dismissPanel}
               closeButtonAriaLabel="Close"
               headerText="Assignees" >
            <UsersList showDetails employees={selectedUsersList} boxListClassName={styles.boxListClassName} />
        </Panel>
    )
}