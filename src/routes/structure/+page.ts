import type { Structure } from "../../interface";
import type { PageLoad } from './$types';
 
export const load = (async ({ fetch }) => {
  const res = await fetch(`http://localhost:8080/structures`);
  const options: Array<Structure> = await res.json();
  return {options};
}) satisfies PageLoad;
