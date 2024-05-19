'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Papa from "papaparse";
import { useState } from "react";

export default function Admin() {

    const [contacts, setContact] = useState<Contact[]>([]);

    const createContacts = async (contacts: Contact[]) => {
        try {
            const res = await fetch ("/api/contacts", {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(contacts),
            });

            if (!res.ok) {
                throw new Error("Network response was not ok!")
            }
        } catch (error) {
            console.error("Error:", error)
        }
    }

    const handleUpload = (e: any) => {
        e.preventDefault();
        createContacts(contacts);
    }

    const changeHandler = (e: any) => {
        Papa.parse(e.target.files[0], {
            header: true,
            complete: function (results: any) {
                const keysArray: any[] = [];
                const valuesArray: any[] = [];

                results.data.map((d: string) => {
                    keysArray.push(Object.keys(d));
                    valuesArray.push(Object.values(d));
                });

                keysArray.map((keys, num) => {
                    let contact: any = {};
                    contact.role = "guest"
                    for (let i = 0; i < keys.length; i++) {
                        keys[i] === 'phoneNumber' 
                            ? contact[keys[i]] = Number(valuesArray[num][i]) 
                            : contact[keys[i]] = valuesArray[num][i];
                    }
                    console.log(contact);
                    setContact(prevState => [...prevState, contact])
                })
            }
        })
    }
  return (
    <>
      <div className="p-10">
        <nav>
          <Link href="/">
            <Button>Back to Main</Button>
          </Link>
        </nav>
        <h1 className="text-center">
          Welcome Afif al afifi la pospos na squera!
        </h1>
        <form onSubmit={handleUpload}>
            <input type="file" id="csvFile" accept=".csv" onChange={changeHandler}/>
            <Button>Submit</Button>
        </form>
      </div>
    </>
  );
}
