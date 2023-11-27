import { test } from 'vitest'
import { filesize } from 'filesize'

test('experiments with the filesize package', () => {
    console.log('filesize(500)', filesize(500))

    // Test object
    console.log('output object', filesize(500, { output: 'object' }))

    // Test fullform
    console.log('fullform', filesize(500, { fullform: true }))
    console.log('5000, fullform and 2 precision', filesize(5000, { fullform: true, precision: 2 }))
    console.log('4899, fullform and 2 precision', filesize(4899, { fullform: true, precision: 2 }))
    console.log('4899, fullform and no precision', filesize(4899, { fullform: true, precision: 1 }))

    // Test base
    console.log('4899, 2 base', filesize(4899, { base: 2 }))

    // Test exponent
    console.log('4899, 0 exponent', filesize(4899, { exponent: 0 }))
    console.log('48999, 0 exponent', filesize(48999, { exponent: 0 }))
    console.log('4899, 1 exponent', filesize(4899, { exponent: 1 }))
    console.log('4899, 2 exponent', filesize(4899, { exponent: 2 }))
})
