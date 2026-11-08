<template>
	<svg class="icon-svg" :width="width" :height="height" aria-hidden="true">
		<use :xlink:href="getName"></use>
	</svg>
</template>
<script>
export default {
	props: {
		name: {
			type: String,
			required: true
		},
		width: {
			type: String
		},
		height: {
			type: String
		}
	},
	computed: {
		getName() {
			return `#${this.name}`
		}
	}
}
</script>

<style>
.icon-svg {
	width: .2rem;
	height: .2rem;
	vertical-align: middle;
	margin-top: -.04rem;
	fill: currentColor;
	overflow: hidden;
}
</style>