import { useEffect, useState } from "react";

function Counter() {
    const [count, setCounter] = useState(0); // useState mengembalikan array, bukan objek

    useEffect(() => {
        document.title = `Counter: ${count}`; // Gunakan backtick untuk template literal
    }, [count]); // Perbaiki dependency array

    return (
        <div style={{ marginLeft:"20px",marginTop:"20px" }}required>
       
            <button onClick={() => setCounter(count + 1)}>Change Counter {count} times clicked</button>
        </div>
    );
}

export default Counter;