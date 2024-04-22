import DeletedTaskList from "@/components/deleted_task/DeletedTaskList"


const DeletedTask = ()=>{
    const DUMMY_DATA = [
        {
            id:"m1",
            title:"Work out",
            description:"Work out at gym",
        },
        {
            id:"m2",
            title:"Running",
            description:"2km daily running",
        }
    ]

    return(
        <>
        <DeletedTaskList data={ DUMMY_DATA}/>
        </>
    )
}

export default DeletedTask