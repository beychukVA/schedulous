import useViewer from "./useViewer";

export default function useIsLoggedIn() {
  const viewer = useViewer();

  return !!viewer;
}
