export function createMedia(
  id,
  photographerId,
  title,
  image,
  video,
  tags,
  likes,
  date,
  price,
  description
) {
  if (image) {
    return {
      date,
      description,
      id,
      image,
      likes,
      photographerId,
      price,
      tags,
      title
    };
  }
  if (video) {
    return {
      date,
      description,
      id,
      likes,
      photographerId,
      price,
      tags,
      title,
      video
    };
  }
  return console.log("error");
}
