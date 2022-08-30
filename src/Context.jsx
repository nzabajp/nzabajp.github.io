import { createContext, useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const Context = createContext()

function ContextProvider({children}) {
    const [projects, setProjects] = useState([])


    useEffect(() => {
        const supabaseUrl = "https://uetlunwokhygydtqbvpr.supabase.co"
        const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVldGx1bndva2h5Z3lkdHFidnByIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE2Mjc5NzQsImV4cCI6MTk3NzIwMzk3NH0.PpKiR5k3E27VGFC8T_SrEE8nbDkhwDcinGUDtDG7x90"
        const supabase = createClient(supabaseUrl, supabaseKey)

        async function fetchProjects() {
            const {data, error} = await supabase
                .from("Projects")
                .select("*")
            error ? console.error(error) : setProjects(data)
        }
        fetchProjects()
    }, [])

    return (
        <Context.Provider value={projects}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }