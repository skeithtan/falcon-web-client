export default abstract class Entity {
    public id: string;

    constructor(plainObject: any) {
        Object.assign(this, plainObject);
    }
}
