import React from "react";
import {useDispatch} from "react-redux";
import {Persona, PersonaPresence, PersonaSize} from "@fluentui/react";
import {UserType} from "../../types/User/user.type";
import {setSelectedUsers} from "../../store/slice/project.slice";
import CustomFacepile from "../CustomFacepile/customFacepile.component";
import SettingsFieldWrapper from "../SettingsField/settingsFieldWrapper.component";

interface Props {
    employees: Array<UserType>;
    label?: string;
    maxEmployeesDisplayable?: number;
    showDetails?: boolean;
    hidePersonaDetails?: boolean;
    showUnknownPersonaCoin?: boolean;
    className?: string;
    circleSize?: PersonaSize;
}

export default function UsersList(props: Props) {
    const {
        employees,
        label,
        className,
        maxEmployeesDisplayable,
        circleSize = PersonaSize.size32,
        showDetails = false,
        hidePersonaDetails = false,
        showUnknownPersonaCoin = false
    } = props;
    const dispatch = useDispatch();

    return (
        <SettingsFieldWrapper title={label} className={className}>
            {!showDetails && <CustomFacepile employees={employees} maxEmployeesDisplayable={maxEmployeesDisplayable}
                                             handleClick={() => dispatch(setSelectedUsers(employees))}/>}
            {showDetails && employees.map(employee => <Persona
                styles={{root: {marginBlock: 5}}}
                text={`${employee.first_name} ${employee.last_name}`}
                secondaryText={employee?.position}
                showSecondaryText={!!employee?.position}
                size={circleSize}
                presence={PersonaPresence.none}
                hidePersonaDetails={hidePersonaDetails}
                showUnknownPersonaCoin={showUnknownPersonaCoin}
            />)}
        </SettingsFieldWrapper>
    )
}