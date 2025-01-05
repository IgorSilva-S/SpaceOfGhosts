//Variables

// Game Env Variables
const gameVersion = 'Beta'
const isPreview = true
const previewType = '1y'
const lastDayOfChanges = '05/01/2025'
const datetype = 'DD/MM/YYYY'
const canEnablePreviewItems = false
let canLoad = true
const isDevBranch = false

const player = document.getElementById('ghost')
let keysSolo = []
const p1Run = document.getElementById('player1Run')
const p2Run = document.getElementById('player2Run')
const playerRunner = document.getElementById('runnerPlayer')
const p1Runner = document.getElementById('p1Runner')
const p2Runner = document.getElementById('p2Runner')
const invencible = document.getElementById('Inv')
let trail = NaN, kill
const trailsElms = document.querySelectorAll('.trail')
let playerPosi = 45
let playerPXPosi = NaN
let p1Posi = 45
let p2Posi = 45
let hurtShield = false
let hurtShieldTimer = 0
let shield = false
let shieldActive = false
let hurtAnim = false
var gamePaused = false
let boostOn = false
const pauseBack = document.getElementById('soloPauseBCKG')
const pauseGui = document.getElementById('soloPauseGui')
const soloCPGUI = document.getElementById('soloCPauseGui')
const soloCPBack = document.getElementById('soloCPauseBCKG')
let playerBeforePause
let pageType = 0
let lastPage = undefined
/*Pages Types
0 - Disclaimer
1 - Home
1.1 - Game Mode
2 - Game : 1p Style
2.1- Game : Runner 1p Mode
3 - Game : 2p VS (Infinite Mode)
3.1 - Game : 2p VS (Battle! Mode)
3.2 - Game : 2p VS (Runner Mode)
4 - Shop
4.1 - Skin Changer
5 - Settings
6 - Credits
7 - DevKeys Central
*/
const disButton = document.getElementById('exitDisclaimer')

//Pages
const disPage = document.getElementById('disclaimer')
const soloPage = document.getElementById('soloMode')
const homePage = document.getElementById('homeScreen')
const duoRunPage = document.getElementById('duoRun')
const duoRunScorePage = document.getElementById('duoRunScore')
const shopPage = document.getElementById('shop')
const skinChangerPage = document.getElementById('skinChanger')
const settingsPage = document.getElementById('settings')
const creditsPage = document.getElementById('credits')
const soloRunnerPage = document.getElementById('soloRunner')
const RunnerDuoPage = document.getElementById('duoRunner')
const devKeysCentralPage = document.getElementById('devKeysCentral')
//End Pages

//Songs
const homeSong = document.getElementById('homeSong') // by Artificial Music
const song = document.getElementById('soloSong') // by Prod. Riddiman
const soloXtremeSong = document.getElementById('soloXtremeSong') // by Tiểu Long
const duoRSong = document.getElementById('duoRunSong') // by After the Fall
const hSong = document.getElementById('hSong') // by SEGA and Sonic Team (1992)
const shopSong = document.getElementById('shopSong') // by dyu / Official by Nintendo
const settingsSong = document.getElementById('settingsSong') // by dyu / Official by Nintendo
const creditsSong = document.getElementById('creditsSong') // by After The Fall 
const soloRunnerSong = document.getElementById('soloRunnerSong') // by Chillpeach
const duoRunnerSong = document.getElementById('duoRunnerSong') // by Chillpeach
const devKeysCentralSong = document.getElementById('devKeysCentralSong') // By Nintendo

//End Songs
const playButton = document.getElementById('playGame')
const shopButton = document.getElementById('goShop')
const settingsButton = document.getElementById('editSettings')
const creditsButton = document.getElementById('viewCredits')
const devKeysCentralButton = document.getElementById('devKeysEnter')
const fullscreenAnimationButton = document.getElementById('fullscreenAnimation')
let isAnimFull = false
const mobileSoundControl = document.getElementById('mobileSoundControl')
const startButton = document.getElementById('startGame')
let selectedGameMode = 1
let challengeType = null
const boostItem = document.getElementById('bst')
let shieldSlot = 0
let acceleratorSlot = 0
let relaxSlot = 0
let fullHealSlot = 0
let healSlot = 0
const shieldSW = document.getElementById('shieldS')
const acceleratorSW = document.getElementById('acceleratorS')
const relaxSW = document.getElementById('relaxS')
const ShealSW = document.getElementById('SlifeS')
const healSW = document.getElementById('lifeS')
const shieldSWP = document.getElementById('shieldSP')
const acceleratorSWP = document.getElementById('acceleratorSP')
const relaxSWP = document.getElementById('relaxSP')
const ShealSWP = document.getElementById('SlifeSP')
const healSWP = document.getElementById('lifeSP')
let lives1p = 0
const lives1pAlert = document.getElementById('live1p')
let boostStyle
let acceleratorP1 = false
let acceleratorTimer = 0
let relaxStts = false
const mControlUp = document.getElementById('upBlock')
const mControlDown = document.getElementById('downBlock')
const mControlUpSRP1 = document.getElementById('p1UpBlock')
const mControlDownSRP1 = document.getElementById('p1DownBlock')
const mControlUpSRP2 = document.getElementById('p2UpBlock')
const mControlDownSRP2 = document.getElementById('p2DownBlock')
let acceleratorWaiter, hurtSWaiter
let scoreCounter, duoBiomeChanger
let scoreNum = 0
let secondsBiomeDuo = 0
const sScore = document.getElementById('soloDistance')
let finalScore
let p1RHS = false, p2RHS = false
let p1HurtAnim = false, p2HurtAnim = false
let keysDuoRun = []
let keysDuoRunner = []
let duoRunPaused = false
const duoRunLiveP1Alert = document.getElementById('dRunP1Live')
const duoRunLiveP2Alert = document.getElementById('dRunP2Live')
let duoLiveP1 = 0, duoLiveP2 = 0
let duoRunK1 = false, duoRunK2 = false
let p1RunShield = false, p2RunShield = false
let p1RSA = false, p2RSA = false
let p1RFire = false, p2RFire = false
let P1DRShieldSlot = 0, P2DRShieldSlot = 0
let P1DRGunSlot = 0, P2DRGunSlot = 0
let P1DRInvSlot = 0, P2DRInvSlot = 0
let P1DRHealSlot = 0, P2DRHealSlot = 0
let plusSpeed = 0
let addSpeed
const p1RInv = document.getElementById('InvP1R')
const p2RInv = document.getElementById('InvP2R')
let duoRunP1Inv = false, duoRunP2Inv = false
let p1RInvWaiter, p2RInvWaiter
let p1RInvNum = 0, p2RInvNum = 0
let p1RHSWaiter, p2RHSWaiter
let p1RHSTimer = 0, p2RHSTimer = 0
const p1RBoost = document.getElementById('p1RBst')
const p2RBoost = document.getElementById('p2RBst')
let p1RBoostOn = false, p2RBoostOn = false
let p1RBStyle, p2RBstyle
let type2Controls = false
let muted = false
let scHurted = false
let pausedRunnerSolo = false
let scHurtWaiter, scHurtTimer = 0
let soloRunnerLife = 0
const soloRunnerHearts = document.getElementById('RunnerLifes')
let p1DuoRunnerLife = 0
let p2DuoRunnerLife = 0
const p1DuoRunnerLifeAlert = document.getElementById('DCP1Hearts')
const p2DuoRunnerLifeAlert = document.getElementById('DCP2Hearts')
let isInSecTrail = false
let isJumping = false
let canVanish = false
let vanishWaiter, vanishTimer = 0
let vanished = false
let canSpeed = false
let speedWaiter, speedTimer = 0
let speeded = false
let scScoreCounter
let scScore = 0
let muteControlAppeared = false
let quickVolAppeared = false
let allControlsAppeared = false
let changedCursor = false
let soloSlots = false
let soloRunnerDied = false
let pausedDRunner = false
let p1CHSTimer = 0, p2CHSTimer = 0
let p1CHS = false, p2CHS = false
let p1CHSCounter = undefined, p2CHSCounter = undefined
let modeToSkinChanger = undefined, shopBackType = 'default'

//Shop PopUp - Deprecated (Only for learning)
/*const bckgPop = document.getElementById('blurShop')
const PUShop = document.getElementById('confPurch')
const iName = document.getElementById('iName')
const aDesc = document.getElementById('aDesc')
const iValue = document.getElementById('itemValue')
const aMoney = document.getElementById('actualMoney')
let prodImg = document.getElementById('pImg')
const CB1 = document.getElementById('SPPB1')
const CB2 = document.getElementById('SPPB2')*/

//Solo Meteors
const meteor1 = document.getElementById('m1')
const meteor2 = document.getElementById('m2')
const meteor3 = document.getElementById('m3')
const meteor4 = document.getElementById('m4')
const meteor5 = document.getElementById('m5')
const meteor7 = document.getElementById('m7')
const meteor6 = document.getElementById('m6')
let typeOf1, typeOf2, typeOf3, typeOf4, typeOf5, typeOf6, typeOf7
let mt1Type, mt2Type, mt3Type, mt4Type, mt5Type, mt6Type, mt7Type

//Duo : Run! Meteors
const p1Rm1 = document.getElementById('p1Rm1')
const p1Rm2 = document.getElementById('p1Rm2')
const p1Rm3 = document.getElementById('p1Rm3')
const p1Rm4 = document.getElementById('p1Rm4')
const p1Rm5 = document.getElementById('p1Rm5')
const p2Rm1 = document.getElementById('p2Rm1')
const p2Rm2 = document.getElementById('p2Rm2')
const p2Rm3 = document.getElementById('p2Rm3')
const p2Rm4 = document.getElementById('p2Rm4')
const p2Rm5 = document.getElementById('p2Rm5')
let P1TO1, P1TO2, P1TO3, P1TO4, P1TO5, P2TO1, P2TO2, P2TO3, P2TO4, P2TO5
let P1WTC1, P1WTC2, P1WTC3, P1WTC4, P1WTC5, P2WTC1, P2WTC2, P2WTC3, P2WTC4, P2WTC5

//Responsivity Meteors
const screenWidth = screen.width

//Runner Solo Crystals
const crystal1 = document.getElementById('cr1')
const crystal2 = document.getElementById('cr2')
const crystal3 = document.getElementById('cr3')
const crystal4 = document.getElementById('cr4')

//Skin changer button
const s0b = document.getElementById('cs0')
const sAb = document.getElementById('csA')
const s1b = document.getElementById('cs1')
const s2b = document.getElementById('cs2')
const s3b = document.getElementById('cs3')
const s4b = document.getElementById('cs4')
const s5b = document.getElementById('cs5')
const s6b = document.getElementById('cs6')
const noneSkin2 = document.getElementById('noneSecond')
const s0b2 = document.getElementById('Scs0')
const sAb2 = document.getElementById('ScsA')
const s1b2 = document.getElementById('Scs1')
const s2b2 = document.getElementById('Scs2')
const s3b2 = document.getElementById('Scs3')
const s4b2 = document.getElementById('Scs4')
const s5b2 = document.getElementById('Scs5')
const s6b2 = document.getElementById('Scs6')

// Players Screen to change skin
const skinSpatialOne = document.getElementById('skinAppearance')
const p1ScreenSpatial = document.getElementById('p1Screen')
const p2ScreenSpatial = document.getElementById('p2Screen')

//Skin purchased checker
let skin1Buy = localStorage.getItem('purchased1')
let skin2Buy = localStorage.getItem('purchased2')
let skin3Buy = localStorage.getItem('purchased3')
let skin4Buy = localStorage.getItem('purchased4')
let skin5Buy = localStorage.getItem('purchased5')
let skin6Buy = localStorage.getItem('purchased6')

//Game Mode purchased checker
let RunnerBuy = localStorage.getItem('RunnerPurchased')

//Shop - Actual Item
let actualShopItem = 0
let shopButtons = document.querySelectorAll('[shopButton]')

//DevKeys Variables
const shutdownDevKeys = document.getElementById('disableDevKeys')

//End Variables