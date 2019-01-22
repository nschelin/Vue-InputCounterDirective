<template>
  <div>
    <label for="myInput">My Input </label>
    <input
      type="text"
      name="myInput"
      v-inputCounter
      v-model="myInput"
      maxlength="50"
    />
    <div><span v-inputCounter v-model="myTest">blah</span></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      myInput: "",
      myTest: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
