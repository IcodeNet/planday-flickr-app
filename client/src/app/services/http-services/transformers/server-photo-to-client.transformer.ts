import FlickrImage from "../../../domain/flickr-image";

export default (serverPhoto): FlickrImage => {

    const id = serverPhoto.id;
    const owner = serverPhoto.owner;
    const secret = serverPhoto.secret;
    const server = serverPhoto.server;
    const farm = serverPhoto.farm;
    const title = serverPhoto.title;
    const ispublic = serverPhoto.ispublic;
    const isfriend = serverPhoto.isfriend;
    const isfamily = serverPhoto.isfamily;

    const clientImage = new FlickrImage(id, owner, secret, server, farm, title, ispublic, isfriend, isfamily);

    return clientImage;
};
