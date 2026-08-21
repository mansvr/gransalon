import { parseAsString, parseAsStringLiteral } from "nuqs";

import { CITY_SLUGS, HALLS, TAGS } from "./exhibitors";

export const directoryParsers = {
  q: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
  hall: parseAsStringLiteral(HALLS),
  city: parseAsStringLiteral(CITY_SLUGS),
  tag: parseAsStringLiteral(TAGS),
  sort: parseAsStringLiteral(["az", "hall"] as const)
    .withDefault("az")
    .withOptions({ clearOnDefault: true }),
};
