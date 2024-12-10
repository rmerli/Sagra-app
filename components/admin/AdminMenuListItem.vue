<script setup lang="ts">
import type { Menu } from '~/types/types';
import type { PropType } from 'vue';

defineProps({
	menu: {
		type: Object as PropType<Menu>,
		required: true,
	},
})

const formatDate = (date: Date): string => {
	const d = new Date(date);
	const day = String(d.getDate()).padStart(2, '0'); // Ensures two digits
	const month = String(d.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
	const year = d.getFullYear();
	return `${day}-${month}-${year}`;
};


const overlayOpen = ref(false);

</script>

<template>
	<div>
		<div class="h-24 flex bg-gray-50 border-solid border-blue-100 border items-center mb-6 p-6 rounded gap-4">
			<div class="flex-auto">
				<div class="font-bold">
					{{ menu.name }}
				</div>
				<div class="flex gap-5 ">
					<div class="text-sm">
						From: {{ formatDate(menu.startDate) }}
					</div>

					<div class="text-sm">
						to: {{ formatDate(menu.endDate) }}
					</div>
				</div>
			</div>
			<div class="flex-initial">
				<div class="flex gap-5">
					<Button label="Edit" variant="outlined" @click="overlayOpen = true"></button>
					<NuxtLink :to="'/admin/menus/' + menu.id">
						<Button label="Manage" variant="outlined">
						</button>
					</NuxtLink>

				</div>
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
