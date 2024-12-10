<script setup lang="ts">
import type { Category, Product } from '~/types/types';
import type { PropType } from 'vue';
import ProductService from '~/services/ProductService';

const props = defineProps({
	category: {
		type: Object as PropType<Category>,
		required: true,
	},
})

var catProducts = ref(props.category.products)

const newProductOverlayOpen = ref(false);
const showQuickAdd = ref(false);
const products = ref(ProductService.getProductsByCategory(props.category.id).filter(item => !props.category.products.some(el => el.id === item.id)));
const selectedProduct = ref();

function addProduct(product: Product) {
	catProducts.value.push(product);
	products.value.splice(products.value.findIndex(item => item.id == product.id), 1)
	selectedProduct.value = null
}

function clearAddProductSelect() {
	selectedProduct.value = null
	showQuickAdd.value = false;
}

function removeProduct(product: Product) {
	catProducts.value.splice(catProducts.value.findIndex(item => item.id == product.id), 1)
	products.value.push(product);
}

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
				<DataView :value="catProducts" data-key="id" sort-field="name" :sort-order=1>
					<template #list="slotProps">
						<div v-for="(item, index) in slotProps.items" :key="index">
							<AdminProductListItem :product="item" @removeProduct="(p) => removeProduct(p)" />
						</div>
					</template>
				</DataView>
			</div>

			<div v-show="showQuickAdd == false"
				class="flex items-center bg-gray-50 hover:bg-blue-200 text-blue-700 h-20 p-5 rounded-b-lg gap-3 justify-center cursor-pointer"
				@click="showQuickAdd = true">
				<span class="pi pi-plus"></span>
				Add
			</div>
			<div v-show="showQuickAdd == true" class="flex items-center bg-gray-50 text-blue-700 h-20 p-5 rounded-b-lg gap-3
				justify-center">
				<Select v-model="selectedProduct" :options="products" overlay-class="max-w-64" :show-clear=true filter
					:filter-fields="['name']" optionLabel="name" placeholder="Select a Product" class="w-full md:w-64 ">
					<template #value="slotProps">
						<div v-if="slotProps.value" class="flex items-center">
							<div>{{ slotProps.value.name }}</div>
						</div>
						<span v-else>
							{{ slotProps.placeholder }}
						</span>
					</template>
					<template #option="slotProps">
						<div class="flex items-center">
							<div>{{ slotProps.option.name }}</div>
						</div>
					</template>
				</Select>
				<Button icon="pi pi-trash" outlined @click="clearAddProductSelect()" />
				<Button icon="pi pi-check" :disabled="selectedProduct == null" @click="addProduct(selectedProduct)" />
			</div>
		</div>
	</div>

	<Drawer v-model:visible="newProductOverlayOpen" header="Add a product" position="right"
		class="!w-full md:!w-80 lg:!w-[40rem]">

		<div v-for="(product) in products" :key=product.id>
			{{ product.name }}
		</div>

	</Drawer>
</template>

<style scoped></style>
