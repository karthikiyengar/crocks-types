declare module "crocks-static" {
    export function prop(a: any): any
}

declare module "crocks/pointfree/prop" {
    import * as crocks from 'crocks-static'
    export const prop: typeof crocks.prop;
    export default prop;
}
