/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";

export const UserAccessGroupsItemType: core.serialization.Schema<
    serializers.UserAccessGroupsItemType.Raw,
    Webflow.UserAccessGroupsItemType
> = core.serialization.enum_(["admin", "ecommerce"]);

export declare namespace UserAccessGroupsItemType {
    type Raw = "admin" | "ecommerce";
}
