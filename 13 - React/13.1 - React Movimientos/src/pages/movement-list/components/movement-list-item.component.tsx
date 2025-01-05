import React from "react";
import { MovementVm } from "../movement-list.vm";
import classes from "./movement-list-item.component.module.css";

interface Props {
  movementItem: MovementVm;
  isFirst: boolean;
}

export const MovementListItemComponent: React.FC<Props> = (props) => {
  const { movementItem, isFirst } = props;

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  return (
    <div className={classes.row}>
      <span className={`${classes.dataCell} ${classes.alignRight}`}>
        {formatDate(movementItem.transaction)}
      </span>
      <span className={`${classes.dataCell} ${classes.alignRight}`}>
        {formatDate(movementItem.realTransaction)}
      </span>
      <span className={classes.dataCell}>{movementItem.description}</span>
      <span
        className={`${classes.dataCell} ${classes.alignRight} ${
          movementItem.amount < 0 ? classes.negative : ""
        }`}
      >
        {movementItem.amount.toLocaleString("es-ES", {
          style: "currency",
          currency: "EUR",
        })}
      </span>
      <span
        className={`${classes.dataCell} ${classes.alignRight} ${
          movementItem.balance < 0 ? classes.negative : ""
        } ${isFirst ? classes.firstBalance : ""}`}
      >
        {movementItem.balance.toLocaleString("es-ES", {
          style: "currency",
          currency: "EUR",
        })}
      </span>
    </div>
  );
};
