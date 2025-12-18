<script setup lang="ts">
  import type { Button } from 'primevue';
  
  //#region Selection
  const selectedRow = ref();
  //#endregion

  //#region Data Fetching
  const { data: users } = await useFetch('/api/users');
  //#endregion

  //#region Context Menu
  const cm = ref();
  const menuModel = [
    { label: 'View', icon: 'pi pi-fw pi-search', command: (event: any) => console.log(event, selectedRow.value) },
    { label: 'Edit', icon: 'pi pi-fw pi-pencil', command: (event: any) => console.log(event, selectedRow.value) },
    { label: 'Delete', icon: 'pi pi-fw pi-trash', command: (event: any) => console.log(event, selectedRow.value) }
  ];

  const cm2 = ref();
  const menuModel2 = [
    { label: '123', icon: 'pi pi-fw pi-search', command: (event: any) => console.log(event, selectedRow.value) },
    { label: '456', icon: 'pi pi-fw pi-pencil', command: (event: any) => console.log(event, selectedRow.value) },
    { label: '789', icon: 'pi pi-fw pi-trash', command: (event: any) => console.log(event, selectedRow.value) }
  ];

  const onMenuRightClick = (event:any) => {
    event.originalEvent.preventDefault();
    event.originalEvent.stopPropagation();
    console.log(event);
    cm.value.show(event.originalEvent);
  };

  const buttonClick = (data: any, event:any) => {
    selectedRow.value = data.data;
    cm2.value.show(event);
  };
  //#endregion

  //#region Grouping
  const calculateNamesTotal = (name: string) => {
    return users.value?.filter((user: any) => user.name === name).length || 0;
  };
  //#endregion

  //#region Row Styling
  const rowStyle = (data: any) => {
    console.log(data);
    return { backgroundColor: data.name == 'Michal' ? '#4d4d0044' : '#4c4c4c44' };
  };
  //#endregion

  //#region Row Expansion
  const expandedRows = ref([]);

  const onRowExpand = (event: any) => {
    console.log('Row Expanded: ', event);
  };

  const onRowCollapse = (event: any) => {
    console.log('Row Collapsed: ', event);
  };

  const subRows = ref([
    { id: 1, name: 'test1', info: 'info1' },
    { id: 2, name: 'test2', info: 'info2' },
    { id: 3, name: 'test3', info: 'info3' }
  ]);
  //#endregion

</script>

<template>
  <div>
    <h1>Users List</h1>
    <context-menu ref="cm" :model="menuModel" @hide="selectedRow = null" />
    <context-menu ref="cm2" :model="menuModel2" @hide="selectedRow = null" />

    <data-table 
      :value="users" 
      contextMenu 
      @row-contextmenu="onMenuRightClick"
      v-model:context-menu-selection="selectedRow"
      group-rows-by="name"
      row-group-mode="subheader"
      size="small"
      :row-style="rowStyle"
      v-model:expandedRows="expandedRows"
      @rowExpand="onRowExpand" 
      @rowCollapse="onRowCollapse"      
      >
      
      <!-- #region Columns -->
      <column expander style="width: 5rem" />
      <column field="id" header="ID"></column>
      <column field="name" header="Name"></column>
      <column header="Name">
        <template #body="slotProps">
          {{ slotProps.data.name }}
        </template>
      </column>
      <column field="email" header="Email">
        <template #body="slotProps">
          <div>{{ slotProps.data.email }}
            <Button class="p-1 !text-xs" label="Add" severity="primary" @click="buttonClick(slotProps, $event)" icon="pi pi-plus" size="small" :badge="slotProps.data.id.toString()"></Button>
          </div>
        </template>
      </column>
      <!-- #endregion Columns -->

      <!-- #region Table-Templates -->
      <template #header>
        <h2 class="p-m-0">Users</h2>
      </template>

      <template #groupheader="slotProps">
        <div class="flex items-center gap-2 font-bold text-sm">
            {{ slotProps.data.name }}
        </div>
      </template>

      <template #groupfooter="slotProps">
          <div class="flex font-bold text-sm">Total of {{ slotProps.data.name }}: {{ calculateNamesTotal(slotProps.data.name) }}</div>
      </template>

      <template #footer>
        <div class="font-bold text-sm">In total there are {{ users ? users.length : 0 }} users.</div>
      </template>
      
      <template #expansion="slotProps">
        <div class="p-3">
          <h3>Details for {{ slotProps.data.name }}</h3>
          <data-table :value="subRows">
            <column field="id" header="ID"></column>
            <column field="name" header="Name"></column>
            <column field="info" header="Info"></column>
          </data-table>
        </div>
      </template>      
      <!-- #endregion Table-Templates -->
    </data-table>
  </div>
</template>
