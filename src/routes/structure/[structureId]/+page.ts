import type { Structure } from "../../../interface";
import type { PageLoad } from './$types';
 
export const load = (async ({ fetch, params }) => {
  const res = await fetch(`http://localhost:8080/getStructure/${params.structureId}`);
  const structure: Structure = await res.json();
  return structure;
}) satisfies PageLoad;