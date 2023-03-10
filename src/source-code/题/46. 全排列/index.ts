export function permute(nums: number[], track: number[] = [], result: number[][] = []): number[][] {
    if (nums.length === track.length) {
         result.push([...track])
         return result
    }

    nums.forEach((item) => {
        if (track.includes(item)) {
            return 
        }

        track.push(item)
        permute(nums, track, result)
        track.splice(track.indexOf(item), 1)
    })

    return result
};