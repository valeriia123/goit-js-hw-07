const countListEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${countListEl.length}`);

countListEl.forEach((countListl) => {
    const titleEl = countListl.querySelector("h2").textContent;
    const listEl = countListl.querySelectorAll("ul li").length;
    console.log(`Category: ${titleEl}`);
    console.log(`Elements: ${listEl}`);
});