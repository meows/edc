// -----------------------------------------------------------------------------
// Utility Functions

function log(...a) {
   return console.log(...a)
}

function logT(text:string) {
   return (...a) => console.log(`${text}`, ...a)
}

// a proxy for Object.assign() that strips prototype
function noProto(...a) {
   return Object.assign(Object.create(null), ...a)
}

// composes a list of functions from left to right
function compose(...fn:Function[]) {
   return fn.reduceRight((f, g) => (...a) => f(g(...a)))
}

// -----------------------------------------------------------------------------
// Constants

// object with no inerhited properties
const ONULL= Object.create(null)