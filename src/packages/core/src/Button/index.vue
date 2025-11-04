<script setup>
import { computed } from 'vue'

defineOptions({ name: 'StyledButton' })

const props = defineProps({
	variant: { type: String, default: 'primary' },
	size: { type: String, default: 'md' },
	disabled: { type: Boolean, default: false },
	type: { type: String, default: 'button' }
})

const emit = defineEmits(['click'])

const classes = computed(() => [
	'gd-btn',
	`gd-btn--${props.variant}`,
	`gd-btn--${props.size}`
])

function onClick(e) {
	if (props.disabled) {
		e.preventDefault()
		return
	}
	emit('click', e)
}
</script>

<template>
	<button :type="props.type" :class="classes" :disabled="props.disabled" @click="onClick">
		<slot />
	</button>
</template>

<style scoped>
.gd-btn {
	font-family: inherit;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 6px;
	padding: 0.45rem 0.9rem;
	cursor: pointer;
	transition: background-color 0.12s ease, opacity 0.12s ease, transform 0.08s ease;
	border: 1px solid transparent;
	user-select: none;
}

.gd-btn:active {
	transform: translateY(1px);
}

.gd-btn[disabled] {
	opacity: 0.6;
	cursor: not-allowed;
}

.gd-btn--primary {
	background: #3b82f6;
	color: #fff;
}

.gd-btn--primary:hover {
	background: #2563eb;
}

.gd-btn--secondary {
	background: #f3f4f6;
	color: #111827;
	border-color: #e5e7eb;
}

.gd-btn--secondary:hover {
	background: #e5e7eb;
}

.gd-btn--link {
	background: transparent;
	color: #3b82f6;
	padding: 0;
	border: none;
}

.gd-btn--link:hover {
	text-decoration: underline;
}

.gd-btn--sm {
	font-size: 0.8rem;
	padding: 0.25rem 0.5rem;
	border-radius: 4px;
}

.gd-btn--md {
	font-size: 0.95rem;
}

.gd-btn--lg {
	font-size: 1.05rem;
	padding: 0.6rem 1.1rem;
}
</style>
