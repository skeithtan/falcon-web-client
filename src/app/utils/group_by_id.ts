import * as _ from "lodash";
import AggregatedEntities from "../interfaces/aggregated_entities";
import Entity from "../interfaces/entity";

export function groupById<E extends Entity>(
    entities: E[]
): AggregatedEntities<E> {
    const grouped = _.groupBy(entities, "id");
    const aggregatedEntities = new AggregatedEntities<E>();

    Object.keys(grouped).forEach(key => {
        aggregatedEntities[key] = grouped[key][0];
    });

    return aggregatedEntities;
}
