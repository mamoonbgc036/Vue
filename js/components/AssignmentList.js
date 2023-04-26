import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js"
export default{
    components:{
        'assignment': Assignment,
        AssignmentTags
    },
    template:`
    <section v-show="assignments.length">
        <AssignmentTags v-model:currentTag="currentTag" :initialTags="assignments.map(a=>a.tag)"/>
        <h3>{{title}}({{this.assignments.length}})</h3>
        <assignment :assignment="assignment" v-for="assignment in filterAssignments" :key="assignment.id"></assignment>
        <slot></slot>
    </section>
    `,
    data(){
        return {
            currentTag : 'all'
        }
    },
    props:{
        assignments:Object,
        title:String
    },
    computed:{
        filterAssignments(){
            return this.currentTag==='all' ? this.assignments : this.assignments.filter(a=>a.tag===this.currentTag)
        },
    },
}