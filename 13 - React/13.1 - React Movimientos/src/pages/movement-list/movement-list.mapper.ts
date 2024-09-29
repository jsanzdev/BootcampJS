import * as apiModel from "./api/movement-list.api-model";
import * as viewModel from "./movement-list.vm";

export const mapMovementListFromApiToVm = (
  movementList: apiModel.Movement[]
): viewModel.MovementVm[] =>
  movementList.map((movement) => ({
    id: movement.id,
    description: movement.description,
    amount: movement.amount,
    balance: movement.balance,
    transaction: new Date(movement.transaction),
    realtransaction: new Date(movement.realtransaction),
    accountId: movement.accountId,
  }));
