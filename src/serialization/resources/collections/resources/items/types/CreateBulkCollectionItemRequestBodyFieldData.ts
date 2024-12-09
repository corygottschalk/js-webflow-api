/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Webflow from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { SingleCmsItem } from "./SingleCmsItem";
import { CreateBulkCollectionItemRequestBodyFieldDataItem } from "./CreateBulkCollectionItemRequestBodyFieldDataItem";

export const CreateBulkCollectionItemRequestBodyFieldData: core.serialization.Schema<
    serializers.collections.CreateBulkCollectionItemRequestBodyFieldData.Raw,
    Webflow.collections.CreateBulkCollectionItemRequestBodyFieldData
> = core.serialization.undiscriminatedUnion([
    SingleCmsItem,
    core.serialization.list(CreateBulkCollectionItemRequestBodyFieldDataItem),
]);

export declare namespace CreateBulkCollectionItemRequestBodyFieldData {
    type Raw = SingleCmsItem.Raw | CreateBulkCollectionItemRequestBodyFieldDataItem.Raw[];
}
