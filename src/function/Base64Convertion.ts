const Base64Convertion = (file: File | Blob): Promise<string> => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
        resolve(reader.result as string)
    };
    reader.readAsDataURL(file);
    reader.onerror = reject;
})

export default Base64Convertion;