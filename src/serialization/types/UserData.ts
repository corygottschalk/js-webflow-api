/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";
import { UserDataData } from "./UserDataData";

export const UserData: core.serialization.ObjectSchema<serializers.UserData.Raw, Webflow.UserData> =
    core.serialization.object({
        data: UserDataData.optional(),
    });

export declare namespace UserData {
    interface Raw {
        data?: UserDataData.Raw | null;
    }
}
