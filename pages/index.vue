<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <span>Chwezxi Procument and Logistics</span>
      <br />
      <builderlanded></builderlanded>
    </v-flex>
  </v-layout>
</template>

<script>
import builderlanded from '~/components/landed/builderlanded.vue'


export default {
  components: {
    builderlanded,
  },
  data() {
       return {
         structuredData: {
                "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://bihogoo.com",
            "name": "bihogobusinessbuilder",
         },
       }
     },
     head() {
       return {
         __dangerouslyDisableSanitizers: ['script'],
         script: [{ innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }],
         title: 'Bihogo Builder : Business building software and Business Plan Software with Result tracking',
           meta: [

           { name: 'viewport', content: 'width=device-width, initial-scale=1' },
           { hid: 'keywords', name: 'keywords',content: 'african houses, real estate africa, cheap rentals, Africa 30 day Stays, African interior Design, Laraa Africa Stays, Condo Space Africa, lol, humor, pay with bitcoin, comment, share, laraa, laraa.africa, Condos' },
           { hid: 'description', name: 'description', content: 'Most African small businesses use BihogooBuilder for business planning, forecasting and financial management. Visit  BihogoBuilder and grow 30% faster.' },
           { property:'og:locale' , content:'af-ZA' },
           { property:'og:type' ,content:'website' },
           { property:'og:title' ,content:'Bihogo Business Builder:  Business Building Software With Performanve Tracking and Extra addons.' },
           { property: 'og:description' ,content:' Most African Small businesses use BihogooBuilder for business planning, forecasting and financial management. Visit  BihogoBuilder and grow 30% faster.' },
           { property:'og:site_name' ,content:'bihogoo' },
           { property:'og:url' ,content: 'https://bihogoo.com/'},
           {name:'twitter:card' ,content: 'summary_large_card'},
           {name:'twitter:description', content:' Most African Small businesses use BihogooBuilder for business planning, forecasting and financial management. Visit  BihogoBuilder and grow 30% faster.'},
           { name:'twitter:creator' ,content: '@bihogoo.com'},
           {name: 'twitter:site', content: '@bihogo_partners'},
           { name:'twitter:title', content:'Bihogo Builder : Busienss building software and Business Plan Software with Result tracking and extra addons'},
           { name:'twitter:image', content:'https://source.unsplash.com/CiMITAJtb6I'},
         ],
       }
     },
}
</script>
<style>
  </style>
