/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";
import { ImageNodeImage } from "./ImageNodeImage";

export const ImageNode: core.serialization.ObjectSchema<serializers.ImageNode.Raw, Webflow.ImageNode> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        image: ImageNodeImage.optional(),
        attributes: core.serialization.record(core.serialization.string(), core.serialization.string()).optional(),
    });

export declare namespace ImageNode {
    interface Raw {
        id?: string | null;
        image?: ImageNodeImage.Raw | null;
        attributes?: Record<string, string> | null;
    }
}
