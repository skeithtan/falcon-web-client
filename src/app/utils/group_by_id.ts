import * as _ from "lodash";
import Entity from "../interfaces/entity";

export function groupById<E extends Entity>(
    entities: E[],
    idKey: string = "id"
): Map<number, E> {
    const grouped = _.groupBy(entities, "id");
    const aggregatedEntities = new Map<number, E>();

    Object.keys(grouped)
        // Convert key to number
        .map((key: string) => Number(key))
        .forEach((key: number) => {
            aggregatedEntities.set(key, grouped[key][0]);
        });

    return aggregatedEntities;
}
