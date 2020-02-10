export function singleton(target: any) {
  // save a reference to the original constructor
  let original = target
  let instance = undefined
  // wrap orginal constructor with singleton behaviour
  var f: any = function(...args) {
    instance = instance === undefined ? new original(...args) : instance
    return instance
  }
  // set f's prototype to orginal's prototype so f keeps original's type
  f.prototype = original.prototype
  return f
}
