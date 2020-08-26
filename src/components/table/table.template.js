const CODES = {
    A: 65,
    Z: 90,
};

function toCell(content, i) {
    console.log('toCell', content);
    return `
    <div class="cell" contenteditable data-column="${toChar(null, i)}">${content}</div>
    `;
}

function toColumn(col) {
    return `
        <div class="column" data-type="resizable">
            ${col}
            <div class="col-resize" data-resize="col"></div>
        </div>`;
}

function createRow(content, i) {
    const resize = i ? '<div class="row-resize" data-resize="row"></div>' : '';

    return `<div class="row" data-type="resizable">
                <div class="row-info">
                    ${i}
                    ${resize}
                </div>
                <div class="row-data">${content}</div>
            </div>`;
}

function toChar(_, i) {
    return String.fromCharCode(CODES.A + i);
}

export function createTable(rowsCount = 15) {
    const colsCount = CODES.Z - CODES.A + 1;
    const rows = [];
    const cols = new Array(colsCount).fill('').map(toChar).map(toColumn).join('');
    const cells = new Array(colsCount).fill('').map(toCell).join('');

    rows.push(createRow(cols, ''));

    for (let i = 0; i < rowsCount; i++) {
        rows.push(createRow(cells, ++i));
    }

    return rows.join('');
}
