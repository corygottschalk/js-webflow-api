/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";

export const SkuFieldDataEcSkuBillingMethod: core.serialization.Schema<
    serializers.SkuFieldDataEcSkuBillingMethod.Raw,
    Webflow.SkuFieldDataEcSkuBillingMethod
> = core.serialization.enum_(["one-time", "subscription"]);

export declare namespace SkuFieldDataEcSkuBillingMethod {
    type Raw = "one-time" | "subscription";
}
