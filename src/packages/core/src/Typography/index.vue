<script setup>
import { computed } from 'vue'

defineOptions({ name: 'StyledTypography' })

const props = defineProps({
	tag: { type: String, default: 'p' },
	variant: { type: String, default: 'body' },
	size: { type: String, default: 'md' }
})

// Compute classes: always include the base and variant class. We will use a
// CSS custom property (`--gd-typography-font-size`) to control the rendered
// font-size so variant-defined sizes won't be accidentally overridden by
// additional utility size classes.
const classes = computed(() => {
	return ['gd-typography', `gd-typography--${props.variant}`]
})

// Compute the inline style that sets the CSS custom property used by the
// component's styles. Use a small lookup and template for body sizes so the
// logic is compact and easy to read.
const styleVars = computed(() => {
	const variantMap = {
		title: 'var(--gd-type-title)',
		lead: 'var(--gd-type-lead)'
	}

	if (props.variant === 'body') {
		// default to `md` when size is missing or unknown
		const size = props.size === 'sm' || props.size === 'lg' ? props.size : 'md'
		return { '--gd-typography-font-size': `var(--gd-type-body-${size})` }
	}

	return { '--gd-typography-font-size': variantMap[props.variant] || 'var(--gd-font-size-base)' }
})
</script>

<template>
	<component :is="props.tag" :class="classes" :style="styleVars">
		<slot />
	</component>
</template>

<style scoped>
.gd-typography {
	font-size: var(--gd-typography-font-size, var(--gd-font-size-base));
}

.gd-typography--title {
	font-weight: 700;
}

.gd-typography--lead {
	color: #374151;
}

.gd-typography--muted {
	color: #6b7280;
}
</style>
