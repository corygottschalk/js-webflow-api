/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "..";

/**
 * A Webflow form
 */
export interface Form {
    /** The Form name displayed on the site */
    displayName?: string;
    /** Date that the Form was created on */
    createdOn?: Date;
    /** Date that the Form was last updated on */
    lastUpdated?: Date;
    /** A list of form fields */
    fields?: Webflow.FormField[];
    /** Settings for form responses */
    responseSettings?: Webflow.FormResponseSettings;
    /** The unique id for the Form */
    id?: string;
    /** The unique id of the Site the Form belongs to */
    siteId?: string;
    /** The unique id corresponding to the site's Domain name */
    siteDomainId?: string;
    /** The unique id for the Page on which the Form is placed */
    pageId?: string;
    /** The user-visible name of the Page where the Form is placed */
    pageName?: string;
    /** The unique id of the Workspace the Site belongs to */
    workspaceId?: string;
}
