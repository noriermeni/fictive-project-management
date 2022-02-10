import React, {useEffect, useState} from "react";
import {Facepile, OverflowButtonType} from "@fluentui/react";
import {UserType} from "../../types/User/user.type";

interface Props {
    employees: Array<UserType>;
    maxEmployeesDisplayable?: number;

    handleClick?(): void;
}

export default function CustomFacepile(props: Props) {
    const {employees, maxEmployeesDisplayable, handleClick} = props;
    const [employeesFacepileDetails, setEmployeesFacepileDetails] = useState<Array<{ personaName: string }>>([]);

    useEffect(() => {
        let currentEmployeesFacepileDetails: Array<{ personaName: string }> = [...employeesFacepileDetails];
        employees && employees.map((employee: UserType) => currentEmployeesFacepileDetails.push({personaName: `${employee.first_name} ${employee.last_name}`}));
        setEmployeesFacepileDetails(currentEmployeesFacepileDetails);
    }, [])

    return (
        <Facepile
            personas={employeesFacepileDetails}
            maxDisplayablePersonas={maxEmployeesDisplayable}
            overflowButtonType={OverflowButtonType.descriptive}
            overflowButtonProps={{ onClick: () => handleClick && handleClick() }}
        />
    );
}