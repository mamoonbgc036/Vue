const App = Vue.createApp({
    data(){
        return{
            cart:0,
            product:'Apple',
            brand:'Canada',
            image:'./images/banana.jpg',
            inStock: true,
            details:['80% cotton','20% polyster'],
            variants:[
                {id:1,color:'green', image:'./images/orange.jpg', quantity:50},
                {id:2,color:'red', image:'./images/Red_Apple.jpg', quantity:0}
            ]
        }
    },
    methods:{
        addToCart(){
            this.cart += 1
        },
        updateImage(variant){
            this.image = variant.image
            if(variant.quantity <= 0){
                this.inStock = false
            }
        }
    },
    computed:{
        title(){
            return this.product+'  '+this.brand
        }
    }
})