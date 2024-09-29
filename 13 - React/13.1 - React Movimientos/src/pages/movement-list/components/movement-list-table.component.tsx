import React from "react";
import { MovementVm } from "../movement-list.vm";
import classes from "./movement-list-table.component.module.css";
import { MovementListItemComponent } from "./movement-list-item.component";

interface Props {
  movementList: MovementVm[];
}

export const MovementListTableComponent: React.FC<Props> = (props) => {
  const { movementList } = props;

  return (
    <>
      <div className={classes.gridContainer}>
        <div className={classes.headerTable}>
          <span className={classes.headerCell}>Cuenta</span>
          <span className={classes.headerCell}>Descripción</span>
          <span className={classes.headerCell}>Cantidad</span>
          <span className={classes.headerCell}>Balance</span>
        </div>

        {movementList.map((movement) => (
          <MovementListItemComponent
            key={movement.id}
            movementItem={movement}
          />
        ))}
      </div>
    </>
  );
};
