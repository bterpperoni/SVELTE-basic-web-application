import axios from "axios";
import type { Release } from "../../interface";

export async function cloneRelease( param: Release ): Promise<void>{
    await axios.post(`http://localhost:8080/releases`, param,  {
        headers: {
            'Content-Type': 'application/json'
        }
        }).then(response => {
            console.log(response);
            alert("Release cloned");
            window.location.href = window.location.href;
        }).catch(error => {
            console.error(error);
            alert("Error cloning release");
        });
}

export async function deleteRelease( param: number ): Promise<void>{
    await fetch(`http://localhost:8080/releases/${param}`, {
        method: 'DELETE'}).then(response => {
            if (response.ok) {
                alert("Release deleted");
                window.location.href = window.location.href;
            } else {
                alert("Error deleting release");
            }
        });
}