export interface ColumnInterface {
  field: string;
  name: string;
  value?: (value: any) => string;
}

export interface TableProps {
  data: any[];
  columns: ColumnInterface[];
  isLoading?: boolean;
  isFetchMore?: boolean;
  handleFetchMore?: () => void;
}
