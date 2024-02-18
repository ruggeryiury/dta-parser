import { DTAParserOptions } from '../../src'

export type C3CustomsUpgradesObject = NonNullable<DTAParserOptions<false>['update']>

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

    dancingqueenv12: {
      // Dancing Queen - ABBA
      key: 'A',
      genre: {
        genre: 'Pop-Rock',
        sub_genre: 'Pop',
      },
      rating: 'Family Friendly',
    },
    UM_DYMKKEYSrb3con: {
      // Does Your Mother Know - ABBA
      key: 'G',
      rating: 'Supervision Recommended',
    },
    GimmeX3: {
      // Gimme! Gimme! Gimme! (A Man After Midnight) - ABBA
      key: 'Dm',
      album: {
        hasArt: true,
        name: 'Greatest Hits Vol. 2',
        track_number: 1,
      },
    },

    crownoflove: {
      // Crown of Love - Arcade Fire
      key: 'Eb',
      rating: 'Family Friendly',
    },
    'ArcadeFire-TheSuburbs_rb3': {
      // The Suburbs - Arcade Fire
      key: 'A',
    },
    '1649900159': {
      // My Body Is A Cage - Arcade Fire
      id: 'mbiacv3_2',
      key: 'Fm',
    },
    mbiacv3_2: {
      // My Body Is A Cage - Arcade Fire (non-numeric ID rename)
      key: 'Fm',
    },
    'ArcadeFire-PowerOutv#_rb3': {
      // Neighborhood #3 (Power Out) - Arcade Fire
      key: 'F',
    },
    'AF-Sprawl_2v#': {
      // Sprawl II (Mountains Beyond Mountains) - Arcade Fire
      key: 'Eb',
    },
    'neigh1v#': {
      // Neighborhood #1 (Tunnels) - Arcade Fire
      key: 'F',
    },
    REFLv9: {
      // Reflektor - Arcade Fire
      key: 'B',
      rating: 'Family Friendly',
    },
    RebellionLiesv2: {
      // Rebellion (Lies) - Arcade Fire
      key: 'Bb',
    },
    kam_af_ncg2_CON: {
      // No Cars Go - Arcade Fire
      key: 'Ab',
    },
    kam_af_wu2_CON: {
      // Wake Up - Arcade Fire
      key: 'C',
    },
    wexistv11: {
      // We Exist - Arcade Fire
      key: 'A',
      rating: 'Family Friendly',
    },

    '505': {
      // 505 - Arctic Monkeys
      key: 'C',
      id: 'FiveOhFive',
    },
    FiveOhFive: {
      // 505 - Arctic Monkeys (non-numeric ID rename)
      key: 'C',
    },
    Brianstormv9: {
      // Brianstorm - Arctic Monkeys
      key: 'Fm',
    },
    klop_cryinglightning: {
      // Crying Lightning - Arctic Monkeys
      key: 'Em',
    },
    DoIWannaKnowv3: {
      // Do I Wanna Know? - Arctic Monkeys
      key: 'Gm',
      rating: 'Supervision Recommended',
    },
    IBetYouLookGoodOnTheDance: {
      // I Bet You Look Good on the Dancefloor - Arctic Monkeys
      key: 'F#m',
    },
    sots_teddypickerv4: {
      // Teddy Picker - Arctic Monkeys
      key: 'A',
    },
    klop_whenthesungoesdown_r: {
      // When the Sun Goes Down - Arctic Monkeys
      key: 'B',
    },
    WYOCMWYH: {
      // Why'd You Only Call Me When You're High? - Arctic Monkeys
      key: 'F#m',
    },

    breathin: {
      // breathin - Ariana Grande
      key: 'Fm',
      genre: {
        genre: 'Pop/Dance/Electronic',
        sub_genre: 'Dance',
      },
    },
    GodisawomanJIM: {
      // god is a woman - Ariana Grande
      key: 'D#m',
      genre: {
        genre: 'Pop/Dance/Electronic',
        sub_genre: 'Dance',
      },
    },
    OneLastTime: {
      // One Last Time - Ariana Grande
      key: 'Ab',
      genre: {
        genre: 'Pop/Dance/Electronic',
        sub_genre: 'Dance',
      },
    },
    BreakFree: {
      // Break Free (ft. Zedd) - Ariana Grande
      key: 'Gm',
      genre: {
        genre: 'Pop/Dance/Electronic',
        sub_genre: 'Dance',
      },
    },
    fugg_intoYouPS31x: {
      // Into You - Ariana Grande
      key: 'F#m',
      genre: {
        genre: 'Pop/Dance/Electronic',
        sub_genre: 'Dance',
      },
    },
    problem: {
      // Problem (feat. Iggy Azalea) - Ariana Grande
      key: 'Cm',
      name: 'Problem (ft. Iggy Azalea)',
      genre: {
        genre: 'Pop/Dance/Electronic',
        sub_genre: 'Dance',
      },
    },

    ALAliceExtended: {
      // Alice (Extended Version) - Avril Lavigne
      key: 'C',
      rating: 'Family Friendly',
    },
    ALWishYouHereV2: {
      // Wish You Were Here - Avril Lavigne
      key: 'E',
      rating: 'Supervision Recommended',
    },
    ALKeepHoldingOn: {
      // Keep Holding On - Avril Lavigne
      key: 'G',
      rating: 'Family Friendly',
    },
    ALGirlfriendV4: {
      // Girlfriend - Avril Lavigne
      key: 'C',
      rating: 'Mature Content',
    },
    whenyouregoneTRUCE: {
      // When You're Gone - Avril Lavigne
      key: 'G',
      rating: 'Family Friendly',
    },

    NSYmyth: {
      // Myth - Beach House
      key: 'Eb',
      genre: {
        genre: 'Indie Rock',
        sub_genre: 'Shoegazing',
      },
    },
    beach_hospace_song: {
      // Space Song - Beach House
      key: 'Eb',
    },

    BS_DroppingOutOfSchool_rb: {
      // Dropping out of School - Brad Sucks
      key: 'Dm',
    },
    BS_UnderstoodByYourDad_rb: {
      // Understood by Your Dad - Brad Sucks
      key: 'C#m',
    },
    BS_OutOfIt: {
      // Out of It - Brad Sucks
      key: 'D',
    },
    BS_BadSign: {
      // Bad Sign - Brad Sucks
      key: 'Eb',
    },
    BS_TotalBreakdown: {
      // Total Breakdown - Brad Sucks
      key: 'Bb',
    },
    MakingMeNervous: {
      // Making Me Nervous - Brad Sucks
      key: 'Dm',
    },

    babyonemoretimev1: {
      // ...Baby One More Time - Britney Spears
      key: 'Db',
    },
    MyloHurtsLikeHeavenV1_rb3: {
      // Mylo Xyloto/Hurts like Heaven - Coldplay
      key: 'Bb',
    },
    SheepQueen_Christine_rb3c: {
      // Christine - Christine And The Queens
      key: 'C',
    },
    'Brit_Crim_v#': {
      // Criminal - Britney Spears
      key: 'Am',
    },
    Lucky: {
      // Lucky - Britney Spears
      key: 'Db',
    },
    'M12O_TillTheWorldEndsv#_r': {
      // Till The World Ends - Britney Spears
      key: 'Eb',
    },
    toxicv10: {
      // Toxic - Britney Spears
      key: 'Cm',
      rating: 'Supervision Recommended',
    },
    DontPanic: {
      // Don't Panic - Coldplay
      key: 'Am',
    },
    Side_CCIIMI: {
      // Movin In - Chicago
      key: 'C',
      rating: 'Family Friendly',
    },
    'M12OBSWmnzrv#': {
      // Womanizer - Britney Spears
      key: 'C#m',
    },
    Talkingtothemoon: {
      // Talking to the Moon - Bruno Mars
      key: 'E',
      rating: 'Family Friendly',
    },
    Side_CCIITR: {
      // The Road - Chicago
      key: 'A',
      rating: 'Family Friendly',
    },
    UMLifeintechnicolorKEYS_r: {
      // Life in Technicolor ii - Coldplay
      key: 'A',
      rating: 'Family Friendly',
    },
    ParadiseV2_rb3con: {
      // Paradise - Coldplay
      key: 'Bb',
    },
    TheLazySong_PVH: {
      // The Lazy Song - Bruno Mars
      key: 'B',
    },
    'SHYHMFv#v15': {
      // So Hot You're Hurting My Feelings - Caroline Polachek
      key: 'F#',
    },
    BoomClapV2: {
      // Boom Clap - Charli XCX
      key: 'A',
    },
    CharlieBrown: {
      // Charlie Brown - Coldplay
      key: 'Gm',
    },
  } as C3CustomsUpgradesObject
}
