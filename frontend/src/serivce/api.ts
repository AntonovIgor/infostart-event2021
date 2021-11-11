export const loadInvoices = async () => {
  const response = await fetch('/invoices');
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

export const loadFavorites = async () => {
  const response = await fetch('/favorites');
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}
