import update from "immutability-helper";
import { setWith, uniqBy } from "lodash";

const updateHelper: any = update;

updateHelper.extend("$removeItem", (item: any, items: any) => {
  const updatedItems = items.filter(({ id }: any) => item.id !== id);

  return [...updatedItems];
});

updateHelper.extend("$removeNode", (node: any, { edges, ...others }: any) => {
  return {
    ...others,
    edges: edges.filter(({ node: { id } }: any) => node.id !== id),
  };
});

updateHelper.extend("$prependNode", (node: any, { edges, ...others }: any) => {
  return {
    ...others,
    edges: [{ node }, ...edges],
  };
});

updateHelper.extend(
  "$prependNodeUnique",
  (node: any, { edges, ...others }: any) => {
    return {
      ...others,
      edges: uniqBy([{ node }, ...edges], "node.id"),
    };
  }
);

updateHelper.extend("$appendNode", (node: any, { edges, ...others }: any) => {
  return {
    ...others,
    edges: [...edges, { node }],
  };
});

updateHelper.extend(
  "$mergeConnection",
  ({ edges, ...others }: any, connection: any) => {
    return {
      ...connection,
      ...others,
      edges: [].concat(connection.edges, edges),
    };
  }
);

updateHelper.extend("$append", (node: any, array: any) => {
  return [...array, node];
});

updateHelper.extend("$prepend", (node: any, array: any) => {
  return [node, ...array];
});

updateHelper.extend("$remove", (node: any, array: any) => {
  return array.filter(({ id }: any) => node.id !== id);
});

updateHelper.extend(
  "$moveNodeIndex",
  (
    { oldIndex, newIndex }: { oldIndex: number; newIndex: number },
    { edges, ...other }: any
  ) => {
    const copy = [...edges];
    copy.splice(newIndex, 0, copy.splice(oldIndex, 1)[0]);
    return {
      ...other,
      edges: copy,
    };
  }
);

updateHelper.path = (object: any, path: string, changes: any) => {
  const toUpdate = {};
  setWith(toUpdate, path, changes);
  return updateHelper(object, toUpdate);
};

export default updateHelper;
