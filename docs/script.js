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

function toggleImages(containerId, triangleContainer) {
    var container = document.getElementById(containerId);
    var closeButton = document.getElementById("closeButton");
    var triangle = triangleContainer.querySelector(".triangle");

    var alreadyOpen = !container.classList.contains("hide");

    // 关闭所有图片并重置所有小三角
    document.querySelectorAll(".imageContainer").forEach(c => c.classList.add("hide"));
    document.querySelectorAll(".triangle").forEach(t => t.innerHTML = "▼");

    if (!alreadyOpen) {
        container.classList.remove("hide");
        triangle.innerHTML = "▲";
        closeButton.style.display = "block"; // 显示收起按钮
    } else {
        closeButton.style.display = "none"; // 隐藏收起按钮
    }
}

function closeImages() {
    document.querySelectorAll(".imageContainer").forEach(c => c.classList.add("hide"));
    document.querySelectorAll(".triangle").forEach(t => t.innerHTML = "▼");
    document.getElementById("closeButton").style.display = "none"; // 隐藏收起按钮

    // 滚动回页面最上方
    window.scrollTo({ top: 0, behavior: 'smooth' });
}