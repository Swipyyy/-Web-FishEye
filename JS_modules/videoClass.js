export class videoClass {
  constructor(
    id,
    photographerId,
    title,
    video,
    tags,
    likes,
    date,
    price,
    description
  ) {
    this.id = id;
    this.photographerId = photographerId;
    this.title = title;
    this.video = video;
    this.tags = tags;
    this.likes = likes;
    this.date = date;
    this.price = price;
    this.description = description;
  }
}
