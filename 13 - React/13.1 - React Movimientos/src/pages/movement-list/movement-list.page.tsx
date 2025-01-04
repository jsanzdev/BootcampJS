import React from "react";
import { useParams } from "react-router-dom";
import { AppLayout } from "@/layouts";
import { MovementVm } from "./movement-list.vm";
import classes from "./movement-list.page.module.css";
import { getMovements } from "./api";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";
import { MovementListTableComponent } from "./components/movement-list-table.component";

export const MovementListPage: React.FC = () => {
  const [movementList, setMovementList] = React.useState<MovementVm[]>([]);
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    if (id) {
      getMovements(id).then((result) =>
        setMovementList(mapMovementListFromApiToVm(result))
      );
    }
  }, [id]);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos movimientos {id}</h1>
        </div>
        <MovementListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};
