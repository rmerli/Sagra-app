<script setup lang="ts">
import type { Category, Product } from '~/types/types';
import type { PropType } from 'vue';

defineProps({
	categories: {
		type: Array as PropType<Category[]>,
		required: true,
	},
})


</script>

<template>
	<div class="flex flex-col gap-6">
		<AdminCategoryListItem v-for="category in categories" :category=category />
	</div>
</template>

<style scoped></style>
