const sampleList = document.getElementById("sampleList");

// Your API endpoint
const API_URL = "http://localhost:3000/api/products";

fetch(API_URL)
  .then((response) => response.json())
  .then((result) => {
    console.log(result); // check your API output

    const products = result.products;

    if (!Array.isArray(products) || products.length === 0) {
      sampleList.innerHTML = "<p>No products found.</p>";
      return;
    }

    // Build HTML string
    let html = "";
    products.forEach((product) => {
      // Adjust image path if needed
      const imgSrc = `/public/images/${product.image}`;

      html += `
        <div class="card">
          <img src="${imgSrc}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>Category: ${product.category}</p>
          <p>Price: $${product.price}</p>
          <p>Stock: ${product.stock}</p>
          <a href="/pages/sample/index.js?id=${product._id}">View Detail</a>
        </div>
      `;
    });

    sampleList.innerHTML = html;
  })
  .catch((error) => {
    console.error("Fetch error:", error);
    sampleList.innerHTML = "<p>Failed to load products.</p>";
  });
