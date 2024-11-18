import { UrlObject } from 'url';

export type Next_Page_Url = UrlObject;
// | __next_route_internal_types__.StaticRoutes
// | __next_route_internal_types__.DynamicRoutes;

export type Variant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
    | 'no-color';

export interface IProject {
    title: string;
    description: string;
    techStack: string[];
    image: string;
    slug: string;
    liveUrl?: string;
    sourceCode?: string;
}
