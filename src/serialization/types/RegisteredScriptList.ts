/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";

export const RegisteredScriptList: core.serialization.ObjectSchema<
    serializers.RegisteredScriptList.Raw,
    Webflow.RegisteredScriptList
> = core.serialization.object({
    registeredScripts: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).CustomCodeHostedResponse))
        .optional(),
});

export declare namespace RegisteredScriptList {
    interface Raw {
        registeredScripts?: serializers.CustomCodeHostedResponse.Raw[] | null;
    }
}
