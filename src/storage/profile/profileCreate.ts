import AsyncStorage from '@react-native-async-storage/async-storage';

import { PROFILE_COLLECTION } from '@storage/storageConfig';
import { ProfileStorageDTO } from './ProfileStorageDTO';

export async function profileCreate(newProfile: ProfileStorageDTO) {
  try {
    const storage = JSON.stringify(newProfile);
    await AsyncStorage.setItem(PROFILE_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}