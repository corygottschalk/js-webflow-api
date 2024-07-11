/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";

export const OrderDownloadFilesItem: core.serialization.ObjectSchema<
    serializers.OrderDownloadFilesItem.Raw,
    Webflow.OrderDownloadFilesItem
> = core.serialization.object({
    id: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
    url: core.serialization.string().optional(),
});

export declare namespace OrderDownloadFilesItem {
    interface Raw {
        id?: string | null;
        name?: string | null;
        url?: string | null;
    }
}
