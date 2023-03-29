<!----------------------------------------SCRIPT---------------------------------------->
<script lang='ts'>
    import type { PageData } from './$types';
	import Dropdown from "$lib/components/dropdown/Dropdown.svelte";
    import Button from "$lib/components/button/Button.svelte";

    export let data: PageData;
    
    let selected: number;

    </script>
<!----------------------------------------HTML------------------------------------------>
<div class="display-column">
    <Dropdown bind:selected label="STRUCTURE'S LIST: " options={data.options}></Dropdown>
    <Button text="DISPLAY STRUCTURE" ref="/structure/{selected}" customClass="btn-read-structure"></Button>
</div>


