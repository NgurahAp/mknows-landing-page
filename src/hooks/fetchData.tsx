import { useQuery } from "@tanstack/react-query";

async function fetchData() {
  const response = await fetch(
    "https://65223fddf43b17938414559c.mockapi.io/category"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export function useData() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchData,
  });
}
