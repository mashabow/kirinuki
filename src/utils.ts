export const basename = (s: string): string => s.substr(0, s.lastIndexOf('.'));

export const download = (file: File): void => {
  const blobURL = URL.createObjectURL(file);

  const link = document.createElement('a');
  link.href = blobURL;
  link.download = file.name;
  link.click();

  URL.revokeObjectURL(blobURL);
};
