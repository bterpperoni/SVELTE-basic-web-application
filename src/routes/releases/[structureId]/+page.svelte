<script lang='ts'>
	import type { PageData } from "./$types";
    import H1 from "$lib/components/title/H1.svelte";
    import Table from "$lib/components/table/Table.svelte";
    import Row from "$lib/components/table/Row.svelte";
    import Button from "$lib/components/button/Button.svelte";
    import { cloneRelease, deleteRelease } from "$lib/typescript/httpRequest";
	import { timeToDate } from "$lib/typescript/service";

    export let data: PageData;
</script>

<div class="display-column">
    <H1 text="Releases related to Structure {data.releases[0].structureVersion}"></H1>
    <div class="div-tables">
        {#each data.releases as release}
            <div class="child-div-tables display-row">
                <Table thead="Release {release.releaseId}">
                    <Row title="ID" data={release.releaseId}/>
                    <Row title="Starting Date" data={timeToDate(release.startingDate)} />
                    <Row title="End Date" data=""/>
                    <Row title="Status" data=""/>
                </Table>
                <div class="actions display-column">
                    <Button text="Read" ref="#"></Button>
                    <Button text="Clone" doIt={() => cloneRelease(release)} />
                    <Button text="Delete" doIt={() => deleteRelease(release.releaseId)} />
                    <Button text="Update" ref="#"></Button>
                </div>
            </div>
        {/each}
    </div>     
</div>
