import React from "react";
import { AppLayout } from "@/layouts";
import { AccountWithMovements } from "./movement-list.vm";
import classes from "./movement-list.page.module.css";
import { getMovements } from "./api";
import { getAccountList } from "@/pages/account-list/api";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";
import { MovementListTableComponent } from "./components/movement-list-table.component";

export const MovementListPage: React.FC = () => {
  const [accountsWithMovements, setAccountsWithMovements] = React.useState<
    AccountWithMovements[]
  >([]);
  const [loading, setLoading] = React.useState(true);
  const accountId = window.location.pathname.split("/").pop();

  React.useEffect(() => {
    const fetchAllData = async () => {
      try {
        if (accountId && accountId !== "movements") {
          const movements = await getMovements(accountId);
          const accounts = await getAccountList();
          const account = accounts.find((acc) => acc.id === accountId);
          if (account) {
            setAccountsWithMovements([
              {
                ...account,
                movements: mapMovementListFromApiToVm(movements),
              },
            ]);
          }
        } else {
          const accounts = await getAccountList();
          const accountsWithMovementsPromises = accounts.map(
            async (account) => {
              const movements = await getMovements(account.id);
              return {
                ...account,
                movements: mapMovementListFromApiToVm(movements),
              };
            }
          );
          const results = await Promise.all(accountsWithMovementsPromises);
          setAccountsWithMovements(results);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [accountId]);

  if (loading) return <div>Loading...</div>;

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>
            {accountId && accountId !== "movements"
              ? `Movimientos cuenta ${accountsWithMovements[0]?.name}`
              : "Todos los movimientos"}
          </h1>
        </div>
        {accountsWithMovements.map((account) => (
          <div key={account.id} className={classes.accountSection}>
            <h2>Cuenta: {account.name}</h2>
            <MovementListTableComponent movementList={account.movements} />
          </div>
        ))}
      </div>
    </AppLayout>
  );
};
