'use strict'

const db = require('../server/db')
const {User, Font} = require('../server/db/models')
const fontList = [
  'Al Nile',
  'Al Tarikh',
  'AlBayan',
  'American Typewriter',
  'Andale Mono',
  'Apple Chancery',
  'AppleGothic',
  'AppleMyungjo',
  'Arial Black',
  'Arial Bold Italic',
  'Arial Bold',
  'Arial Italic',
  'Arial Narrow Bold Italic',
  'Arial Narrow Bold',
  'Arial Narrow Italic',
  'Arial Narrow',
  'Arial Rounded Bold',
  'Arial Unicode',
  'Arial',
  'Ayuthaya',
  'Baghdad',
  'Bangla MN',
  'Bangla Sangam MN',
  'Baskerville',
  'Beirut',
  'BigCaslon',
  'Bodoni 72 OS',
  'Bodoni 72 Smallcaps Book',
  'Bodoni 72',
  'Bodoni Ornaments',
  'Bradley Hand Bold',
  'Brush Script',
  'Chalkboard',
  'ChalkboardSE',
  'Chalkduster',
  'Charter',
  'Cochin',
  'Comic Sans MS Bold',
  'Comic Sans MS',
  'Copperplate',
  'Corsiva',
  'Courier New Bold Italic',
  'Courier New Bold',
  'Courier New Italic',
  'Courier New',
  'DIN Alternate Bold',
  'DIN Condensed Bold',
  'Damascus',
  'DecoTypeNaskh',
  'Devanagari Sangam MN',
  'DevanagariMT',
  'Didot',
  'Diwan Kufi',
  'Diwan Thuluth',
  'EuphemiaCAS',
  'Farah',
  'Farisi',
  'Futura',
  'Georgia Bold Italic',
  'Georgia Bold',
  'Georgia Italic',
  'Georgia',
  'GillSans',
  'Gujarati Sangam MN',
  'GujaratiMT',
  'Gurmukhi MN',
  'Gurmukhi Sangam MN',
  'Gurmukhi',
  'Herculanum',
  'Hoefler Text Ornaments',
  'Hoefler Text',
  'ITFDevanagari',
  'Impact',
  'InaiMathi-MN',
  'Kailasa',
  'Kannada MN',
  'Kannada Sangam MN',
  'Kefa',
  'Khmer MN',
  'Khmer Sangam MN',
  'Kokonor',
  'Krungthep',
  'KufiStandardGK',
  'Lao MN',
  'Lao Sangam MN',
  'Luminari',
  'Malayalam MN',
  'Malayalam Sangam MN',
  'Microsoft Sans Serif',
  'Mishafi Gold',
  'Mishafi',
  'Mshtakan',
  'Muna',
  'Myanmar MN',
  'Myanmar Sangam MN',
  'NISC18030',
  'Nadeem',
  'NewPeninimMT',
  'Oriya MN',
  'Oriya Sangam MN',
  'PTMono',
  'PTSans',
  'PTSerif',
  'PTSerifCaption',
  'Papyrus',
  'Phosphate',
  'PlantagenetCherokee',
  'Raanana',
  'Rockwell',
  'STIXGeneral',
  'STIXGeneralBol',
  'STIXGeneralBolIta',
  'STIXGeneralItalic',
  'STIXIntDBol',
  'STIXIntDReg',
  'STIXIntSmBol',
  'STIXIntSmReg',
  'STIXIntUpBol',
  'STIXIntUpDBol',
  'STIXIntUpDReg',
  'STIXIntUpReg',
  'STIXIntUpSmBol',
  'STIXIntUpSmReg',
  'STIXNonUni',
  'STIXNonUniBol',
  'STIXNonUniBolIta',
  'STIXNonUniIta',
  'STIXSizFiveSymReg',
  'STIXSizFourSymBol',
  'STIXSizFourSymReg',
  'STIXSizOneSymBol',
  'STIXSizOneSymReg',
  'STIXSizThreeSymBol',
  'STIXSizThreeSymReg',
  'STIXSizTwoSymBol',
  'STIXSizTwoSymReg',
  'STIXVar',
  'STIXVarBol',
  'Sana',
  'Sathu',
  'Savoye LET',
  'Shree714',
  'SignPainter',
  'Silom',
  'Sinhala MN',
  'Sinhala Sangam MN',
  'Skia',
  'SnellRoundhand',
  'Songti',
  'SukhumvitSet',
  'Tahoma Bold',
  'Tahoma',
  'Tamil MN',
  'Tamil Sangam MN',
  'Telugu MN',
  'Telugu Sangam MN',
  'Times New Roman Bold Italic',
  'Times New Roman Bold',
  'Times New Roman Italic',
  'Times New Roman',
  'Trattatello',
  'Trebuchet MS Bold Italic',
  'Trebuchet MS Bold',
  'Trebuchet MS Italic',
  'Trebuchet MS',
  'Verdana Bold Italic',
  'Verdana Bold',
  'Verdana Italic',
  'Verdana',
  'Waseem',
  'Webdings',
  'Wingdings 2',
  'Wingdings 3',
  'Wingdings',
  'Zapfino'
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
