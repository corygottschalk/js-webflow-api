/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";
import { User } from "./User";

export const UserList: core.serialization.ObjectSchema<serializers.UserList.Raw, Webflow.UserList> =
    core.serialization.object({
        count: core.serialization.number().optional(),
        limit: core.serialization.number().optional(),
        offset: core.serialization.number().optional(),
        total: core.serialization.number().optional(),
        users: core.serialization.list(User).optional(),
    });

export declare namespace UserList {
    interface Raw {
        count?: number | null;
        limit?: number | null;
        offset?: number | null;
        total?: number | null;
        users?: User.Raw[] | null;
    }
}
