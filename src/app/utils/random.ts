export function randInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function getRandom(array: any[]) {
    return array[Math.floor(Math.random() * array.length)];
}