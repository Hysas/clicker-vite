export type AdminParams = {
  speed: number;
};

export type ScoreBoard = {
  score: number;
  incAmount: number;
  workers: ClickerWorker[];
};

export type ClickerWorker = {
  id: number;
  name: string;
  level: number;
  incAmount: number;
};

export type Upgrade = {
  id: number;
  level: number;
  incAmount: number;
};
