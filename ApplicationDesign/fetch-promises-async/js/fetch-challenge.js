async function main() {
  console.log("Fetch Initiated");
  const url = "https://openlibrary.org/works/OL23204W.json";
  const imageUrl = "https://covers.openlibrary.org/b/id/9189458-L.jpg";

  try {
    const image = imageUrl;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Something went wrong, server responded with ${response.status}`
      );
    }

    const data = await response.json();
    const cover = await image;
    console.log(data);
    const main = document.querySelector("main");
    main.insertAdjacentHTML("beforeend", `<header>${data.title}</header>`);
    main.insertAdjacentHTML(
      "beforeend",
      `<img src="https://covers.openlibrary.org/b/id/9189458-M.jpg"></img>`
    );
    main.insertAdjacentHTML("beforeend", `<p>${data.description}</p>`);
  } catch (error) {
    console.log("An error occurred.");
    console.error(error);
  }
}

main();
