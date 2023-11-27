import { filesize } from 'filesize'

const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
type filesizeUnits = 'B' | 'KB' | 'MB' | 'GB' | 'TB' | 'PB' | 'EB' | 'ZB' | 'YB';

export type FormatFileSizeOptions = {
    unit?: "auto" | filesizeUnits,
    base?: 2 | 10,
    // numberFormat?: boolean,    // Soll der Wert formatiert werden, z.B. 10.000
    precision?: number,        // Stellen nach dem Komma
    empty?: string,            // Ausgabe bei 'undefined'
    spacer?: string,            // Zeichen zwischen Wert und Einheit
    splitOutput?: false,       // Wert und Einheit einzeln zurückgeben, z.B. für getrennte Formatierungen
}

const standardOptions: FormatFileSizeOptions = {
    unit: "auto",
    base: 10,
    // numberFormat: false,
    precision: 0,       // Stellen nach dem Komma
    empty: "-",
    spacer: " ",
    splitOutput: false,
}

export type FormatFileSizeOutput = {
    value: string;
    unit: string;
}

export function formatFileSize(byteCount: number | undefined, options: FormatFileSizeOptions = {}): string | FormatFileSizeOutput {
    const finalOptions = { ...standardOptions, ...options };

    if (byteCount === undefined) {
        if (finalOptions.splitOutput) {
            return {
                value: finalOptions.empty,
                unit: "",
            }
        }
        return finalOptions.empty;
    }

    const result: any = filesize(byteCount, {
        exponent: finalOptions.unit === "auto" ? -1 : units.indexOf(finalOptions.unit),
        base: finalOptions.base,
        precision: finalOptions.precision,
        spacer: finalOptions.spacer,
        output: finalOptions.splitOutput ? 'object' : 'string',
    })

    if (finalOptions.splitOutput) {
        return {
            value: result.value,
            unit: result.symbol
        }
    }
    return result;
}
