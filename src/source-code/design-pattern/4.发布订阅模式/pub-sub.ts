type IListenFunc = (...args: any[]) => void

export class PubSub {
    private readonly listenerMap: { [key: string]: IListenFunc[] } = {}

    /**
     * 监听事件
     * @param key 事件名称
     * @param fn 监听函数
     */
    listen(key: string, fn: IListenFunc) {
        if (!this.listenerMap[key]) {
            this.listenerMap[key] = []
        }

        this.listenerMap[key].push(fn)
    }

    /**
     * 触发事件
     * @param key 事件名称
     * @param args 事件参数
     */
    trigger(key: string, ...args: any[]) {
        const listeners = this.listenerMap[key]

        if (!listeners || listeners.length === 0) {
            return
        }

        for (const listener of listeners) {
            listener(...args)
        }
    }

    remove(key: string, fn?: IListenFunc) {
        // 没有监听
        if (!this.listenerMap[key] || this.listenerMap[key].length === 0) {
            return
        }

        // 移除所有的监听函数
        if (!fn) {
            this.listenerMap[key] = []
            return
        }

        // 过滤
        this.listenerMap[key] = this.listenerMap[key].filter((item) => item !== fn)
    }
}
