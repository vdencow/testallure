import { DataTable } from '@cucumber/cucumber';

export const singleRowTable = (dataTable: DataTable) => {
  return dataTable.raw()[0];
};

export const keyValueDataTable = (dataTable: DataTable) => {
  const content = dataTable.raw();
  const headers = content.shift();
  if (!headers) throw new Error('DataTable is empty');
  return content.reduce((rows: { [key: string]: string }[], row: string[], i: number) => {
    const object = headers.reduce((p, header) => ({ ...p, [header]: row[i] }), {});
    return [...rows, object];
  }, []);
};
