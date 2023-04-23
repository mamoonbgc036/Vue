import Assignment from "./Assignment.js"
export default{
    components:{
        Assignment
    },
    template:`
    <section v-show="assignments.length">
        <h3>{{title}}</h3>
        <Assignment v-for="assignment in assignments" :key="assignment.id" :assignment="assignment">

        </Assignment>
    </section>
    `,
    props:{
        assignments:Array,
        title:String
    }
}