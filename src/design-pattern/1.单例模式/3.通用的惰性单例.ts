export const getSingle = (fn: (...args: any[]) => void) => {
    let instance

    return function() {
        if (!instance) {
            instance = fn.apply(this, arguments)
        }

        return instance
    } as (...args: any[]) => void
}
