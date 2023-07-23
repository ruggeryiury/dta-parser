import 'dotenv/config'
import DTAParser, { DTAArray, DTATools } from '../../src'
import DTANode from '../DTANode'
import fs from 'fs'

async function init() {
    const dtaFileContents = await DTANode.read(process.env.MYSONGS || '')

    const mySongs = DTAParser(dtaFileContents, {
        sortBy: 'song_id', update: {
            '7748spacecadet': {
                pack_name: 'Windows .mid Pack 02'
            },
            '7748spacecadet2x': {
                pack_name: 'Windows .mid Pack 02'
            },
            '7748beinfriends': {
                pack_name: 'MOTHER Soundtrack Pack 01'
            },
            '7748motherearth': {
                pack_name: 'MOTHER Soundtrack Pack 01'
            },
            '7748pollyanna': {
                pack_name: 'MOTHER Soundtrack Pack 01'
            },
            '7748hippiebattle': {
                pack_name: 'MOTHER Soundtrack Pack 01'
            },
            '7748twinkle': {
                pack_name: 'MOTHER Soundtrack Pack 01'
            },
        }
    })

    const burnished = DTATools.create({
        id: '7748burnished',
        artist: 'White Denim',
        name: 'Burnished',
        songname: '7748burnished',
        song_id: 1774800037,
        song_length: '2:36',
        preview: '1:02',
        tracks: {
            backing: 2,
            drum: {
                rank: 4,
                channels: 2
            },
            bass: {
                rank: 3,
                channels: 2,
                real_rank: 3,
                tuning: [0, 0, 0, 0]
            },
            guitar: {
                rank: 4,
                channels: 2,
                hasSolo: true,
                real_rank: 4,
                tuning: [0, 0, 0, 0, 0, 0]
            },
            vocals: {
                rank: 2,
                channels: 2,
                vocal_parts: 2,
                vocal_gender: 'Male'
            }
        },
        album: {
            hasArt: true,
            name: 'D',
            track_number: 2
        },
        rating: 'Family Friendly',
        genre: {
            genre: 'Indie Rock',
            sub_genre: 'Indie Rock'
        },
        year_released: 2011,
        author: 'Ruggy',
        multitrack: true,
        key_signature: {
            key: 'D Major'
        }
    })

    mySongs.push(burnished)

    const contents = DTAArray.stringify(mySongs, {
        type: 'rb3_dlc',
        guitarCores: true,
    })

    await fs.promises.writeFile(process.env.TEST_GEN_DTA || '', contents, 'utf-8')
}

init().catch((err) => console.log(err))
