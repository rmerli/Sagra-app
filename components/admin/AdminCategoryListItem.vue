<script setup lang="ts">
import type { Category } from '~/types/types';
import type { PropType } from 'vue';
import AdminProductdListItem from './AdminProductdListItem.vue';

defineProps({
	category: {
		type: Object as PropType<Category>,
		required: true,
	},
})

const newProductOverlayOpen = ref(false);

</script>

<template>
	<div>
		<div class="border rounded-lg">
			<div class="flex items-center bg-gray-50 text-gray-950 h-20 border-b p-5 rounded-t-lg">
				<div class="flex-auto">
					<div class="font-bold text-lg">
						{{ category.name }}
					</div>
					<div class="font-light text-xs">
						Category description
					</div>
				</div>

				<div class="flex-initial">
					<div>
						<Button label="Add product" class="!text-gray-50" icon="pi pi-plus"
							@click="newProductOverlayOpen = true" />
					</div>
				</div>
			</div>
			<div class="card">
				<DataView :value="category.products" data-key="id">
					<template #list="slotProps">
						<div v-for="(item, index) in slotProps.items" :key="index">
							<AdminProductdListItem :product="item" />
						</div>
					</template>
				</DataView>
			</div>
			<div class="flex items-center bg-gray-50 hover:bg-blue-200 text-blue-700 h-20 p-5 rounded-b-lg gap-3 justify-center cursor-pointer"
				@click="newProductOverlayOpen = true">
				<span class="pi pi-plus"></span>
				Add
			</div>
		</div>
	</div>

	<Drawer v-model:visible="newProductOverlayOpen" header="My love" position="right"
		class="!w-full md:!w-80 lg:!w-[40rem]">
		<h1>
			New cucciolina
		</h1>

	</Drawer>
</template>

<style scoped></style>
