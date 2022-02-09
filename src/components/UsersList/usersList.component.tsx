import React, {useEffect, useState} from "react";

import { getLanguageSwitcherClassNames } from "../DateField/dateField.style";
import {Facepile, OverflowButtonType, Persona, PersonaPresence, PersonaSize, useTheme} from "@fluentui/react";

import Title from "../Title/title.component";

import { UserType } from "../../types/User/user.type";
import {setSelectedUsers} from "../../store/slice/project.slice";
import {useDispatch} from "react-redux";

interface Props {
    employees: Array<UserType>;
    label?: string;
    maxEmployeesDisplayable?: number;
    showDetails?: boolean;
}

export default function UsersList({employees, label, maxEmployeesDisplayable, showDetails = false}: Props) {
    const dispatch = useDispatch();
    const { palette } = useTheme();
    const { container } = getLanguageSwitcherClassNames(palette);
    const [ employeesFacepileDetails, setEmployeesFacepileDetails ] = useState<Array<{personaName: string}>>([])

    useEffect(() => {
        manipulateEmployeesData();
    }, [])

    const manipulateEmployeesData = () => {
        let currentEmployeesFacepileDetails: Array<{personaName: string}> = [...employeesFacepileDetails];
        employees && employees.map(employee => currentEmployeesFacepileDetails.push({personaName: `${employee.first_name} ${employee.last_name}`}));
        setEmployeesFacepileDetails(currentEmployeesFacepileDetails);
    }

    return (
        <div className={container}>
            {label && <Title text={`${label}:`}/>}
            {!showDetails && <Facepile
                personas={employeesFacepileDetails}
                maxDisplayablePersonas={maxEmployeesDisplayable}
                overflowButtonType={OverflowButtonType.descriptive}
                overflowButtonProps={{
                    onClick: () => {
                        dispatch(setSelectedUsers(employees));
                    },
                }}
            />}
            {showDetails && employees.map(employee => <Persona
                styles={{ root: { marginBlock: 5 }}}
                text={`${employee.first_name} ${employee.last_name}`}
                secondaryText={employee?.position}
                showSecondaryText={!!employee?.position}
                size={PersonaSize.size32}
                presence={PersonaPresence.none}
            />)}
        </div>
    )
}