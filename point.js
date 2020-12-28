export default class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static calDistance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx, dy);
    }
}