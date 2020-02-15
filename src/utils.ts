export const download = (file: File): void => {
  const blobURL = URL.createObjectURL(file);

  const link = document.createElement('a');
  link.href = blobURL;
  link.download = file.name;
  link.click();

  URL.revokeObjectURL(blobURL);
};
