import AssignmentList from "./AssignmentList.js"
import AssignmentCreate from "./AssignmentCreate.js"
export default{
    components:{
        'assignment-list':AssignmentList,
        'assignment-create' : AssignmentCreate
    },
    template:`
    <div id="main">
        <assignment-list :assignments="filter.inProgress" title="In Progress">
            <assignment-create @changes="plus"></assignment-create>
        </assignment-list>
        <assignment-list :assignments="filter.complete" title="Complete"></assignment-list>       
    </div>
    `,
    data(){
        return{
            assignments:[],
        }
    },
    computed:{
        filter(){
            return{
                inProgress: this.assignments.filter(a=>!a.complete),
                complete : this.assignments.filter(a=>a.complete)
            }
        }
    },
    methods:{
        plus(names){
            this.assignments.push({
               name: names,
               complete: false,
               id: this.assignments.length+1
            })
        }
    },
    created(){
         fetch('http://localhost:3000/assignments')
            .then(response=>response.json())
            .then(assignments=>{
                this.assignments = assignments
            })
    }
}