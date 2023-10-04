// main.ts
/// <reference path="./js/crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "crud.js"; // Make sure to use the correct import path for the crud.js library

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {
  ...row,
  age: 23,
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
