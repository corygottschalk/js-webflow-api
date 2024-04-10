/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "..";

/**
 * An object containing field info for a specific fieldID.
 */
export interface FormFieldValue {
    /** The field name displayed on the site */
    displayName?: string;
    /** The field type */
    type?: Webflow.FormFieldValueType;
    /** The placeholder text for the field */
    placeholder?: string;
    /** Whether the field is visible to the user */
    userVisible?: boolean;
}
