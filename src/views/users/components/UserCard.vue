<template>
    <div class="card">
        <div class="content">
           <div class="name">
               <b>{{user.name}}</b>
                <span style="float:right;">
                    {{user.user_level}}
                </span>
           </div>
           <div class="email">
               {{user.email}}
           </div>
           <div class="favs" v-for="(favitem, i) in user.fav" :key="i">
               {{favitem}}
           </div>
           <div style="margin-top: 5px">
               Meta: (count {{ user.meta.meta_count}})
           </div>
           <div class="metas" v-for="(metas, i) in user.meta.metas" :key="i">
               {{metas}}
           </div>
        </div>
    </div>
</template>

<script>

export default {
  props: ['user'],
  filters: {
  },
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>  

  $bg-card: #fcfcfc;

  .card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background: $bg-card;
    margin-bottom: 5px;
  }

  .content {
    /* Add shadows to create the "card" effect */
    margin-top: 1px;
  }

  .name {
    /* Add shadows to create the "card" effect */
    margin-top: 1px;
    margin-bottom: 1px;
    font-size: 0.83em;
  }

  .email {
    /* Add shadows to create the "card" effect */
    margin-top: 1px;
    margin-bottom: 1px;
    font-size: 0.60em;
    font-weight: 200;
  }

  .favs {
    /* Add shadows to create the "card" effect */
    margin-top: 1px;
    font-size: 0.60em;
    font-weight: 200;
  }

  .metas {
    /* Add shadows to create the "card" effect */
    margin-top: 1px;
    font-size: 0.60em;
    font-weight: 200;
  }

</style>