/* PropsOf<T>
 *
 *   Extract prop types from a function or class Component T
 *
 */
type PropsOf<T> = T extends
  | React.ComponentType<infer P>
  | React.Component<infer P>
  ? P
  : T;

/* MapOf<T, K = string>
 *
 *   Create an object type where keys are value in conditional T
 *
 */
type MapOf<T, K = string> = { [key in T]: K };

/* MapOfGraphInterface<T, K = string>
 *
 *   Create an object type where keys are the '__typename' property in an
 *   interface type T, built by graphql schema
 *
 * example:
 *
 *   type GraphqlInterface = { __typename: 'A' | 'B' }
 *
 *   type Result = MapOfGraphInterface<GraphqlInterface> // { A: string, B: string }
 *
 */
type MapOfGraphInterface<T, K = string> = MapOf<T["__typename"], K>;

/* MapOfGraphUnion<T, K = string>
 *
 *   Create an object type where keys are the '__typename' property in an union
 *   type T, built by graphql schema
 *
 * example:
 *
 *   type A = { __typename: 'A' }
 *   type B = { __typename: 'B' }
 *   type GraphqlUnion = A | B
 *
 *   type Result = MapOfGraphInterface<GraphqlUnion> // { A: string, B: string }
 *
 */
type MapOfGraphUnion<T, K = string> = MapOf<
  Pick<T, "__typename">["__typename"],
  K
>;

/* EventHandler<T>
 *
 *   Generic event handler for react components
 */
type EventHandler<T = React.SyntheticEvent<T>> = (e: T) => void;
