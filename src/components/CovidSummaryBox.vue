<template>
  <div
    class="shadow-md bg-blue-100 p-10 text-center rounded"
    :class="{'bg-blue-200' : title === 'Deaths' }"
  >
    <h3 class="text-3xl text-blue-900 font-bold mb-4">
      {{ title }}
    </h3>
    <div class="text-2xl mb-4">
      <span class="font-bold">New:</span>
      {{ numberWithCommas(niu) }}
    </div>
    <div class="text-2xl mb-4">
      <span class="font-bold">Total:</span>
      {{ numberWithCommas(total) }}
    </div>
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({})
export default class CovidSummaryBox extends Vue {
  @Prop({ type: String, required: true }) title!: string

  @Prop({ type: Number, required: true }) niu!: number

  @Prop({ type: Number, required: true }) total!: number

  numberWithCommas(number: number): string {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
</script>
