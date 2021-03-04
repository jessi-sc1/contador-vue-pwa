const app = Vue.createApp({
    data(){
        return{
            title:"Contador App - Vue",
            count: 0,
        };
    },
    methods:{
        disCount(){
            console.log("dis");
            this.count-=1;
        },
        addCount(){
            console.log("add");
            this.count+=1;
        },
        modCount(instruction="add"){
            if(instruction==="dis")
                this.count-=1;
            else
                this.count+=1;
        },
        modCount2(instruction="add",limit = 1){
            if(instruction==="dis")
                this.count-=limit;
            else
                this.count+=limit;
        },
    }
});