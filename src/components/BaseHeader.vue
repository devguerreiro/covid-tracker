<template>
  <header>
    <div class="bg-blue-800 text-white p-4 mb-10">
      <h1 class="text-center text-2xl md:text-5xl mb-3 font-bold">
        <i class="fas fa-viruses" />
        Covid-19 Tracker
      </h1>
      <p class="text-center">
        Api by
        <a
          href="http://covid19api.com"
          class="text-blue-300"
        >
          <strong>
            covid19api.com
          </strong>
        </a>
      </p>
    </div>
  </header>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class BaseHeader extends Vue {}
</script>
