/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";

export const PublishStatus: core.serialization.Schema<serializers.PublishStatus.Raw, Webflow.PublishStatus> =
    core.serialization.enum_(["staging", "live"]);

export declare namespace PublishStatus {
    type Raw = "staging" | "live";
}
