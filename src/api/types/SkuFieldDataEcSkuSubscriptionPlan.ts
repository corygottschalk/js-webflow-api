/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "..";

export interface SkuFieldDataEcSkuSubscriptionPlan {
    /** Interval of subscription renewal */
    interval?: Webflow.SkuFieldDataEcSkuSubscriptionPlanInterval;
    /** Frequncy of billing within interval */
    frequency?: number;
    /** Number of days of a trial */
    trial?: number;
    plans?: Webflow.SkuFieldDataEcSkuSubscriptionPlanPlansItem[];
}
