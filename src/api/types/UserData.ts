/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../index";

/**
 * An object containing the User's basic info and custom fields
 */
export interface UserData {
    /** The name of the user */
    name?: string;
    /** The email address of the user */
    email?: string;
    /** Boolean indicating if the user has accepted the privacy policy */
    acceptPrivacy?: boolean;
    /** Boolean indicating if the user has accepted to receive communications */
    acceptCommunications?: boolean;
    /** Custom user attributes */
    additionalProperties?: string;
}
