const fetchData = async (url, options) => {
  try {
    const response = await fetch(`/api/${url}`, options);

    if (!response.ok) {
      throw Error(response.statusText);
    }

    return await response.json();
  } catch (exception) {
    if (exception instanceof SyntaxError) {
      console.log("SyntaxError", exception);
    } else {
      console.log("Failed to fetch", exception);
    }
    return {};
  }
};

export const GET = async (url, headers) => {
  const options = {
    method: "GET",
    headers: { ...headers },
  };

  return await fetchData(url, options);
};

export const POST = async (url, headers, body) => {
  const options = {
    method: "POST",
    headers: { ...headers },
    body: JSON.stringify(body),
  };

  return await fetchData(url, options);
};

export const PUT = async (url, headers, body) => {
  const options = {
    method: "PUT",
    headers: { ...headers },
    body: JSON.stringify(body),
  };

  return await fetchData(url, options);
};

export const DELETE = async (url, headers) => {
  const options = {
    method: "DELETE",
    headers: { ...headers },
  };

  return await fetchData(url, options);
};

export const PATCH = async (url, headers, body) => {
  const options = {
    method: "PATCH",
    headers: { ...headers },
  };
  if (body) {
    options.body = JSON.stringify(body);
  }

  return await fetchData(url, options);
};
