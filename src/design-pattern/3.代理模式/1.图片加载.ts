const cacheUrl = new Set()
class MockImage {
    onload: () => void
    innerSrc: string

    // 设置src
    set src(newSrc: string) {
        this.innerSrc = newSrc

        // 未被加载过
        if (!cacheUrl.has(this.innerSrc)) {
            // 模拟 加载
            setTimeout(() => {
                cacheUrl.add(this.innerSrc)
                this.onload && this.onload()
            }, 1000)
        }
    }
}

const myImage = (() => {
    const img = new MockImage()

    return {
        setSrc: (src) => {
            img.src = src
        },
        setOnload: (fn) => {
            img.onload = fn
        },
    }
})()

export const proxyImage = (() => {
    let imgSrc: string
    // 用一个隐藏的 img 去加载图片
    const img = new MockImage()
    // 加载完成后替换src
    img.onload = () => {
        myImage.setSrc(imgSrc)
    }

    return {
        setSrc: (src: string) => {
            // 用一个 loading 去展示
            myImage.setSrc('local image')
            imgSrc = src
        },
    }
})()
