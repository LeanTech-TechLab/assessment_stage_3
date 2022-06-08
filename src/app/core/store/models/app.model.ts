export interface AppState {
  filters: FiltersState;
}

export interface FiltersState {
  value: string;
  label: number;
  selectedValue: boolean;
}
