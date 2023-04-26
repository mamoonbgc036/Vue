export default{
    // template:`
    // <form @submit.prevent="add">
    //     <input type="text" placeholder="Add Assignment" v-model="newAssignment">
    //     <button type="submit">Add</button>
    // </form>
    // `,
    // data(){
    //     return{
    //         newAssignment: ''
    //     }
    // },
    // methods:{
    //     add(){
    //        this.$emit('change', this.newAssignment)
    //     }
    // }
      template:`
        <form @submit.prevent="addEvent">
            <input type="text" placeholder="New Assignment" v-model="newAssignment">
            <button type="submit">Add</button>
        </form>
    `,
    // props:{
    //     assignments:Array
    // },
    data(){
        return {
            newAssignment: ''
        }
    },
    methods:{
        addEvent(){
           this.$emit('changes', this.newAssignment)
           this.newAssignment = ''
        }
    },
 
}