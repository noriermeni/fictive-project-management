import React from "react";
import {
    IColor,
    ColorPicker,
    IColorPickerStyles,
    getColorFromString,
} from '@fluentui/react/lib/index';

const colorPickerStyles: Partial<IColorPickerStyles> = {
    panel: {paddingBlock: 12, paddingInline: 0},
    root: {
        maxWidth: 250,
        minWidth: 250,
    },
    colorRectangle: {height: 240},
};

interface Props {
    showPreview?: boolean;
    defaultColor?: string;

    setGivenColor(color: IColor): void;
}

export default function DefaultColorPicker({setGivenColor, showPreview = true, defaultColor = '#a6bf60'}: Props) {
    const [color, setColor] = React.useState(getColorFromString(defaultColor)!);

    const updateColor = React.useCallback((ev: any, colorObj: IColor) => {
        setGivenColor(colorObj);
        setColor(colorObj);
    }, []);

    return (
        <div>
            <ColorPicker
                color={color}
                onChange={updateColor}
                alphaType={'none'}
                showPreview={showPreview}
                styles={colorPickerStyles}/>
        </div>
    )
}