<template>
  <main v-if="!loading">
    <CovidSummaryTitle
      :title="title"
      :date="summary.Date"
    />
    <CovidSummaryContent :summary-detail="summaryDetail" />
    <CovidSummaryCountrySelect
      ref="countrySelect"
      :countries-options="summary.Countries"
      @changed="handleSetSummaryDetail"
    />
    <div class="flex justify-center">
      <button
        class="bg-blue-800 mt-10 rounded-lg text-white p-4"
        @click="backToGlobalSummary"
      >
        See Global Summary
      </button>
    </div>
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

import {
  ICountrySummary, ISummary, TSummaryDetail,
} from '@/models/covid';

import CovidSummaryTitle from './CovidSummaryTitle.vue';
import CovidSummaryContent from './CovidSummaryContent.vue';
import CovidSummaryCountrySelect from './CovidSummaryCountrySelect.vue';

const CovidStore = namespace('covid');

@Options({
  components: { CovidSummaryTitle, CovidSummaryContent, CovidSummaryCountrySelect },
})
export default class CovidSummary extends Vue {
  declare $refs: {
    countrySelect: CovidSummaryCountrySelect
  }

  title!: string

  loading = false;

  delay = 500

  summary!: ISummary

  @CovidStore.Getter
  summaryDetail!: () => TSummaryDetail

  @CovidStore.Action
  getSummary!: () => Promise<ISummary>

  @CovidStore.Action
  setSummaryDetail!: (summaryDetail: TSummaryDetail) => TSummaryDetail

  handleSetSummaryDetail(countryDetail: number | ICountrySummary): void {
    if (countryDetail === 0) {
      this.setGlobalSummary(this.summary);
    } else {
      const countrySummary = (countryDetail as ICountrySummary);

      this.setSummaryDetail(countrySummary);
      this.title = countrySummary.Country;
    }
  }

  setGlobalSummary(summary: ISummary): void {
    this.setSummaryDetail(summary.Global);
    this.title = 'Global';
  }

  backToGlobalSummary(): void {
    this.$refs.countrySelect.reset();

    this.setGlobalSummary(this.summary);
  }

  created(): void {
    this.loading = true;

    setTimeout(async () => {
      this.summary = await this.getSummary();

      this.setGlobalSummary(this.summary);

      this.loading = false;
    }, this.delay);
  }
}
</script>
