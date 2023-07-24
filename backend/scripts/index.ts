import 'dotenv/config'
import DTAParser, { DTAArray, DTATools } from '../../src'
import DTANode from '../DTANode'
import fs from 'fs'

async function init() {
    const dtaFileContents = await DTANode.read(process.env.MYSONGS || '')

    const mySongs = DTAParser(dtaFileContents, {
        sortBy: 'song_id',
        update: {
            '7748spacecadet': {
                pack_name: 'Windows .mid Pack 02',
            },
            '7748spacecadet2x': {
                pack_name: 'Windows .mid Pack 02',
            },
            '7748beinfriends': {
                pack_name: 'MOTHER Soundtrack Pack 01',
            },
            '7748motherearth': {
                pack_name: 'MOTHER Soundtrack Pack 01',
            },
            '7748pollyanna': {
                pack_name: 'MOTHER Soundtrack Pack 01',
            },
            '7748hippiebattle': {
                pack_name: 'MOTHER Soundtrack Pack 01',
            },
            '7748twinkle': {
                pack_name: 'MOTHER Soundtrack Pack 01',
            },
        },
    })
}

init().catch((err) => console.log(err))
