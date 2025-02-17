/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../../../../index";

/**
 * @example
 *     {
 *         localeId: "65427cf400e02b306eaa04a0",
 *         properties: [{
 *                 propertyId: "a245c12d-995b-55ee-5ec7-aa36a6cad623",
 *                 text: "The Hitchhiker\u2019s Guide to the Galaxy"
 *             }, {
 *                 propertyId: "a245c12d-995b-55ee-5ec7-aa36a6cad627",
 *                 text: "<div><h3>Dont Panic!</h3><p>Always know where your towel is.</p></div>"
 *             }]
 *     }
 */
export interface ComponentPropertiesWrite {
    /**
     * Unique identifier for a specific locale. Applicable, when using localization.
     */
    localeId?: string;
    /** A list of component properties to update within the specified secondary locale. */
    properties: Webflow.ComponentPropertiesWritePropertiesItem[];
}
