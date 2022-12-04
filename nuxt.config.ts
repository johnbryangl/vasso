// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Vasso Lifestyle | Premium Holders',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', crossorigin: '', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap' },
        { rel: 'stylesheet', integrity: 'sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65', crossorigin: 'anonymous', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css'},
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css' },
        { rel: 'stylesheet', referrerpolicy: "no-referrer", crossorigin: 'anonymous', integrity: 'sha512-XHhuZDcgyu28Fsd75blrhZKbqqWCXaUCOuy2McB4doeSDu34BgydakOK71TH/QEhr0nhiieBNhF8yWS8thOGUg==', href: 'https://cdnjs.cloudflare.com/ajax/libs/viewerjs/1.11.1/viewer.min.css' }
      ],
      script: [
        { body: true, integrity: 'sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4', crossorigin: 'anonymous', src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js' },
        { body: true, referrerpolicy: "no-referrer", integrity: 'sha512-UzpQxIWgLbHvbVd4+8fcRWqFLi1pQ6qO6yXm+Hiig76VhnhW/gvfvnacdPanleB2ak+VwiI5BUqrPovGDPsKWQ==', crossorigin: 'anonymous', src: 'https://cdnjs.cloudflare.com/ajax/libs/viewerjs/1.11.1/viewer.min.js' },
      ]
    }
  },
  typescript: {
    typeCheck: true,
  },
})
