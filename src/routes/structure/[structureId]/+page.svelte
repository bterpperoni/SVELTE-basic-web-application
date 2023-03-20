<script lang='ts'>
    import type { PageData } from './$types';
    import Row from '$lib/components/table/Row.svelte';
    import Table from '$lib/components/table/Table.svelte';
    import Button from '$lib/components/generic-components/Button.svelte';
    export let data: PageData;
    
</script>

<div class="table-structure">
    <Table thead='Structure Data'>
        <Row title='structure ID' data={data.structureId}/>
        <Row title='Data' data={data.data}/>
    </Table>
</div>
<Button text="Display releases related to structure" ref="/releases/{data.structureId}"></Button>

<style>
    .table-structure{
        margin: 0 auto;
        width: 50vw;
    }
</style>


