export enum ProgressEnum {
  none = 0,
  loading = 1,
  loaded = 2,
  failed = 3,
}

export class ReportProgress {
  state: ProgressEnum = ProgressEnum.none;
}
