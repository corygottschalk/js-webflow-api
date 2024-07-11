/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";

export const CollectionItemListPagination: core.serialization.ObjectSchema<
    serializers.CollectionItemListPagination.Raw,
    Webflow.CollectionItemListPagination
> = core.serialization.object({
    limit: core.serialization.number().optional(),
    offset: core.serialization.number().optional(),
    total: core.serialization.number().optional(),
});

export declare namespace CollectionItemListPagination {
    interface Raw {
        limit?: number | null;
        offset?: number | null;
        total?: number | null;
    }
}
