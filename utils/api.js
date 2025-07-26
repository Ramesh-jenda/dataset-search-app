export const fetchData = async (queryParams) => {
  const baseUrl = "https://api.datakeep.civicdays.in/api/search/dataset/";
  const url = new URL(baseUrl);
  
  // Append query parameters to the URL
  Object.keys(queryParams).forEach(key => 
    url.searchParams.append(key, queryParams[key])
  );

  // Log the full URL for debugging purposes
  console.log("Request URL:", url.toString());  // Check this URL

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  console.log("API Response:", data); // Log the response

  return data;
};
