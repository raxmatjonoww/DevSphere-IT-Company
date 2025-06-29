import { createClient } from '@supabase/supabase-js';

// .env faylidan qiymatlarni o‘qish
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Supabase mijozini yaratish
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
