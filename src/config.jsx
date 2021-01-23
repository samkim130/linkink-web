const backendUrl = "https://lit-dusk-38560.herokuapp.com";
const localBackendUrl = "http://localhost:8080";

export function getConfiguration() {
  if (process.env.REACT_APP_PROFILE === "prod") {
    return backendUrl;
  } else if (process.env.REACT_APP_PROFILE === "prodTest") {
    return backendUrl;
  } 

  return localBackendUrl;
}
