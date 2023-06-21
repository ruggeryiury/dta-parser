const allGenres = {
    alternative: 'Alternative',
    blues: 'Blues',
    classical: 'Classical',
    classicrock: 'Classic Rock',
    country: 'Country',
    emo: 'Emo',
    fusion: 'Fusion',
    glam: 'Glam',
    grunge: 'Grunge',
    hiphoprap: 'Hip-Hop/Rap',
    indierock: 'Indie Rock',
    inspirational: 'Inspirational',
    jazz: 'Jazz',
    jrock: 'J-Rock',
    latin: 'Latin',
    metal: 'Metal',
    new_wave: 'New Wave',
    novelty: 'Novelty',
    numetal: 'Nu-Metal',
    popdanceelectronic: 'Pop/Dance/Electronic',
    poprock: 'Pop-Rock',
    prog: 'Prog',
    punk: 'Punk',
    rbsoulfunk: 'R&B/Soul/Funk',
    reggaeska: 'Reggae/Ska',
    rock: 'Rock',
    southernrock: 'Southern Rock',
    world: 'World',
    other: 'Other',
}

export type SongGenreTypes = keyof typeof allGenres

export const genreLocale = (genre: SongGenreTypes): string => {
    return allGenres[genre] ? allGenres[genre] : genre
}
