<script lang='ts'>
    import type { PageData } from './$types';
    import Row from '$lib/components/table/Row.svelte';
    import Table from '$lib/components/table/Table.svelte';
    import Button from '$lib/components/button/Button.svelte';
    export let data: PageData;
    
</script>


    <div class="display-column">
        <Table thead='Structure Data'>
            <Row title='structure ID' data={data.structureId}/>
            <Row title='Data' data={data.data}/>
        </Table>
        <Button text="Display releases related to structure" ref="/releases/{data.structureId}" customClass="btn-read-structure"></Button>
    </div>

        






