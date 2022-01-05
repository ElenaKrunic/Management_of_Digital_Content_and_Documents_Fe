<template>
<div class="mb-3 col-sm-6 col-md-4 item" :class="{'list-group-item': displayList}">
  <div class="thumbnail card">
    <div class="card-body">
      <router-link :to="'/errandDetails/' + item.id" tag="h5" class="card-title"><a> See details </a></router-link>
      <p class="card-text truncate">{{ item.comment}}</p>
      <div class="row">
        <p class="col-6 lead">${{ item.grade }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  props: ['item','displayList'],
  data() {
    return { 
      selected: 1,
      quantityArray: []
    }
  },

  mounted() {
    for (let i = 1; i <= 20; i++) {
      this.quantityArray.push(i);
    }

/*
    if(this.$props.item.quantity > 1) {
     this.selected = this.$props.item.quantity;
    }
    */
  },

  methods: {
    ...mapActions(['updateCart']),
    addToCart() {
      const order = {
        item: Object.assign({}, this.item),
        quantity : 1,
        isAdd: true
      };
      this.updateCart(order);
    }
  },

  filters: {
    shortDescription(value) {
      if (value && value.length > 100) {
        return value.substring(0, 100) + '...';
      } else {
        return value;
      }
    }
}
}
</script>

<style lang="scss" scoped>
div.card {
  height: 100%;
}

.card-text {
  font-size: 0.875rem;
}

.remain {
  color: #d17581;
}

.grow {
  transition: all .2s ease-in-out;
}

.grow:hover {
  transform: scale(1.1);
}

.list-group-item {
  float: none;
  width: 100%;
  background-color: #fff;
  margin-bottom: 30px;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  padding: 0 1rem;
  border: 0;
  .thumbnail {
    display: inline-block;
    width: 100%;
  }
  .img-event {
    width: 20%;
    float: left;
    padding: 0 !important;
    margin: 0;
    height: auto;
  }

  .thumbnail-image {
    position: static;
  }

  .card-body {
    float: left;
    width: 80%;
    margin: 0;
  }

  @media (max-width: 767.98px) {
    .img-event {
      width: 30%;
      float: left;
      padding: 0 !important;
      margin: 0;
    }

    .card-body {
      float: left;
      width: 70%;
      margin: 0;
    }
  }
}

.item.list-group-item:before, .item.list-group-item:after
{
    display: table;
    content: " ";
}

.item.list-group-item:after {
  clear: both;
}
</style>
