/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../index";

/**
 * The SKU object
 */
export interface Sku {
    /** Unique identifier for the Product */
    id?: string;
    /** Identifier for the locale of the CMS item */
    cmsLocaleId?: string;
    /** The date the Product was last published */
    lastPublished?: Date;
    /** The date the Product was last updated */
    lastUpdated?: Date;
    /** The date the Product was created */
    createdOn?: Date;
    fieldData?: Webflow.SkuFieldData;
}
