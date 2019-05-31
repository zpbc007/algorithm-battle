interface ICalculate {
    calculate: (salary: number) => number
}

// 奖金的多种计算方式
// 定义策略类 并实现 calculate 方法
export class PerformanceS implements ICalculate {
    calculate(salary: number) {
        return salary * 4
    }
}

export class PerformanceA implements ICalculate {
    calculate(salary: number) {
        return salary * 3
    }
}

export class PerformanceB implements ICalculate {
    calculate(salary: number) {
        return salary * 2
    }
}

// 奖金类
export class Bonus {
    constructor(private salary: number, private strategy: ICalculate) {}

    setStrategy(strategy: ICalculate) {
        this.strategy = strategy
    }

    setSalary(salary: number) {
        this.salary = salary
    }

    getBonus() {
        return this.strategy.calculate(this.salary)
    }
}
