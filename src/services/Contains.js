import {
  MOVIELIST_DOMAIN,
  API_KEY,
  LANGUAGE_DOMAIN,
  SEARCH_DOMAIN,
} from "@env";

export const MOVIELIST_API =
  MOVIELIST_DOMAIN + API_KEY + LANGUAGE_DOMAIN + "&page=";
export const SEARCH_API = SEARCH_DOMAIN + API_KEY + "&query=";
