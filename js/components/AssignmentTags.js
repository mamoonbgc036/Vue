export default{
    template:`
    <button :class="{isActive: currentTag==tag}" v-for="tag in tags" @click="$emit('update:currentTag', tag)">{{tag}}</button>
    `,
    props:{
        initialTags:Array,
        currentTag:String
    },
    computed:{
        tags(){
            return ['all', ...new Set(this.initialTags)]
        }
    }
}