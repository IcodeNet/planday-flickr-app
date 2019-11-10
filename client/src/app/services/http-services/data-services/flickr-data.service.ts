import { HttpService } from '../http.service';
import ConfigurationManager from '../../configuration/configuration-manager';
import ServerPhotosResponseModel from '../../../domain/photos-paged-view-model';
import ViewModelTransformer from './../transformers/server-data-to-view-model.transformer';

class FlickrDataService extends HttpService {

  async fetchServerResponsePagedModel(term?: string | null): Promise<ServerPhotosResponseModel | { error: string }> {
    const termSearchingFor =  term || 'mountains';
    const config = ConfigurationManager.get();
    const sdearchUrl = `${config.apiBaseUrl}&text=${termSearchingFor}`

    const response = await super.get({
      url: sdearchUrl,
      timeout: config.timeout /*msecs*/
    });

    if (response.data === undefined) {
      return { error: 'No data.Items in the response.' };
    }
    return this.createViewModel(response.data);
  }

  createViewModel(photosServerData): ServerPhotosResponseModel {
    const model = ViewModelTransformer(photosServerData);
    return model;
  }


}

export default FlickrDataService;
