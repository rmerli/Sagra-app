<script setup lang="ts">
import type { Product } from '~/types/types';
import type { PropType } from 'vue';

defineProps({
	product: {
		type: Object as PropType<Product>,
		required: true,
	},
})

const overlayOpen = ref(false);


</script>

<template>
	<div>
		<div class="cursor-pointer flex items-center bg-gray-50 hover:bg-blue-200 text-gray-950 h-20 p-5 border-b"
			@click="overlayOpen = true">
			<div class="flex-auto flex items-center ">
				{{ product.name }}
			</div>
			<div class="flex-initial">
				<Button icon="pi pi-trash" :outlined="true" @click.stop="$emit('removeProduct', product)" />
			</div>
		</div>
	</div>

	<Drawer v-model:visible="overlayOpen" :header="product.name" position="right"
		class="!w-full md:!w-80 lg:!w-[40rem]">
		<h1>
			{{ product.name }}
		</h1>
	</Drawer>
</template>

<style scoped></style>
