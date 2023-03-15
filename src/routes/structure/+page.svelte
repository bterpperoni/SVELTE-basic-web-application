<!----------------------------------------SCRIPT---------------------------------------->
<script lang='ts'>
    import type { PageData } from './$types';
	import Dropdown from "$lib/components/generic-components/Dropdown.svelte";
    import Button from "$lib/components/generic-components/Button.svelte";

    export let data: PageData;
    
    let selected: number;

    </script>
<!----------------------------------------HTML------------------------------------------>
<div class="display-structures">
    <Dropdown bind:selected label="STRUCTURE'S LIST: " options={data.options}></Dropdown>
    <Button text="DISPLAY STRUCTURE" ref="/structure/{selected}" customClass="btn-read-structure"></Button>
</div>

<!----------------------------------------STYLE----------------------------------------->

<style>

</style>