const useTooltipPosition = (element) => {
  let tooltipContainer = element.getBoundingClientRect();
  let tooltipHalfwidth = 75;
  let tooltipCenter =
    tooltipContainer.left +
    ((tooltipContainer.right - tooltipContainer.left) / 2 - tooltipHalfwidth);
  let tooltipTop = Math.floor(tooltipContainer.bottom);

  return { left: `${Math.floor(tooltipCenter)}px`, top: `${tooltipTop}px` };
};

export default useTooltipPosition;
