import { DTAParserOptions } from '../../src'

export type C3CustomsUpgradesObject = NonNullable<DTAParserOptions['update']>

export const C3Upgrades = (): C3CustomsUpgradesObject => {
  return {
    BacktoBlack: {
      // Back to Black - Amy Winehouse
      key: 'Dm',
    },
    AW_LoveIsaLosingGame_V1_r: {
      // Love Is a Losing Game - Amy Winehouse
      key: 'C',
    },
    TDOTrOwnJIM: {
      // Tears Dry On Their Own - Amy Winehouse
      key: 'E',
    },
    YouKnowImNoGood: {
      // You Know I'm No Good - Amy Winehouse
      key: 'Dm',
    },

    A_Hello_PVH: {
      // Hello - Adele
      key: 'Fm',
    },
    esp_adele_ritdeepv2: {
      // Rolling in the Deep - Adele
      key: 'Cm',
    },
    'Adele_SetFireToTheRainv#_': {
      // Set Fire to the Rain - Adele
      key: 'F',
    },
    esp_adele_someonelikev4: {
      // Someone Like You - Adele
      key: 'A',
    },

    'dancingqueenv12': {
      // Dancing Queen - ABBA
      key: 'A',
      genre: {
        genre: 'Pop-Rock',
        sub_genre: 'Pop'
      },
      rating: 'Family Friendly'
    },
    'UM_DYMKKEYSrb3con': {
      // Does Your Mother Know - ABBA
      key: 'G',
      rating: 'Supervision Recommended'
    },
    'GimmeX3': {
      // Gimme! Gimme! Gimme! (A Man After Midnight) - ABBA
      key: 'Dm',
      album: {
        hasArt: true,
        name: 'Greatest Hits Vol. 2',
        track_number: 1
      }
    },

    'crownoflove': {
      // Crown of Love - Arcade Fire
      key: 'Eb',
      rating: 'Family Friendly'
    },
    'ArcadeFire-TheSuburbs_rb3': {
      // The Suburbs - Arcade Fire
      key: 'A'
    },
    '1649900159': {
      // My Body Is A Cage - Arcade Fire
	  songname: 'mbiacv3_2',
      key: 'Fm'
    },
    'mbiacv3_2': {
      // My Body Is A Cage - Arcade Fire (songname rename)
      key: 'Fm'
    },
    'ArcadeFire-PowerOutv#_rb3': {
      // Neighborhood #3 (Power Out) - Arcade Fire
      key: 'F'
    },
    'AF-Sprawl_2v#': {
      // Sprawl II (Mountains Beyond Mountains) - Arcade Fire
      key: 'Eb'
    },
    'neigh1v#': {
      // Neighborhood #1 (Tunnels) - Arcade Fire
      key: 'F'
    },
    'REFLv9': {
      // Reflektor - Arcade Fire
      key: 'B',
      rating: 'Family Friendly'
    },
    'RebellionLiesv2': {
      // Rebellion (Lies) - Arcade Fire
      key: 'Bb'
    },
    'kam_af_ncg2_CON': {
      // No Cars Go - Arcade Fire
      key: 'Ab'
    },
    'kam_af_wu2_CON': {
      // Wake Up - Arcade Fire
      key: 'C'
    },
    'wexistv11': {
      // We Exist - Arcade Fire
      key: 'A',
      rating: 'Family Friendly'
    },
  } as C3CustomsUpgradesObject
}
