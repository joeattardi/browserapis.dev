function listQueryParams(inputUrl) {
  const url = new URL(inputUrl);

  url.searchParams.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
}
