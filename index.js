let student=[
    {id:1, s_name:'pavan',city:'hyd'},
    {id:2, s_name:'Arjun',city:'sec'},
    {id:3, s_name:'Meena',city:'Vizag'},
    {id:4, s_name:'Rahul',city:'Bengaluru'},
    {id:5, s_name:'Sita',city:'Chennai'},
    {id:6, s_name:'Vijay',city:'Mumbai'}
]
for(let i of student){
    console.log(i.s_name,"from",i.city)
}
for(let i in student){
    console.log(student[i].s_name,"from",student[i].city)
}