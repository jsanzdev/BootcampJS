export interface MovementVm {
  id: string;
  description: string;
  amount: number;
  balance: number;
  transaction: Date;
  realtransaction: Date;
  accountId: string;
}
