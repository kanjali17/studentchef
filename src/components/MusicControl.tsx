import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import {
  Box,
  HStack,
  IconButton,
  Text,
  VStack,
  useColorModeValue,
  Tooltip,
  Badge,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Progress,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const MusicControl = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [minimized, setMinimized] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const bgColor = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const playlists = useMemo(() => [
    {
      name: 'Lofi Cooking Vibes 🍳',
      emoji: '🍳',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      artist: 'Lofi Kitchen'
    },
    {
      name: 'Chill Study Beats 📚',
      emoji: '📚',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      artist: 'Study Vibes'
    },
    {
      name: 'Cozy Evening Lofi 🌙',
      emoji: '🌙',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
      artist: 'Evening Beats'
    },
    {
      name: 'Rainy Day Cooking 🌧️',
      emoji: '🌧️',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
      artist: 'Rainy Vibes'
    },
  ], []);

  const currentTrack = playlists[currentTrackIndex];

  const handleNextTrack = useCallback(() => {
    const nextIndex = (currentTrackIndex + 1) % playlists.length;
    setCurrentTrackIndex(nextIndex);
    if (audioRef.current) {
      audioRef.current.src = playlists[nextIndex].url;
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.log('Audio playback failed:', error);
        });
      }
    }
  }, [currentTrackIndex, playlists, isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      handleNextTrack();
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [handleNextTrack]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log('Audio playback failed:', error);
          setIsPlaying(true);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handlePreviousTrack = () => {
    const prevIndex = currentTrackIndex === 0 ? playlists.length - 1 : currentTrackIndex - 1;
    setCurrentTrackIndex(prevIndex);
    if (audioRef.current) {
      audioRef.current.src = playlists[prevIndex].url;
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.log('Audio playback failed:', error);
        });
      }
    }
  };

  const handleVolumeChange = (value: number) => {
    setVolume(value);
    if (audioRef.current) {
      audioRef.current.volume = value;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={currentTrack.url}
        preload="metadata"
        onLoadedMetadata={() => {
          if (audioRef.current) {
            setDuration(audioRef.current.duration);
          }
        }}
        onError={() => {
          console.log('Audio failed to load, using fallback');
          if (audioRef.current) {
            audioRef.current.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT';
          }
        }}
      />
      {minimized ? (
        <MotionBox
          position="fixed"
          bottom={4}
          right={4}
          zIndex={1000}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Tooltip label="Show music player" placement="top">
            <IconButton
              aria-label="Show music player"
              icon={<Text fontSize="2xl">🎵</Text>}
              size="lg"
              colorScheme="purple"
              borderRadius="full"
              boxShadow="lg"
              onClick={() => setMinimized(false)}
            />
          </Tooltip>
        </MotionBox>
      ) : (
        <MotionBox
          position="fixed"
          bottom={4}
          right={4}
          zIndex={1000}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Box
            bg={bgColor}
            border="1px"
            borderColor={borderColor}
            borderRadius="xl"
            p={4}
            boxShadow="lg"
            backdropFilter="blur(10px)"
            minW="280px"
            position="relative"
            overflow="hidden"
          >
            {isPlaying && (
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="purple.50"
                opacity={0.1}
                borderRadius="xl"
                animation="pulse 2s infinite"
              />
            )}
            <VStack spacing={3} position="relative" zIndex={1}>
              <HStack w="full" justify="space-between">
                <VStack spacing={1} align="start">
                  <Badge
                    colorScheme="purple"
                    variant="subtle"
                    fontSize="xs"
                    px={2}
                    py={1}
                    borderRadius="full"
                    textAlign="center"
                    noOfLines={1}
                  >
                    {currentTrack.name}
                  </Badge>
                  <Text fontSize="xs" color="gray.500" noOfLines={1}>
                    {currentTrack.artist}
                  </Text>
                  {isPlaying && (
                    <Text fontSize="xs" color="green.500" fontWeight="semibold">
                      🎵 Now Playing
                    </Text>
                  )}
                </VStack>
                <Tooltip label="Minimize" placement="top">
                  <IconButton
                    aria-label="Minimize music player"
                    icon={<Text fontSize="lg">➖</Text>}
                    size="sm"
                    colorScheme="gray"
                    variant="ghost"
                    onClick={() => setMinimized(true)}
                  />
                </Tooltip>
              </HStack>
              <Box w="full">
                <Progress
                  value={(currentTime / duration) * 100 || 0}
                  size="sm"
                  colorScheme="purple"
                  borderRadius="full"
                  mb={2}
                />
                <HStack justify="space-between" fontSize="xs" color="gray.500">
                  <Text>{formatTime(currentTime)}</Text>
                  <Text>{formatTime(duration)}</Text>
                </HStack>
              </Box>
              <HStack spacing={2}>
                <Tooltip label="Previous track" placement="top">
                  <IconButton
                    aria-label="Previous track"
                    icon={<Text fontSize="lg">⏮️</Text>}
                    size="sm"
                    colorScheme="purple"
                    variant="ghost"
                    onClick={handlePreviousTrack}
                    _hover={{ transform: 'scale(1.1)' }}
                    transition="all 0.2s"
                  />
                </Tooltip>
                <Tooltip label={isPlaying ? 'Pause' : 'Play'} placement="top">
                  <IconButton
                    aria-label={isPlaying ? 'Pause music' : 'Play music'}
                    icon={<Text fontSize="lg">{isPlaying ? '⏸️' : '▶️'}</Text>}
                    size="md"
                    colorScheme="purple"
                    variant="solid"
                    onClick={handlePlayPause}
                    _hover={{ transform: 'scale(1.1)' }}
                    transition="all 0.2s"
                    animation={isPlaying ? "pulse 2s infinite" : "none"}
                  />
                </Tooltip>
                <Tooltip label="Next track" placement="top">
                  <IconButton
                    aria-label="Next track"
                    icon={<Text fontSize="lg">⏭️</Text>}
                    size="sm"
                    colorScheme="purple"
                    variant="ghost"
                    onClick={handleNextTrack}
                    _hover={{ transform: 'scale(1.1)' }}
                    transition="all 0.2s"
                  />
                </Tooltip>
              </HStack>
              <HStack spacing={2} w="full">
                <Text fontSize="xs" color="gray.500">🔊</Text>
                <Slider
                  value={volume}
                  onChange={handleVolumeChange}
                  min={0}
                  max={1}
                  step={0.1}
                  size="sm"
                  colorScheme="purple"
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </HStack>
            </VStack>
          </Box>
        </MotionBox>
      )}
    </>
  );
};

export default MusicControl; 