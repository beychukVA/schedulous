import useViewer from "./useViewer";

export default function useAccount() {
  const viewer = useViewer();
  console.log(viewer);
  return viewer?.account;
}
