import React from "react";
import { Panel } from '@fluentui/react/lib/Panel';
import ThemeSwitcher from "../../ThemeSwitcher/themeSwitcher.component";
import LanguageSwitcher from "../../LanguageSwitcher/languageSwitcher.component";
import SettingsFieldWrapper from "../../SettingsField/settingsFieldWrapper.component";
import Title from "../../Title/title.component";

interface Props {
    isOpen: boolean;
    dismissPanel(): void;
}

export default function SettingsPanel({isOpen, dismissPanel}: Props) {
    return (
        <Panel
            isLightDismiss
            isOpen={isOpen}
            onDismiss={dismissPanel}
            closeButtonAriaLabel="Close"
            headerText="Settings"
        >
            <ThemeSwitcher />
            <LanguageSwitcher />
            <SettingsFieldWrapper title={`App store`}>
                <Title text={`There are no apps to show`} />
            </SettingsFieldWrapper>
        </Panel>
    )
}