<template>
  <div class="grid md:grid-cols-2 gap-4">
    <CovidSummaryBox
      title="Cases"
      :niu="summaryDetail.NewConfirmed"
      :total="summaryDetail.TotalConfirmed"
    />
    <CovidSummaryBox
      title="Deaths"
      :niu="summaryDetail.NewDeaths"
      :total="summaryDetail.TotalDeaths"
    />
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import { ICountrySummary, IGlobalSummary } from '@/models/covid';
import CovidSummaryBox from './CovidSummaryBox.vue';

@Options({
  components: { CovidSummaryBox },
})
export default class CovidSummaryContent extends Vue {
  @Prop({ type: Object, required: true }) summaryDetail!: IGlobalSummary | ICountrySummary
}
</script>
