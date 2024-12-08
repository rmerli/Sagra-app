<template>
  <div class="s-admin-container">
    <AdminNavbar class="navbar" />
    <AdminSidebar class="sidebar p-4" />
    <div class="content bg-blue-50">
      <div class="main-layout">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.s-admin-container {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 60px 1fr;
  height: inherit;
}

.navbar {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}

.sidebar {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
}

.content {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;

  display: flex;
  justify-content: center;

  color: var(--p-gray-900);
}

.main-layout {
  max-width: 70vw;
  width: 100%;
}
</style>
