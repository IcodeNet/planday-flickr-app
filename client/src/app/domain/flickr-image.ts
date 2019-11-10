export default class FlickrImage {

  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
  url: string;

  constructor(
    id,
    owner,
    secret,
    server,
    farm,
    title,
    ispublic,
    isfriend,
    isfamily
  ) {
    this.id = id;
    this.owner = owner;
    this.secret = secret;
    this.server = server;
    this.farm = farm;
    this.title = title;
    this.ispublic = ispublic;
    this.isfriend = isfriend;
    this.isfamily = isfamily;
    this.url = `https://farm${this.farm}.staticflickr.com/${this.server}/${this.id}_${this.secret}.jpg`;
  }
}