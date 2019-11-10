import ServerPhotosResponseModel from "../../../domain/photos-paged-view-model";
import PhotoTransformer from './server-photo-to-client.transformer';

export default (serverData): ServerPhotosResponseModel => {
    const photosArray = serverData.photos.photo
      .map(m => PhotoTransformer(m));

      const photosViewModel = {
        page: serverData.photos.page,
        pages: serverData.photos.pages,
        perpage: serverData.photos.perPage,
        total: serverData.photos.total,
        photo: photosArray
      } 

    return new ServerPhotosResponseModel(
      photosViewModel,
      serverData.stat
    );
};
