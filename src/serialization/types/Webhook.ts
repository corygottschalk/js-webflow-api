/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";
import { TriggerType } from "./TriggerType";

export const Webhook: core.serialization.ObjectSchema<serializers.Webhook.Raw, Webflow.Webhook> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        workspaceId: core.serialization.string().optional(),
        siteId: core.serialization.string().optional(),
        triggerType: TriggerType.optional(),
        filter: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
        lastTriggered: core.serialization.date().optional(),
        createdOn: core.serialization.date().optional(),
        url: core.serialization.string().optional(),
    });

export declare namespace Webhook {
    interface Raw {
        id?: string | null;
        workspaceId?: string | null;
        siteId?: string | null;
        triggerType?: TriggerType.Raw | null;
        filter?: Record<string, unknown> | null;
        lastTriggered?: string | null;
        createdOn?: string | null;
        url?: string | null;
    }
}
