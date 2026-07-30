import type { InputColors, InputSizes } from "@/types/theme";

export interface FileInputTheme {
    root: FileInputRootTheme;
    field: FileInputFieldTheme;
}

interface FileInputRootTheme {
    base: string;
}

interface FileInputFieldTheme {
    base: string;
    input: FileInputFieldInputTheme;
}

interface FileInputFieldInputTheme {
    base: string;
    label: string;
    colors: InputColors;
    sizes: InputSizes;
}
