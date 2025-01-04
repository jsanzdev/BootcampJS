export interface MovementVm {
  id: string;
  description: string;
  amount: number;
  balance: number;
  transaction: Date;
  realTransaction: Date;
  accountId: string;
}

export interface AccountWithMovements {
  id: string;
  iban: string;
  name: string;
  movements: MovementVm[];
}
