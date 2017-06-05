// -----------------------------------------------------------------------------
// Utility Functions

const log = (msg, ...a) => console.log(msg, ...a)
const logT = (text:string) => (...a) => console.log(`${text}`, ...a)

// a proxy for Object.assign() that strips prototype
const noProto = (...a) => Object.assign(Object.create(null), ...a)

// composes a list of functions from left to right
const compose = (...fn:Function[]) => fn.reduceRight((f, g) => (...a) => f(g(...a)))

// flips a shallow boolean property
const flipProp = (obj, prop) => Object.assign({}, obj, {[prop]: !obj[prop]})

// returns an array of random integers
const randomIntegers = (n: number) => window.crypto.getRandomValues(new Uint16Array(n))

// filters an array for redundant items
const uniqueArray = (array: any[]) => [...new Set(array)]

// -----------------------------------------------------------------------------
// Constants

// object with no inerhited properties
const ONULL= Object.create(null)