script.js
document.getElementById("changeTextButton").addEventListener("click", function() {
    document.getElementById("headerTitle").innerText = "Text Changed!";
});

document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.image-gallery');

    gallery.addEventListener('wheel', function(event) {
        event.preventDefault();
        gallery.scrollLeft += event.deltaY;
    });

});

function adjustTitleSize() {
    var screenWidth = window.innerWidth;
    var fontSize = screenWidth; // 示例：将屏幕宽度除以10以确定字体大小
    document.querySelector('.gallery-title').style.fontSize = fontSize + 'px';
}

// 当窗口大小改变时调整字体大小
window.addEventListener('resize', adjustTitleSize);

// 页面加载时调整字体大小
adjustTitleSize();


let lastClickedTriangle = null; // 用于记录最后点击的小三角

function toggleImages(containerId, triangle) {
    var container = document.getElementById(containerId);
    var closeButton = document.getElementById("closeButton");

    // 切换图片容器的显示状态
    container.classList.toggle("hide");

    // 切换三角形方向
    triangle.innerHTML = container.classList.contains("hide") ? "▼" : "▲";

    // 根据容器状态显示或隐藏收起按钮
    closeButton.style.display = container.classList.contains("hide") ? "none" : "block";

    // 记录最后点击的小三角
    if (!container.classList.contains("hide")) {
        lastClickedTriangle = triangle;
    }
}

function closeImages() {
    document.querySelectorAll(".imageContainer").forEach(container => {
        container.classList.add("hide");
    });
    document.querySelectorAll(".triangle").forEach(triangle => {
        triangle.innerHTML = "▼";
    });
    document.getElementById("closeButton").style.display = "none";

    // 如果有记录的最后点击的小三角，则滚动回该位置
    if (lastClickedTriangle) {
        lastClickedTriangle.scrollIntoView({ behavior: 'smooth' });
    }
}