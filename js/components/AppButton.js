export default{
    template:`
        <button :class="{
            'btnStyle':type=='primary',
            'btnStyleOne':type=='secondary',
            'isLoading':active
        }" :disabled="active" @click="toggle">
            <slot />
        </button>
    `,
    props:{
        type:{
            type:String,
            default:'primary'
        },
    },
    data(){
        return {
            active: false,
        }
    },
    methods:{
        toggle(){
            this.active = !this.active
        }
    }
}
