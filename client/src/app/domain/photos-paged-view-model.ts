import FlickrImage from "./flickr-image";

export default class ServerPhotosResponseModel {

    public photosViewModel: {
        page: number;
        pages: number;
        perpage: number;
        total: string;
        photo: FlickrImage[];
    };

    public stat: string;

    constructor(
        photosViewModel,
        stat
    ) {
        this.photosViewModel = photosViewModel;
        this.stat = stat;
    }
}
