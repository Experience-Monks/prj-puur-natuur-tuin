import { Channels } from '@mediamonks/channels';
import { SoundChannel } from '../data/enums/SoundChannel';
import { SoundName } from '../data/enums/SoundName';
import { isClientSide } from '../utils/environment.utils';
import { getRoot } from '../utils/url.utils';

let channelsInstance: Channels | null = null;

const canPlayOgg = (): boolean => {
  const audioElement = document.createElement('audio');
  return audioElement.canPlayType('audio/ogg; codecs="vorbis"') !== '';
};

/**
 * This hook can be used to access the channels instance
 *
 * Example:
 * ```ts
 * const channelsInstance = useChannels();
 * ```
 */
export const useChannels = (): Channels | null => {
  if (isClientSide && channelsInstance === null) {
    channelsInstance = new Channels({
      soundsPath: `${getRoot()}/assets/audio/`,
      soundsExtension: canPlayOgg() ? 'ogg' : 'mp3',
      sounds: Object.values(SoundName).map((value) => ({
        name: value,
      })),
    });

    channelsInstance.createChannel(SoundChannel.Ui, {
      volume: 1,
      type: 'polyphonic',
    });

    channelsInstance.createChannel(SoundChannel.Ambient, {
      volume: 1,
      type: 'polyphonic',
    });
  }

  return channelsInstance;
};
