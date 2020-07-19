import Associate from "../interfaces/associate";

export async function getAssociates() {
  const response = await fetch("http://localhost:3001/associates");
  const body = await response.json();
  return body as Array<Associate>;
}
