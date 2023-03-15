
<script lang='ts'>
    export let thead: String;
</script>

<table class="table">
    <thead>
        {thead}
    </thead>
    <tbody>
        <slot/>
    </tbody>
</table>

<style>
    .table{
        width: 100%;
        border-collapse: collapse;
        border: 1px solid var(--dark-green);
        margin: 0 auto;
    }
    .table thead{
        background-color: var(--dark-green);
        color: var(--white);
        font-size: 1.5rem;
        font-weight: 50;
        text-align: center;
    }
    .table tbody{
        text-align: center;
    }
</style>