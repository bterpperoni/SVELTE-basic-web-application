<script>
     import "../styles/main.css";
     import Title from '$lib/components/generic-components/title/H1.svelte';
     import Nav from '$lib/components/nav/Nav.svelte';
	import Button from "$lib/components/generic-components/Button.svelte";
	import Figure from "$lib/components/img/Figure.svelte";
</script>

<Nav>
     <Button text="HOME" ref="/" customClass="btn-nav"></Button>
     <Button text="STRUCTURES" ref="/structure" customClass="btn-nav"></Button>
</Nav>
<Figure custClass='pasfigure' w='25vw' h='20vw' src='src\images\logo.png'></Figure>
<Title text="Rulebook Manager"></Title>
<slot/>
