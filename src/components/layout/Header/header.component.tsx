import React, {useEffect, useState} from "react";

import { getHeaderClassNames } from "./header.style";
import {Icon, Persona, PersonaSize, useTheme} from "@fluentui/react";
import { useBoolean } from '@fluentui/react-hooks';

import Wrapper from "../Wrapper/wrapper.component";
import SettingsPanel from "../../Dialogs/SettingsPanel/settingsPanel.component";
import { Logo } from "../../Logo/logo.component";
import useData from "../../../hook/useData.hook";
import {UserType} from "../../../types/User/user.type";

export default function Header() {
    const { palette } = useTheme();
    const { data, loading, error } = useData('profile/');
    let { container, innerContainer, icon, rightSide } = getHeaderClassNames(palette);
    const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);
    const [ user, setUser ] = useState<UserType>();

    useEffect(() => {
        data && setUser(data)
    }, [data])

    return (
        <div className={container}>
            <Wrapper className={innerContainer}>
                <Logo />
                <div className={rightSide}>
                    <Icon onClick={openPanel} className={icon} iconName={'Settings'} />
                    {user && <Persona hidePersonaDetails text={user.name} secondaryText={user.position} size={PersonaSize.size28}/>}
                </div>
            </Wrapper>
            <SettingsPanel
                isOpen={isOpen}
                dismissPanel={dismissPanel}
            />
        </div>
    );
}