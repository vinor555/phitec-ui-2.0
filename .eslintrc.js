module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'vue/valid-v-slot': ['error', {allowModifiers: true}],
    'vue/no-child-content': ['error', {'additionalDirectives':['foo']}],
    "vue/multi-word-component-names":
    ["error",
       {"ignores":
          [ "Dashboard"
           ,"Rtl"
           ,"drawer"
           ,"Overlay"
           ,"datatables"
           ,"Kanban"
           ,"Wizard"
           ,"Automotive"
           ,"Crm"
           ,"Sales"
           ,"Calendar"
           ,"dropzone"
           ,"Billing"
           ,"Invoice"
           ,"Settings"
           ,"accounts"
           ,"notifications"
           ,"sessions"
           ,"Alerts"
           ,"Charts"
           ,"notifcations"
           ,"Teams"
           ,"Projects"
           ,"timeline"
          ]
      }]
  }
}
