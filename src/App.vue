<template>
  <v-app>
    <v-navigation-drawer app temporary v-model='drawer'>
      <v-list>
        <v-list-tile value='true' v-for='(item, i) in items' :key='i' >
            <v-list-tile-action>
              <router-link :to='item.target'><v-icon v-html='item.icon'></v-icon></router-link>
            </v-list-tile-action>
          <router-link :to='item.target'><v-list-tile-title v-text='item.title' class='title'></v-list-tile-title></router-link>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color='primary'>
      <v-toolbar-side-icon @click.stop='drawer = !drawer' class='white--text'></v-toolbar-side-icon>
      <v-toolbar-title v-text='title' class='white--text title'></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-container>
      <router-view></router-view>
    </v-container>
    <v-footer dark color='primary' class='white--text' :fixed='fixed' app height='auto'>
      <v-layout class='column align-center'>
        <p class='subheading'>Rogue Designs</p>
        <p class='subheading'>Email <a href='mailto://admin@roguedesigns.us' class='white--text'>admin@roguedesigns.us</a></p>
        <p class='subheading'>&copy; Copyright 2017 Rogue Designs Version {{ version }}</p>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: 'Rogue Designs',
      version: '151',
      items: [
        { icon: 'home', title: 'Home', target: '/' },
        { icon: 'contact_phone', title: 'Contact', target: '/contact' },
        { icon: 'access_time', title: 'Technical Support', target: '/technicalsupport' },
        { icon: 'attach_money', title: 'Website Design', target: '/website' },
        { icon: 'money_off', title: 'RaspberryPi Images', target: '/raspberrypi' }
      ]
    }
  },
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
</style>


