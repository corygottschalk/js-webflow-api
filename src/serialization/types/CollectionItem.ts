/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";
import { CollectionItemFieldData } from "./CollectionItemFieldData";

export const CollectionItem: core.serialization.ObjectSchema<serializers.CollectionItem.Raw, Webflow.CollectionItem> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        cmsLocaleId: core.serialization.string().optional(),
        lastPublished: core.serialization.string().optional(),
        lastUpdated: core.serialization.string().optional(),
        createdOn: core.serialization.string().optional(),
        isArchived: core.serialization.boolean().optional(),
        isDraft: core.serialization.boolean().optional(),
        fieldData: CollectionItemFieldData,
    });

export declare namespace CollectionItem {
    interface Raw {
        id?: string | null;
        cmsLocaleId?: string | null;
        lastPublished?: string | null;
        lastUpdated?: string | null;
        createdOn?: string | null;
        isArchived?: boolean | null;
        isDraft?: boolean | null;
        fieldData: CollectionItemFieldData.Raw;
    }
}
