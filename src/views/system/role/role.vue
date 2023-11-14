<template>
  <div class="role">
       <page-search
      :search-config="searchConfig"
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    />
    <page-content
      :content-config="contentConfig"
      ref="contentRef"
      @new-click="handleNewClick"
      @edit-click="handleEditClick"
    />
    <page-modal
      :modal-config="modalConfig"
      ref="pageModalRef"
    >
    </page-modal>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import PageSearch from "@/components/page-search/page-search.vue";
import PageContent from "@/components/page-content/page-content.vue";

import searchConfig from "./config/search.config"
import contentConfig from "./config/content.config"
import modalConfig from "./config/modal.config"
import usePageContent from '@/hooks/usePageContent'
import usePageModal from "@/hooks/usePageModal";
// 逻辑关系
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()

const { pageModalRef, handleNewClick, handleEditClick } = usePageModal(
)



</script>
./config/modal.config
