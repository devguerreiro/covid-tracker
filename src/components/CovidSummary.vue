<template>
  <main v-if="!loading">
    <CovidSummaryTitle
      :title="title"
      :date="summary.Date"
    />
    <CovidSummaryContent :summary-detail="summaryDetail" />
    <CovidSummaryCountrySelect
      :countries-options="summary.Countries"
      @changed="handleSetSummaryDetail"
    />
  </main>
  <main v-else>
    <div class="flex flex-col justify-center items-center">
      <h2 class="text-2xl mb-4">
        Fetching Data
      </h2>
      <i class="fas fa-spinner fa-spin text-5xl" />
    </div>
  </main>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component';
import { namespace } from 'vuex-class';

import { ICountrySummary, ISummary, TSummaryDetail } from '@/models/covid';

import CovidSummaryTitle from './CovidSummaryTitle.vue';
import CovidSummaryContent from './CovidSummaryContent.vue';
import CovidSummaryCountrySelect from './CovidSummaryCountrySelect.vue';

const CovidStore = namespace('covid');

@Options({
  components: { CovidSummaryTitle, CovidSummaryContent, CovidSummaryCountrySelect },
})
export default class CovidSummary extends Vue {
  loading = false;

  delay = 500

  title!: string

  summary!: ISummary

  @CovidStore.Getter
  summaryDetail!: () => TSummaryDetail

  @CovidStore.Action
  getSummary!: () => Promise<ISummary>

  @CovidStore.Action
  setSummaryDetail!: (summaryDetail: TSummaryDetail) => TSummaryDetail

  handleSetSummaryDetail(countryDetail: ICountrySummary): void {
    this.setSummaryDetail(countryDetail);

    this.title = countryDetail.Country;
  }

  created(): void {
    this.loading = true;

    setTimeout(async () => {
      this.summary = await this.getSummary();

      this.title = 'Global';
      this.setSummaryDetail(this.summary.Global);

      this.loading = false;
    }, this.delay);
  }
}
</script>
