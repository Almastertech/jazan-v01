const key = process.env.NEXT_PUBLIC_API_KEY;

const getData = async (keyword) => {
  const res = await fetch(`http://34.166.121.10:3500/api/${keyword}`, {
    next: { revalidate: 60 * 10 },
    headers: {
      apiKey: `${key}`,
    },
    timeout: 10000,
  });

  const data = await res.json();
  return data;
};

export default getData;
