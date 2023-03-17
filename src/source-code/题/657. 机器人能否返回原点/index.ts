export function judgeCircle(moves: string): boolean {
    const { x, y } = moves.split('').reduce<{ x: number; y: number }>(
        (position, action) => {
            if (action === 'U') {
                position.y++
            }
            if (action === 'D') {
                position.y--
            }
            if (action === 'R') {
                position.x++
            }
            if (action === 'L') {
                position.x--
            }

            return position
        },
        { x: 0, y: 0 },
    )

    return x === 0 && y === 0
}
