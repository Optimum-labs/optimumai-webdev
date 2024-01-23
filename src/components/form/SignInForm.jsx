import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Dashboard from "../Dashboard";

const supabase = createClient(
  "https://qbquoiialdejpzqhicef.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFicXVvaWlhbGRlanB6cWhpY2VmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1NTY5MzEsImV4cCI6MjAyMTEzMjkzMX0.6tUTZLWMRfts_YuZTpkIM9e3_hC9Td-aCmJ0q0RiYEw"
);

export default function SignUpForm() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          throw error;
        }
        setSession(data.session);
      } catch (error) {
        console.error("Error fetching session:", error.message);
      }
    };

    const authListener = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    fetchSession();

    return () => {
      authListener.data.subscription.unsubscribe();
    };
  }, []);

  if (!session) {
    return (
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="wow fadeInUp relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white dark:bg-dark-2 py-14 px-8 sm:px-12 md:px-[60px]">
              <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <section className="bg-[#F4F7FF] py-14 lg:py-20 dark:bg-dark">        
          <div className="dashboard">
            <Dashboard user={session.user} />
          </div>
      </section>
    );
  }
}
