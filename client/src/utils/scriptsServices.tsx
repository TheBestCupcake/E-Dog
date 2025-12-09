const apiURL = "http://localhost:3000";

export const fetchAllScripts = async () => {
  const response = await fetch(`${apiURL}/Scripts`);

  const data = await response.json();
  return data;
};

export const fetchScriptById = async (id: string) => {
  const response = await fetch(`${apiURL}/Scripts/${id}`);

  const data = await response.json();
  return data;
};
