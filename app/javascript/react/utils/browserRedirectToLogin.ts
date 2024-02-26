import browserRedirect from "~/utils/browserRedirect";
import paths from "~/paths";

export default function browserRedirectToLogin() {
  browserRedirect(
    paths.auth.login({
      origin: encodeURIComponent(location.pathname + location.search),
    })
  );
}
