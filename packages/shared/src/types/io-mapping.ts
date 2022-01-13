export interface IOMappingValue {
  source: string;
  target: string;
}

export interface IOMapping {
  input: IOMappingValue[];
  output: IOMappingValue[];
}
