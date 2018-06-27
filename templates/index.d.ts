// more resources: https://www.cl.cam.ac.uk/~jdy22/papers/lightweight-higher-kinded-polymorphism.pdf
// https://github.com/Microsoft/TypeScript/issues/1213

declare module "crocks" {
    interface IdentityInstance<T>  {
        map<U>(f: (t: T) => U): IdentityInstance<U>;
        chain<U>(f: (t: T) => IdentityInstance<U>): IdentityInstance<U>;
        ap<U>(f: IdentityInstance<U>): IdentityInstance<U>, // https://gcanti.github.io/fp-ts/Applicative.html
        sequence<U> (f: U): any; // if we had HKT, would be something like U<T>
        traverse<U> (f: ((t: T) => U), applicative: any): any,
        inspect: () => string,
        toString: () => string,
        valueOf: () => T,
        equals: (a: any) => boolean,
        type: () => string
    }
       
    var Identity: {
        <U>(v: U): IdentityInstance<U>
        of<U>(v: U): IdentityInstance<U>
        type: () => string
    }
}