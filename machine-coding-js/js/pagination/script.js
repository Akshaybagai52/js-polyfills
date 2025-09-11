const paginationContainer = document.getElementById("pagination-container");
let activePageNumber = 1;

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching data", err);
  }
}
let data = await fetchData();
function renderPosts() {
  paginationContainer.innerHTML = "";
  data
    ?.slice((activePageNumber - 1) * 10, activePageNumber * 10)
    ?.forEach((post) => {
      let postContainer = document.createElement("div");
      postContainer.textContent = post?.title;
      paginationContainer.appendChild(postContainer);
    });
}

renderPosts();
const handleNext = () => {};

const handlePrev = () => {};

const paginationButtons = document.getElementById("pagination-buttons");

function renderButtons() {
  const handlePagination = (pageNo) => {
    activePageNumber = pageNo;
    renderPosts();
  };
  const handlePrev = () => {
    if (activePageNumber === 1) {
      activePageNumber = Math.ceil(data?.length / 10);
    } else {
      activePageNumber--;
    }
    console.log("activePageNumber: ", activePageNumber);
    renderPosts();
  };
  const handleNext = () => {
    if (activePageNumber === Math.ceil(data?.length / 10)) {
      activePageNumber = 1;
    } else {
      activePageNumber++;
    }
    renderPosts();
  };
  const prevButton = document.createElement("button");
  prevButton.onclick = handlePrev;
  prevButton.textContent = "Prev";
  paginationButtons.appendChild(prevButton);
  for (let i = 1; i <= Math.ceil(data?.length / 10); i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.onclick = () => handlePagination(i);
    paginationButtons.appendChild(button);
  }
  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.onclick = handleNext;
  paginationButtons.appendChild(nextButton);
}
renderButtons();

document.addEventListener("change", () => {
  renderPosts();
});
