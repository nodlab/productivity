<template>
	<div
	:class="classes"
	:style="styles.join(';')">
		<div v-if="!icon" class="label">{{ label }}</div>
		<div v-else>{{ iconName }}</div>
	</div>
</template>

<script lang="ts" setup>
import { computed, defineProps, withDefaults } from 'vue'

interface IProps {
	size?: 'small' | 'medium' | 'large';
	variant?: 'primary';
	width?: number;
	label?: string;
	icon?: boolean;
	iconName?: string;
}

const props = withDefaults(defineProps<IProps>(), {
	size: 'medium',
	variant: 'primary',
	icon: false,
})

const classes = computed(()=>{
	return [
		'p-button',
		props.size,
		props.icon ? 'icon' : '',
		props.variant,
	]
})

const styles = computed(()=>{
	const arrayStyles = []

	if (!props.icon){
		arrayStyles.push('width:'+ (props.width? props.width + 'px' : '150px'))
	} 

	return arrayStyles
})
</script>

<style scoped lang="sass">
.p-button
	display: flex
	align-items: center
	justify-content: center
	border-radius: 6px
	box-sizing: border-box
	transition: opacity 0.3s ease

	&:hover
		cursor: pointer
		opacity: 0.8

	.label
		color: #FFFFFF
		font-family: 'Inter', sans-serif

.primary
	background-color: $primary

.small
	height: 28px
	font-size: 12px
	padding: 0 12px

	&.icon
		width: 28px

.medium
	height: 38px
	font-size: 14px
	padding: 0 16px

	&.icon
		width: 38px

.large
	height: 44px
	font-size: 16px
	padding: 0 20px

	&.icon
		width: 44px

.icon
	border-radius: 50%
</style>