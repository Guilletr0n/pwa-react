const highlevel:String[] = [
  '❌ iOS 11.3 | Offline Support with Service Workers',
  '❌ iOS 11.3 | App Installation from Browser',
  '❌ iOS 14 | App Installation from Store',
  '❌ iOS 14 | App Installation for Enterprise',
  '❌ iOS 11.3 | App Installation Recovery with Backup',
  '❌ iOS 12.0 | In-App Browser for out-of-scope links',
  '❌ iOS 11.3 | App appears in Search',
  '❌ iOS 11.3 | App appears in Multitasking list',
  '❌ iOS 11.3 | App appears in Homescreen',
  '❌ iPad OS  14.0 | App can share screen with other apps',
  '❌          | App can be installed from non-Safari browsers'
]

const serviceworkers:String[] = [
  'Fetch API	✅	10.1',
  'Service Worker Support	✅	11.3',
  'Cache Storage interface	✅	11.3',
  'UpdateViaCache at Registration	✅	15.0',
  'Streams	✅ (partial)	11.3',
  'Navigation Preload	✅	15.4'
];

const webabilities:String[] = [
  'Geolocation	✅	2.0',
'Web Storage	✅	2.0',
'IndexedDB	✅	8.0',
'Web Workers	✅	5.0',
'Shared Web Workers	✅	5.0 to 6.1, back in 16.0',
'2D Canvas	✅	2.0',
'3D Canvas: WebGL	✅	8.0',
'3D Canvas: WebGL 2.0	✅	15.0',
'Web XR (VR & AR)	❌⏳	15.4 (experimental, not yet working)',
'Web Assembly	✅	11.0',
'Clipboard	✅	12.0',
'Credential Management	✅	14.0',
'Payment Request	✅	12.2',
'Payment Handler	❌	',
'Motion Sensors	✅	4.2 to 12.1, back in 13.0',
'Touch Events	✅	2.0',
'Pointer Events	✅	13.2',
'Camera and Microphone Access (getUserMedia)	✅	13.0',
'Advanced Camera Controls	❌	',
'Media Recorder	✅	14.5',
'Media Session	✅	15.0',
'Web Speech Synthesis	✅	7.0',
'Web Speech Recognition	✅	14.5',
'Web Bluetooth	❌	',
'WebAudio	✅	6.0',
'WebSerial	❌	',
'WebNFC	❌	',
'WebHID	❌	',
'Battery Status	❌	',
'Ambient Light	❌	',
'Vibration	❌	',
'Battery Status	❌	',
'GamePad	✅	10.3',
'WakeLock	❌	',
'Device Memory	❌	',
'Idle Detection	❌	',
'Screen Orientation	❌	',
'Presentation	❌	',
'Pointer Lock	❌	',
'Network Information	❌	',
'Screen Capture	❌	',
'Shape Detection	❌	',
'SMS OTP input attribute	✅	14.0',
'SMS WebOTP API	❌	',
'Virtual Keyboard	❌	',
'File through input	✅	6.0',
'FileSystem Access (public fs)	❌	',
'FileSystem Access (origin private fs)	✅	15.2',
'Storage Management: Persistent	✅	15.2',
'Storage Management: Quota	❌	',
'Contact Picker	⏳	14.5 (experimental)',
'Web Sockets	✅	4.2',
'WebRTC	✅	11.0',
'Web Codecs	❌	',
'Web Notifications	❌	',
'Fullscreen	✅	8.0 (iPad only)',
'Page Visibility	✅	7.0',
'Web Authentication	✅	14.5',
'Web Share	✅	12.1',
'Web Share 2.0	✅	15.0',
'Get Installed Related Apps	❌	'
]

type featuresListContent = {
  highlevel:String[],
  serviceworkers:String[],
  webappabilities:String[]
}

type Picture = {
  url: string,
  caption: string
}


export type ResultsItem = {
  match: string,
  title: string,
  pic: Picture,
  tags: string[]
}

export const results: ResultsItem[] = [
  { 
    match: '95',
    title: 'Hotel 1',
    pic: {
      url: 'assets/images/hotel-1.png',
      caption: 'Hotel'
    },
    tags: ['museums', 'swimming pool']
  },
  { 
    match: '90',
    title: 'Hotel 2',
    pic: {
      url: 'assets/images/hotel-2.png',
      caption: 'Hotel'
    },
    tags: ['spa', 'swimming pool', 'gym']
  },
  { 
    match: '85',
    title: 'Hotel 3',
    pic: {
      url: 'assets/images/hotel-3.png',
      caption: 'Hotel'
    },
    tags: ['breakfast', 'swimming pool']
  },
  { 
    match: '70',
    title: 'Hotel 4',
    pic: {
      url: 'assets/images/hotel-4.png',
      caption: 'Hotel'
    },
    tags: ['gastronomic foor', 'swimming pool', 'spa']
  }
]


const Content:featuresListContent  = { 
  highlevel: highlevel,
  serviceworkers: serviceworkers,
  webappabilities: webabilities
};

export default Content;