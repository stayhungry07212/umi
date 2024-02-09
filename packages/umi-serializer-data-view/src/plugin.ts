import { UmiPlugin } from '@stay.hungry07212/umi';
import {
  DataViewSerializerOptions,
  createDataViewSerializer,
} from './createDataViewSerializer';

export const dataViewSerializer = (
  options: DataViewSerializerOptions = {}
): UmiPlugin => ({
  install(umi) {
    umi.serializer = createDataViewSerializer(options);
  },
});
