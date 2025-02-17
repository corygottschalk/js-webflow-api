/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../index";

/**
 * Update text property overrides of a component instance
 */
export interface ComponentInstanceNodePropertyOverridesWrite {
    /** Node UUID */
    nodeId: string;
    /** A list of component instance properties to override within the specified secondary locale. */
    propertyOverrides: Webflow.ComponentInstanceNodePropertyOverridesWritePropertyOverridesItem[];
}
