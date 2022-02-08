import {ThemeEnum} from "../../enums/ThemeTypes/theme.enum";

export interface ColorType {
    color: string;
    type: ThemeEnum;
    id: number;
    isActive: boolean;
}