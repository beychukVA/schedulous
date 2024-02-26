"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useScrollPosition(id) {
    const [position, setPosition] = (0, react_1.useState)({ x: 0, y: 0 });
    function onScroll(scrollable) {
        setPosition({ y: scrollable.scrollTop, x: scrollable.scrollLeft });
    }
    (0, react_1.useLayoutEffect)(() => {
        const scrollable = document.getElementById(id);
        if (!scrollable)
            return;
        scrollable.addEventListener("scroll", () => onScroll(scrollable));
        return () => {
            scrollable.removeEventListener("scroll", () => onScroll(scrollable));
        };
    }, []);
    return position;
}
exports.default = useScrollPosition;
