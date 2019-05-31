const Strategies = {
    S: (salary: number) => salary * 4,
    A: (salary: number) => salary * 3,
    B: (salary: number) => salary * 2,
}

export const calculateBonus = (level: keyof typeof Strategies, salary: number) => {
    return Strategies[level](salary)
}
