
<nav class="nav">
    <slot/>
</nav>

<style>
    .nav{
        display: flex;
        justify-content: flex-start;
        margin:1rem;
        align-items: center;
        height: 10vh;
        background-color: var(--green);
        box-shadow: 0 0 0 2px white, 0 0 0 3px var(--green);
    }

</style>