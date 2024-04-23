import { reactive } from "vue";

export const store = reactive({
  muenuHeader:[
    {
      name: 'Home',
      link: '#'
    },
    {
      name: 'Shop',
      link: '#'
    },
    {
      name: 'Blog',
      link: '#'
    },
    {
      name: 'Media',
      link: '#'
    },
    {
      name: 'ShortCode',
      link: '#'
    },
    {
      name: 'Features',
      link: '#'
    }
],
  menuFooter: [{
    addressInfo: [
      {
        info: "60 29th Street San Francisco, CA 94110 507-Union Trade Center, United States of América",
        iconName: ''
      },
      {
        info: "(+00) 123-456-789",
        iconName: ''
      },
      {
        info: "demo@example.com",
        iconName: ''
      },
      {
        name: `<font-awesome-icon :icon="['fab', 'skype']" />`,
        iconName: '',
        link: ''
      } 
    ],
    informations:[
      {
        name: 'Bookmark',
        link: '#'
      },
      {
        name: 'Features',
        link: '#'
      },
      {
        name: 'Sitemap',
        link: '#'
      },
      {
        name: 'Lists',
        link: '#'
      },
      {
        name: 'Contact Us',
        link: '#'
      }
    ],
    extras: [
      {
        name: 'Delivery',
        link: '#'
      },
      {
        name: 'Cart',
        link: '#'
      },
      {
        name: 'Terms conditions',
        link: '#'
      },
      {
        name: 'My acount',
        link: '#'
      },
      {
        name: 'About us',
        link: '#'
      }
    ],
    acceptedCards: [
      {
        name: 'American Express',
        iconName: '',
        link: ''
      },
      {
        name: 'American Express',
        iconName: '',
        link: ''
      },
      {
        name: 'American Express',
        iconName: '',
        link: ''
      },
      {
        name: 'American Express',
        iconName: '',
        link: ''
      },
      {
        name: 'American Express',
        iconName: '',
        link: ''
      },      
         ]


  }]

})