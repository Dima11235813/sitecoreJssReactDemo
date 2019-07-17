export const setJssState = props => {
  return props.rendering.dataSource === "available-in-connected-mode";
};
export const setEditingMode = props => {
  return props.context.pageEditing
}