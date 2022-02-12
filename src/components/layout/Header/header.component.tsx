import React, {useEffect, useState} from "react";
import {Icon, Persona, PersonaSize, useTheme} from "@fluentui/react";
import {useBoolean} from '@fluentui/react-hooks';
import {getHeaderClassNames} from "./header.style";
import useData from "../../../hook/useData.hook";
import SettingsPanel from "../../Dialogs/SettingsPanel/settingsPanel.component";
import Wrapper from "../Wrapper/wrapper.component";
import Box from "../Box/box.component";
import {Logo} from "../../Logo/logo.component";
import {UserType} from "../../../types/User/user.type";

export default function Header() {

    const {data} = useData('profile/');
    const {palette} = useTheme();
    const {innerContainer, icon, rightSide, outerContainer} = getHeaderClassNames(palette);
    const [isOpen, {setTrue: openPanel, setFalse: dismissPanel}] = useBoolean(false);
    const [user, setUser] = useState<UserType>();

    useEffect(() => {
        data && setUser(data)
    }, [data])

    return (
        <Box className={outerContainer}>
            <Wrapper className={innerContainer}>
                <Logo navigateTo={'/'} />
                <div className={rightSide}>
                    <Icon onClick={openPanel} className={icon} iconName={'WaffleOffice365'}/>
                    {user && <Persona hidePersonaDetails text={`${user.first_name} ${user.last_name}`}
                                      secondaryText={user.position} size={PersonaSize.size28}/>}
                </div>
            </Wrapper>
            <SettingsPanel
                isOpen={isOpen}
                dismissPanel={dismissPanel}
            />
        </Box>
    );
}