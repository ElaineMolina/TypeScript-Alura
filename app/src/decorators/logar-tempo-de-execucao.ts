export function logarTempoDeExecucao(){
  return function(
    target: any,
    propertyKey: any,
    descriptor: PropertyDescriptor
  ){
    return descriptor;
  }
}