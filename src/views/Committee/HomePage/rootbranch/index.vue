<template lang="">
    <el-aside style="width: 1000px; height: 100%; overflow: hidden">
        <el-card>
          <template #header>
            <div class="card-header">
              <div style="margin-bottom: 12px">
                <strong> 党组织结构树 </strong>
              </div>
              <div>
                <el-input
                  v-model="input1"
                  style="width: 240px"
                  placeholder="Type something"
                >
                  <template #prefix>
                    <el-icon class="el-input__icon">
                      <search />
                    </el-icon>
                  </template>
                </el-input>
              </div>
            </div>
          </template>
          <div>
            <template v-for="item in GroupTree" :key="item">
              <p class="GroupList">
                <svg-icon name="folder" style="margin-right: 10px"></svg-icon>
                {{ item }}
              </p>
            </template>
          </div>
        </el-card>
      </el-aside>
</template>
<script setup>

import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { usePnumberStore } from '@/stores/index.ts'
import { storeToRefs } from 'pinia'

const input1 = ref('')
const pnumberStore = usePnumberStore()
const { GroupTree } = pnumberStore
</script>
<style lang="">
    
</style>