export default abstract class Entity {
    public id: number;

    constructor(plainObject: any) {
        Object.assign(this, plainObject);
    }
}
