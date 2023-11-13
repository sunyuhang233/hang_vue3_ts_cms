<template>
  <div class="role">
    <page-search :search-config="searchConfig" />
  </div>
</template>
<script setup lang="ts">
import PageSearch from "@/components/page-search/page-search.vue";
import searchConfig from "./config/search.config.ts"
</script>
