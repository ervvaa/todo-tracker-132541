import {useRef, useState} from "react";

function RegisterTodo({addTodo}){
    const [title, setTitle] = useState("")
    const [userId, setUserId] = useState("")
    const [completed, setCompleted] = useState(false)
    const [pinned, setPinned] = useState(false)
    const [category, setCategory] = useState("work")

   const titleRef = useRef();
    function handleSubmit(e) {
        e.preventDefault();
    }
    if(title.trim()=== ""){
        setError("No title")
        return
    }
    if(userId.trim()<=0){
        setError("User ID must be greater then zero")
        return
    }
    addTodo({
        id: Date.now(),
        title,
        completed,
        pinned,
        category
    })

    setTitle("");
    setUserId("");
    setCompleted("false");
    setPinned("false");
    setCategory("work")

    return <div>

    </div>
}
export default RegisterTodo