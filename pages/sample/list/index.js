const sampleList = document.getElementById("sampleList");

fetch("/public/data/products.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        sampleList.innerHTML += `
            <div class="card">
                <img src="${data[i].image}" alt="Avatar">
                <h3>${data[i].name}</h3>
                <p>${data[i].description}</p>
                <a href="/pages/sample/detail/index.html">View Detail</a>
            </div>
            `;
      }
    }
  });
