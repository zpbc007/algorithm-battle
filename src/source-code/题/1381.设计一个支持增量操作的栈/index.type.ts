export interface ICustomStackMethod {
    push: (x: number) => void
    pop: () => number
    increment: (k: number, val: number) => void
}

export type ICustomStack = new (maxSize: number) => ICustomStackMethod
