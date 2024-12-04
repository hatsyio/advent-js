import createFrame from './createFrame'

const frame1 = createFrame(['midu', 'madeval', 'educalvolpz'])
console.log(frame1)
// Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

const frame2 = createFrame(['midu'])
console.log(frame2)
// Resultado esperado:
// ********
// * midu *
// ********

createFrame(['a', 'bb', 'ccc'])

// Resultado esperado:
// *******
// * a   *
// * bb  *
// * ccc *
// *******

createFrame(['a', 'bb', 'ccc', 'dddd'])