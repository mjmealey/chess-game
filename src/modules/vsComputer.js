const vsComputer = () => {
  const gridElements = {
    gridContainerId: "gridContainer",
    div: "div",
    rowId: "rows",
    gridElementsClass: "gridElements",
  };


  const computerGrid = () => {
    console.log(gridElements.cellId);
    const gridContainer = document.getElementById(gridElements.gridContainerId);

    for (let i = 0; i < 8; i++) {
      const rows = document.createElement(gridElements.div);
      rows.id = gridElements.rowId;
      rows.classList.add(gridElements.gridElementsClass);
      gridContainer.appendChild(rows);

      for (let j = 0; j < 8; j++) {
        const cells = document.createElement(gridElements.div);
        cells.id = `cell-${i}-${j}`;
        cells.classList.add("cells");
        rows.appendChild(cells);
        console.log(cells.id);
      }
    }

    return { computerGrid };
  };

  return { computerGrid };
};
export default vsComputer;
