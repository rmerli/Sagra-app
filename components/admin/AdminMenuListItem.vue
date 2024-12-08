<script setup lang="ts">
import type { Menu } from '~/types/types';
import type { PropType } from 'vue';

defineProps({
	menu: {
		type: Object as PropType<Menu>,
		required: true,
	},
})

const overlayOpen = ref(false);

</script>

<template>
	<div>
		<div class="h-24 flex bg-gray-50 border-solid border-blue-100 border items-center mb-6 p-6 rounded gap-4">
			<div class="flex-initialy font-bold">
				{{ menu.name }}
			</div>
			<div class="flex-auto">

			</div>

			<div class="flex-initial">
				<Button label="Edit" variant="outlined" @click="overlayOpen = true"></button>
			</div>
			<div class="flex-initial ">
				<NuxtLink :to="'/admin/menus/' + menu.id">
					<Button label="Manage" variant="outlined">
					</button>
				</NuxtLink>
			</div>

		</div>

		<Drawer v-model:visible="overlayOpen" header="Right Drawer" position="right"
			class="!w-full md:!w-80 lg:!w-[40rem]">
			<h1>
				{{ menu.name }}
			</h1>

		</Drawer>
	</div>
</template>

<style scoped></style>
