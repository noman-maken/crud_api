"use client"
import { useEffect } from "react";
import { Button } from "@/components/ui/button"
import { data } from "autoprefixer";




export default async function Home() {
  async function delete_data() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/3",
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  async function create_data() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  async function update_data() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }


  async function view_data() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: 'PATCH',
        body: JSON.stringify({
          title: 'foo',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }
  const handleDeleteClick = () => {
    delete_data();
  };

  const create_button_click = () => {
    create_data();
  };

  const Update_click = () => {
    update_data();
  };

  const view_click = () => {
    view_data();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-row-auto items-center justify-between p-24">
        <Button variant="outline" onClick={create_button_click}>Add</Button>
        <Button variant="outline" onClick={Update_click}>Update</Button>
        <Button variant="outline" onClick={view_data}>View</Button>
        <Button variant="outline" onClick={handleDeleteClick}>Delete</Button>
      </div>
    </main>
  )
}
