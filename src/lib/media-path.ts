export function previewPath(file: string) {
  return file.replace(/\.mp4$/, "-preview.mp4");
}

export function posterPath(file: string) {
  return file.replace(/\.mp4$/, "-poster.jpg");
}
