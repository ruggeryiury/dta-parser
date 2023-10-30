import fs from 'fs'
import path from 'path'
import { genTabs as t } from '../../src/utils/genTabs'
import { rankCalculator as r } from '../../src/utils/rankCalculations'
import { panVolInfoGen } from '../../src/utils/panVolInfoGen'
import { SubGenreTypes } from '../../src/utils/locale'
import { MAGMAFileContents } from '../@types/MAGMAFileContents'

export interface MAGMAFilesGeneratorOptions {
  /**
   * Default is `true`.
   */
  useLatestVersion?: boolean
  /**
   * Default is `true`.
   */
  customSaveOnDesktop?: boolean
}

export const genMAGMAFiles = async (song: MAGMAFileContents, options?: MAGMAFilesGeneratorOptions): Promise<void> => {
  const RBPROJFilePath = path.resolve(`./backend/gen/${song.id}.rbproj`)

  const C3FilePath = path.resolve(`./backend/gen/${song.id}.c3`)

  let output = ''
  const MonoBlank = `C:\\\\Users\\\\Ruggery\\\\Desktop\\\\Rock Band\\\\Magma\\\\audio\\\\mono44.wav`
  const StereoBlank = `C:\\\\Users\\\\Ruggery\\\\Desktop\\\\Rock Band\\\\Magma\\\\audio\\\\stereo44.wav`
  const DryVox = `C:\\\\Users\\\\Ruggery\\\\Desktop\\\\Rock Band\\\\Magma\\\\audio\\\\blank_dryvox.wav`

  const RBAPath = path.resolve(`./backend/gen/${song.id}.rba`)

  const MIDIFilePath = `c:\\\\Users\\\\Ruggery\\\\Documents\\\\Visual Studio Code\\\\Projects\\\\ruggy-customs-projects\\\\songs\\\\${song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)}\\\\${song.id}.mid`

  const DV0Path = song.hasLipSyncFiles ? (song.vocal_parts > 0 ? `c:\\\\Users\\\\Ruggery\\\\Documents\\\\Visual Studio Code\\\\Projects\\\\ruggy-customs-projects\\\\songs\\\\${song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)}\\\\magma\\\\HARM1.wav` : '') : song.vocal_parts > 0 ? DryVox : ''

  const DV1Path = song.hasLipSyncFiles ? (song.vocal_parts > 1 ? `c:\\\\Users\\\\Ruggery\\\\Documents\\\\Visual Studio Code\\\\Projects\\\\ruggy-customs-projects\\\\songs\\\\${song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)}\\\\magma\\\\HARM2.wav` : '') : song.vocal_parts > 1 ? DryVox : ''

  const DV2Path = song.hasLipSyncFiles ? (song.vocal_parts > 2 ? `c:\\\\Users\\\\Ruggery\\\\Documents\\\\Visual Studio Code\\\\Projects\\\\ruggy-customs-projects\\\\songs\\\\${song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)}\\\\magma\\\\HARM3.wav` : '') : song.vocal_parts > 2 ? DryVox : ''

  const AlbumArtPath = song.album_art ? `c:\\\\Users\\\\Ruggery\\\\Documents\\\\Visual Studio Code\\\\Projects\\\\ruggy-customs-projects\\\\songs\\\\${song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)}\\\\magma\\\\${song.id}_keep_x256.bmp` : ''

  const KickWavPath = song.multitrack ? (song.tracks_count[0] > 2 ? `c:\\\\Users\\\\Ruggery\\\\Documents\\\\Visual Studio Code\\\\Projects\\\\ruggy-customs-projects\\\\songs\\\\${song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)}\\\\wav\\\\${song.doubleKickOptions?.kickwav ? 'kick2x.wav' : 'kick.wav'}` : '') : song.tracks_count[0] > 2 ? MonoBlank : song.tracks_count[0] > 5 ? StereoBlank : ''

  const SnareWavPath = song.multitrack ? (song.tracks_count[0] > 3 ? `c:\\\\Users\\\\Ruggery\\\\Documents\\\\Visual Studio Code\\\\Projects\\\\ruggy-customs-projects\\\\songs\\\\${song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)}\\\\wav\\\\snare.wav` : '') : song.tracks_count[0] > 3 ? MonoBlank : song.tracks_count[0] > 4 ? StereoBlank : ''

  const DrumKitWavPath = song.multitrack ? (song.tracks_count[0] === 2 ? `c:\\\\Users\\\\Ruggery\\\\Documents\\\\Visual Studio Code\\\\Projects\\\\ruggy-customs-projects\\\\songs\\\\${song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)}\\\\wav\\\\${song.doubleKickOptions?.kickwav ? 'drums2x.wav' : 'drums.wav'}` : song.tracks_count[0] > 2 ? `c:\\\\Users\\\\Ruggery\\\\Documents\\\\Visual Studio Code\\\\Projects\\\\ruggy-customs-projects\\\\songs\\\\${song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)}\\\\wav\\\\kit.wav` : '') : song.tracks_count[0] > 0 ? StereoBlank : ''

  const BassWavPath = song.multitrack ? (song.tracks_count[1] !== 0 ? `c:\\\\Users\\\\Ruggery\\\\Documents\\\\Visual Studio Code\\\\Projects\\\\ruggy-customs-projects\\\\songs\\\\${song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)}\\\\wav\\\\bass.wav` : '') : song.tracks_count[1] === 1 ? MonoBlank : song.tracks_count[1] === 2 ? StereoBlank : ''
  const GuitarWavPath = song.multitrack ? (song.tracks_count[2] !== 0 ? `c:\\\\Users\\\\Ruggery\\\\Documents\\\\Visual Studio Code\\\\Projects\\\\ruggy-customs-projects\\\\songs\\\\${song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)}\\\\wav\\\\guitar.wav` : '') : song.tracks_count[2] === 1 ? MonoBlank : song.tracks_count[2] === 2 ? StereoBlank : ''
  const VocalsWavPath = song.multitrack ? (song.tracks_count[3] !== 0 ? `c:\\\\Users\\\\Ruggery\\\\Documents\\\\Visual Studio Code\\\\Projects\\\\ruggy-customs-projects\\\\songs\\\\${song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)}\\\\wav\\\\vocals.wav` : '') : song.tracks_count[3] === 1 ? MonoBlank : song.tracks_count[3] === 2 ? StereoBlank : ''
  const KeysWavPath = song.multitrack ? (song.tracks_count[4] !== 0 ? `c:\\\\Users\\\\Ruggery\\\\Documents\\\\Visual Studio Code\\\\Projects\\\\ruggy-customs-projects\\\\songs\\\\${song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)}\\\\wav\\\\keys.wav` : '') : song.tracks_count[4] === 1 ? MonoBlank : song.tracks_count[4] === 2 ? StereoBlank : ''
  const BackingWavPath = `c:\\\\Users\\\\Ruggery\\\\Documents\\\\Visual Studio Code\\\\Projects\\\\ruggy-customs-projects\\\\songs\\\\${song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)}\\\\wav\\\\backing.wav`

  output += `(`
  output += `${t(1, 'start')}'project'`
  output += `${t(1, 'start')}(`
  output += `${t(2, 'start')}'tool_version'`
  output += `${t(2, 'start')}"110411_A"`
  output += `${t(1, 'start')})`
  output += `${t(1, 'start')}('project_version' 24)`

  output += `${t(1, 'start')}(`
  output += `${t(2, 'start')}'metadata'`

  output += `${t(2, 'start')}(`
  output += `${t(3, 'start')}'song_name'`
  output += `${t(3, 'start')}"${song.name.replace(/"/g, ' ')}"`
  output += `${t(2, 'start')})`

  output += `${t(2, 'start')}(`
  output += `${t(3, 'start')}'artist_name'`
  output += `${t(3, 'start')}"${song.artist.replace(/"/g, ' ')}"`
  output += `${t(2, 'start')})`

  output += `${t(2, 'start')}('genre' '${song.genre}')`
  output += `${t(2, 'start')}('sub_genre' '${song.sub_genre as SubGenreTypes}')`
  output += `${t(2, 'start')}('year_released' ${song.year_released})`

  output += `${t(2, 'start')}(`
  output += `${t(3, 'start')}'album_name'`
  output += `${t(3, 'start')}"${song.album_name ? song.album_name.replace(/"/g, ' ') : ''}"`
  output += `${t(2, 'start')})`

  output += `${t(2, 'start')}(`
  output += `${t(3, 'start')}'author'`
  output += `${t(3, 'start')}"${song.author ? song.author.replace(/"/g, ' ') : ''}"`
  output += `${t(2, 'start')})`

  output += `${t(2, 'start')}(`
  output += `${t(3, 'start')}'release_label'`
  output += `${t(3, 'start')}""`
  output += `${t(2, 'start')})`

  output += `${t(2, 'start')}('country' 'ugc_country_us')`
  output += `${t(2, 'start')}('price' 80)`
  output += `${t(2, 'start')}('track_number' ${song.album_track_number ? song.album_track_number : 1})`
  output += `${t(2, 'start')}('has_album' ${song.album_name ? 1 : 0})`

  const rank_guitar = r('guitar', song.rank_guitar) + 1 === 0 ? 1 : r('guitar', song.rank_guitar) + 1
  const rank_bass = r('bass', song.rank_bass) + 1 === 0 ? 1 : r('bass', song.rank_bass) + 1
  const rank_drum = r('drum', song.rank_drum) + 1 === 0 ? 1 : r('drum', song.rank_drum) + 1
  const rank_vocals = r('vocals', song.rank_vocals) + 1 === 0 ? 1 : r('vocals', song.rank_vocals) + 1
  const rank_keys = r('keys', song.rank_keys) + 1 === 0 ? 1 : r('keys', song.rank_keys) + 1
  const rank_real_keys = r('real_keys', song.rank_real_keys) + 1 === 0 ? 1 : r('real_keys', song.rank_real_keys) + 1
  const rank_band = r('band', song.rank_band) + 1 === 0 ? 1 : r('band', song.rank_band) + 1

  output += `${t(1, 'start')})`
  output += `${t(1, 'start')}(`
  output += `${t(2, 'start')}'gamedata'`
  output += `${t(2, 'start')}('preview_start_ms' ${song.preview[0]})`
  output += `${t(2, 'start')}('rank_guitar' ${rank_guitar})`
  output += `${t(2, 'start')}('rank_bass' ${rank_bass})`
  output += `${t(2, 'start')}('rank_drum' ${rank_drum})`
  output += `${t(2, 'start')}('rank_vocals' ${rank_vocals})`
  output += `${t(2, 'start')}('rank_keys' ${rank_keys})`
  output += `${t(2, 'start')}('rank_pro_keys' ${rank_real_keys})`
  output += `${t(2, 'start')}('rank_band' ${rank_band})`
  output += `${t(2, 'start')}('vocal_scroll_speed' ${song.song_scroll_speed ? song.song_scroll_speed : 2300})`
  output += `${t(2, 'start')}('anim_tempo' ${song.anim_tempo})`
  output += `${t(2, 'start')}('vocal_gender' ${song.vocal_gender})`
  output += `${t(2, 'start')}('vocal_percussion' '${song.bank.slice(4, -10)}')`
  output += `${t(2, 'start')}('vocal_parts' ${song.vocal_parts})`
  output += `${t(2, 'start')}('guide_pitch_volume' ${song.guide_pitch_volume ? song.guide_pitch_volume.toFixed(2) : '-3.00'})`

  output += `${t(1, 'start')})`
  output += `${t(1, 'start')}(`
  output += `${t(2, 'start')}'languages'`
  output += `${t(2, 'start')}('english' 1)`
  output += `${t(2, 'start')}('french' 0)`
  output += `${t(2, 'start')}('italian' 0)`
  output += `${t(2, 'start')}('spanish' 0)`
  output += `${t(2, 'start')}('german' 0)`
  output += `${t(2, 'start')}('japanese' 0)`

  output += `${t(1, 'start')})`
  output += `${t(1, 'start')}(`
  output += `${t(2, 'start')}'destination_file'`
  output += `${t(2, 'start')}"${options?.customSaveOnDesktop === false ? RBAPath : `c:\\\\Users\\\\Ruggery\\\\Desktop\\\\${song.id}.rba`}"`
  output += `${t(1, 'start')})`

  output += `${t(1, 'start')}(`
  output += `${t(2, 'start')}'midi'`
  output += `${t(2, 'start')}(`
  output += `${t(3, 'start')}'file'`
  output += `${t(3, 'start')}"${MIDIFilePath}"`
  output += `${t(2, 'start')})`
  output += `${t(2, 'start')}(`
  output += `${t(3, 'start')}'autogen_theme'`
  output += `${t(3, 'start')}"${song.autogenTheme ? `${song.autogenTheme}.rbtheme` : 'ArenaRock.rbtheme'}"`
  output += `${t(2, 'start')})`
  output += `${t(1, 'start')})`

  output += `${t(1, 'start')}(`
  output += `${t(2, 'start')}'dry_vox'`

  output += `${t(2, 'start')}(`
  output += `${t(3, 'start')}'part0'`
  output += `${t(3, 'start')}(`
  output += `${t(4, 'start')}'file'`
  output += `${t(4, 'start')}"${DV0Path}"`
  output += `${t(3, 'start')})`
  output += `${t(3, 'start')}('enabled' ${song.vocal_parts > 0 ? 1 : 0})`
  output += `${t(2, 'start')})`

  output += `${t(2, 'start')}(`
  output += `${t(3, 'start')}'part1'`
  output += `${t(3, 'start')}(`
  output += `${t(4, 'start')}'file'`
  output += `${t(4, 'start')}"${DV1Path}"`
  output += `${t(3, 'start')})`
  output += `${t(3, 'start')}('enabled' ${song.vocal_parts > 1 ? 1 : 0})`
  output += `${t(2, 'start')})`

  output += `${t(2, 'start')}(`
  output += `${t(3, 'start')}'part2'`
  output += `${t(3, 'start')}(`
  output += `${t(4, 'start')}'file'`
  output += `${t(4, 'start')}"${DV2Path}"`
  output += `${t(3, 'start')})`
  output += `${t(3, 'start')}('enabled' ${song.vocal_parts > 2 ? 1 : 0})`
  output += `${t(2, 'start')})`
  output += `${t(2, 'start')}('tuning_offset_cents' ${song.tuning_offset_cents ? song.tuning_offset_cents.toFixed(2) : '0.00'})`
  output += `${t(1, 'start')})`

  output += `${t(1, 'start')}(`
  output += `${t(2, 'start')}'album_art'`
  output += `${t(2, 'start')}(`
  output += `${t(3, 'start')}'file'`
  output += `${t(3, 'start')}"${AlbumArtPath}"`
  output += `${t(2, 'start')})`
  output += `${t(1, 'start')})`

  const panvol = panVolInfoGen(song)

  output += `${t(1, 'start')}(`
  output += `${t(2, 'start')}'tracks'`
  output += `${t(2, 'start')}('drum_layout' '${panvol.drum.channels === 0 || panvol.drum.channels === 2 ? 'drum_layout_kit' : panvol.drum.channels === 3 ? 'drum_layout_kit_kick' : 'drum_layout_kit_kick_snare'}')`

  output += `${t(2, 'start')}(`
  output += `${t(3, 'start')}'drum_kit'`
  output += `${t(3, 'start')}('enabled' ${panvol.drum.kit_enabled ? 1 : 0})`
  output += `${t(3, 'start')}('channels' ${panvol.drum.kit_channels})`
  output += `${t(3, 'start')}('pan' ${panvol.drum.kit_pan.map((pan) => pan.toFixed(2)).join(' ')})`
  output += `${t(3, 'start')}('vol' ${panvol.drum.kit_vol.map((vol) => vol.toFixed(2)).join(' ')})`
  output += `${t(3, 'start')}(`
  output += `${t(4, 'start')}'file'`
  output += `${t(4, 'start')}"${DrumKitWavPath}"`
  output += `${t(3, 'start')})`
  output += `${t(2, 'start')})`

  output += `${t(2, 'start')}(`
  output += `${t(3, 'start')}'drum_kick'`
  output += `${t(3, 'start')}('enabled' ${panvol.drum.kick_enabled ? 1 : 0})`
  output += `${t(3, 'start')}('channels' ${panvol.drum.kick_channels})`
  output += `${t(3, 'start')}('pan' ${panvol.drum.kick_enabled ? panvol.drum.kick_pan.map((pan) => pan.toFixed(2)).join(' ') : '0.00'})`
  output += `${t(3, 'start')}('vol' ${panvol.drum.kick_enabled ? panvol.drum.kick_vol.map((vol) => vol.toFixed(2)).join(' ') : '0.00'})`
  output += `${t(3, 'start')}(`
  output += `${t(4, 'start')}'file'`
  output += `${t(4, 'start')}"${KickWavPath}"`
  output += `${t(3, 'start')})`
  output += `${t(2, 'start')})`

  output += `${t(2, 'start')}(`
  output += `${t(3, 'start')}'drum_snare'`
  output += `${t(3, 'start')}('enabled' ${panvol.drum.snare_enabled ? 1 : 0})`
  output += `${t(3, 'start')}('channels' ${panvol.drum.snare_channels})`
  output += `${t(3, 'start')}('pan' ${panvol.drum.snare_enabled ? panvol.drum.snare_pan.map((pan) => pan.toFixed(2)).join(' ') : '0.00'})`
  output += `${t(3, 'start')}('vol' ${panvol.drum.snare_enabled ? panvol.drum.snare_vol.map((vol) => vol.toFixed(2)).join(' ') : '0.00'})`
  output += `${t(3, 'start')}(`
  output += `${t(4, 'start')}'file'`
  output += `${t(4, 'start')}"${SnareWavPath}"`
  output += `${t(3, 'start')})`
  output += `${t(2, 'start')})`

  output += `${t(2, 'start')}(`
  output += `${t(3, 'start')}'bass'`
  output += `${t(3, 'start')}('enabled' ${panvol.bass.enabled ? 1 : 0})`
  output += `${t(3, 'start')}('channels' ${panvol.bass.channels})`
  output += `${t(3, 'start')}('pan' ${panvol.bass.enabled ? panvol.bass.pan.map((pan) => pan.toFixed(2)).join(' ') : '0.00'})`
  output += `${t(3, 'start')}('vol' ${panvol.bass.enabled ? panvol.bass.vol.map((vol) => vol.toFixed(2)).join(' ') : '0.00'})`
  output += `${t(3, 'start')}(`
  output += `${t(4, 'start')}'file'`
  output += `${t(4, 'start')}"${BassWavPath}"`
  output += `${t(3, 'start')})`
  output += `${t(2, 'start')})`

  output += `${t(2, 'start')}(`
  output += `${t(3, 'start')}'guitar'`
  output += `${t(3, 'start')}('enabled' ${panvol.guitar.enabled ? 1 : 0})`
  output += `${t(3, 'start')}('channels' ${panvol.guitar.channels})`
  output += `${t(3, 'start')}('pan' ${panvol.guitar.enabled ? panvol.guitar.pan.map((pan) => pan.toFixed(2)).join(' ') : '0.00'})`
  output += `${t(3, 'start')}('vol' ${panvol.guitar.enabled ? panvol.guitar.vol.map((vol) => vol.toFixed(2)).join(' ') : '0.00'})`
  output += `${t(3, 'start')}(`
  output += `${t(4, 'start')}'file'`
  output += `${t(4, 'start')}"${GuitarWavPath}"`
  output += `${t(3, 'start')})`
  output += `${t(2, 'start')})`

  output += `${t(2, 'start')}(`
  output += `${t(3, 'start')}'vocals'`
  output += `${t(3, 'start')}('enabled' ${panvol.vocals.enabled ? 1 : 0})`
  output += `${t(3, 'start')}('channels' ${panvol.vocals.channels})`
  output += `${t(3, 'start')}('pan' ${panvol.vocals.enabled ? panvol.vocals.pan.map((pan) => pan.toFixed(2)).join(' ') : '0.00'})`
  output += `${t(3, 'start')}('vol' ${panvol.vocals.enabled ? panvol.vocals.vol.map((vol) => vol.toFixed(2)).join(' ') : '0.00'})`
  output += `${t(3, 'start')}(`
  output += `${t(4, 'start')}'file'`
  output += `${t(4, 'start')}"${VocalsWavPath}"`
  output += `${t(3, 'start')})`
  output += `${t(2, 'start')})`

  output += `${t(2, 'start')}(`
  output += `${t(3, 'start')}'keys'`
  output += `${t(3, 'start')}('enabled' ${panvol.keys.enabled ? 1 : 0})`
  output += `${t(3, 'start')}('channels' ${panvol.keys.channels})`
  output += `${t(3, 'start')}('pan' ${panvol.keys.enabled ? panvol.keys.pan.map((pan) => pan.toFixed(2)).join(' ') : '0.00'})`
  output += `${t(3, 'start')}('vol' ${panvol.keys.enabled ? panvol.keys.vol.map((vol) => vol.toFixed(2)).join(' ') : '0.00'})`
  output += `${t(3, 'start')}(`
  output += `${t(4, 'start')}'file'`
  output += `${t(4, 'start')}"${KeysWavPath}"`
  output += `${t(3, 'start')})`
  output += `${t(2, 'start')})`

  output += `${t(2, 'start')}(`
  output += `${t(3, 'start')}'backing'`
  output += `${t(3, 'start')}('enabled' ${panvol.backing.enabled ? 1 : 0})`
  output += `${t(3, 'start')}('channels' ${panvol.backing.channels})`
  output += `${t(3, 'start')}('pan' ${panvol.backing.enabled ? panvol.backing.pan.map((pan) => pan.toFixed(2)).join(' ') : '0.00'})`
  output += `${t(3, 'start')}('vol' ${panvol.backing.enabled ? panvol.backing.vol.map((vol) => vol.toFixed(2)).join(' ') : '0.00'})`
  output += `${t(3, 'start')}(`
  output += `${t(4, 'start')}'file'`
  output += `${t(4, 'start')}"${BackingWavPath}"`
  output += `${t(3, 'start')})`
  output += `${t(2, 'start')})`
  output += `${t(1, 'start')})`
  output += `${t(0, 'start')})`

  await fs.promises.writeFile(RBPROJFilePath, output, 'utf-8')

  let c3out = `\\\\Created by Magma: C3 Roks Edition v3.3.5\n\\\\DO NOT EDIT MANUALLY\nSong=${song.name}\nArtist=${song.artist}\nAlbum=${song.album_name ? song.album_name : ''}\nCustomID=\nVersion=${options?.useLatestVersion === false ? 1 : song.releaseVer ? song.releaseVer : 1}\nIsMaster=${song.master ? 'True' : 'False'}\nEncodingQuality=7\n${song.year_recorded ? `ReRecordYear=${song.year_recorded}` : ''}2xBass=${song.doubleKick ? 'True' : 'False'}\nRhythmKeys=${song.rhythmOnKeys ? 'True' : 'False'}\nRhythmBass=${song.rhythmOnBass ? 'True' : 'False'}\nKaraoke=${song.karaoke ? 'True' : 'False'}\nMultitrack=${song.multitrack ? 'True' : 'False'}\nConvert=${song.convert ? 'True' : 'False'}\nExpertOnly=${song.expertOnly ? 'True' : 'False'}\n`

  if (song.rank_real_bass && song.real_bass_tuning) {
    c3out += `ProBassDiff=${song.rank_real_bass}\nProBassTuning4=(real_bass_tuning (${song.real_bass_tuning.join(' ')}))\n`
  }

  if (song.rank_real_guitar && song.real_guitar_tuning) {
    c3out += `ProGuitarDiff=${song.rank_real_guitar}\nProGuitarTuning=(real_guitar_tuning (${song.real_guitar_tuning.join(' ')}))\n`
  }

  c3out += `DisableProKeys=False\nTonicNote=${song.vocal_tonic_note ? song.vocal_tonic_note : '0'}\nTuningCents=${song.tuning_offset_cents ? song.tuning_offset_cents : '0'}\nSongRating=${song.rating}\nDrumKitSFX=${song.drum_bank === 'sfx/kit01_bank.milo' ? 0 : song.drum_bank === 'sfx/kit02_bank.milo' ? 1 : song.drum_bank === 'sfx/kit03_bank.milo' ? 2 : song.drum_bank === 'sfx/kit04_bank.milo' ? 3 : 4}\nHopoTresholdIndex=${song.hopo_threshold === 90 ? 0 : song.hopo_threshold === 130 ? 1 : song.hopo_threshold === 170 ? 2 : song.hopo_threshold === 250 ? 3 : 2}\n`

  const drumSolo = song.solo && song.solo.find((flags) => flags === 'drum') ? 'True' : 'False'
  const guitarSolo = song.solo && song.solo.find((flags) => flags === 'guitar') ? 'True' : 'False'
  const bassSolo = song.solo && song.solo.find((flags) => flags === 'bass') ? 'True' : 'False'
  const keysSolo = song.solo && song.solo.find((flags) => flags === 'keys') ? 'True' : 'False'
  const vocalsSolo = song.solo && song.solo.find((flags) => flags === 'vocal_percussion') ? 'True' : 'False'

  c3out += `MuteVol=${song.mute_volume ? song.mute_volume : -96}\nVocalMuteVol=${song.mute_volume_vocals ? song.mute_volume_vocals : -12}\nSoloDrums=${drumSolo}\nSoloGuitar=${guitarSolo}\nSoloBass=${bassSolo}\nSoloKeys=${keysSolo}\nSoloVocals=${vocalsSolo}\nSongPreview=${song.preview[0]}\nCheckTempoMap=True\nWiiMode=False\nDoDrumMixEvents=True\nPackageDisplay=${song.artist} - ${song.name}\nPackageDescription=Created with Magma: C3 Roks Edition. For more great customs authoring tools, visit forums.customscreators.com\nSongAlbumArt=c:\\users\\ruggery\\documents\\visual studio code\\projects\\ruggy-customs-projects\\songs\\${song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)}\\magma\\${song.id}_keep.png\nPackageThumb=\n${song.encoding === 'utf8' ? 'EncodeANSI=False\nEncodeUTF8=True' : 'EncodeANSI=True\nEncodeUTF8=False'}\nUseNumericID=True\nUniqueNumericID=${song.song_id}\nUniqueNumericID2X=\n\nTO DO List Begin\nToDo1=Verify the accuracy of all metadata,False,False\nToDo2=Grab official *.png_xbox art file if applicable,False,False\nToDo3=Chart reductions in all instruments,False,False\nToDo4=Add drum fills,False,False\nToDo5=Add overdrive for all instruments,False,False\nToDo6=Add overdrive for vocals,False,False\nToDo7=Create practice sessions [EVENTS],False,False\nToDo8=Draw sing-along notes in VENUE,False,False\nToDo9=Record dry vocals for lipsync,False,False\nToDo10=Render audio with RB limiter and count-in,False,False\nToDo12=Click to add new item...,False,False\nToDo13=Click to add new item...,False,False\nToDo14=Click to add new item...,False,False\nToDo15=Click to add new item...,False,False\nTO DO List End\n`

  await fs.promises.writeFile(C3FilePath, c3out, 'utf-8')
}
