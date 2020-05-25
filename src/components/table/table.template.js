const CODES = {
    A: 65,
    Z: 90
}

function toCell(content) {
    return `
    <div class="cell" contenteditable>${content}</div>
    `;
}

function toColumn(col) {
    return `<div class="column">${col}</div>`;
}

function createRow(content, i) {
    return `<div class="row">
                <div class="row-info">${i}</div>
                <div class="row-data">${content}</div>
            </div>`;
}

function toChar(_, i) {
    return String.fromCharCode(CODES.A + i);
}

export function createTable(rowsCount = 15) {
    const colsCount = CODES.Z - CODES.A + 1;
    const rows = [];
    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('');
    const cells = new Array(colsCount).fill('').map(toCell).join('');

    rows.push(createRow(cols, ''));

    for (let i = 0; i < rowsCount; i++) {
        rows.push(createRow(cells, ++i));
    }

    return rows.join('');
}