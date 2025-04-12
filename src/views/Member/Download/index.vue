<template>
  <iframe :src="objectUrl" type="application/pdf" class="main"></iframe>
  <!-- <iframe src="/public/test.pdf" type="application/pdf" class="main"></iframe> -->
</template>

<script setup lang="ts">
// import pdf from 'vue-pdf'
// import { getDocument } from 'pdfjs-dist'
import 'pdfjs-dist/build/pdf.worker.entry'
import { onMounted, ref } from 'vue'
import { postPDF } from './service'
// const canvasRef = ref<HTMLCanvasElement | null>(null)
let objectUrl = ref('')

onMounted(async () => {
  const res = await postPDF()
  objectUrl.value = res.msg
  console.log(res)
})
// onMounted(async () => {
//   const pdf = await getDocument(objectUrl.value).promise
//   const page = await pdf.getPage(1)
//   const canvas = canvasRef.value
//   if (!canvas) return
//   const context = canvas.getContext('2d')
//   const viewport = page.getViewport({ scale: 1.5 })

//   canvas.height = viewport.height
//   canvas.width = viewport.width
//   await page.render({ canvasContext: context!, viewport }).promise
// })
// onMounted(async () => {
//   const res = await postPDF()
//   const response = await fetch(res)
//   const blob = await response.blob()
//   blobUrl.value = URL.createObjectURL(blob)
// })
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  border: none;
  height: 100%;
}
</style>
