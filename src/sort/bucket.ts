/**
 * 桶排序
 * 根据数据情况分组
 */
export function bucketSort(arr: number[]) {
    // 获取数组中最大的位数 1000 -> 4
    const digit = arr.reduce((acc, item) => {
        const itemLen = `${item}`.length;

        return itemLen > acc ? itemLen : acc;
    }, 0);

    // 每一位进行一轮排序
    for (let i = 0; i < digit; i++) {
        // 每个数字出现的次数
        const count: number[] = new Array(10).fill(0);

        // 记录当前位出现次数
        arr.forEach((item) => {
            count[getDigit(item, i)]++;
        });

        // 转为累加数组
        count.reduce((acc, item, index, arr) => {
            return (arr[index] = acc + item);
        }, 0);

        // 排序后的结果
        const copy = arr.reduceRight<number[]>((acc, item) => {
            acc[--count[getDigit(item, i)]] = item;

            return acc;
        }, []);

        // 复制到原数组中
        copy.forEach((item, index) => (arr[index] = item));
    }

    return arr;
}

function getDigit(num: number, digit: number) {
    return Math.floor(num / Math.pow(10, digit)) % 10;
}
