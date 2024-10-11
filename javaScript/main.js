document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.querySelector('.upload-button input[type="file"]');
    const imagePreview = document.createElement('img');
    imagePreview.classList.add('image-preview');
    document.querySelector('.upload-button').appendChild(imagePreview);

    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagePreview.src = e.target.result;
            };
            reader.readAsDataURL(file);
        } else {
            imagePreview.src = '';
        }
    });
});