---
title: Customise starter blog theme
date: 2019-06-25
description: 'How To Customise Blog Landing Page!'
tags: ['Programming', 'Vuepress', 'Tailwind CSS']
---

## Customize Blog Landing Page

`.vuepress/theme/components/BlogPage.vue`

```js
<template>
   <main class="home" aria-labelledby="main-title">  //From Home.vue
    <header class="hero text-primary bg-background-primary">
      <h1 id="main-title">Blog</h1>

      <p class="description opacity-75">{{ data.tagline || $description || 'Welcome To My Blogs' }}</p>
    </header>

    <Content class="theme-default-content custom"/>

    <div>
      <div class="flex-grow">
        <div v-for="post in posts" class="mb-12 bg-background-content p-4 rounded-lg shadow-lg">
          <span class="text-3xl font-bold">
            <router-link :to="post.path" class="text-primary pb-1">{{ post.title}}</router-link>
          </span>
          <div class="mb-4 opacity-75 pt-1">
            <span>{{formateDate(post.frontmatter.date)}}</span>
            <span>&middot;</span>
            <span>{{post.readingTime.text}}</span>
            <span class="px-6 py-4">
              <span v-for="tag in post.frontmatter.tags"
                class="inline-block bg-background-primary rounded-full px-3 py-1 text-sm font-semibold text-primary mr-2"
              > #{{ tag }}</span>
            </span>
          </div>
          <div class="text-lg mb-4">{{post.frontmatter.description}}</div>
          <div class="mb-8">
            <router-link :to="post.path" class="font-bold uppercase">Read More</router-link>
          </div>
        </div>
        
      </div>
    </div>
    

    <footer class="bg-black text-white">
      <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between py-8">
        <div class="mb-8 lg:mb-0">
          <div>Copyright 2019.</div>
          <div>
            <a href="rss.xml" class="text-white hover:text-gray-400 font-normal">RSS Feed</a> |
            <a href="sitemap.xml" class="text-white hover:text-gray-400 font-normal">Sitemap</a>
          </div>
        </div>
        <ul class="flex items-center list-none">
          <li class="mr-8">
            <a href="mailto:me@example.com" class="text-white hover:text-gray-400">
              <svg width="25" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0h20A2.5 2.5 0 0 1 25 2.5v15a2.5 2.5 0 0 1-2.5 2.5h-20A2.5 2.5 0 0 1 0 17.5v-15C0 1.125 1.125 0 2.5 0zm20 4.225V2.5h-20v1.725l10 5 10-5zm0 2.8l-9.438 4.713a1.25 1.25 0 0 1-1.124 0L2.5 7.025V17.5h20V7.025z" fill-rule="nonzero"/></svg>
            </a>
          </li>

          <li class="mr-8">
            <a href="https://youtube.com/drehimself" target="_blank" class="text-white hover:text-gray-400">
              <svg width="26" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M25.457 3.13c-.3-1.232-1.18-2.203-2.299-2.532C21.13 0 13 0 13 0S4.87 0 2.842.598c-1.119.33-2 1.3-2.299 2.531C0 5.362 0 10.02 0 10.02s0 4.658.543 6.891c.3 1.232 1.18 2.162 2.299 2.49C4.87 20 13 20 13 20s8.13 0 10.158-.598c1.119-.33 2-1.26 2.299-2.49C26 14.677 26 10.02 26 10.02s0-4.658-.543-6.89zM10.34 14.25V5.79l6.795 4.23-6.795 4.23z" fill-rule="nonzero"/></svg>
            </a>
          </li>

          <li class="mr-8">
            <a href="https://github.com/drehimself/gridsome-portfolio-starter" target="_blank" class="text-white hover:text-gray-400">
              <svg width="20" height="19" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 0c1.814 0 3.487.435 5.02 1.306a9.827 9.827 0 0 1 3.639 3.542A9.33 9.33 0 0 1 20 9.734c0 2.121-.636 4.03-1.908 5.723a9.783 9.783 0 0 1-4.928 3.518c-.234.042-.408.012-.52-.09a.49.49 0 0 1-.17-.38l.006-.969c.005-.621.007-1.19.007-1.705 0-.82-.226-1.42-.677-1.8.495-.05.94-.126 1.335-.228a5.4 5.4 0 0 0 1.223-.494 3.62 3.62 0 0 0 1.055-.843c.282-.334.512-.777.69-1.33.178-.554.267-1.19.267-1.909a3.7 3.7 0 0 0-1.028-2.61c.32-.77.286-1.631-.105-2.586-.243-.076-.594-.03-1.054.14-.46.168-.86.354-1.198.557l-.495.304a9.478 9.478 0 0 0-2.5-.33c-.86 0-1.693.11-2.5.33a11.6 11.6 0 0 0-.553-.342c-.23-.135-.593-.298-1.088-.488-.494-.19-.863-.247-1.106-.171-.391.955-.426 1.816-.105 2.585A3.7 3.7 0 0 0 3.62 9.227c0 .719.089 1.352.267 1.902.178.549.406.993.683 1.33.278.339.627.622 1.048.85a5.4 5.4 0 0 0 1.224.494c.395.102.84.178 1.335.228-.338.305-.551.74-.638 1.306a2.631 2.631 0 0 1-.586.19 3.782 3.782 0 0 1-.742.063c-.287 0-.57-.09-.853-.272a2.256 2.256 0 0 1-.723-.792 2.068 2.068 0 0 0-.631-.66c-.256-.168-.471-.27-.645-.304l-.26-.038c-.182 0-.308.02-.378.057-.07.038-.09.087-.065.146.026.06.065.118.117.178.053.059.109.11.17.152l.09.063c.192.085.38.245.567.482.187.236.324.452.41.646l.13.292c.113.32.304.58.574.78.269.198.56.325.872.38.312.054.614.084.905.088.29.004.532-.01.723-.044l.299-.05c0 .32.002.694.007 1.12l.006.692a.49.49 0 0 1-.17.38c-.112.101-.286.13-.52.089a9.783 9.783 0 0 1-4.928-3.518C.636 13.763 0 11.855 0 9.734a9.33 9.33 0 0 1 1.341-4.886 9.827 9.827 0 0 1 3.64-3.542C6.512.436 8.185 0 10 0zM3.79 13.98c.025-.058-.005-.11-.092-.151-.087-.026-.143-.017-.17.025-.025.06.005.11.092.152.078.05.134.042.17-.025zm.403.432c.06-.043.052-.11-.026-.203-.087-.076-.157-.089-.209-.038-.06.042-.052.11.026.203.087.084.157.097.209.038zm.39.57c.078-.06.078-.14 0-.24-.07-.11-.143-.136-.221-.077-.078.042-.078.118 0 .228.078.11.152.14.221.089zm.547.532c.07-.067.052-.148-.052-.24-.104-.102-.19-.115-.26-.039-.078.068-.061.148.052.241.104.102.19.114.26.038zm.742.317c.026-.093-.03-.16-.169-.203-.13-.033-.213-.004-.247.09-.035.092.021.155.169.19.13.05.213.025.247-.077zm.82.064c0-.11-.073-.157-.22-.14-.14 0-.209.047-.209.14 0 .11.074.156.221.139.14 0 .209-.046.209-.14zm.756-.127c-.017-.093-.096-.131-.234-.114-.14.025-.2.088-.183.19.018.101.096.135.235.101.139-.034.2-.093.182-.177z" fill-rule="nonzero"/></svg>
            </a>
          </li>

          <li class="mr-8">
            <a href="https://twitter.com/drehimself" target="_blank" class="text-white hover:text-gray-400">
              <svg width="20" height="17" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.807 1.943a8.588 8.588 0 0 1-2.036 2.135 11.918 11.918 0 0 1-.465 3.854 12.085 12.085 0 0 1-1.452 3.177 12.426 12.426 0 0 1-2.318 2.691c-.897.78-1.978 1.402-3.243 1.867-1.265.464-2.618.697-4.06.697-2.27 0-4.348-.618-6.233-1.854.293.034.62.051.98.051 1.885 0 3.565-.588 5.04-1.764a3.915 3.915 0 0 1-2.363-.825 4.038 4.038 0 0 1-1.432-2.039c.276.043.532.064.766.064.36 0 .717-.047 1.068-.14A3.982 3.982 0 0 1 1.73 8.43c-.617-.754-.925-1.63-.925-2.627v-.051c.57.324 1.182.498 1.835.524a4.1 4.1 0 0 1-1.32-1.47 4.078 4.078 0 0 1-.49-1.969c0-.75.185-1.445.553-2.084a11.548 11.548 0 0 0 3.702 3.05 11.163 11.163 0 0 0 4.669 1.271c-.067-.324-.1-.639-.1-.946 0-1.142.395-2.116 1.187-2.92C11.632.402 12.589 0 13.712 0c1.173 0 2.161.435 2.966 1.304a7.878 7.878 0 0 0 2.576-.997 3.997 3.997 0 0 1-1.785 2.275 7.98 7.98 0 0 0 2.338-.639z" fill-rule="nonzero"/></svg>
            </a>
          </li>

          <li>
            <a href="https://instagram.com" target="_blank" class="text-white hover:text-gray-400">
              <svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10.002 4.872A5.12 5.12 0 0 0 4.876 10a5.12 5.12 0 0 0 5.126 5.128A5.12 5.12 0 0 0 15.13 10a5.12 5.12 0 0 0-5.127-5.128zm0 8.462A3.34 3.34 0 0 1 6.67 10a3.337 3.337 0 0 1 3.333-3.334A3.337 3.337 0 0 1 13.335 10a3.34 3.34 0 0 1-3.333 3.334zm6.532-8.671c0 .664-.535 1.196-1.195 1.196a1.196 1.196 0 1 1 1.196-1.196zm3.396 1.213c-.076-1.602-.442-3.02-1.615-4.19C17.145.516 15.727.15 14.125.07c-1.65-.093-6.6-.093-8.25 0-1.597.076-3.016.442-4.19 1.611C.512 2.851.151 4.27.07 5.871c-.093 1.652-.093 6.601 0 8.253.076 1.602.442 3.02 1.615 4.19 1.174 1.17 2.588 1.535 4.19 1.616 1.65.093 6.6.093 8.25 0 1.602-.076 3.02-.442 4.19-1.616 1.169-1.17 1.534-2.588 1.615-4.19.093-1.652.093-6.596 0-8.248zm-2.133 10.02a3.375 3.375 0 0 1-1.9 1.9c-1.317.523-4.44.402-5.895.402-1.454 0-4.582.116-5.894-.402a3.375 3.375 0 0 1-1.9-1.9c-.523-1.317-.402-4.441-.402-5.896s-.116-4.583.401-5.895a3.375 3.375 0 0 1 1.901-1.901c1.316-.523 4.44-.402 5.894-.402 1.455 0 4.582-.116 5.894.402a3.375 3.375 0 0 1 1.901 1.9c.522 1.317.402 4.441.402 5.896s.12 4.583-.402 5.895z" fill-rule="nonzero"/></svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </main>
</template>

<script>
import NavLink from "@theme/components/NavLink.vue";
import moment from "moment";

export default {
  components: { NavLink },
  methods: {
    formateDate(date) {
      return moment(date).format("MMM Do YYYY");
    }
  },

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      };
    },

    posts() {
      return this.$site.pages
        .filter(x => x.path.startsWith("/blog/") && !x.frontmatter.blog_index)

        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    }
  }
};
</script>

<style lang="stylus"> // From Home.vue
.home {
  padding: $navbarHeight 2rem 0;
  max-width: 960px;
  margin: 0px auto;
  display: block;

  .hero {
    text-align: center;

    img {
      max-width: 100%;
      max-height: 280px;
      display: block;
      margin: 3rem auto 1.5rem;
    }

    h1 {
      font-size: 3rem;
    }

    h1, .description, .action {
      margin: 1.8rem auto;
    }

    .description {
      max-width: 35rem;
      font-size: 1.6rem;
      line-height: 1.3;
    }

    
  }

  

  

  .footer {
    padding: 2.5rem;
    border-top: 1px solid var(--border-color);
    text-align: center;
  }
}



@media (max-width: $MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1, .description, .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      
    }

    
  }
}
</style>

```