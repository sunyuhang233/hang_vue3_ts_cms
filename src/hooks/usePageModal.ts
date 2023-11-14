import PageModal from '@/components/page-modal/page-modal.vue'
import { ref } from 'vue'
type CallbackFnType = (data?: any) => void
function usePageModal(
  newCallback?: CallbackFnType,
  editCallback?: CallbackFnType
) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  function handleEditClick(itemData: any) {
    console.log('编辑', itemData)

    pageModalRef.value?.setModalVisible(false, itemData)
    if (editCallback) editCallback()
  }

  function handleNewClick() {
    console.log('新建')

    pageModalRef.value?.setModalVisible()
    if (newCallback) newCallback()
  }

  return { handleEditClick, handleNewClick, pageModalRef }
}

export default usePageModal
