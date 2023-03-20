<script lang="ts">
	import type { PageData } from "./$types";
    export let data: PageData;
</script>

<select id="select">
    {#each data.releases as release}
        <option value={release.releaseId}>Release {release.releaseId}</option>
    {/each}
</select>