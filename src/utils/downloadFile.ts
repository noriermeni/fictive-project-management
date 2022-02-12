export const downloadFile = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.target = "_blank"
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}