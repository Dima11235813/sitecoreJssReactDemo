export const setJssState = context => {
  const isInCodeFirstState =
    context.props.rendering.dataSource === "available-in-connected-mode";
  return isInCodeFirstState;
};
