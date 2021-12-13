import {
  VuexModule, Module, Mutation, Action,
} from 'vuex-module-decorators';

import {
  ISummary, TSummaryDetail,
} from '@/models/covid';

const apiPath = 'https://api.covid19api.com';

@Module({ namespaced: true })
export default class CovidStore extends VuexModule {
  private _summaryDetail!: TSummaryDetail

  public get summaryDetail(): TSummaryDetail {
    return this._summaryDetail;
  }

  @Mutation
  private SET_SUMMARY_DETAIL(summaryDetail: TSummaryDetail): void {
    this._summaryDetail = summaryDetail;
  }

  @Action({ commit: 'SET_SUMMARY_DETAIL' })
  public setSummaryDetail(summaryDetail: TSummaryDetail): TSummaryDetail {
    return summaryDetail;
  }

  @Action
  public async getSummary(): Promise<ISummary> {
    const response = await fetch(`${apiPath}/summary`);

    const data = (await response.json()) as ISummary;

    return data;
  }
}
