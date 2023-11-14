<template>
  <div class="role">
    <page-search :search-config="searchConfig" />
    <page-content :content-config="contentConfig" />
  </div>
</template>
<script setup lang="ts">
import PageSearch from "@/components/page-search/page-search.vue";
import PageContent from "@/components/page-content/page-content.vue";
import searchConfig from "./config/search.config"
import contentConfig from "./config/content.config"
</script>
