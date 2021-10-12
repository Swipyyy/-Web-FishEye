export class utilisateur {
  constructor(name, id, city, country, tagline, price, portrait, tags) {
    this.name = name;
    this.id = id;
    this.city = city;
    this.country = country;
    this.tagline = tagline;
    this.price = price;
    this.portrait = portrait;
    this.tags = tags;
  }
}

export class medias {
  constructor(
    id,
    photographerId,
    title,
    image,
    video,
    tags,
    likes,
    date,
    price
  ) {
    this.id = id;
    this.photographerId = photographerId;
    this.title = title;
    this.image = image;
    this.video = video;
    this.tags = tags;
    this.likes = likes;
    this.date = date;
    this.price = price;
  }
}
