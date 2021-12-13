<template>
  <CovidSummary />
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component';

import CovidSummary from '../components/CovidSummary.vue';

@Options({ components: { CovidSummary } })
export default class Home extends Vue {}
</script>
