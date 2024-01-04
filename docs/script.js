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


function toggleImages() {
    var container = document.getElementById("imageContainer");
    var closeButton = document.getElementById("closeButton");
    var triangle = document.getElementById("triangle");

    if (container.classList.contains("hide")) {
        container.classList.remove("hide");
        closeButton.classList.remove("hide"); // 显示收起按钮
        triangle.innerHTML = "▲"; // 改为倒三角
    } else {
        container.classList.add("hide");
        closeButton.classList.add("hide"); // 隐藏收起按钮
        triangle.innerHTML = "▼"; // 改回正三角
    }
}

function closeImagesAndScrollToTriangle() {
    var triangle = document.getElementById("triangle");
    var container = document.getElementById("imageContainer");
    var closeButton = document.getElementById("closeButton");

    container.classList.add("hide");
    closeButton.classList.add("hide");
    triangle.innerHTML = "▼";
    triangle.scrollIntoView({ behavior: 'smooth' });
}