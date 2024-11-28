<script setup>
import { BerandaService } from '@/service/BerandaService';
import { VuePDF, usePDF } from '@tato30/vue-pdf';
import { computed, onMounted, ref, watch } from 'vue';

const products = ref(null); // Original list of products
const filteredProducts = ref(null); // Filtered list for DataView
const picklistProducts = ref(null);
const selectedItem = ref(null);
const orderlistProducts = ref(null);
const page = ref(1);

const layout = ref('grid');
const value1 = ref(null); // Search input
const value = ref(null);
const value2 = ref(null);
const visible = ref(false);
const rows = ref(12); // Items per page
const filtersBy = ref([{ icon: 'pi pi-filter-fill', value: 'Left' }]);
const refresh = ref([{ icon: 'pi pi-refresh', value: 'Left' }]);
const dialogFilter = ref(false);
const pdfUrl = ref('');
const isLoading = ref(false); // Loading state
const { pdf, pages } = usePDF(pdfUrl);
const year = ref([]); // Array to hold available years
const selectedYear = ref({ start: null, end: null }); // Store selected year range
const defaultCategory = 'ILWP';

onMounted(() => {
    BerandaService.getBerandas().then((data) => {
        products.value = data; // Initial data, not sorted by datetime
        filteredProducts.value = data.filter((product) => product.category === defaultCategory);

        // Picklist products are not filtered by year
        picklistProducts.value = [data, []];
        orderlistProducts.value = data;

        // Filter data by defaultCategory before extracting years
        const filteredByCategory = data.filter((item) => item.category === defaultCategory);

        const years = Array.from(new Set(filteredByCategory.map((item) => item.year)))
            .sort((a, b) => parseInt(a, 10) - parseInt(b, 10)) // Ascending order
            .map((y) => ({ name: y, value: y }));

        year.value = years; // Set the sorted year options
    });
});

const reversedYear = computed(() => {
    return [...year.value].reverse(); // Reverse for descending order
});
const isWithin24Hours = (datetime) => {
    const itemDate = new Date(datetime.replace(' ', 'T') + ':00');
    const currentDate = new Date();
    const timeDifference = currentDate - itemDate;
    const hoursDifference = timeDifference / (1000 * 60 * 60);
    return hoursDifference <= 24;
};

const openDrawer = (item, index) => {
    selectedItem.value = item; // Simpan item yang dipilih
    visible.value = true; // Buka Drawer
    page.value = 1; // Reset ke halaman pertama
};

watch(selectedItem, async (newItem) => {
    if (newItem && newItem.pdfile) {
        isLoading.value = true; // Start loading
        pdfUrl.value = newItem.pdfile; // Update the PDF URL
        isLoading.value = false; // End loading
    }
});

const getSeverity = (product) => {
    switch (product.lang) {
        case 'EN':
            return 'success';
        case 'DUTCH':
            return 'warn';
        case 'ID':
            return 'danger';
        default:
            return null;
    }
};

const onSelectButtonClick = () => {
    dialogFilter.value = true; // Menampilkan dialog
};

watch(value1, (newValue) => {
    filterData(); // Reapply filter when the search term changes
});

const filterData = () => {
    let filteredData = products.value;

    // Filter by title search
    if (value1.value) {
        filteredData = filteredData.filter((product) => product.title.toLowerCase().includes(value1.value.toLowerCase()));
    }

    // Filter by year range (if selected)
    const startYear = selectedYear.value.start ? parseInt(selectedYear.value.start, 10) : null;
    const endYear = selectedYear.value.end ? parseInt(selectedYear.value.end, 10) : null;

    if (startYear || endYear) {
        filteredData = filteredData.filter((item) => {
            const itemYear = parseInt(item.year, 10); // Ensure item.year is a valid number

            // If both start and end years are defined
            if (startYear && endYear) {
                return itemYear >= startYear && itemYear <= endYear;
            }

            // If only startYear is defined
            if (startYear) {
                return itemYear >= startYear;
            }

            // If only endYear is defined
            if (endYear) {
                return itemYear <= endYear;
            }

            return true; // No year filter applied
        });
    }

    // Filter by defaultCategory
    filteredData = filteredData.filter((product) => product.category === defaultCategory);

    // Sort the filtered data by year in ascending order
    filteredData = filteredData.sort((a, b) => {
        return parseInt(a.year, 10) - parseInt(b.year, 10); // Sort by year in ascending order
    });

    // Update the filtered products display
    filteredProducts.value = filteredData;

    // Close the filter dialog
    dialogFilter.value = false;
};

const resetDataView = () => {
    // Reset to original products list, filtered by defaultCategory
    filteredProducts.value = products.value.filter((product) => product.category === defaultCategory);

    // Reset search input and year filters
    value1.value = null; // Optionally reset the search input if needed
    selectedYear.value = { start: null, end: null }; // Reset the year filters
};
</script>

<template>
    <div class="flex flex-col">
        <DataView :value="filteredProducts" :layout="layout" :paginator="true" :rows="rows" :pageLinkSize="3">
            <template #header>
                <div class="flex flex-wrap gap-2">
                    <IconField>
                        <InputIcon class="pi pi-search" />
                        <InputText v-model="value1" placeholder="Search" />
                    </IconField>
                    <SelectButton v-model="value2" :options="refresh" @change="resetDataView" optionLabel="value" dataKey="value">
                        <template #option="slotProps">
                            <i :class="slotProps.option.icon"></i>
                        </template>
                    </SelectButton>
                    <SelectButton v-model="value" :options="filtersBy" @change="onSelectButtonClick" optionLabel="value" dataKey="value" aria-labelledby="custom">
                        <template #option="slotProps">
                            <i :class="slotProps.option.icon"></i>
                        </template>
                    </SelectButton>
                </div>
            </template>
            <template #grid="slotProps">
                <div class="grid grid-cols-12 gap-0">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="col-span-6 sm:col-span-3 lg:col-span-2 p-2">
                        <div class="p-1 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded flex flex-col" @click="openDrawer(item, index)">
                            <div class="bg-surface-50 flex justify-center rounded">
                                <div class="relative mx-auto">
                                    <img class="rounded w-full" :src="`${item.image}`" :alt="item.title" style="max-width: 100%" />
                                    <span v-if="isWithin24Hours(item.datetime)" class="pi pi-spin pi-clock absolute text-green-500 text-sm" style="right: 4px; top: 4px"></span>
                                    <Tag :value="item.lang" :severity="getSeverity(item)" class="absolute dark:!bg-surface-900" style="left: 4px; top: 4px"></Tag>
                                </div>
                            </div>
                            <div class="pt-4">
                                <div class="flex flex-row justify-between items-start gap-1">
                                    <div>
                                        <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ item.author }}</span>

                                        <!-- <Tag icon="pi pi-download" value="100" class="mr-3 bg-surface-50 text-yellow-500 text-sm"></Tag> -->
                                    </div>
                                    <div class="p-1" style="border-radius: 15px">
                                        <div
                                            class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2"
                                            style="
                                                border-radius: 15px;
                                                box-shadow:
                                                    0px 1px 2px 0px rgba(0, 0, 0, 0.04),
                                                    0px 1px 2px 0px rgba(0, 0, 0, 0.06);
                                            "
                                        >
                                            <span class="text-surface-900 text-sm">{{ item.year }}</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex flex-col gap-2">
                                    <div class="text-sm font-medium mt-3">{{ item.title }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>

    <Drawer v-model:visible="visible" position="top" style="height: 100%">
        <template #container="{ closeCallback }">
            <div class="flex flex-col">
                <div class="flex items-center justify-between px-6 pt-4 shrink-0">
                    <span class="inline-flex items-center gap-2">
                        <span class="font-semibold text-md text-primary">{{ selectedItem?.title || 'No Title' }}</span>
                    </span>
                    <span>
                        <Button type="button" @click="closeCallback" icon="pi pi-times" rounded outlined></Button>
                    </span>
                </div>
            </div>

            <div class="flex-1 overflow-y-auto" style="padding-top: 15px; padding-left: 10px; padding-right: 10px">
                <div v-if="isLoading">
                    <p class="text-center">
                        <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
                        <br />Loading PDF...
                    </p>
                </div>
                <div v-else-if="pdfUrl && selectedItem?.pdfile">
                    <!-- Wrapper div for scroll -->
                    <div class="pdf-container" style="overflow-y: auto; max-height: 80vh">
                        <VuePDF :pdf="pdf" :page="page" fit-parent @loaded="onLoaded" />
                    </div>
                </div>
                <div v-else>
                    <p class="text-center">PDF not available for this item.</p>
                </div>
            </div>
            <span class="inline-flex justify-center gap-2" style="padding: 10px">
                <span class="font-semibold text-md text-primary">Author : {{ selectedItem?.author || 'No Title' }},</span>
                <span class="font-semibold text-md text-primary">{{ selectedItem?.year || 'No Title' }}</span>
            </span>

            <div class="mt-auto layout-footer">
                <Button rounded label="Prev" icon="pi pi-arrow-left" outlined @click="page = page > 1 ? page - 1 : page" />
                <span style="padding-left: 2px; padding-right: 2px">{{ page }} / {{ pages }}</span>
                <Button rounded label="Next" icon="pi pi-arrow-right" outlined @click="page = page < pages ? page + 1 : page" />
            </div>
        </template>
    </Drawer>
    <Dialog v-model:visible="dialogFilter" modal header="Filter Data" :style="{ width: '25rem' }">
        <div class="flex items-center gap-2 mb-8">
            <Select v-model="selectedYear.start" :options="year" optionLabel="name" optionValue="value" placeholder="Start Year" class="w-full md:w-56" />

            <span class="text-surface-500">to</span>
            <Select v-model="selectedYear.end" :options="reversedYear" optionLabel="name" optionValue="value" placeholder="End Year" class="w-full md:w-56" />
        </div>

        <div class="flex justify-end gap-2">
            <Button type="button" label="Batal" severity="secondary" @click="dialogFilter = false"></Button>
            <Button type="button" label="Filter" @click="filterData"></Button>
        </div>
    </Dialog>
</template>

<style>
.effect-glass {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border: 1px;
    border-radius: 8px;
    transition:
        transform 0.3s ease-in-out,
        box-shadow 0.3s ease-in-out;
}

.effect-glass:hover {
    transform: scale(1.05);
    box-shadow:
        0 10px 15px rgba(0, 0, 0, 0.1),
        0 4px 6px rgba(0, 0, 0, 0.08);
}

@media only screen and (max-width: 768px) and (orientation: portrait) {
    .sakai {
        display: none;
    }
}
</style>
