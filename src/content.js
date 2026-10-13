/**
 * content.js
 *
 * All copy and photography for the landing page, taken from piknikprostor.net.
 */

import { mdiHomeRoof, mdiInformationOutline, mdiSoccer } from '@mdi/js'

// Wix serves resized crops of the original photos through this URL scheme
export function photo (id, w, h, q = 80) {
  const file = `eaf68e_${id}~mv2.jpg`
  return `https://static.wixstatic.com/media/${file}/v1/fill/w_${w},h_${h},al_c,q_${q},enc_auto/${file}`
}

export const contact = {
  phone: '041 211 975',
  phoneHref: 'tel:+38641211975',
  email: 'info@piknikprostor.net',
  businessEmail: 'ziga@bbb-catering.si',
  company: 'BBB Gostinstvo Žiga Ukmar s.p.',
  street: 'Kolovec 15',
  city: '1235 Radomlje, Domžale',
  mapHref: 'https://www.google.com/maps/search/?api=1&query=Kolovec+15%2C+1235+Radomlje',
  facebook: 'https://www.facebook.com/bbbgostinstvo',
  instagram: 'https://www.instagram.com/piknik.prostor.na.kolovcu',
  award: 'https://www.omisli.si/bbb-gostinstvo-ziga-ukmar-sp/',
  menuPdf: 'https://www.piknikprostor.net/_files/ugd/eaf68e_bb3c2719afea48f2bd28c700e86553a2.pdf',
}

export const nav = [
  { label: 'Catering', href: '#catering' },
  { label: 'Okvirna ponudba', href: '#ponudba' },
  { label: 'Bistvene informacije', href: '#informacije' },
  { label: 'Galerija', href: '#galerija' },
  { label: 'O nas', href: '#o-nas' },
  { label: 'Kontakt', href: '#kontakt' },
]

export const video = {
  src: 'https://video.wixstatic.com/video/eaf68e_df093aaa4b50454fa6097cc9e1d417f4/360p/mp4/file.mp4',
  poster: photo('904a9cd896fd4acb8b664b0dae38624a', 960, 540),
}

export const stats = [
  { value: '150', label: 'gostov pod streho' },
  { value: '80', label: 'svatov na poroki' },
  { value: '20 min', label: 'iz Ljubljane' },
  { value: '1994', label: 'družinsko podjetje' },
]

export const events = [
  {
    key: 'wed',
    title: 'Poroka',
    text: 'Civilni obred pod pravljičnim paviljonom ob ribniku in pogostitev za do 80 svatov. Pogostimo vas tudi pred cerkvijo, na gradu ali pri vas doma.',
    img: photo('11d782e9f27545ccb1561b3e9df6a285', 1400, 900),
    alt: 'Paviljon s pogrnjenimi mizami in rdečo preprogo na travniku',
  },
  {
    key: 'prem',
    title: 'Premium piknik',
    text: 'Pripravimo izbrano meso in ob njem najboljša vina, za pogostitev, ki si jo bodo gostje dolgo zapomnili. Postrv lahko ujamete kar sami v našem ribniku, mi pa jo spečemo in postrežemo. Pri nas je meja le nemogoče.',
    img: photo('4b757d12423c4939b0e947b310ca2d13', 900, 900),
    alt: 'Bogata plošča suhomesnatih dobrot',
  },
  {
    key: 'biz',
    title: 'Poslovni dogodek',
    text: 'Nagradite zaposlene z zabavo, družabnimi igrami in obilo dobre volje. Prostor sprejme do 150 oseb.',
    img: photo('15f56d93f1ad44cba87dbe8713e04d48', 900, 640),
    alt: 'Točilni pult in pogrnjene mize pod streho',
  },
  {
    key: 'pic',
    title: 'Klasični piknik',
    text: 'Pogostitev na našem prostoru ali pred vašo hišo. Na terenu postavimo kuhinjo in pečemo v živo.',
    img: photo('49a97071838d42ac9283dcdbf6fe1dd7', 900, 640),
    alt: 'Meso, pečeno na odprtem ognju',
  },
]

export const facts = [
  {
    title: 'Prostor',
    icon: mdiHomeRoof,
    items: [
      'Pokrit prostor, primeren za vsako vreme',
      'Do 150 oseb za piknik ali poslovni dogodek, do 80 za poroko',
      'Ločene sanitarije in dostop za invalide',
      'Najbližji sosed je 500 m stran, zato zabava lahko traja tudi po 22. uri',
      'Prenočišč nimamo',
    ],
  },
  {
    title: 'Igre in otroci',
    icon: mdiSoccer,
    items: [
      'Travnato igrišče za nogomet ali odbojko',
      'Namizni tenis, koš, metanje podkev in balotk',
      'Otroški rekviziti in igrače na prostoru',
      'Animatorke, napihljiv grad ali trampolin po dogovoru',
    ],
  },
  {
    title: 'Dobro je vedeti',
    icon: mdiInformationOutline,
    items: [
      'Prostor oddajamo samo s celovito ponudbo (najem in catering)',
      'Vsa hrana je sveže pripravljena na lokaciji',
      'Prostor lahko okrasite po svoje',
      'Hišni ljubljenčki so dobrodošli',
      'Po zabavi lahko uredimo prevoz domov',
    ],
  },
]

export const menu = [
  {
    key: 'welcome',
    label: 'Sprejem',
    items: [
      'Penina ali aperitiv ob prihodu',
      'Kanapeji z domačo suho klobaso in zaseko',
      'Polnozrnati kanapeji z namazi iz rdeče pese, buče in domače tune',
      'Rožmarinovi grisini s pršutom',
      'Sadne šalčke',
    ],
  },
  {
    key: 'main',
    label: 'Glavna jed',
    items: [
      'Juha po izboru (opcijsko)',
      'Mešana žar plošča: leskovački čevapčiči, pikantne klobasice, kamniški uštipci',
      'Ocvrti piščančji medaljoni',
      'Puranji file z žara s polivko iz treh sirov in timijanom',
      'File postrvi z žara na tržaški posteljici',
      'Ocvrti krompirček',
      'Zelenjava z žara s šampinjoni',
      'Beli sir z žara',
      'Ocvrti domači krompirjevi njoki',
      'Zelje s fižolom',
      'Šopska solata',
    ],
  },
  {
    key: 'dessert',
    label: 'Sladice',
    items: [
      'Panakota v kozarčkih, štirje okusi',
      'Domače vanilijeve šamrolice',
    ],
  },
  {
    key: 'drinks',
    label: 'Pijača',
    items: [
      'Pivo Staropramen, svetlo ali temno',
      'Belo in rdeče vino',
      'Cviček Colnar',
      'Gin tonik, Aperol Spritz, Hugo',
      'Sokovi in gazirane pijače',
      'Kava in čaj',
      'Žganje in penina ob prihodu, nato po dogovoru',
    ],
  },
]

// Our own photos live in public/images/gallery as -700 (grid) and -1800 (lightbox) JPEGs
function galleryPhoto (g, w, h, q) {
  return g.local
    ? `${import.meta.env.BASE_URL}images/gallery/${g.id}-${w > 1000 ? 1800 : 700}.jpg`
    : photo(g.id, w, h, q)
}

export const gallery = [
  { id: '0db9e88569ea4730acb540d9f36cfa3d', alt: 'Poročna miza z rdečimi lističi', h: 1200 },
  { id: '8667ff5704a74031ae96c4688c3c588b', alt: 'Klop ob ribniku sredi gozda', h: 800 },
  { id: 'foto-0004', local: true, alt: 'Mize pod senčnikom na travi ob gozdu', h: 667 },
  { id: '62cba277cff2489ea6411fc5ec6cf3b1', alt: 'Narezek s sirom in paradižnikom', h: 1000 },
  { id: '37bd1572055e47af932bdba9890eaa5f', alt: 'Pogrnjena miza ob kamniti steni', h: 800 },
  { id: 'foto-0006', local: true, alt: 'Pot do ribnika in lesen paviljon', h: 667 },
  { id: '0925255acd494f11ae3fc62279719cec', alt: 'Kanapeji z namazi', h: 1100 },
  { id: '889e74dd2ee544f99743a3084f401f26', alt: 'Pokrit prostor z mizami', h: 800 },
  { id: 'a13df4d79bac4f71ba2859589371491b', alt: 'Kozarci za penino na dolgi mizi', h: 1200 },
  { id: 'foto-0005', local: true, alt: 'Barski stoli ob pokritem šanku in mize na vrtu', h: 667 },
  { id: 'a63a1458ec20434c9383684ce74b6b76', alt: 'Pršut, zavit okoli grisinov', h: 800 },
  { id: '93903e8fe49446a7b78c2693ccac5805', alt: 'Poročne mize pod streho', h: 1000 },
  { id: '37108c4af42e4f85ba48f0bd1a5e4f97', alt: 'Postrežba narezka s klešči', h: 800 },
  { id: 'foto-0030', local: true, alt: 'Pogled na piknik prostor s senčniki in paviljonom', h: 667 },
  { id: '36f9d190a7fd4c4b84ca359882d67f94', alt: 'Bogato obložena miza s pico in narezkom', h: 1100 },
  { id: '04014a1e3fb44f0aa40d213c6c39547b', alt: 'Sladice v kozarčkih', h: 800 },
].map(g => ({
  ...g,
  thumb: galleryPhoto(g, 700, Math.round(g.h * 0.7)),
  full: galleryPhoto(g, 1800, g.h * 1.5, 85),
}))

export const about = {
  paragraphs: [
    'Začetki naših gostinskih storitev segajo v leto 1994, ko je oče odprl družinsko gostilno s tradicionalno slovensko hrano v Domžalah. Gostilna je bila uspešna, zato smo začeli tudi s pogostitvami na terenu.',
    'Kasneje se je rodila ideja za pogostitve v osrčju narave, kjer ima oče hišo. Leto za letom smo prostor urejali po vaših željah in vsako leto dodali kaj novega. Tako je piknik prostor rasel skupaj z nami in z vami.',
  ],
  team: photo('480bcb3e6c39468abb76a0e0749459ee', 1400, 900),
  sign: photo('45c0e75cd2ca4368a5195aa35eae4671', 900, 900),
  chef: photo('0d8169f7f83b48509f6ec8d6a7b6652d', 1000, 1250),
}
