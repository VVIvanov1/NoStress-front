export const getElementPosition = (element) => {
  let parentRect = element.getBoundingClientRect();
  let tooltipRectHalf = 75;
  let left = parentRect.left + (parentRect.width / 2 - tooltipRectHalf);
  let top = parentRect.bottom;

  return { top: `${top}px`, left: `${left}px` };
};
