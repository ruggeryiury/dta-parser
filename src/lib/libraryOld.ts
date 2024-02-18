import { omitLeadingArticle } from '../utils/stringProcessors'
import { DTAFile } from './dta'
import { localeObject, SongGenre, SongTitleOptionsUppercaseNames } from './locale'
import { sortDTA } from './sort'

export interface SongTitleHeader<T extends SongTitleOptionsUppercaseNames> {
  name: (typeof localeObject.name)[T]
  fullName: T
  songs: DTAFile[]
}

export type SongTitleHeaderObject = { [T in SongTitleOptionsUppercaseNames]: SongTitleHeader<T> }

export const createSongTitleHeader = (songs: DTAFile[]): SongTitleHeaderObject => {
  songs = sortDTA(songs, 'name')
  const rtnObject: SongTitleHeaderObject = {
    '123': {
      name: '123',
      fullName: '123',
      songs: songs.filter((song) => {
        if (!/[a-z]/.test(omitLeadingArticle(song.name).slice(0, 1).toLowerCase())) return song
      }),
    },
    A: {
      name: 'a',
      fullName: 'A',
      songs: songs.filter((song) => {
        if (omitLeadingArticle(song.name).slice(0, 1).toLowerCase() === 'a') return song
      }),
    },
    B: {
      name: 'b',
      fullName: 'B',
      songs: songs.filter((song) => {
        if (omitLeadingArticle(song.name).slice(0, 1).toLowerCase() === 'b') return song
      }),
    },
    C: {
      name: 'c',
      fullName: 'C',
      songs: songs.filter((song) => {
        if (omitLeadingArticle(song.name).slice(0, 1).toLowerCase() === 'c') return song
      }),
    },
    D: {
      name: 'd',
      fullName: 'D',
      songs: songs.filter((song) => {
        if (omitLeadingArticle(song.name).slice(0, 1).toLowerCase() === 'd') return song
      }),
    },
    E: {
      name: 'e',
      fullName: 'E',
      songs: songs.filter((song) => {
        if (omitLeadingArticle(song.name).slice(0, 1).toLowerCase() === 'e') return song
      }),
    },
    F: {
      name: 'f',
      fullName: 'F',
      songs: songs.filter((song) => {
        if (omitLeadingArticle(song.name).slice(0, 1).toLowerCase() === 'f') return song
      }),
    },
    G: {
      name: 'g',
      fullName: 'G',
      songs: songs.filter((song) => {
        if (omitLeadingArticle(song.name).slice(0, 1).toLowerCase() === 'g') return song
      }),
    },
    H: {
      name: 'h',
      fullName: 'H',
      songs: songs.filter((song) => {
        if (omitLeadingArticle(song.name).slice(0, 1).toLowerCase() === 'h') return song
      }),
    },
    I: {
      name: 'i',
      fullName: 'I',
      songs: songs.filter((song) => {
        if (omitLeadingArticle(song.name).slice(0, 1).toLowerCase() === 'i') return song
      }),
    },
    J: {
      name: 'j',
      fullName: 'J',
      songs: songs.filter((song) => {
        if (omitLeadingArticle(song.name).slice(0, 1).toLowerCase() === 'j') return song
      }),
    },
    K: {
      name: 'k',
      fullName: 'K',
      songs: songs.filter((song) => {
        if (omitLeadingArticle(song.name).slice(0, 1).toLowerCase() === 'k') return song
      }),
    },
    L: {
      name: 'l',
      fullName: 'L',
      songs: songs.filter((song) => {
        if (omitLeadingArticle(song.name).slice(0, 1).toLowerCase() === 'l') return song
      }),
    },
    M: {
      name: 'm',
      fullName: 'M',
      songs: songs.filter((song) => {
        if (omitLeadingArticle(song.name).slice(0, 1).toLowerCase() === 'm') return song
      }),
    },
    N: {
      name: 'n',
      fullName: 'N',
      songs: songs.filter((song) => {
        if (omitLeadingArticle(song.name).slice(0, 1).toLowerCase() === 'n') return song
      }),
    },
    O: {
      name: 'o',
      fullName: 'O',
      songs: songs.filter((song) => {
        if (omitLeadingArticle(song.name).slice(0, 1).toLowerCase() === 'o') return song
      }),
    },
    P: {
      name: 'p',
      fullName: 'P',
      songs: songs.filter((song) => {
        if (omitLeadingArticle(song.name).slice(0, 1).toLowerCase() === 'p') return song
      }),
    },
    Q: {
      name: 'q',
      fullName: 'Q',
      songs: songs.filter((song) => {
        if (omitLeadingArticle(song.name).slice(0, 1).toLowerCase() === 'q') return song
      }),
    },
    R: {
      name: 'r',
      fullName: 'R',
      songs: songs.filter((song) => {
        if (omitLeadingArticle(song.name).slice(0, 1).toLowerCase() === 'r') return song
      }),
    },
    S: {
      name: 's',
      fullName: 'S',
      songs: songs.filter((song) => {
        if (omitLeadingArticle(song.name).slice(0, 1).toLowerCase() === 's') return song
      }),
    },
    T: {
      name: 't',
      fullName: 'T',
      songs: songs.filter((song) => {
        if (omitLeadingArticle(song.name).slice(0, 1).toLowerCase() === 't') return song
      }),
    },
    U: {
      name: 'u',
      fullName: 'U',
      songs: songs.filter((song) => {
        if (omitLeadingArticle(song.name).slice(0, 1).toLowerCase() === 'u') return song
      }),
    },
    V: {
      name: 'v',
      fullName: 'V',
      songs: songs.filter((song) => {
        if (omitLeadingArticle(song.name).slice(0, 1).toLowerCase() === 'v') return song
      }),
    },
    W: {
      name: 'w',
      fullName: 'W',
      songs: songs.filter((song) => {
        if (omitLeadingArticle(song.name).slice(0, 1).toLowerCase() === 'w') return song
      }),
    },
    X: {
      name: 'x',
      fullName: 'X',
      songs: songs.filter((song) => {
        if (omitLeadingArticle(song.name).slice(0, 1).toLowerCase() === 'x') return song
      }),
    },
    Y: {
      name: 'y',
      fullName: 'Y',
      songs: songs.filter((song) => {
        if (omitLeadingArticle(song.name).slice(0, 1).toLowerCase() === 'y') return song
      }),
    },
    Z: {
      name: 'z',
      fullName: 'Z',
      songs: songs.filter((song) => {
        if (omitLeadingArticle(song.name).slice(0, 1).toLowerCase() === 'z') return song
      }),
    },
  }
  return rtnObject
}

export interface SongGenreHeader<T extends SongGenre> {
  name: T
  fullName: (typeof localeObject.genre)[T]
  songs: DTAFile[]
}
export type SongGenreHeaderObject = { [T in SongGenre]: SongGenreHeader<T> }

export const createSongGenreHeader = (songs: DTAFile[]): SongGenreHeaderObject => {
  songs = sortDTA(songs, 'name')
  const rtnObject: SongGenreHeaderObject = {
    alternative: {
      name: 'alternative',
      fullName: 'Alternative',
      songs: songs.filter((song) => {
        if (song.genre === 'alternative') return song
      }),
    },
    blues: {
      name: 'blues',
      fullName: 'Blues',
      songs: songs.filter((song) => {
        if (song.genre === 'blues') return song
      }),
    },
    classical: {
      name: 'classical',
      fullName: 'Classical',
      songs: songs.filter((song) => {
        if (song.genre === 'classical') return song
      }),
    },
    classicrock: {
      name: 'classicrock',
      fullName: 'Classic Rock',
      songs: songs.filter((song) => {
        if (song.genre === 'classicrock') return song
      }),
    },
    country: {
      name: 'country',
      fullName: 'Country',
      songs: songs.filter((song) => {
        if (song.genre === 'country') return song
      }),
    },
    emo: {
      name: 'emo',
      fullName: 'Emo',
      songs: songs.filter((song) => {
        if (song.genre === 'emo') return song
      }),
    },
    fusion: {
      name: 'fusion',
      fullName: 'Fusion',
      songs: songs.filter((song) => {
        if (song.genre === 'fusion') return song
      }),
    },
    glam: {
      name: 'glam',
      fullName: 'Glam',
      songs: songs.filter((song) => {
        if (song.genre === 'glam') return song
      }),
    },
    grunge: {
      name: 'grunge',
      fullName: 'Grunge',
      songs: songs.filter((song) => {
        if (song.genre === 'grunge') return song
      }),
    },
    hiphoprap: {
      name: 'hiphoprap',
      fullName: 'Hip-Hop/Rap',
      songs: songs.filter((song) => {
        if (song.genre === 'hiphoprap') return song
      }),
    },
    indierock: {
      name: 'indierock',
      fullName: 'Indie Rock',
      songs: songs.filter((song) => {
        if (song.genre === 'indierock') return song
      }),
    },
    inspirational: {
      name: 'inspirational',
      fullName: 'Inspirational',
      songs: songs.filter((song) => {
        if (song.genre === 'inspirational') return song
      }),
    },
    jazz: {
      name: 'jazz',
      fullName: 'Jazz',
      songs: songs.filter((song) => {
        if (song.genre === 'jazz') return song
      }),
    },
    jrock: {
      name: 'jrock',
      fullName: 'J-Rock',
      songs: songs.filter((song) => {
        if (song.genre === 'jrock') return song
      }),
    },
    latin: {
      name: 'latin',
      fullName: 'Latin',
      songs: songs.filter((song) => {
        if (song.genre === 'latin') return song
      }),
    },
    metal: {
      name: 'metal',
      fullName: 'Metal',
      songs: songs.filter((song) => {
        if (song.genre === 'metal') return song
      }),
    },
    new_wave: {
      name: 'new_wave',
      fullName: 'New Wave',
      songs: songs.filter((song) => {
        if (song.genre === 'new_wave') return song
      }),
    },
    novelty: {
      name: 'novelty',
      fullName: 'Novelty',
      songs: songs.filter((song) => {
        if (song.genre === 'novelty') return song
      }),
    },
    numetal: {
      name: 'numetal',
      fullName: 'Nu-Metal',
      songs: songs.filter((song) => {
        if (song.genre === 'numetal') return song
      }),
    },
    popdanceelectronic: {
      name: 'popdanceelectronic',
      fullName: 'Pop/Dance/Electronic',
      songs: songs.filter((song) => {
        if (song.genre === 'popdanceelectronic') return song
      }),
    },
    poprock: {
      name: 'poprock',
      fullName: 'Pop-Rock',
      songs: songs.filter((song) => {
        if (song.genre === 'poprock') return song
      }),
    },
    prog: {
      name: 'prog',
      fullName: 'Prog',
      songs: songs.filter((song) => {
        if (song.genre === 'prog') return song
      }),
    },
    punk: {
      name: 'punk',
      fullName: 'Punk',
      songs: songs.filter((song) => {
        if (song.genre === 'punk') return song
      }),
    },
    rbsoulfunk: {
      name: 'rbsoulfunk',
      fullName: 'R&B/Soul/Funk',
      songs: songs.filter((song) => {
        if (song.genre === 'rbsoulfunk') return song
      }),
    },
    reggaeska: {
      name: 'reggaeska',
      fullName: 'Reggae/Ska',
      songs: songs.filter((song) => {
        if (song.genre === 'reggaeska') return song
      }),
    },
    rock: {
      name: 'rock',
      fullName: 'Rock',
      songs: songs.filter((song) => {
        if (song.genre === 'rock') return song
      }),
    },
    southernrock: {
      name: 'southernrock',
      fullName: 'Southern Rock',
      songs: songs.filter((song) => {
        if (song.genre === 'southernrock') return song
      }),
    },
    world: {
      name: 'world',
      fullName: 'World',
      songs: songs.filter((song) => {
        if (song.genre === 'world') return song
      }),
    },
    other: {
      name: 'other',
      fullName: 'Other',
      songs: songs.filter((song) => {
        if (song.genre === 'other') return song
      }),
    },
  }

  return rtnObject
}

const filterQueryOptions = (songs: DTAFile[], options: {}) => {}

export type LibraryHeaders = 'songTitle' | 'genre'

export type LibraryQueryReturnType<H extends LibraryHeaders> = H extends 'songTitle' ? SongTitleHeaderObject : H extends 'genre' ? SongGenreHeaderObject : never

export const libraryQuery = <H extends LibraryHeaders>(songs: DTAFile[], header: H, options?: {}): LibraryQueryReturnType<H> => {
  const optionsDefault = {}

  if (header === 'songTitle') {
    return createSongTitleHeader(songs) as LibraryQueryReturnType<H>
  } else {
    return createSongGenreHeader(songs) as LibraryQueryReturnType<H>
  }
}
