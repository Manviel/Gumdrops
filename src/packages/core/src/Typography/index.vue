<script setup>
import { computed } from 'vue'

defineOptions({ name: 'StyledTypography' })

const props = defineProps({
	tag: { type: String, default: 'p' },
	variant: { type: String, default: 'body' },
	size: { type: String, default: 'md' }
})

const classes = computed(() => [
	'gd-typography',
	`gd-typography--${props.variant}`,
	`gd-typography--${props.size}`
])
</script>

<template>
	<component :is="props.tag" :class="classes">
		<slot />
	</component>
</template>

<style scoped>
.gd-typography {
	margin: 0;
	color: #111827;
}

.gd-typography--title {
	font-weight: 700;
	font-size: 1.25rem;
}

.gd-typography--lead {
	font-size: 1.05rem;
	color: #374151;
}

.gd-typography--muted {
	color: #6b7280;
}

.gd-typography--body {
	font-size: 1rem;
}

.gd-typography--sm {
	font-size: 0.85rem;
}

.gd-typography--md {
	font-size: 1rem;
}

.gd-typography--lg {
	font-size: 1.15rem;
}
</style>
