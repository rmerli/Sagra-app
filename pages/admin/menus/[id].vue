<script setup lang="ts">
import type { Menu } from '~/types/types';
const route = useRoute()

definePageMeta({
	layout: 'admin',
	titleTemplate: "Sagre"
})

const menu: Menu = {
	id: route.params.id as string,
	name: 'Menu' + route.params.id,
	startDate: new Date(),
	endDate: new Date(),
	categories: [
		{
			id: "category1",
			name: "Primi",
			sort: 1,
			products: [
				{
					id: "product-1",
					name: "Norcina",
					variants: [],
				},
				{
					id: "product-2",
					name: "Gnocchi",
					variants: [],
				},
				{
					id: "product-3",
					name: "Linguine",
					variants: [],
				},
			]
		},
		{
			id: "category2",
			name: "Secondi",
			sort: 2,
			products: [
				{
					id: "product-5",
					name: "Grigliata",
					variants: [],
				},
				{
					id: "product-6",
					name: "Tagliata",
					variants: [],
				},
				{
					id: "product-7",
					name: "Agnello",
					variants: [],
				},
				{
					id: "product-8",
					name: "Spiedino di pesce",
					variants: [],
				},
			]
		}
	]
}

</script>

<template>
	<main>
		<!--hero-->
		<div class="flex">
			<!--text-->
			<div class="flex-auto">
				<div class="h-20 flex items-end font-bold text-3xl">
					{{ menu.name }}
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
			<AdminCategoryList :categories=menu.categories />
		</div>
	</main>
</template>

<style scoped></style>
