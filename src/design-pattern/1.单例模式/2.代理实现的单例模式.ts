const CreateUser = function(name: string) {
    this.name = name
    this.say()
}

CreateUser.prototype.say = function() {
    console.log(this.name)
}

export const ProxySingletonCreateUser: (name: string) => void = (() => {
    let instance
    return (name: string) => {
        if (!instance) {
            instance = new CreateUser(name)
        }

        return instance
    }
})()
