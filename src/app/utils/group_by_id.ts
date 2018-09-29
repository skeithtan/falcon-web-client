import * as _ from "lodash";
import Entity from "../interfaces/entity";

export function groupById<E extends Entity>(entities: E[]): Map<string, E> {
    const grouped = _.groupBy(entities, "id");
    const aggregatedEntities = new Map<string, E>();

    Object.keys(grouped).forEach(key => {
        aggregatedEntities.set(key, grouped[key][0]);
    });

    return aggregatedEntities;
}
