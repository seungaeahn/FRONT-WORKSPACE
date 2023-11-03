const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
let currentIndex = 0;
const imageElement = document.getElementById("image");
const showPaginationButton = document.getElementById("showPaginationButton");
const paginationButtons = document.getElementById("paginationButtons");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const prevPagination = document.getElementById("prevPagination");
const nextPagination = document.getElementById("nextPagination");

function showImage(index) {
    if (index >= 0 && index < images.length) {
        imageElement.src = images[index];
        imageElement.alt = `Image ${index + 1}`;
        currentIndex = index;
    }
}

function showPagination() {
    showPaginationButton.classList.add("hidden"); // 페이지네이션 보기 버튼 숨김
    paginationButtons.classList.remove("hidden"); // 페이지네이션 버튼 표시
    prevButton.classList.add("hidden"); // 초기 페이지네이션 숨김
    nextButton.classList.add("hidden");
    prevPagination.classList.add("hidden");
    nextPagination.classList.add("hidden");
}

function hidePagination() {
    showPaginationButton.classList.remove("hidden"); // 페이지네이션 보기 버튼 표시
    paginationButtons.classList.add("hidden"); // 페이지네이션 버튼 숨김
    prevButton.classList.add("hidden");
    nextButton.classList.add("hidden");
    prevPagination.classList.add("hidden");
    nextPagination.classList.add("hidden");
}

function previousImage() {
    showImage(currentIndex - 1);
    showPagination(); // 이전 버튼 클릭 시 페이지네이션 창 나타냄
}

function nextImage() {
    showImage(currentIndex + 1);
    showPagination(); // 다음 버튼 클릭 시 페이지네이션 창 나타냄
}

// 초기 이미지 표시 및 페이지네이션 숨김
showImage(currentIndex);
hidePagination();