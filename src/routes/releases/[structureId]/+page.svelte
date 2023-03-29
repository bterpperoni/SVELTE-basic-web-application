<script lang='ts'>
	import type { PageData } from "./$types";
    import H1 from "$lib/components/generic-components/title/H1.svelte";
    import Table from "$lib/components/table/Table.svelte";
    import Row from "$lib/components/table/Row.svelte";
    import Button from "$lib/components/generic-components/Button.svelte";
	import type { Release } from "../../../interface";
    import axios from "axios";
    export let data: PageData;

    function deleteRelease( param: number ): void{
        fetch(`http://localhost:8080/releases/${param}`, {
            method: 'DELETE'}).then(response => {
                if (response.ok) {
                    alert("Release deleted");
                    window.location.href = window.location.href;
                } else {
                    alert("Error deleting release");
                }
            });
    }

    async function cloneRelease( param: Release ): Promise<void>{
        console.log(param);

        await axios.post(`http://localhost:8080/releases`, param,  {
            headers: {
                'Content-Type': 'application/json'
            }
            }).then(response => {
                console.log(response);
                alert("Release cloned");
                window.location.href = window.location.href;
            }).catch(error => {
                console.error(error);
                alert("Error cloning release");
            });
        
        // await fetch(`http://localhost:8080/releases`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(param)
        // }).then(response => {
        //     if (response.ok) {
        //         alert("Release cloned");
        //         window.location.href = window.location.href;
        //     } else {
        //         alert("Error cloning release");
        //         console.log(response);
                
        //     }
        // });
    }
</script>

<div class="display">
    <H1 text="Releases"></H1>
    <div class="tables-release">
        {#each data.releases as release}
            <div class="row-release">
                <Table thead="Release {release.releaseId}">
                    <Row title="ID" data={release.releaseId}/>
                    <Row title="Starting Date" data={release.startingDate}/>
                    <Row title="End Date" data=""/>
                    <Row title="Status" data=""/>
                </Table>
                <div class="actions">
                    <Button text="Read" ref="#"></Button>
                    <button type="button" on:click={() => cloneRelease(release)}>Clone</button>
                    <Button text="Update" ref="#"></Button>
                    <button type="button" on:click={() => deleteRelease(release.releaseId)}>Delete</button>
                </div>
            </div>
        {/each}
    </div>
        
</div>
