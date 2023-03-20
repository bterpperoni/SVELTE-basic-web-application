<script lang='ts'>
    export let data: null|string;
    export let title: string;
</script>

<tr>
    <th scope="row">{title}</th>
    <td>{data}</td>
</tr>

<style>
td,
th {
    border: 1px solid rgb(3, 3, 3, 0.2);
    padding: 0.75rem 2rem;
}

td {
    text-align: center;
    background-color: var(--light-green);
}

tr{
    background-color: var(--green);
}
</style>