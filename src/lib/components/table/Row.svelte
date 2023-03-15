<script lang='ts'>
    export let data: null|string;
    export let title: string;
</script>

<tr>
    <th scope="row">{title}</th>
    <td>{data}</td>
</tr>

<style>
    tr, th+td{
        border:2px solid var(--dark-green);
        font-size: 2.5vh;
    }

    
</style>