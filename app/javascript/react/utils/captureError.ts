export default function captureError(error: Error) {
  if (process.env.NODE_ENV === "production") {
    // TODO: Send error to Sentry
    // eslint-disable-next-line no-console
    console.error(error);
  } else {
    throw error;
  }
}
