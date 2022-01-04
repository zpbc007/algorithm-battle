/** 原地交换 */
export function swap<T>(arr: T[], sourceIndex: number, targetIndex: number) {
    const tmp = arr[sourceIndex];
    arr[sourceIndex] = arr[targetIndex];
    arr[targetIndex] = tmp;

    return arr;
}

export function swapByXOR<T>(
    arr: number[],
    sourceIndex: number,
    targetIndex: number
) {
    arr[sourceIndex] ^= arr[targetIndex];
    arr[targetIndex] ^= arr[sourceIndex];
    arr[sourceIndex] ^= arr[targetIndex];

    return arr;
}
