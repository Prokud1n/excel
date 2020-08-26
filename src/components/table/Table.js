import { ExcelComponent } from '@/core/ExcelComponent';
import { createTable } from './table.template';
import resizeHandler from '@/components/table/resizeHandler';
import isResizer from '@/utils/isResizer';

export class Table extends ExcelComponent {
    static className = 'excel__table';

    constructor($root) {
        super($root, {
            listeners: ['mousedown'],
        });
    }

    toHTML() {
        return createTable(20);
    }

    onMousedown(e) {
        if (isResizer(e)) {
            resizeHandler(this.$root, e);
        }
    }
}
