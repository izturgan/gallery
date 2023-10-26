const app = Vue.createApp({
data(){
    return{
        showImages:true,
        zoom: 100,
        images:[
            {title:"Porsche 911",author:"Ferdinand Alexander Porsche",img:'assets/image1.jpeg',isFav: true},
            {title:"Porsche 911 (black)",author:"Ferdinand Alexander Porsche",img:'assets/image2.jpeg',isFav: false},
            {title:"Mercedes-Benz",author:" Gottlieb Daimler and Carl Benz",img:'assets/image3.jpeg',isFav: true},
        ]
    }
},
methods:{
    toggleShowImages(){
        this.showImages = !this.showImages
    },
    handleEvent(e,data){
        console.log(e,e.type)
        if(data){
            console.log(data)
        }
    },
    handleMousemove(e){
        this.x = e.offsetX  
        this.y = e.offsetY  
    },
    increaseZoom() {
        this.zoom = Math.min(200, this.zoom + 10); // Adjust the max zoom level as needed
      },
    
      decreaseZoom() {
        this.zoom = Math.max(10, this.zoom - 10); // Adjust the min zoom level as needed
      }
}

})

app.mount('#app')