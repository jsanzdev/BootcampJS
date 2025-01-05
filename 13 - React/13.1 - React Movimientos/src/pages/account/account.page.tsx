import React from "react";
import { useNavigate } from "react-router-dom";
import { AppLayout } from "@/layouts";
import { CreateAccountVm } from "../account-list/account-list.vm";
import { saveAccount } from "../account-list/api";
import { appRoutes } from "@/core/router";
import classes from "./account.page.module.css";

export const AccountPage: React.FC = () => {
  const navigate = useNavigate();
  const [account, setAccount] = React.useState<CreateAccountVm>({
    name: "",
    type: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await saveAccount(account);
      navigate(appRoutes.accountList);
    } catch (error) {
      console.error("Error creating account:", error);
    }
  };

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Nueva Cuenta</h1>
        </div>
        <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.formField}>
            <label htmlFor="name">Alias</label>
            <input
              id="name"
              type="text"
              value={account.name}
              onChange={(e) => setAccount({ ...account, name: e.target.value })}
              required
              placeholder="Cuenta Personal"
            />
          </div>
          <div className={classes.formField}>
            <label htmlFor="type">Tipo de Cuenta</label>
            <select
              id="type"
              value={account.type}
              onChange={(e) => setAccount({ ...account, type: e.target.value })}
              required
            >
              <option value="">Seleccionar tipo</option>
              <option value="Ahorro">Ahorro</option>
              <option value="Nómina">Nómina</option>
              <option value="Inversión">Inversión</option>
            </select>
          </div>
          <div className={classes.buttonContainer}>
            <button
              type="button"
              className={classes.cancelButton}
              onClick={() => navigate(appRoutes.accountList)}
            >
              Cancelar
            </button>
            <button type="submit" className={classes.submitButton}>
              Guardar
            </button>
          </div>
        </form>
      </div>
    </AppLayout>
  );
};
