export function compress(file: File): Promise<File> {
    const maxWidth = 2500;
    const maxHeight = 2500;
    return new Promise((resolve, reject) => {
        const fileName = file.name;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = event => {
            const img = new Image();
            img.src = event.target.result;
            img.onload = () => {
                const { width, height } = calculateAspectRatioFit(img.width, img.height, maxWidth, maxHeight);
                const elem = document.createElement('canvas');
                elem.width = width;
                elem.height = height;
                const ctx = elem.getContext('2d');
                // img.width and img.height will contain the original dimensions
                ctx.drawImage(img, 0, 0, width, height);
                ctx.canvas.toBlob((blob) => {
                    const compressedFile = new File([blob], fileName, {
                        type: 'image/jpeg',
                        lastModified: Date.now()
                    });
                    resolve(compressedFile);
                }, 'image/jpeg', 1);
            },
                reader.onerror = error => reject(error);
        };
    });
}

/**
 * Conserve aspect ratio of the original region. Useful when shrinking/enlarging
 * images to fit into a certain area.
 */
function calculateAspectRatioFit(srcWidth: number, srcHeight: number, maxWidth: number, maxHeight: number): { width: number; height: number } {

    const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

    return { width: srcWidth * ratio, height: srcHeight * ratio };
}