import React from "react";
import { Spinner } from '@fluentui/react/lib/Spinner';
import { IStackTokens, Stack } from '@fluentui/react/lib/Stack';

interface Props {
    label?: string;
}

export default function DataSpinner({label}: Props) {

    const stackTokens: IStackTokens = {
        childrenGap: 20,
        maxWidth: 250,
        padding: 30
    };

    return (
        <Stack tokens={stackTokens}>
            <Spinner label={label} />
        </Stack>
    );
}