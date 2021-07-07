export class Plants {
    color: string;
    currentWater: number = 0;
    type: string;
    minimumAmountWater: number;
    absordedWater: number;

    constructor(color: string, currentWater: number, type: string, minimumAmountWater: number, absordedWater: number) {
        this.color = color;
        this.currentWater = currentWater;
        this.type = type;
        this.minimumAmountWater = minimumAmountWater;
        this.absordedWater = absordedWater;
    }

}