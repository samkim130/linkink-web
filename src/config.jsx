const backendUrl = "https://lit-dusk-38560.herokuapp.com";
const localBackendUrl = "http://localhost:8080";

export function getConfiguration() {
  return backendUrl;
  /*
    if (process.env.NODE_ENV === "production") {
    return serverVars;
  }

  return localVars;
  */
}
