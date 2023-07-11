import { useState, useCallback, useEffect } from 'react';
import { Alert, SectionList, TouchableOpacity, View } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

import {
  Container,
  HeaderContainer,
  Logo,
  Avatar,
  CardButton,
  OpenIcon,
  Label,
  SectionTitle,
  EmptyList,
  EmptyListText
} from './styles';

import { Description } from '@components/Description';
import { IconButton } from '@components/IconButton';
import { Loading } from '@components/Loading';
import { MealCard } from '@components/MealCard';

import { mealGetAll } from '@storage/meal/mealGetAll';
import { MealStorageDTO } from '@storage/meal/MealStorageDTO';
import { profile } from '@storage/profile/profile';
import { profileCreate } from '@storage/profile/profileCreate';
import { ProfileStorageDTO } from '@storage/profile/ProfileStorageDTO';
import { MealSectionListGenerator } from '@utils/MealSectionListGenerator';
import { StatisticsGenerator } from '@utils/StatisticsGenerator';

import logoImg from '@assets/logo.png';
import avatar from '@assets/avatar.png';

type MealType = {
  date: string;
  data: MealStorageDTO[];
}

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState<MealType[]>([]);
  const [dietPercentage, setDietPercentage] = useState(0);
  const [image, setImage] = useState<ProfileStorageDTO>();

  // const [cameraPermission, requestPermission] = ImagePicker.useCameraPermissions();
  const [mediaLibraryPermission, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const navigation = useNavigation();
  const cardButtonType = dietPercentage > 50 ? 'PRIMARY' : 'SECONDARY';

  // VERIFY CAMERA PERMISSION
  // async function verifyPermission() {
  //   if (cameraPermission?.status === ImagePicker.PermissionStatus.UNDETERMINED) {
  //       const permissionResponse = await requestPermission();

  //       return permissionResponse.granted;
  //   }
  //   if (cameraPermission?.status === ImagePicker.PermissionStatus.DENIED) {
  //       Alert.alert(
  //           "Permissão negada!",
  //           "Para prosseguir você deve permitir acesso à câmera do seu dispositivo."
  //       );
  //       return false;
  //   }

  //   return true;
  // }

  async function verifyPermission() {
    if (mediaLibraryPermission?.status === ImagePicker.PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (mediaLibraryPermission?.status === ImagePicker.PermissionStatus.DENIED) {
      Alert.alert(
        "Permissão negada!",
        "Para prosseguir você deve permitir acesso à galeria do seu dispositivo."
      );
        
      return false;
    }

    return true;
  }

  async function pickImage() {
    try {
      const hasPermission = await verifyPermission();

      if (!hasPermission) {
        return;
      }
      
      // OPEN PHONE CAMERA TO TAKE THE PICTURE
      // const image = await ImagePicker.launchCameraAsync({
      //     allowsEditing:true,
      //     aspect:[16,9],
      //     quality:0.5
      // });

      const image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (image.assets?.length !== 0) {
        const newProfile: ProfileStorageDTO = {
          avatar: image.assets?.[0].uri
        }

        await profileCreate(newProfile)
        await fetchProfileImage();
      }
    } catch (error) {
      console.log(error);
    }
  };

  function handleOpenStatistics() {
    navigation.navigate('statistics');
  }

  function handleOpenNewMeal() {
    navigation.navigate('new');
  }

  function handleOpenMeal(id: string) {
    navigation.navigate('meal', { id })
  }

  async function fetchMeals() {
    try {
      setIsLoading(true);

      const data = await mealGetAll();

      const sectionListGenerator = new MealSectionListGenerator(data);
      setMeals(sectionListGenerator.generate());

      const statistics = new StatisticsGenerator(data);
      setDietPercentage((statistics.mealsInDiet * 100) / data.length);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchProfileImage() {
    try {
      const image = await profile();
      setImage(image);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProfileImage();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Container>
      <HeaderContainer>
        <Logo source={logoImg} />

        <TouchableOpacity onPress={pickImage}>
          <Avatar source={image ? { uri: image.avatar } : avatar} />
        </TouchableOpacity>
      </HeaderContainer>

      {!(meals.length === 0) && (
        <CardButton
          type={cardButtonType}
          onPress={handleOpenStatistics}
        >
          <OpenIcon type={cardButtonType} />

          <Description
            title={dietPercentage.toFixed(2).replace('.', ',').replace(/[.,]00$/, "") + '%'}
            subtitle='das refeições dentro da dieta'
          />
        </CardButton>
      )}

      <Label style={[meals.length === 0 && {marginTop: 0}]}>
        Refeições
      </Label>

      <IconButton
        onPress={handleOpenNewMeal}
        description='Nova refeição'
        icon='add'
      />

      {isLoading ? (
        <Loading />
      ) : (
        <SectionList
          sections={meals}
          keyExtractor={(item, index) => item.description + index}
          renderItem={({item}) => (
            <MealCard
              type={item.type}
              time={item.time}
              description={item.name}
              onPress={() => handleOpenMeal(item.id)}
            />
          )}
          renderSectionHeader={({ section: { date } }) => (
            <SectionTitle>{date}</SectionTitle>
          )}
          ItemSeparatorComponent={() => (
            <View style={{ marginBottom: 12 }} />
          )}
          ListEmptyComponent={() => (
            <EmptyList>
              <EmptyListText>
                Comece adicionando uma nova refeição
              </EmptyListText>
            </EmptyList>
          )}
        />
      )}
    </Container>
  );
}