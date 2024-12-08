<script setup>
import { ref } from "vue";

const items = ref([
	{
		label: 'Products',
		icon: 'material-icons mi-lunch-dining',
		route: '/admin/products'
	},
	{
		label: 'Categories',
		icon: 'pi pi-book',
		route: '/admin/categories'
	},
	{
		label: 'Menus',
		icon: 'material-icons mi-menu-book',
		route: '/admin/menus'
	}
]);
</script>
<template>
	<div class="card flex justify-center">
		<PanelMenu :model="items" class="w-full md:w-80">
			<template #item="{ item }">
				<router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
					<a v-ripple class="flex items-center cursor-pointer text-surface-700 dark:text-surface-0 px-4 py-2"
						:href="href" @click="navigate">
						<span :class="item.icon" />
						<span class="ml-2">{{ item.label }}</span>
					</a>
				</router-link>
				<a v-else v-ripple
					class="flex items-center cursor-pointer text-surface-700 dark:text-surface-0 px-4 py-2"
					:href="item.url" :target="item.target">
					<span :class="item.icon" />
					<span class="ml-2">{{ item.label }}</span>
					<span v-if="item.items" class="pi pi-angle-down text-primary ml-auto" />
				</a>
			</template>
		</PanelMenu>
	</div>
</template>
