import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Modal, SafeAreaView, View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button } from './Button';
import { MicIcon, SquareIcon, XIcon } from 'lucide-react-native';
import { colors } from '../styles/colors';
import { cn } from '../utils/cn';
import {
  RecordingPresets,
  useAudioRecorder,
  useAudioRecorderState,
} from 'expo-audio';

interface IAudioModalProps {
  open: boolean;
  onClose: () => void;
}

export function AudioModal({ open, onClose }: IAudioModalProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUri, setAudioUri] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRecorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
  const recorderState = useAudioRecorderState(audioRecorder);

  function handleStartRecording() {
    setIsRecording(true);
  }

  function handleStopRecording() {
    setIsRecording(false);
  }

  function handlePlay() {
    setIsPlaying(true);
  }

  function handlePause() {
    setIsPlaying(false);
  }

  function handleDeleteAudio() {
    setAudioUri(null);
    setIsPlaying(false);
  }

  function handleCloseModal() {
    setAudioUri(null);
    setIsRecording(false);
    setIsPlaying(false);
    onClose();
  }

  return (
    <Modal
      transparent
      statusBarTranslucent
      visible={open}
      animationType="slide"
      onRequestClose={handleCloseModal}
    >
      <StatusBar style="light" />
      <View className="bg-black flex-1">
        <SafeAreaProvider>
          <SafeAreaView className="flex-1">
            <View className="flex-row p-5">
              <Button size="icon" color="dark" onPress={handleCloseModal}>
                <XIcon size={20} color={colors.gray[500]} />
              </Button>
            </View>

            <View className="flex-1 items-center justify-center">
              <View className="size-[265px] border border-gray-700/10 rounded-full items-center justify-center">
                <View
                  className={cn(
                    'size-[227px] border border-gray-700/50 rounded-full items-center justify-center',
                    isRecording && 'border-lime-600/50'
                  )}
                >
                  <View
                    className={cn(
                      'size-[189px] bg-gray-700/10 rounded-full',
                      isRecording && 'border-lime-600/10'
                    )}
                  ></View>
                </View>
              </View>
              <Text className="text-white text-base text-center font-sans-regular w-[192px] mt-8">
                Tente dizer algo como: 100g de Arroz, 2 ovos e 100g de Salada
              </Text>
            </View>

            {!audioUri && (
              <View className="p-5 pt-6 items-center gap-2 pb-20">
                <View className="flex-row">
                  {!isRecording && (
                    <Button
                      size="icon"
                      color="dark"
                      onPress={handleStartRecording}
                    >
                      <MicIcon size={20} color={colors.lime[600]} />
                    </Button>
                  )}

                  {isRecording && (
                    <Button
                      size="icon"
                      color="dark"
                      onPress={handleStopRecording}
                    >
                      <SquareIcon size={20} color={colors.gray[500]} />
                    </Button>
                  )}
                </View>

                <Text className="text-gray-100 text-base font-sans-regular">
                  Toque no microfone para começar a gravar
                </Text>
              </View>
            )}
          </SafeAreaView>
        </SafeAreaProvider>
      </View>
    </Modal>
  );
}
