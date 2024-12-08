<script setup lang="ts">
import type { Menu } from '~/types/types';
import type { PropType } from 'vue';

defineProps({
	menus: {
		type: Array as PropType<Menu[]>,
		required: true,
	},
})


</script>

<template>
	<div>
		<AdminMenuListItem v-for="menu in menus" :menu=menu key=menu.id />
	</div>
</template>

<style scoped></style>
