declare module "crocks-static" {
    export function propPath(a: any): any
}

declare module "crocks/pointfree/propPath" {
    import * as crocks from 'crocks-static'
    export const propPath: typeof crocks.propPath;
    export default propPath;
}
