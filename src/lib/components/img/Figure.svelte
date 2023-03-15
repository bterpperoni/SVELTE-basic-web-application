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

</style>