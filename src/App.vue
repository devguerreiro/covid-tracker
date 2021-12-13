<template>
  <BaseHeader />
  <div class="container mx-auto">
    <router-view />
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component';

import BaseHeader from '@/components/BaseHeader.vue';

@Options({
  components: { BaseHeader },
})
export default class App extends Vue {}
</script>
