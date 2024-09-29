import React from "react";
import { AppLayout } from "@/layouts";
import { MovementVm } from "./movement-list.vm";
import classes from "./movement-list.page.module.css";
import { getMovements } from "./api";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";
import { MovementListTableComponent } from "./components/movement-list-table.component";

export const MovementListPage: React.FC = () => {
  const [movementList, setMovementList] = React.useState<MovementVm[]>([]);
  const accountId = "1";

  React.useEffect(() => {
    getMovements(accountId).then((result) =>
      setMovementList(mapMovementListFromApiToVm(result))
    );
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Movimientos cuenta `AccountId`</h1>
        </div>
        <MovementListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};
