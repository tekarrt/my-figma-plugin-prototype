<script>
	import { GlobalCSS } from "figma-plugin-ds-svelte";
	import { Button, Input, Label, SelectMenu, Section } from "figma-plugin-ds-svelte";
	import style from "./style.css";

	let type;
	let color;
	let scale;

	let types = [
		{'value': 'block', 'label': 'Block', 'group': null, 'selected': true},
		{'value': 'avatar', 'label': 'Avatar', 'group': null},
		{'value': 'src', 'label': 'Search bar', 'group': null},
		{'value': 'article', 'label': 'Article', 'group': null},
	];
	let scales = [
		{'value': 1, 'label': 'x1', 'group': null, 'selected': true},
		{'value': 1.5, 'label': 'x1.5', 'group': null},
		{'value': 2, 'label': 'x2', 'group': null},
		{'value': 2.5, 'label': 'x2.5', 'group': null},
	];
	let colors = [
		{'value': {r: 0.7, g: 0.7, b: 0.7}, 'label': 'Gray', 'group': null, 'selected': true},
		{'value': {r: 0, g: 0, b: 0}, 'label': 'Black', 'group': null},
		{'value': {r: 1, g: 1, b: 1}, 'label': 'White', 'group': null},
	]

	function create() {
		parent.postMessage({ pluginMessage: {
			'type': type,
			'scale': scale,
			'color': color,
		} }, "*");
	}

	function cancel() {
		parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
	}
</script>

<div class="wrapper p-xxsmall">
	<Section>Type</Section>
	<SelectMenu bind:menuItems={types} bind:value={type}/>
	<Section>Scale</Section>
	<SelectMenu bind:menuItems={scales} bind:value={scale}/>
	<Section>Color</Section>
	<SelectMenu bind:menuItems={colors} bind:value={color}/>
	<div class="container_button">
		<Button class="container_button-btn" on:click={cancel} variant="secondary">Cancel</Button>
		<Button class="container_button-btn" on:click={create}>Create</Button>
	</div>
</div>

<style>
</style>
