import {
  customer1_img,
  customer2_img,
  customer3_img,
  customer4_img,
  facebook,
  instagram,
  linkedIn,
  package_img1,
  package_img2,
  package_img3,
  person_1,
  person_2,
  person_3,
  place_img1,
  place_img2,
  place_img3,
  place_img4,
  place_img5,
  place_img6,
  star2,
  team1__oval,
  team2__oval,
  team3__oval,
  team4__oval,
  team5__oval,
  team__facebook,
  team__instagram,
  team__twitter,
  twitter,
  certificate__video,
  umbrella,
  city,
  calender,
} from "../assets/images/images";

const navLinks = [
  {
    id: "navlink1",
    title: "find reservations",
    link:"find_reservations_page" || "/"
  },
  {
    id: "navlink2",
    title: "packages",
    link:"packages_page",
    sublink:[
      {
        id: "package1",
        title: "maldives",
      },
      {
        id: "package2",
        title: "aggati",
      },
    ]
  },
  {
    id: "navlink3",
    title: "about lakshadweep",
    link:"about_lakshadweep_page"
  },
  {
    id: "navlink4",
    title: "about us",
    link: "about_us_page",
  },
  {
    id: "navlink6",
    title: "support",
    link:"support_page"
  },
];

const packages = [
  {
    id: "maldives",
    name: "maldives",
  },
  {
    id: "samudram",
    name: "samudram",
  },
  {
    id: "cordelia",
    name: "cordelia",
  },
  {
    id: "agatti",
    name: "agatti",
  },
  {
    id: "more",
    name: "more",
  },
];

const card1 = [
  {
    id: "card1",
    heading: "indonesia",
    para: "Explore the Beauty of the island for 3 days and 2 nights with our travel agency...",
    img_src: package_img1,
  },
  {
    id: "card2",
    heading: "indonesia",
    para: "Explore the Beauty of the island for 3 days and 2 nights with our travel agency...",
    img_src: package_img2,
  },
  {
    id: "card1",
    heading: "indonesia",
    para: "Explore the Beauty of the island for 3 days and 2 nights with our travel agency...",
    img_src: package_img3,
  },
];

const card2 = [
  {
    id: "card1",
    heading: "kavarati",
    para: "Kavaratti is the capital of the Union Territory of Lakshadweep having ...",
    review: "1.5k review",
    img_src: place_img1,
  },
  {
    id: "card2",
    heading: "kavarati",
    para: "Kavaratti is the capital of the Union Territory of Lakshadweep having ...",
    review: "1.5k",
    img_src: place_img2,
  },
  {
    id: "card3",
    heading: "kavarati",
    para: "Kavaratti is the capital of the Union Territory of Lakshadweep having ...",
    review: "1.5k",
    img_src: place_img3,
  },
  {
    id: "card4",
    heading: "kavarati",
    para: "Kavaratti is the capital of the Union Territory of Lakshadweep having ...",
    review: "1.5k",
    img_src: place_img4,
  },
  {
    id: "card5",
    heading: "kavarati",
    para: "Kavaratti is the capital of the Union Territory of Lakshadweep having ...",
    review: "1.5k",
    img_src: place_img5,
  },
  {
    id: "card6",
    heading: "kavarati",
    para: "Kavaratti is the capital of the Union Territory of Lakshadweep having ...",
    review: "1.5k",
    img_src: place_img6,
  },
];

const test_cards = [
  {
    id: "person1",
    img_src: person_1,
    name: "Roman Rey",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur ac quam in congue.",
    star: star2,
  },
  {
    id: "person2",
    img_src: person_2,
    name: "Alex tom",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur ac quam in congue.",
    star: star2,
  },
  {
    id: "person3",
    img_src: person_3,
    name: "finn balor",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur ac quam in congue.",
    star: star2,
  },
];

const footer = {
  social_links: [
    {
      id: "facebook",
      img_src: facebook,
    },
    {
      id: "twitter",
      img_src: twitter,
    },
    {
      id: "linkedIn",
      img_src: linkedIn,
    },
    {
      id: "instagram",
      img_src: instagram,
    },
  ],
  section: [
    {
      title: "company",
      links: [
        {
          name: "events",
        },
        {
          name: "blogs",
        },
        {
          name: "FAQ",
        },
        {
          name: "join US",
        },
      ],
    },
    {
        title: "about",
        links: [
          {
            name: "project",
          },
          {
            name: "lorem",
          },
          {
            name: "services",
          },
          {
            name: "our story",
          },
        ],
      },{
        title: "contact us",
        links: [
          {
            name: "abc@lorem.com",
          },
          {
            name: "india",
          },
         
        ],
      },
  ],
};



// page2

const teams = [
    {
        id:"team1",
        img_src:team1__oval
    },
    {
        id:"team2",
        img_src:team2__oval
    },
    {
        id:"team3",
        img_src:team3__oval
    },
    {
        id:"team4",
        img_src:team4__oval
    },
    {
        id:"team5",
        img_src:team5__oval
    },
]

const  team__social_links= [
  {
    id: "team__facebook",
    img_src: team__facebook,
  },
  {
    id: "team__twitter",
    img_src: team__twitter,
  },
  {
    id: "team__instagram",
    img_src: team__instagram,
  },
  
]

const customer_images = [
  {
      id:"customer1",
      img_src:customer1_img
  },
  {
      id:"customer2",
      img_src:customer2_img
  },
  {
      id:"customer3",
      img_src:customer3_img
  },
  {
      id:"customer4",
      img_src:customer4_img
  },
  
]
const certificate_videos = [
  {
      id:"certificate1",
      video_src:certificate__video
  },
  {
      id:"certificate2",
      video_src:certificate__video
  },
  {
      id:"certificate3",
      video_src:certificate__video
  },
  {
      id:"certificate4",
      video_src:certificate__video
  },
  
]

const itineraryDays_details = {
  
  maldives:[
  {
    day:"day 1",
    
      activity:"ARRIVAL AT MALDIVES",
      descr:"On arrival at the Maldives International airport you will be met by the resort's airport representative and will be transferred to Vivanta By Taj Coral Reef by a speedboat ( shared basis ) . Afternoon free for relaxation . Overnight stay at the resort ."
    
  },
  {
    day:"day 2",
    
      activity:"MALDIVES",
      descr:"On arrival at the Maldives International airport you will be met by the resort's airport representative and will be transferred to Vivanta By Taj Coral Reef by a speedboat ( shared basis ) . Afternoon free for relaxation . Overnight stay at the resort ."
    
  },
  {
    day:"day 3",
    
      activity:"DEPATURE FROM MALDIVES",
      descr:"On arrival at the Maldives International airport you will be met by the resort's airport representative and will be transferred to Vivanta By Taj Coral Reef by a speedboat ( shared basis ) . Afternoon free for relaxation . Overnight stay at the resort ."
    
  },
],
  aggati:[
  {
    day:"day 1",
    
      activity:"ARRIVAL AT AGGATI",
      descr:" On arrival at Agatti airport staff will receive. Get a warm welcome with welcome drinks at resort. After your fresh up and lunch take rest for some time and then enjoy the beauty of the nature in the evening. The either sides of the cottages are having fabulous beaches with crystal clear water and you can explore the beauty. Till sunset you can enjoy inthe lap of nature with your loved ones."
    
  },
  {
    day:"day 2",
    
      activity:"AGGATI",
      descr:"The whole day is exclusively for water sports activities in Agatti. After breakfast you can proceed to watersports activities and Scuba Diving at Dive Center. Bangaram Thinnakar and Kalpitty Island visit is optional and will be arranged at the resort."
    
  },
  {
    day:"day 3",
    
      activity:"AGGATI",
      descr:"First half of the day is for sightseeing and exploring the local life and culture of the Island. In second half after lunch can proceed to the boat jetty to visit the nearby Island Kalpitti. On the way to Kalpitti by boat you can have a turtle watch and other marine life"
    
  },
  {
    day:"day 4",
    
      activity:"DEPATURE FROM AGGATI",
      descr:"After Breakfast drop at Airport and with a lifelong memory of the tiny paradise you can fly back to your home."
    
  },
],
}


const addtionalDetails_boxes=[
  {
    title:"inclusions",
    details:[
      {
        id:"inclusion_detail_1",
        desc:"4 Nights’ accommodation in selected room category"
      },
      {
        id:"inclusion_detail_2",
        desc:"Meal Plan: Full Board (Breakfast, Lunch & Dinner) "
      },
      {
        id:"inclusion_detail_3",
        desc:"Dolphin Watching Tour with Lunch, Water & Soft Drinks "
      },
      {
        id:"inclusion_detail_4",
        desc:"Snorkelling Gear & Photography"
      },
      {
        id:"inclusion_detail_5",
        desc:"In-Room 500ml Bottled Mineral Water Per Day"
      },
    ]
  },
  {
    title:"exclusions",
    details:[
      {
        id:"inclusion_detail_1",
        desc:"4 Nights’ accommodation in selected room category"
      },
      {
        id:"inclusion_detail_2",
        desc:"Meal Plan: Full Board (Breakfast, Lunch & Dinner) "
      },
      {
        id:"inclusion_detail_3",
        desc:"Dolphin Watching Tour with Lunch, Water & Soft Drinks "
      },
      {
        id:"inclusion_detail_4",
        desc:"Snorkelling Gear & Photography"
      },
      {
        id:"inclusion_detail_5",
        desc:"In-Room 500ml Bottled Mineral Water Per Day"
      },
    ]
  },
]


const customer__inputSection=[
  {
    title:"package name",
    id:"explore",
    placeholder:"explore maldives",
    img_src: umbrella,
    img_src_id:"umbrella",
    type:"text"
  },
  {
    title:"city of departure",
    id:"place",
    placeholder:"explore maldives",
    img_src: city,
    img_src_id:"city",
    type:"text"
  },
  {
    title:"date of departure",
    id:"date",
    placeholder:"explore maldives",
    img_src:calender,
    img_src_id:"calender",
    type:"date"
  },

]

const FAQ__list = [
  {
    id:"FAQ1",
    question:"Try using our templates!",
    answer:"Let’s embody your beautiful ideas together, simplify the way you visualize your next big things."
  },
  {
    id:"FAQ2",
    question:"Try using our templates!",
    answer:"Let’s embody your beautiful ideas together, simplify the way you visualize your next big things."
  },
  {
    id:"FAQ3",
    question:"Try using our templates!",
    answer:"Let’s embody your beautiful ideas together, simplify the way you visualize your next big things."
  },
  {
    id:"FAQ4",
    question:"Try using our templates!",
    answer:"Let’s embody your beautiful ideas together, simplify the way you visualize your next big things."
  },
]


export { navLinks, packages, card1, card2, test_cards, footer, teams, team__social_links,customer_images, certificate_videos , itineraryDays_details,addtionalDetails_boxes, customer__inputSection , FAQ__list};
