let renderImage = (event) => {
    let preview_img = document.querySelector("#preview_img");
    let image = event.target.files[0];
    let fileName = document.querySelector("#fileName");
    let fileSize = document.querySelector("#fileSize");
    const allowImageType = [
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/svg',
    ];
    const { name, size, type } = event.target.files[0];
    if (allowImageType.includes(type) && size) {
        let reader = new FileReader();
        reader.addEventListener("load", (e) => {
            preview_img.src = e.target.result;
        });
        reader.readAsDataURL(image);
        fileName.innerHTML = name;
        fileSize.innerHTML = `${convertFileSize(size)}`;

    } else {
        alert("We allow only file JPG , PNG, SVG, GIF can be upload!");
    }
}

let convertFileSize = (fileSize) => {
    const sizeInKb = fileSize / 1024;
    if (sizeInKb > 1024) {
        return `(${(sizeInKb / 1024).toFixed(2)} MB)`;
    } else {
        return `(${sizeInKb.toFixed(2)} KB)`;
    }
}