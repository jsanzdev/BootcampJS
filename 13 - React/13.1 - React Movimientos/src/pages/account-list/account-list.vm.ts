export interface AccountVm {
  id: string;
  iban: string;
  type: string;
  name: string;
  balance: number;
  lastTransaction: Date;
}

export interface CreateAccountVm {
  name: string;
  type: string;
}
