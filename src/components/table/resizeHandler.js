import { $ } from '@core/dom';

export default function resizeHandler($root, e) {
    const resizer = $(e.target);
    const heightResizer = resizer.$el.style.height;
    const { height: heightRoot, width: widthRoot } = $root.getCoords();
    const resizable = resizer.$el.closest('[data-type="resizable"]');
    const coords = resizable.getBoundingClientRect();
    const columnName = resizable.textContent.trim();
    const isColTypeResizer = resizer.$el.dataset.resize === 'col';

    document.onmousemove = (e) => {
        if (isColTypeResizer) {
            const delta = e.pageX - coords.right;
            const width = coords.width + delta + 'px';

            resizer.css({
                height: heightRoot + 'px',
                opacity: 1,
            });
            resizable.style.width = width;
        } else {
            const delta = e.pageY - coords.bottom;
            const height = coords.height + delta + 'px';

            resizer.css({
                width: widthRoot + 'px',
                opacity: 1,
            });

            resizable.style.height = height;
        }
    };

    document.onmouseup = (e) => {
        document.onmousemove = null;
        document.onmouseup = null;
        if (isColTypeResizer) {
            const delta = e.pageX - coords.right;
            const width = coords.width + delta + 'px';
            $root.$el.querySelectorAll(`[data-column="${columnName}"]`).forEach((cell) => {
                cell.style.width = width;
            });
        }
        resizer.css({
            height: heightResizer,
            opacity: 0,
        });
    };
}
