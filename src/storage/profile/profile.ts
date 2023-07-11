import AsyncStorage from '@react-native-async-storage/async-storage';

import { PROFILE_COLLECTION } from '@storage/storageConfig';
import { ProfileStorageDTO } from './ProfileStorageDTO';

export async function profile() {
  try {
    const storage = await AsyncStorage.getItem(PROFILE_COLLECTION);

    const profile: ProfileStorageDTO = storage ? JSON.parse(storage) : undefined;

    return profile;
  } catch (error) {
    throw error;
  }
}