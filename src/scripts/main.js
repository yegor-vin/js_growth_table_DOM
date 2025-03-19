'use strict';

const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');

const table = document.querySelector('body');
const blueTable = document.querySelector('table');

table.addEventListener('click', (e) => {
  if (e.target === appendColumn) {
    removeColumn.disabled = false;

    document.querySelectorAll('tr').forEach((row) => {
      const newCell = document.createElement('td');

      row.appendChild(newCell);

      if (row.querySelectorAll('td').length > 9) {
        appendColumn.disabled = true;
      }
    });
  }

  if (e.target === removeColumn) {
    appendColumn.disabled = false;

    document.querySelectorAll('tr').forEach((row) => {
      const lastChild = row.lastChild;

      lastChild.remove();

      if (row.querySelectorAll('td').length <= 2) {
        removeColumn.disabled = true;
      }
    });
  }

  if (e.target === appendRow) {
    removeRow.disabled = false;

    const newRow = document.createElement('tr');

    newRow.innerHTML = document.querySelector('tr').innerHTML;

    blueTable.appendChild(newRow);

    if (blueTable.querySelectorAll('tr').length > 9) {
      appendRow.disabled = true;
    }
  }

  if (e.target === removeRow) {
    appendRow.disabled = false;

    const lastRowChild = blueTable.lastChild;

    lastRowChild.remove();

    const rowsLeft = document.querySelectorAll('tr');

    if (rowsLeft.length <= 2) {
      removeRow.disabled = true;
    }
  }
});
