export interface AccountVm {
  id: string;
  iban: string;
  name: string;
  balance: number;
  lastTransaction: Date;
}
