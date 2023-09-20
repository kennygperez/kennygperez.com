export type ContentMediaItem = {
  url: URL;
  txt: string;
};

export type ContentItem = {
  image: string;
  title: string;
  brief: string[];
  stamp: Date;
  media: ContentMediaItem[];
};

export const contents: ContentItem[] = [
  {
    image: '/images/lachlan.jpeg',
    title: 'Lachlan - Computer Vision Facecam',
    brief: [
      "Lachlan is one of the largest Fornite streamers with over 14.5 million subscribers on YouTube. I lead the development in creating a streaming facecam that would react according to Lachlan's in-game health and shield. This required me to develop a proprietary computer vision software to analyze his gameplay in real-time. Using a WebSocket connection the stats would be sent to an OBS browser source.",
    ],
    stamp: new Date(2021, 0, 7),
    media: [
      {
        txt: 'YouTube Premier',
        url: new URL('https://www.youtube.com/watch?v=SUqYsXdPnpY'),
      },
      {
        txt: 'YouTube Coverage',
        url: new URL('https://www.youtube.com/watch?v=mFDWtOfQELo&list=WL&index=25&t=295s'),
      },
    ],
  },
  {
    image: '/images/ucfhere.jpg',
    title: 'University of Central Florida - UCF Here',
    brief: [
      'QRCode based attendance application utilizing a native mobile app and LTI enabled Python/Django web application. I lead the development of the mobile application. Refactored student design project code to make it production-ready and optimized the code to use the best practices. UCFHere utilized React Native and Expo SDK.',
    ],
    stamp: new Date(2020, 3, 0),
    media: [
      {
        txt: 'UCF Here landing page',
        url: new URL('https://ucfmobile.ucf.edu/apps/#ucf-here'),
      },
      {
        txt: 'UCF Newletter',
        url: new URL('https://digitallearning.ucf.edu/newsroom/newsletter/new-attendance-tool/?frame=0'),
      },
    ],
  },
  {
    image: '/images/vbi-client-portal.jpg',
    title: 'Visuals By Impulse - Client Portal',
    brief: [
      'I developed a preparatory CRM software to allow VBI to manage their custom design projects, client relationships, and handle payments. I was the lead programmer on this managing a small team. We utilized Node+Express and MongoDB on the backend. VueJS on the frontend.',
    ],
    stamp: new Date(2019, 3, 0),
    media: [
      {
        txt: 'Live Site',
        url: new URL('https://portal.visualsbyimpulse.com'),
      },
    ],
  },
];
