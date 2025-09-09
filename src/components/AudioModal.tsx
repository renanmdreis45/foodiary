import { useState } from 'react';
import { Modal, View } from 'react-native';

interface IAudioModalProps {
  open: boolean;
  onClose: () => void;
}

export function AudioModal({ open, onClose }: IAudioModalProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUri, setAudioUri] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

  return <Modal />;
}
