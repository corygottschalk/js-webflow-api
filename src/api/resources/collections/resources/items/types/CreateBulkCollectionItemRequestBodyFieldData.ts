/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../../../../../index";

export type CreateBulkCollectionItemRequestBodyFieldData =
    | Webflow.collections.SingleCmsItem
    /**
     * A list of CMS items to create */
    | Webflow.collections.CreateBulkCollectionItemRequestBodyFieldDataItem[];
