const { createApp } = Vue

createApp({
  data() {
    return {
      message: "Hi",
      imageURL: "https://picsum.photos/200/300"
    }
  }
}).mount('#app')