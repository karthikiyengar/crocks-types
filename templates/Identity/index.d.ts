declare module "crocks-static" {
    interface IdentityInstance<T>  {
        map<U>(f: (t: T) => U): IdentityInstance<U>;
        chain<U>(f: (t: T) => IdentityInstance<U>): IdentityInstance<U>;
        ap<U>(f: IdentityInstance<U>): IdentityInstance<U>, 
        sequence<U> (f: U): any; 
        traverse<U> (f: ((t: T) => U), applicative: any): any,
        inspect: () => string,
        toString: () => string,
        valueOf: () => T,
        equals: (a: any) => boolean,
        type: () => string
    }
    
    export var Identity: {
        <U>(v: U): IdentityInstance<U>
        of<U>(v: U): IdentityInstance<U>
        type: () => string
    }
}


declare module "crocks/Identity" {
    import * as crocks from 'crocks-static'
    const Identity: typeof crocks.Identity;
    export default Identity;
}
