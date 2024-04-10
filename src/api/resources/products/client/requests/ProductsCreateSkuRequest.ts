/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../../../..";

/**
 * @example
 *     {
 *         skus: [{
 *                 id: "580e63fc8c9a982ac9b8b745",
 *                 cmsLocaleId: "653ad57de882f528b32e810e",
 *                 lastPublished: new Date("2023-03-17T18:47:35.000Z"),
 *                 lastUpdated: new Date("2023-03-17T18:47:35.000Z"),
 *                 createdOn: new Date("2023-03-17T18:47:35.000Z"),
 *                 fieldData: {
 *                     name: "Blue T-shirt",
 *                     slug: "t-shirt-blue",
 *                     price: {
 *                         value: 100,
 *                         unit: "USD"
 *                     },
 *                     quantity: 10
 *                 }
 *             }]
 *     }
 */
export interface ProductsCreateSkuRequest {
    publishStatus?: Webflow.PublishStatus;
    /** An array of the SKU data your are adding */
    skus: Webflow.Sku[];
}
