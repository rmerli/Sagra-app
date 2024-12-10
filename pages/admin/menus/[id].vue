<script setup lang="ts">
import MenuService from '~/services/MenuService';
import type { Menu } from '~/types/types';
const route = useRoute()

definePageMeta({
	layout: 'admin',
	titleTemplate: "Sagre"
})

const menu: Menu | null = MenuService.getMenu(route.params.id as string)

</script>

<template>
	<main>
		<!--hero-->
		<div class="flex">
			<!--text-->
			<div class="flex-auto">
				<div class="h-20 flex items-end font-bold text-3xl">
					{{ menu?.name }}
				</div>
				<div class="font-light text-sm">
					<p>Manage your menu</p>
				</div>

			</div>

			<!--actionButtons-->
			<div class="flex-initial flex items-center">
				<Button label="Add Category" rounded />
			</div>
		</div>

		<div class="py-5">
			<AdminCategoryList v-if="menu !== null" :categories=menu?.categories />
		</div>
	</main>
</template>

<style scoped></style>
