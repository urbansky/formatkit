import { expect, test } from 'vitest'
import {formatFileSize, FormatFileSizeOptions} from './filesize'

test('undefined and empty', () => {
    expect(formatFileSize(undefined)).toBe("-")
    expect(formatFileSize(undefined, { empty: '' } )).toBe("")
    expect(formatFileSize(undefined, { empty: '#' } )).toBe("#")
})

test('standard options', () => {
    expect(formatFileSize(50)).toBe("50 B")
    expect(formatFileSize(1000)).toBe("1 kB")
    expect(formatFileSize(0)).toBe("0 B")
    expect(formatFileSize(1500)).toBe("1.5 kB")
    expect(formatFileSize(1_460_000)).toBe("1.46 MB")
    expect(formatFileSize(1536000000)).toBe("1.54 GB")
})

test('base 2', () => {
    const options: Partial<FormatFileSizeOptions> = { base: 2 }
    expect(formatFileSize(1000, options)).toBe("1000 B")
    expect(formatFileSize(1024, options)).toBe("1 KiB")
})

test('spacer', () => {
    expect(formatFileSize(100, { spacer: '' })).toBe("100B")
    expect(formatFileSize(1000, { spacer: '_' })).toBe("1_kB")
})

test('split output', () => {
    expect(formatFileSize(100, { splitOutput: true })).toMatchObject({ value: 100, unit: "B" })
})

test('precision', () => {
    expect(formatFileSize(1_460_000, { precision: 0 })).toBe("1.46 MB")
    expect(formatFileSize(1_460_000, { precision: 2 })).toBe("1.5 MB")
    expect(formatFileSize(1_460_000, { precision: 3 })).toBe("1.46 MB")

    expect(formatFileSize(265318, { unit: "B", precision: 0 })).toBe("265318 B")
    expect(formatFileSize(265318, { unit: "B", precision: 6 })).toBe("265318 B")
    expect(formatFileSize(265318, { unit: "B", precision: 5 })).toBe("2.6532e+5 B")
    expect(formatFileSize(265318, { unit: "B", precision: 4 })).toBe("2.653e+5 B")
})

