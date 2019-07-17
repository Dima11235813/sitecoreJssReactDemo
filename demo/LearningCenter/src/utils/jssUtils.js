export const setJssState = props => {
  const isInCodeFirstState = props.rendering.dataSource === "available-in-connected-mode";
  return isInCodeFirstState;
};
