<template>
  <div class="text-center">
    <h2 class="text-3xl font-bold">
      {{ title }}
    </h2>
    <p class="text-2xl mt-4 mb-10">
      {{ timestamp }}
    </p>
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import moment from 'moment';

@Options({})
export default class CovidSummaryTitle extends Vue {
  @Prop({ type: String, required: true }) title!: string

  @Prop({ type: String, required: true }) date!: string

  get timestamp(): string {
    return moment(this.date).format('MMMM Do YYYY, h:mm:ss a');
  }
}
</script>
