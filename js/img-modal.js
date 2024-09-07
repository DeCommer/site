const openImage = document.querySelectorAll('.open-image');
const imageModal = document.querySelector('.image-modal');
const overlay = document.querySelector(".overlay");

openImage.forEach((image) => {
    image.addEventListener('click', e => {
        let imageId = e.target.id;
        console.log(imageId);
        imageModal.classList.remove('hidden');
        overlay.style.display = "block";

        imageModal.style.position = 'fixed';
        imageModal.style.top = `-${document.body.scrollY}px`;
        if(imageId == 1) {
            imageModal.innerHTML = `
            <img id="1" src="./img/paintings/conmet.jpg"  alt="">
            <button class="close-image-modal">&times</button>
            `;
        }else if(imageId == 2) {
            imageModal.innerHTML = `
            <img id="2" src="./img/paintings/ermine.jpg" alt="">
            <button class="close-image-modal">&times</button>
            `;
        }else if(imageId == 3) {
            imageModal.innerHTML = `
            <img id="3" src="./img/paintings/onwall.jpg" alt="">
            <button class="close-image-modal">&times</button>
            `;
        }else if(imageId == 4) {
            imageModal.innerHTML = `
            <img id="4" src="./img/paintings/saintasimo.jpg" alt="">
            <button class="close-image-modal">&times</button>
            `;
        }else if(imageId == 5) {
            imageModal.innerHTML = `
            <img id="5" src="./img/paintings/realismstudy2.jpg" alt="">
            <button class="close-image-modal">&times</button>
            `;
        }else if(imageId == 6) {
            imageModal.innerHTML = `
            <img id="6" src="./img/paintings/egg.jpg" alt=""> 
            <button class="close-image-modal">&times</button>
            `;
        }else if(imageId == 7) {
            imageModal.innerHTML = `
            <img id="7" src="./img/paintings/eva.jpg" alt="">
            <button class="close-image-modal">&times</button>
            `;
        }else if(imageId == 8) {
            imageModal.innerHTML = `
            <img id="8" src="./img/paintings/forever.jpg" alt="">
            <button class="close-image-modal">&times</button>
            `;
        }
        const closeImageBtn = document.querySelector('.close-image-modal');
        closeImageBtn.addEventListener('click', () => {
            overlay.style.display = "none";
            imageModal.classList.add('hidden');
        });
        
    });
})

