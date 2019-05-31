/**
 * 透明的单例模式
 * 通过闭包 保存 instance 引用
 * 在闭包内部创建 constructor
 * 问题：
 * 1. 构造函数逻辑复杂 负责了两件事 一个是确保实例唯一、一个是对线的初始化
 */

export const CreateUser = (() => {
    let instance
    const createUser: (name: string) => void = function(name) {
        if (instance) {
            return instance
        }
        this.name = name
        this.say()
        instance = this
    }

    createUser.prototype.say = function() {
        console.log(this.name)
    }

    createUser.prototype.constructor = CreateUser

    return createUser
})()
