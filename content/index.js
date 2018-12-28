const state = {
  posts: [
    {
      id: 14,
      slug: 'experience-upgrading-to-rails-5',
      title: 'Experience: Upgrading to Rails 5',
      created_at: '02/20/2018',
      meta: {
        id: 14,
        name: 'Experience Upgrading to Rails 5'
      }
    },
    {
      id: 13,
      slug: 'a-word-about-mentoring',
      title: 'A word about Mentoring',
      created_at: '11/13/2017',
      meta: {
        id: 13,
        name: 'A word about Mentoring'
      }
    },
    {
      id: 12,
      slug: 'a-time-for-reflections',
      title: 'A time for reflections',
      created_at: '01/01/2017',
      meta: {
        id: 12,
        name: 'A time for reflections'
      }
    },
    {
      id: 11,
      slug: 'exposing-yourself-to-the-world',
      title: 'Exposing yourself to the world with localtunnel/ngrok',
      created_at: '06/13/2016',
      meta: {
        id: 11,
        name: 'Exposing yourself to the world with localtunnel/ngrok'
      }
    },
    {
      id: 10,
      slug: 'twilio-two-way-messaging',
      title: 'Twilio Two Way Messaging',
      created_at: '05/19/2016',
      meta: {
        id: 10,
        name: 'Two Way Text Messaging with Twilio'
      }
    },
    {
      id: 9,
      slug: 'introducing-tmsg-io',
      title: 'Introducing tmsg.io',
      created_at: '02/29/2016',
      meta: {
        id: 9,
        name: 'Introducing tmsg.io'
      }
    },
    {
      id: 8,
      slug: 'what-i-learned-from-my-50-day-code-streak',
      title: 'What I learned from my 50 day code streak',
      created_at: '02/06/2016',
      meta: {
        id: 8,
        name: 'What I learned from my 50 day code streak'
      }
    },
    {
      id: 7,
      slug: 'new-beginnings',
      title: 'New beginnings',
      created_at: '01/17/2016',
      meta: {
        id: 7,
        name: 'New Beginnings'
      }
    },
    {
      id: 6,
      slug: 'fresh-look',
      title: 'Fresh Look',
      created_at: '02/01/2016',
      meta: {
        id: 6,
        name: 'Fresh Look'
      }
    },
    {
      id: 5,
      slug: 'healthy-eating',
      title: 'Healthy Eating',
      created_at: '10/20/2015',
      meta: {
        id: 5,
        name: 'Health eating'
      }
    },
    {
      id: 4,
      slug: 'commitment-to-finish',
      title: 'Commitment to Finish',
      created_at: '10/05/2015',
      meta: {
        id: 4,
        name: 'Commitment to Finish',
        content: ''
      }
    },
    {
      id: 3,
      slug: 'my-first-rubygem-fancy-notifications',
      title: 'My first RubyGem: Fancy Notifications',
      created_at: '08/21/2015',
      meta: {
        id: 3,
        name: 'My First Rubygem: Fancy Notifications',
        content: ''
      }
    },
    {
      id: 2,
      slug: 'using-rails-secrets-yml',
      title: 'Using Rails secrets.yml',
      created_at: '07/31/2015',
      meta: {
        id: 2,
        name: 'Using Rails secrets.yml',
        content: ''
      }
    },
    {
      id: 1,
      slug: 'welcome-to-my-brand-new-site',
      title: 'Welcome to my brand new site!',
      created_at: '07/26/2015',
      meta: {
        id: 1,
        name: 'Welcome to my Brand New Site!',
        content: 'I launched a new website in 2015 with a complete blog revamp.'
      }
    }
  ]
}

state.routes = state.posts.map(({ slug }) => '/posts/' + slug)

export default state
