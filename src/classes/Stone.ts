export enum StoneType {
  EMPTY = 0,
  BLACK = 1,
  WHITE = 2,
}

export class Stone {
  constructor(public type: StoneType) {}
}
