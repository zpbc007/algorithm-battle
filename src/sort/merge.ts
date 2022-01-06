export function mergeSort(arr: number[]) {
    sort(arr, 0, arr.length - 1);

    return arr;
}

function sort(arr: number[], left: number, right: number) {
    if (left < right) {
        const mid = left + ((right - left) >> 1);
        // 排序左侧
        sort(arr, left, mid);
        // 排序右侧
        sort(arr, mid + 1, right);
        // 合并结果
        merge(arr, left, mid, right);
    }
}

function merge(arr: number[], left: number, mid: number, right: number) {
    let leftPoint = left;
    let rightPoint = mid + 1;
    const tmpArr: number[] = [];

    while (leftPoint <= mid && rightPoint <= right) {
        if (arr[leftPoint] < arr[rightPoint]) {
            tmpArr.push(arr[leftPoint++]);
        } else {
            tmpArr.push(arr[rightPoint++]);
        }
    }

    // 左侧剩余
    while (leftPoint <= mid) {
        tmpArr.push(arr[leftPoint++]);
    }

    // 右侧剩余
    while (rightPoint <= right) {
        tmpArr.push(arr[rightPoint++]);
    }

    // 放回原数组中
    tmpArr.forEach((value, index) => {
        arr[index + left] = value;
    });
}
