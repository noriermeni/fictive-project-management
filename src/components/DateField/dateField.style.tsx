import {IPalette, mergeStyleSets} from "@fluentui/react";

interface DateFieldClassNames {
    container: string;
}

export const getDateFieldClassNames = (palette: IPalette): DateFieldClassNames => {
    return mergeStyleSets({
        container: {
            display: "flex",
            flexDirection: "column"
        }
    })
}