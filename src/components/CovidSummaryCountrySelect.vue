<template>
  <select
    v-model="selectedCountry"
    class="form-select mt-10 block w-full border p-3 rounded"
    @change="$emit('changed', selectedCountry)"
  >
    <option value="0">
      Select Country
    </option>
    <option
      v-for="country in countriesOptions"
      :key="country.CountryCode"
      :value="country"
    >
      {{ country.Country }}
    </option>
  </select>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import { ICountrySummary } from '@/models/covid';

@Options({
  emits: ['changed'],
})
export default class CovidCountrySelect extends Vue {
  @Prop({ type: Array, required: true }) countriesOptions!: Array<ICountrySummary>

  selectedCountry: ICountrySummary | null = null
}
</script>
