/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";

export const ProductFieldDataEcProductType: core.serialization.Schema<
    serializers.ProductFieldDataEcProductType.Raw,
    Webflow.ProductFieldDataEcProductType
> = core.serialization.enum_([
    "ff42fee0113744f693a764e3431a9cc2",
    "f22027db68002190aef89a4a2b7ac8a1",
    "c599e43b1a1c34d5a323aedf75d3adf6",
    "b6ccc1830db4b1babeb06a9ac5f6dd76",
]);

export declare namespace ProductFieldDataEcProductType {
    type Raw =
        | "ff42fee0113744f693a764e3431a9cc2"
        | "f22027db68002190aef89a4a2b7ac8a1"
        | "c599e43b1a1c34d5a323aedf75d3adf6"
        | "b6ccc1830db4b1babeb06a9ac5f6dd76";
}
