import AssignmentList from "./AssignmentList.js"
export default{
    components:{
        AssignmentList
    },
    template:`
        <assignment-list :assignments="filter.inProgress" title="In Progress"></assignment-list>
        <assignment-list :assignments="filter.complete" title="Completed"></assignment-list>
    `,
    data(){
        return{
            assignments:[
                {name:'Step one', complete:false, id:1},
                {name:'Step two', complete:false, id:2},
                {name:'Step three', complete:false, id:3}
            ]
        }
    },

    computed:{
        filter(){
            return{
                inProgress: this.assignments.filter(a=>!a.complete),
                complete: this.assignments.filter(a=>a.complete)
            }
        }
    }
}