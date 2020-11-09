<template>
  <div class="container">

    <div class="calc-wrapper">
      <div class="display">{{ currentVal || 0}}</div>
      <div @click="num('7')" class="button">7</div>
      <div @click="num('8')" class="button">8</div>
      <div @click="num('9')" class="button">9</div>
      <div @click="add()" class="button operator">+</div>
      <div @click="num('4')" class="button">4</div>
      <div @click="num('5')" class="button">5</div>
      <div @click="num('6')" class="button">6</div>
      <div @click="subtract()" class="button operator">-</div>
      <div @click="num('1')" class="button">1</div>
      <div @click="num('2')" class="button">2</div>
      <div @click="num('3')" class="button">3</div>
      <div @click="multiply()" class="button operator">*</div>
      <div @click="num('0')" class="button">0</div>
      <div @click="clear()" class="button clear">C</div>
      <div @click="calculateAndPost()" class="button operator">=</div>
      <div @click="divide()" class="button operator">/</div>
    </div>

    <div class="post-container">
      <div class="post"
           v-for="(post, index) in posts"
           v-bind:item="post"
           v-bind:index="index"
           v-bind:key="post._id"
           v-on:dblclick="deletePost(post._id)">
        <div class="created-at">
           {{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}` }}
        </div>
        <div>
           <p class="sum"> {{ `${post.firstVal} ${post.operator} ${post.secondVal} = ${post.sum}` }} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import PostService from "../PostService";

export default {
  name: 'CalculatorComponent',
  props: {},
  data() {
    return {
      posts: [],
      sum: "",
      previousVal: '',
      currentVal: '',
      operator: null,
      operation: null,
      operatorSelected: false
    }
  },
  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch (err) {
      this.err = err.message;
    }
  },
  methods: {
    num(num) {
      if (this.operatorSelected) {
        this.currentVal = '';
        this.operatorSelected = false;
      }
      this.currentVal = `${this.currentVal}${num}`;
      console.log(this.currentVal);
    },
    clear() {
      this.currentVal = '';
      this.previousVal = '';
      this.operatorSelected = false;
    },
    setPreviousVal() {
      this.previousVal = this.currentVal;
      this.operatorSelected = true;
    },
    add() {
      this.operation = (num1, num2) => num1 + num2;
      this.setPreviousVal();
      this.operator = '+';
    },
    subtract() {
      this.operation = (num1, num2) => num1 - num2;
      this.setPreviousVal();
      this.operator = '-';
    },
    multiply() {
      this.operation = (num1, num2) => num1 * num2;
      this.setPreviousVal();
      this.operator = '*';
    },
    divide() {
      this.operation = (num1, num2) => num1 / num2;
      this.setPreviousVal();
      this.operator = "/";
    },
    async calculateAndPost() {
      let secondVal = this.currentVal;
      this.currentVal = `${this.operation(
        parseFloat(this.previousVal),
        parseFloat(this.currentVal)
        )}`;
      if(this.currentVal && this.previousVal && this.operator && secondVal) {
        await PostService.insertPost(this.currentVal, this.operator, this.previousVal, secondVal);
      this.posts = await PostService.getPosts();
      } else {
        alert("You must enter an appropriate operation");
        this.clear();
      }

    },
    async deletePost(id) {
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 30px;
}

.post {
  position: relative;
  background-color:rgb(168, 147, 194);
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

.created-at {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 1em;
  padding: 5px 15px 5px 15px;
  background-color: rgb(168, 147, 194);
  color: white;
  font-size: 13px;
}

.sum {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
  color: white;
}

.calc-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(75px, auto);
  margin: 0 auto 50px;
  width: 30%;
  grid-gap: 2px;
}

.display {
  background: rgb(168, 147, 194);
  color: white;
  grid-column: 1 / 5;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 2em;
  padding: 8px;
  overflow: hidden;
}

.button {
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
}

.operator {
  background: lightsteelblue;
  color: white;
  font-weight: 600;
}

.clear {
  color: lightcoral;
}
</style>
