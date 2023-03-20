import type { Release } from "../../../interface";
import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
  const res = await fetch(`http://localhost:8080/releases/getAllReleasesByStructureId/${params.allReleasesByStructureId}`);
  const releases: Array<Release> = await res.json();
  return {releases};
}) satisfies PageLoad;