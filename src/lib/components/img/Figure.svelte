<script lang='ts'>
    export let src: string;
    export let caption: string = '';
    export let h:string;
    export let w: string;
    export let custClass: string = 'figure';
</script>

<figure class="figure {custClass}">
    <img {src} alt={src} style="max-width:{w}; max-height:{h}">
    <figcaption>{caption}</figcaption>
</figure>

<style>
    .figure{
    border-top:2px solid var(--green);
    padding:1rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    }

    .figure img{
        width: 100%;
        height: auto;
        padding:1rem;
        border-bottom: 2px solid var(--green);
    }
</style>