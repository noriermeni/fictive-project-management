import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Facepile, OverflowButtonType, Persona, PersonaPresence, PersonaSize, useTheme} from "@fluentui/react";
import Title from "../Title/title.component";
import {UserType} from "../../types/User/user.type";
import {setSelectedUsers} from "../../store/slice/project.slice";
import {getDateFieldClassNames} from "../DateField/dateField.style";
import CustomFacepile from "../CustomFacepile/customFacepile.component";

interface Props {
    employees: Array<UserType>;
    label?: string;
    maxEmployeesDisplayable?: number;
    showDetails?: boolean;
}

export default function UsersList({employees, label, maxEmployeesDisplayable, showDetails = false}: Props) {
    const dispatch = useDispatch();
    const {palette} = useTheme();
    const {container} = getDateFieldClassNames(palette);

    return (
        <div className={container}>
            {label && <Title text={`${label}:`}/>}
            {!showDetails && <CustomFacepile employees={employees} maxEmployeesDisplayable={maxEmployeesDisplayable} handleClick={() => dispatch(setSelectedUsers(employees))}/>}
            {showDetails && employees.map(employee => <Persona
                styles={{root: {marginBlock: 5}}}
                text={`${employee.first_name} ${employee.last_name}`}
                secondaryText={employee?.position}
                showSecondaryText={!!employee?.position}
                size={PersonaSize.size32}
                presence={PersonaPresence.none}
            />)}
        </div>
    )
}