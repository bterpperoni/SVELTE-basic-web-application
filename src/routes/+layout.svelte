<script>
     import "../styles/main.css";
     import H1 from '$lib/components/title/H1.svelte';
     import Nav from '$lib/components/nav/Nav.svelte';
	import Button from "$lib/components/button/Button.svelte";
	import Figure from "$lib/components/img/Figure.svelte";
</script>

<Nav>
     <Button text="HOME" ref="/" customClass="btn-nav"></Button>
     <Button text="STRUCTURES" ref="/structure" customClass="btn-nav"></Button>
</Nav>
<Figure w='25vw' h='20vw' src='/src/lib/images/logo.png'></Figure>
<H1 text="Rulebook Manager"></H1>
<slot/>


