/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";

export const SkuFieldDataEcSkuSubscriptionPlanInterval: core.serialization.Schema<
    serializers.SkuFieldDataEcSkuSubscriptionPlanInterval.Raw,
    Webflow.SkuFieldDataEcSkuSubscriptionPlanInterval
> = core.serialization.enum_(["day", "week", "month", "year"]);

export declare namespace SkuFieldDataEcSkuSubscriptionPlanInterval {
    type Raw = "day" | "week" | "month" | "year";
}
