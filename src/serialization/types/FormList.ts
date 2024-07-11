/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";
import { Form } from "./Form";
import { Pagination } from "./Pagination";

export const FormList: core.serialization.ObjectSchema<serializers.FormList.Raw, Webflow.FormList> =
    core.serialization.object({
        forms: core.serialization.list(Form).optional(),
        pagination: Pagination.optional(),
    });

export declare namespace FormList {
    interface Raw {
        forms?: Form.Raw[] | null;
        pagination?: Pagination.Raw | null;
    }
}
