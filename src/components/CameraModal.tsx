import { useState } from 'react';
import { Modal, StatusBar, View, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Button } from './Button';
import { CameraIcon, XIcon, Trash2Icon, CheckIcon } from 'lucide-react-native';
import { colors } from '../styles/colors';

interface ICameraModalProps {
  open: boolean;
  onClose: () => void;
}

export function CameraModal({ onClose, open }: ICameraModalProps) {
  const [hasPermission, setHaspermission] = useState(true);
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  function handleCloseModal() {
    onClose();
    setPhotoUri(null);
  }

  function handleTakePicture() {
    setPhotoUri('mock-photo-uri');
  }

  function handleRequestPermission() {
    setHaspermission(true);
  }

  function handleDeletePhoto() {
    setPhotoUri(null);
  }

  return (
    <Modal
      transparent
      statusBarTranslucent
      onRequestClose={handleCloseModal}
      visible={open}
      animationType="slide"
    >
      <StatusBar barStyle="light-content" />
      <View className="bg-black flex-1">
        {!hasPermission && (
          <View className="flex-1 items-center justify-center">
            <Text className="text-white text-center px-10 text-base font-sans-regular mb-4">
              Precisamos de permissão para acessar a câmera!
            </Text>
            <Button onPress={handleRequestPermission}>Dar permissão</Button>
          </View>
        )}
        {hasPermission && (
          <SafeAreaProvider>
            <SafeAreaView className="flex-1">
              <View className="flex-row p-5">
                <Button size="icon" color="dark" onPress={handleCloseModal}>
                  <XIcon size={20} color={colors.gray[500]} />
                </Button>
              </View>

              {!photoUri && (
                <View className="flex-1 bg-gray-800 items-center justify-center">
                  <Text className="text-white text-lg font-sans-regular">
                    Câmera simulada
                  </Text>
                </View>
              )}

              {photoUri && (
                <View className="flex-1 bg-gray-800 items-center justify-center">
                  <Text className="text-white text-lg font-sans-regular">
                    Foto capturada
                  </Text>
                </View>
              )}
              {!photoUri && (
                <View className="p-5 pt-6 items-center gap-2 pb-12">
                  <View className="flex-row">
                    <Button
                      size="icon"
                      color="dark"
                      onPress={handleTakePicture}
                    >
                      <CameraIcon size={20} color={colors.lime[600]} />
                    </Button>
                  </View>
                  <Text className="text-gray-100 text-base font-sans-regular">
                    Tirar foto
                  </Text>
                </View>
              )}

              {photoUri && (
                <View className="p-5 pt-6 items-center gap-8 pb-12 flex-row justify-center">
                  <Button size="icon" color="dark" onPress={handleDeletePhoto}>
                    <Trash2Icon size={20} color={colors.gray[500]} />
                  </Button>
                  <Button>
                    <CheckIcon size={20} color={colors.black[700]} />
                  </Button>
                </View>
              )}
            </SafeAreaView>
          </SafeAreaProvider>
        )}
      </View>
    </Modal>
  );
}
