/** 原地交换 */
export function swap<T>(arr: T[], sourceIndex: number, targetIndex: number) {
    const tmp = arr[sourceIndex];
    arr[sourceIndex] = arr[targetIndex];
    arr[targetIndex] = tmp;

    return arr;
}

/**
 * 使用异或交换位置（只对数字有效，不然还得做类型转换）
 * a = 甲 , b = 乙
 * a = a ^ b => a = 甲 ^ 乙，b = 乙
 * b = a ^ b => b = 甲 ^ 乙 ^ 乙 = 甲
 * a = a ^ b => a = 甲 ^ 乙 ^ 甲 => 乙
 * @returns
 */
export function swapByXOR<T>(
    arr: number[],
    sourceIndex: number,
    targetIndex: number
) {
    if (sourceIndex === targetIndex) {
        return arr;
    }
    arr[sourceIndex] ^= arr[targetIndex];
    arr[targetIndex] ^= arr[sourceIndex];
    arr[sourceIndex] ^= arr[targetIndex];

    return arr;
}
