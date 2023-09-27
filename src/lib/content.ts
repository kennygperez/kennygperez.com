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

const ac: ContentMediaItem = {
  txt: 'Acquisition Coverage',
  url: new URL(
    'https://ir.corsair.com/news-releases/news-release-details/great-content-design-corsair-acquires-visuals-impulse'
  ),
};

export const contents: ContentItem[] = [
  {
    image: '/images/female-streamer-waith-pc-setup-and-super-builder-overlay.jpeg',
    title: 'Visuals by Impulse - Super Maker',
    brief: [
      'Led a small team in the development of Super Maker, a first-of-its-kind tool designed for streamers and video editors. Super Maker empowers users to effortlessly create professional overlay animations within their web browsers. Subsequently, the server generates an MP4 file incorporating all the assets provided by the user.',
      'I was responsible for establishing the cloud infrastructure, where I created three dedicated microservices to dynamically provision AWS EC2 instances based on demand. One of these microservices efficiently managed the queue of incoming requests, while the last one served as a general REST API on AWS Elastic Beanstalk. We utilized AWS SQS, AWS Lambda, and AWS CloudFormation in this infrastructure setup. Simultaneously, I played an integral role in implementing the backend server using Node.js and TypeScript.',
    ],
    stamp: new Date(2021, 7, 0),
    media: [
      {
        txt: 'Live Site',
        url: new URL('https://visualsbyimpulse.com/tools/super-maker/'),
      },
      {
        txt: 'YouTube Coverage',
        url: new URL('https://youtu.be/qMNGameLGYs?si=vF6VdH2eYVC8uap7&t=47'),
      },
      ac,
    ],
  },
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
      ac,
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
