import Entity from "./entity";

export default class AggregatedEntities<E extends Entity> {
    [key: number]: E;

    get isEmpty(): boolean {
        return Object.values(this).length === 0;
    }

    get isNotEmpty(): boolean {
        return !this.isEmpty;
    }

    get length(): number {
        return Object.values(this).length;
    }

    get values(): E[] {
        return Object.values(this);
    }
}
