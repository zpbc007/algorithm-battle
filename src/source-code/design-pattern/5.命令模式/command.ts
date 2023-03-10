class Person {
    // 存放命令
    eventArr: string[] = []
    attack = () => {
        this.eventArr.push('attack')
    }

    defense = () => {
        this.eventArr.push('defense')
    }

    jump = () => {
        this.eventArr.push('jump')
    }

    clear = () => {
        this.eventArr = []
    }
}

class PersonCommand {
    commandStack = []
    person: Person
    constructor() {
        this.person = new Person()
    }

    mackCommand(type: 'attack' | 'defense' | 'jump') {
        const command = this.person[type]

        command()
        this.commandStack.push(command)
    }

    replay() {
        this.person.clear()
        while (this.commandStack.length) {
            this.commandStack.shift()()
        }
    }
}
