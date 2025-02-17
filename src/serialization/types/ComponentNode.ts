/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";
import { ComponentProperty } from "./ComponentProperty";

export const ComponentNode: core.serialization.ObjectSchema<serializers.ComponentNode.Raw, Webflow.ComponentNode> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        componentId: core.serialization.string().optional(),
        propertyOverrides: core.serialization.list(ComponentProperty).optional(),
    });

export declare namespace ComponentNode {
    interface Raw {
        id?: string | null;
        componentId?: string | null;
        propertyOverrides?: ComponentProperty.Raw[] | null;
    }
}
