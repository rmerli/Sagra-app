<script setup lang="ts">
import type { Menu } from '~/types/types';

definePageMeta({
	layout: 'admin',
	titleTemplate: "Sagre"
})

const items: Menu[] = [
	{
		id: "1",
		name: 'Menu1',
		startDate: new Date(),
		endDate: new Date(),
		categories: [
			{
				id: "category1",
				name: "category1",
				sort: 1,
				products: [
					{
						id: "product-1",
						name: "norcina",
						variants: [],
					}
				]
			}
		]
	},
	{
		id: "2",
		name: 'Menu2',
		startDate: new Date(),
		endDate: new Date(),
		categories: [
			{
				id: "category1",
				name: "category1",
				sort: 1,
				products: [
					{
						id: "product-1",
						name: "norcina",
						variants: [],
					}
				]
			}
		]
	},
]

</script>

<template>
	<main>
		<!--hero-->
		<div class="flex">
			<!--text-->
			<div class="flex-auto">
				<div class="h-20 flex items-end font-bold text-3xl">
					<h1>Menus</h1>
				</div>
				<div class="font-light text-sm">
					<p>Create, view, edit and delete menus</p>
				</div>

			</div>

			<!--actionButtons-->
			<div class="flex-initial flex items-center">
				<Button label="Add Menu" rounded />
			</div>


		</div>

		<div class="py-5">
			<AdminMenuList :menus=items />
		</div>
	</main>
</template>

<style scoped></style>
