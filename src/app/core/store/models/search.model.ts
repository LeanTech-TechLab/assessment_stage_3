export interface SearchState {
  historyList: RegisterModel[];
}

export interface RegisterModel {
  type: string;
  name: string;
  rangeYear: string;
  searchDate: Date;
}
