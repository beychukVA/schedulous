import { useNavigate } from "react-router-dom";

export default function browserRedirect(location: any) {
  const navigate = useNavigate();

  if (location.as.startsWith("http")) {
    window.location.href = location.href;
  } else {
    navigate(location.href);
  }
}
