const imageModal = document.querySelector('.image-modal');
const overlay = document.querySelector(".overlay");
const images = document.querySelectorAll(".gallery__item img");
let imgSrc;
images.forEach((img) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        overlay.style.display = "block";
        imageModal.classList.remove('hidden');
        imageModal.style.position = 'fixed';
        imageModal.style.top = `-${document.body.scrollY}px`;
        imageModal.innerHTML=`
            <img id="1" src="${e.target.src}"  alt="">
            <a class="close-image-modal">x</a>`
        const closeImageBtn = document.querySelector('.close-image-modal');
        closeImageBtn.addEventListener('click', () => {
            overlay.style.display = "none";
            imageModal.classList.add('hidden');
        });
    });
});


