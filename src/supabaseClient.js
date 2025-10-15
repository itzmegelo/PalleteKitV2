import { createClient } from "@supabase/supabase-js";

// 🔥 Replace with your own Supabase credentials
const supabaseUrl = "https://qtgfiktkkkqoxfqvildb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0Z2Zpa3Rra2txb3hmcXZpbGRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0MDUwMzQsImV4cCI6MjA3Mjk4MTAzNH0.8Hrybv_zoCoCK-gwyjjPt7TcJahGpouLn3pjy1Vel54";

export const supabase = createClient(supabaseUrl, supabaseKey);
